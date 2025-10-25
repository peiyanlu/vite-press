import { execSync, spawn, spawnSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { Transform, type TransformCallback } from 'node:stream'
import { basename, dirname } from 'path'


export interface GitFileTimes {
  createdDate: number
  updatedDate: number
}


const cache = new Map<string, GitFileTimes>()

export const loadCache = (cacheDir: string) => {
  const CACHE_FILE = resolve(cacheDir, '.git-timestamps-cache.json')
  if (existsSync(CACHE_FILE)) {
    const data: Record<string, GitFileTimes> = JSON.parse(readFileSync(CACHE_FILE, 'utf8'))
    for (const [ k, v ] of Object.entries(data)) {
      cache.set(k, v)
    }
  }
}

export const saveCache = (cacheDir: string) => {
  const CACHE_FILE = resolve(cacheDir, '.git-timestamps-cache.json')
  return writeFileSync(
    CACHE_FILE,
    JSON.stringify(Object.fromEntries(cache), null, 2),
  )
}

const RS = 0x1e
const NUL = 0x00
const LF = 0x0a

interface GitLogRecord {
  ts: number
  files: string[]
}

type State = 'READ_TS' | 'READ_FILE'

class GitLogParser extends Transform {
  private state: State = 'READ_TS'
  private tsBytes: number[] = []
  private fileBytes: number[] = []
  private files: string[] = []
  
  constructor() {
    super({ readableObjectMode: true })
  }
  
  override _transform(chunk: Buffer, _enc: BufferEncoding, cb: TransformCallback): void {
    try {
      for (let i = 0; i < chunk.length; i++) {
        const b = chunk[i] === LF ? NUL : chunk[i] // treat LF as NUL
        
        switch (this.state) {
          case 'READ_TS': {
            if (b === RS) {
              // ignore
            } else if (b === NUL) {
              this.state = 'READ_FILE'
            } else {
              this.tsBytes.push(b)
            }
            break
          }
          
          case 'READ_FILE': {
            if (b === RS) {
              this.emitRecord()
            } else if (b === NUL) {
              if (this.fileBytes.length > 0) {
                this.files.push(Buffer.from(this.fileBytes).toString('utf8'))
                this.fileBytes.length = 0
              }
            } else {
              this.fileBytes.push(b)
            }
            break
          }
        }
      }
      
      cb()
    } catch (err) {
      cb(err as Error)
    }
  }
  
  override _flush(cb: TransformCallback): void {
    if (this.state === 'READ_FILE') {
      if (this.fileBytes.length > 0) {
        return cb(new Error('GitLogParser: unexpected EOF while reading filename'))
      } else {
        this.emitRecord()
      }
    }
    
    cb()
  }
  
  private emitRecord(): void {
    const ts = Buffer.from(this.tsBytes).toString('utf8')
    const rec: GitLogRecord = {
      ts: Number.parseInt(ts, 10) * 1000,
      files: this.files.slice(),
    }
    if (rec.ts > 0 && rec.files.length > 0) this.push(rec)
    
    this.tsBytes.length = 0
    this.fileBytes.length = 0
    this.files.length = 0
    this.state = 'READ_TS'
  }
}


export const slash = (p: string): string => p.replace(/\\/g, '/')


export async function cacheAllGitTimestamps(
  root: string,
  spec: string[] = [ '*.md' ],
): Promise<Map<string, GitFileTimes>> {
  const cp = spawnSync('git', [ 'rev-parse', '--show-toplevel' ], { cwd: root })
  if (cp.error) throw cp.error
  const gitRoot = cp.stdout.toString('utf8').trim()
  
  const args = [
    'log',
    '--pretty=format:%x1e%at%x00', // RS + epoch + NUL
    '--name-only',
    '-z',
    '--',
    ...spec,
  ]
  
  return new Promise((res, rej) => {
    cache.clear()
    const child = spawn('git', args, { cwd: root })
    
    child.stdout
      .pipe(new GitLogParser())
      .on('data', (rec: GitLogRecord) => {
        for (const file of rec.files) {
          const slashed = slash(resolve(gitRoot, file))
          const cached = cache.get(slashed)
          
          if (!cached) {
            cache.set(slashed, { createdDate: rec.ts, updatedDate: rec.ts })
          } else {
            cached.updatedDate = rec.ts
          }
        }
      })
      .on('error', rej)
      .on('end', () => res(cache))
    
    child.on('error', rej)
  })
}


export async function getGitTimestamp(file: string): Promise<GitFileTimes> {
  const cached = cache.get(file)
  if (cached) return cached
  
  if (!existsSync(file)) {
    return { createdDate: 0, updatedDate: 0 }
  }
  
  const inner = (file: string) => {
    const [ cwd, filename ] = [ dirname(file), basename(file) ]
    const [ createdDate, updatedDate ] = [
      `git log -1 --pretty="%at" --diff-filter=A --follow -- "${ filename }"`,
      `git log -1 --pretty="%at" -- "${ filename }"`,
    ]
      .map(cmd => execSync(cmd, { cwd, encoding: 'utf8' }))
      .map(x => Number(x) * 1000)
    
    return { createdDate, updatedDate }
  }
  
  const res = inner(file)
  cache.set(file, res)
  
  return res
}
