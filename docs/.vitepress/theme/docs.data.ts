import { spawn } from 'child_process'
import fs from 'fs'
import parseFrontmatter from 'gray-matter'
import path from 'path'

interface FrontMatterResult {
  title?: string
  tags?: string[]
  date?: number
}

interface DocData extends FrontMatterResult {
  path: string
  lastUpdated?: number
}

declare const data: DocData[]
export { data, DocData }

const excludedFiles: string[] = []

export default {
  watch: [ 'docs/**/*.md' ],
  async load(watchedFiles: string[]): Promise<Promise<DocData[]>> {
    // 排除不必要文件
    const articleFiles = watchedFiles.filter((file: string) => {
      const filename = path.basename(file)
      return !excludedFiles.includes(filename)
    })
    // 解析文章 Frontmatter
    return await Promise.all(articleFiles.map(async (articleFile: string) => {
      const articleContent = fs.readFileSync(articleFile, 'utf-8')
      const { data } = parseFrontmatter(articleContent)
      
      const date = await getGitTimestamp(articleFile)
      const createdDate = await getGitTimestampCreate(articleFile)
      
      return {
        ...(data as FrontMatterResult),
        path: articleFile
          .replace(/^docs\//, '')
          .replace(/\.md$/, '')
          .replace(/index$/, ''),
        date: date,
        createdDate
      }
    }))
  },
}

export function getGitTimestamp(file: string) {
  return new Promise<number>((resolve, reject) => {
    const child = spawn('git', [ 'log', '-1', '--pretty="%ci"', file ])
    let output = ''
    child.stdout.on('data', (d) => (output += String(d)))
    child.on('close', () => {
      resolve(+new Date(output))
    })
    child.on('error', reject)
  })
}

export function getGitTimestampCreate(file: string) {
  return new Promise<number>((resolve, reject) => {
    const child = spawn('git', [ 'log', '-1', '--diff-filter=A', '--follow', '--format="%ci"', file ]);
    let output = ''
    child.stdout.on('data', (d) => (output += String(d)))
    child.on('close', () => {
      resolve(+new Date(output))
    })
    child.on('error', reject)
  })
}
