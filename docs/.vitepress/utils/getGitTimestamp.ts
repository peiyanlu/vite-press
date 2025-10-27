import { execSync, spawn, spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
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
  mkdirSync(cacheDir, { recursive: true })
  return writeFileSync(
    CACHE_FILE,
    JSON.stringify(Object.fromEntries(cache), null, 2),
  )
}


export const slash = (p: string): string => p.replace(/\\/g, '/')

// const inner = (file: string) => {
//   const [ cwd, filename ] = [ dirname(file), basename(file) ]
//   const [ createdDate, updatedDate ] = [
//     `git log -1 --pretty="%at" --diff-filter=A --follow -- "${ filename }"`,
//     `git log -1 --pretty="%at" -- "${ filename }"`,
//   ]
//     .map(cmd => execSync(cmd, { cwd, encoding: 'utf8' }))
//     .map(x => Number(x) * 1000)
//
//   return { createdDate, updatedDate }
// }


export async function getGitTimestamp(file: string): Promise<GitFileTimes> {
  const cached = cache.get(file)
  if (cached) return cached
  
  if (!existsSync(file)) {
    return { createdDate: 0, updatedDate: 0 }
  }
  
  const inner = (file: string) => {
    const [ cwd, filename ] = [ dirname(file), basename(file) ]
    const res = execSync(`git log --follow --pretty="%at" -- "${ filename }"`, { cwd, encoding: 'utf8' })
    const times = res.trim().split('\n').map(t => Number(t) * 1000).reverse()
    
    const [ createdDate, updatedDate ] = [ times[0], times[times.length - 1] ]
    return { createdDate, updatedDate }
  }
  
  const res = inner(file)
  cache.set(file, res)
  
  return res
}

export async function cacheAllGitTimestamps(root: string, patterns: string[] = [ '*.md' ]) {
  // git 根目录
  const cp = spawnSync('git', [ 'rev-parse', '--show-toplevel' ], { encoding: 'utf8' })
  if (cp.error) throw cp.error
  const gitRoot = cp.stdout.trim()
  
  // 文件列表
  const args = [ 'ls-files', ...patterns ]
  const { stdout: lsOut } = spawnSync('git', args, { cwd: root, encoding: 'utf8' })
  const files = lsOut.split('\n').filter(Boolean)
  
  const asyncFn = (file: string) => {
    return new Promise<GitFileTimes>((resolve, reject) => {
      const [ cwd, filename ] = [ dirname(file), basename(file) ]
      const child = spawn(
        'git',
        [ 'log', '--follow', '--pretty=%at', '--', filename ],
        { cwd },
      )
      
      child.stdout
        .on('data', (data: Buffer) => {
          const times = data.toString('utf8').trim().split('\n').map(t => Number(t) * 1000).reverse()
          const [ createdDate, updatedDate ] = [ times[0], times[times.length - 1] ]
          resolve({ createdDate, updatedDate })
        })
        .on('error', reject)
    })
  }
  
  return Promise.all(files.map(async file => {
    const slashed = slash(resolve(root, file))
    const cached = cache.get(slashed)
    if (!cached) {
      const res = await asyncFn(slashed)
      cache.set(slashed, res)
    }
  }))
}
