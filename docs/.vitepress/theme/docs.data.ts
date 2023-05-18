import { spawn } from 'child_process'
import fs from 'fs'
import parseFrontmatter from 'gray-matter'
import path from 'path'

interface FrontMatterResult {
  title?: string
  tags?: string[]
}

interface DocData extends FrontMatterResult {
  path: string
  createdDate: number
  updatedDate: number
}

export const getGitTimestamp = (file: string) => new Promise<number>((resolve) => {
  const child = spawn('git', [ 'log', '-1', '--pretty="%ci"', file ])
  let output = ''
  child.stdout.on('data', (d) => (output += String(d)))
  child.on('close', () => resolve(output ?  new Date(output).getTime() : Date.now()))
  child.on('error', () => resolve(Date.now()))
})

export const getGitTimestampCreate = (file: string) => new Promise<number>((resolve) => {
  const child = spawn('git', [ 'log', '-1', '--diff-filter=A', '--follow', '--format="%ci"', file ])
  let output = ''
  child.stdout.on('data', (d) => (output += String(d)))
  child.on('close', () => resolve(output ? new Date(output).getTime() : Date.now()))
  child.on('error', () => resolve(Date.now()))
})

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
      
      const updatedDate = await getGitTimestamp(articleFile)
      const createdDate = await getGitTimestampCreate(articleFile)
      
      return {
        ...(data as FrontMatterResult),
        path: articleFile
          .replace(/^docs\//, '')
          .replace(/\.md$/, '')
          .replace(/index$/, ''),
        updatedDate,
        createdDate,
      }
    }))
  },
}

declare const data: DocData[]
export { data, DocData }

