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
  category?: string
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



// export default {
//   watch: [
//     'docs/**/*.md',
//     '!**/*-ignore.md',
//     ...ignoredIndex,
//   ],
//   async load(watchedFiles: string[]): Promise<DocData[]> {
//     // 解析文章 Front matter
//     return Promise.all(watchedFiles.map(async (articleFile: string) => {
//       const { data } = matter.read(articleFile)
//
//       const updatedDate = await getGitTimestamp(articleFile)
//       const createdDate = await getGitTimestampCreate(articleFile)
//
//       return {
//         ...data,
//         path: articleFile
//           .replace(/^docs\//, '')
//           .replace(/\.md$/, '')
//           .replace(/index$/, '')
//           .replace(/\/+/g, '/'),
//         updatedDate,
//         createdDate,
//       }
//     }))
//   },
// }


