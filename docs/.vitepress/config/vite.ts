import { VarletImportResolver } from '@varlet/import-resolver'
import { basename, extname, resolve } from 'path'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { fileURLToPath } from 'url'
import { UserConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { vitePressHelperPlugin } from 'vitepress-plugin-helper'
import llmstxt from 'vitepress-plugin-llms'
import { isProd } from './common'
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
    open: true,
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
    ],
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 1000,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
          if (facadeModuleId) {
            if (facadeModuleId.includes('node_modules')) {
              return 'js/vendor/[name]-[hash].js'
            }
            if (facadeModuleId.includes('theme/components')) {
              return 'js/components/[name]-[hash].js'
            }
          }
          return 'js/chunks/[name]-[hash].js'
        },
        assetFileNames: (assetInfo) => {
          const file = assetInfo.names[0]
          const ext = extname(file)
          const name = basename(file, ext)
          
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(ext)) {
            return `assets/media/${ name }-[hash][extname]`
          }
          if (/\.(png|jpe?g|gif|svg)(\?.*)?$/i.test(ext)) {
            return `assets/images/${ name }-[hash][extname]`
          }
          if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(ext)) {
            return `assets/fonts/${ name }-[hash][extname]`
          }
          return `assets/${ name }-[hash][extname]`
        },
        plugins: [
          {
            name: 'chunk-size-logger',
            generateBundle(_, bundle) {
              for (const [ fileName, chunk ] of Object.entries(bundle)) {
                if (chunk.type === 'chunk') {
                  const size = (chunk.code.length / 1024).toFixed(2)
                  if (+size > 1000) {
                    console.log(`⚠️  ${ fileName }: ${ size } KB`)
                    // console.log('包含模块:\n')
                    // console.log(Object.keys(chunk.modules)
                    //   .map(id => '  - ' + id)
                    //   .join('\n'))
                  }
                }
              }
            },
          },
        ],
      },
    },
  },
  define: {
    PWA: true,
  },
  ssr: {
    noExternal: [
      '@antv/g2',
      '@varlet/ui',
    ],
  },
}
