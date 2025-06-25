import { exec, spawn } from 'child_process'
import { basename, dirname } from 'path'
import { promisify } from 'util' // 限制并发


export const getGitTimestamp = (file: string) => new Promise<number>((resolve) => {
  const child = spawn(
    'git',
    [ 'log', '-1', '--pretty="%ci"', basename(file) ],
    { cwd: dirname(file) },
  )
  let out = ''
  child.stdout.on('data', (d) => (out += String(d)))
  child.on('close', () => {
    resolve(out ? new Date(out).getTime() : Date.now())
  })
  
  child.on('error', () => resolve(Date.now()))
})

export const getGitTimestampCreate = (file: string) => new Promise<number>((resolve) => {
  const child = spawn(
    'git',
    [ 'log', '-1', '--pretty="%ci"', '--diff-filter=A', '--follow', basename(file) ],
    { cwd: dirname(file) },
  )
  
  let out = ''
  child.stdout.on('data', (d) => (out += String(d)))
  child.on('close', () => {
    resolve(out ? new Date(out).getTime() : Date.now())
  })
  child.on('error', () => resolve(Date.now()))
})

const execAsync = promisify(exec)

/**
 * 获取所有文件的创建和更新时间（使用 git log）
 */
export async function getGitTimestampsMap(): Promise<Record<string, Record<string, number>>> {
  const parseStdout = (stdout: string) => {
    const lines = stdout.split('\n')
    
    const result: Record<string, number> = {}
    
    let currentTimestamp = 0
    for (const entry of lines) {
      if (/^\d+$/.test(entry)) {
        // 如果是时间戳（秒），保存当前时间（转为毫秒）
        currentTimestamp = parseInt(entry, 10) * 1000
      } else if (entry && currentTimestamp) {
        // 如果是文件路径，就映射上一个时间戳
        result[entry] = currentTimestamp
      }
    }
    
    return result
  }
  
  const { stdout: createdRaw } = await execAsync(`git log --diff-filter=A --pretty="%at" --follow --name-only -- docs/**/*.md`)
  const { stdout: updatedRaw } = await execAsync(`git log --pretty="%at" --name-only -- docs/**/*.md`)
  
  const created = parseStdout(createdRaw)
  const updated = parseStdout(updatedRaw)
  
  return { created, updated }
}


export const getGitTimestamps = async (file: string) => {
  const { execSync } = await import('node:child_process')
  const stdout = execSync(
    `git log --pretty="%at" --follow "${ file }"`,
    { cwd: process.cwd() },
  )
  
  const lines = stdout
    .toString()
    .trim()
    .split('\n')
    .map(x => Number(x) * 1000 || Date.now())
  
  return {
    createdDate: lines[lines.length - 1],
    updatedDate: lines[0],
  }
}
