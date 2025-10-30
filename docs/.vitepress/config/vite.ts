import { VarletImportResolver } from '@varlet/import-resolver'
import icon from '@varlet/unplugin-icon-builder/vite'
import { resolve } from 'path'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { fileURLToPath } from 'url'
import { UserConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { vitePressHelperPlugin } from 'vitepress-plugin-helper'
import llmstxt from 'vitepress-plugin-llms'
import { isProd } from './common.js'
import { createGitCachePlugin } from './plugin'


export const vite: UserConfig = {
  resolve: {
    alias: [
      {
        find: '@theme',
        replacement: fileURLToPath(new URL('../theme', import.meta.url)),
      },
      {
        find: '@utils',
        replacement: fileURLToPath(new URL('../utils', import.meta.url)),
      },
    ],
  },
  server: {
    host: '0.0.0.0',
    port: 5274,
  },
  plugins:
    [
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [ resolve(process.cwd(), 'docs/public/icons') ],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
        // 自定义插入位置
        inject: 'body-last',
        // 自定义元素id
        customDomId: '__svg__icons__dom__',
      }),
      vitePressHelperPlugin({
        sidebarOptions: {
          ignore: [ '**/*-ignore.md' ],
          ignoreDirs: [ 'img', 'components', 'ES6' ],
        },
      }),
      isProd && llmstxt(),
      createGitCachePlugin(),
      
      components({
        resolvers: [ VarletImportResolver() ],
      }),
      autoImport({
        resolvers: [ VarletImportResolver({ autoImport: true }) ],
      }),
      icon({
        dir: resolve(process.cwd(), 'docs/public/icons'),
      }),
    ],
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 1000,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  define: {
    PWA: true,
  },
  ssr: {
    noExternal: [ '@antv/g2' ],
  },
}
