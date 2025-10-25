import pMap from 'p-map'
import { join } from 'path'
import { normalizePath } from 'vite'
import { createContentLoader, SiteConfig } from 'vitepress'
import { getGitTimestamp, loadCache, saveCache } from '../../utils/getGitTimestamp'


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
      const { cacheDir } = (globalThis as any).VITEPRESS_CONFIG as SiteConfig
      loadCache(cacheDir)
      
      const res = await pMap(
        rawData.map(({ frontmatter, url }) => ({ ...frontmatter, url })),
        async ({ url, ...reset }) => {
          const articleFile = normalizePath(join(process.cwd(), 'docs', `${ url }.md`))
          const { createdDate, updatedDate } = await getGitTimestamp(articleFile)
          
          return { ...reset, url, createdDate, updatedDate }
        },
        { concurrency: 16 },
      )
      
      saveCache(cacheDir)
      
      return res
    },
  },
)

declare const data: DocData[]

export { data }
