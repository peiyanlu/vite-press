import { Plugin } from 'vite'
import { DefaultTheme, SiteConfig } from 'vitepress'
import { cacheAllGitTimestamps, saveCache } from '../utils/getGitTimestamp'


declare module 'vite' {
  interface UserConfig {
    vitepress?: SiteConfig<DefaultTheme.Config>
  }
}


export function createGitCachePlugin(): Plugin {
  return {
    name: 'vite-plugin-git-cache',
    enforce: 'pre',
    async configResolved(resolvedConfig) {
      if (resolvedConfig.vitepress) {
        const { srcDir, cacheDir } = resolvedConfig.vitepress
        
        await cacheAllGitTimestamps(srcDir, [ '*.md' ], [ /README\.md$/, /index\.md$/, /-ignore\.md$/ ])
        saveCache(cacheDir)
      }
    },
  }
}

