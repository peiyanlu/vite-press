import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { fileURLToPath } from 'url'
import { UserConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'


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
    visualizer() as any,
  ],
  build: {
    chunkSizeWarningLimit: 1000,
  },
  define: {
    PWA: false,
  },
}
