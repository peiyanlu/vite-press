import { spawn } from 'child_process'
import matter from 'gray-matter'


interface FrontMatterResult {
  title?: string
  tags?: string[]
  category?: string
  description?: string
}

interface DocData extends FrontMatterResult {
  path: string
  createdDate: number
  updatedDate: number
}

export const getGitTimestamp = (file: string) => new Promise<number>((resolve) => {
  const child = spawn('git', [ 'log', '-1', '--pretty="%ci"', file ])
  let out = ''
  child.stdout.on('data', (d) => (out += String(d)))
  child.on('close', () => resolve(out ? new Date(out).getTime() : Date.now()))
  child.on('error', () => resolve(Date.now()))
})

export const getGitTimestampCreate = (file: string) => new Promise<number>((resolve) => {
  const child = spawn('git', [ 'log', '-1', '--pretty="%ci"', '--diff-filter=A', '--follow', file ])
  let out = ''
  child.stdout.on('data', (d) => (out += String(d)))
  child.on('close', () => resolve(out ? new Date(out).getTime() : Date.now()))
  child.on('error', () => resolve(Date.now()))
})

// 排除不必要文件
const ignoredIndex: string[] = [ 'archive' ].map(name => `!**/${ name }/index.md`)

export default {
  watch: [ 'docs/**/*.md', ...ignoredIndex ],
  async load(watchedFiles: string[]): Promise<DocData[]> {
    // 解析文章 Frontmatter
    return await Promise.all(watchedFiles.map(async (articleFile: string) => {
      const { data } = matter.read(articleFile)
      
      const updatedDate = await getGitTimestamp(articleFile)
      const createdDate = await getGitTimestampCreate(articleFile)
      
      return {
        ...data,
        path: articleFile
          .replace(/^docs\//, '')
          .replace(/\.md$/, '')
          .replace(/index$/, '')
          .replace(/\/+/g, '/'),
        updatedDate,
        createdDate,
      }
    }))
  },
}

declare const data: DocData[]
export { data, DocData }

