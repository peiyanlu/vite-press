import { fileURLToPath } from 'node:url'
import pMap from 'p-map'
import { dirname, join, sep } from 'path'
import { createContentLoader } from 'vitepress'
import { getGitTimestamps } from './utils'


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


interface FrontMatterResult {
  title?: string
  tags?: string[]
  description?: string
}

export interface DocData extends FrontMatterResult {
  url: string
  createdDate: number
  updatedDate: number
}


export default createContentLoader(
  [
    '**/*.md',
    '!**/(README|index|*-ignore).md',
  ],
  {
    async transform(rawData) {
      return pMap(
        rawData.map(({ frontmatter, url }) => ({ ...frontmatter, url })),
        async ({ url, ...reset }) => {
          const articleFile = join('docs', `${ url }.md`).replaceAll(sep, '/')
          const { createdDate, updatedDate } = await getGitTimestamps(articleFile)
          
          return {
            ...reset,
            url,
            createdDate,
            updatedDate,
          }
        },
        { concurrency: 16 },
      )
    },
  },
)

declare const data: DocData[]

export { data }
