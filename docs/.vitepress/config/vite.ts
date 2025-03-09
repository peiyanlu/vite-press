import path from 'path'
import { fileURLToPath } from 'url'
import { UserConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { vitePressHelperPlugin } from 'vitepress-plugin-helper'


export const vite: UserConfig = {
  resolve: {
    alias: [
      {
        find: '@theme',
        replacement: fileURLToPath(
          new URL('../theme', import.meta.url),
        ),
      },
    ],
  },
  plugins: [
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [ path.resolve(process.cwd(), 'docs/public/icons') ],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
      // 自定义插入位置
      inject: 'body-last',
      // 自定义元素id
      customDomId: '__svg__icons__dom__',
    }),
    vitePressHelperPlugin({
      sidebarOptions: {
        ignoreDirs: [ 'img' ],
      },
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
    noExternal: [ "@antv/g2plot" ]
  }
}
