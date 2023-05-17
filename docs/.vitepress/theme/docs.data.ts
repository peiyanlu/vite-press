import fs from 'fs'
import path from 'path'
import parseFrontmatter from 'gray-matter'

interface FrontMatterResult {
  title?: string
  tags?: string[]
}

interface DocData extends FrontMatterResult{
  path: string
}

declare const data: DocData[]
export { data, DocData }

const excludedFiles: string[] = []

export default {
  watch: [ 'docs/**/*.md' ],
  load(watchedFiles: string[]): DocData[] {
    // 排除不必要文件
    const articleFiles = watchedFiles.filter((file: string) => {
      const filename = path.basename(file)
      return !excludedFiles.includes(filename)
    })
    // 解析文章 Frontmatter
    return articleFiles.map((articleFile: string) => {
      const articleContent = fs.readFileSync(articleFile, 'utf-8')
      const { data } = parseFrontmatter(articleContent)
      
      return {
        ...(data as FrontMatterResult),
        path: articleFile.substring(articleFile.lastIndexOf('/docs/') + 6).replace(/\.md$/, ''),
      }
    })
  },
}
