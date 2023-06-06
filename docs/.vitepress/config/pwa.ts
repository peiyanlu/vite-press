import { PwaOptions } from '@vite-pwa/vitepress'
import { withBase } from './common'


export const pwa: PwaOptions = {
  strategies: 'generateSW',
  registerType: 'autoUpdate',
  includeManifestIcons: false,
  injectRegister: false,
  disable: false,
  manifest: {
    id: '/',
    name: 'vite-press',
    short_name: 'vite-press',
    theme_color: '#FFFFFF',
    icons: [
      {
        src: withBase('/pwa-192x192.svg'),
        sizes: '192x192',
        type: 'image/svg+xml',
      },
      {
        src: withBase('/pwa-512x512.svg'),
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
  },
  includeAssets: [ 'logo.svg' ],
  workbox: {
    cleanupOutdatedCaches: true,
    clientsClaim: true,
    skipWaiting: true,
    globPatterns: [ '**/*.{css,js,html,svg,png,ico,txt,woff2,xml,txt}' ],
    globIgnores: [ 'assets/images/**', 'assets/icons/**', 'assets/svg/**' ],
    runtimeCaching: [
      {
        urlPattern: ({ sameOrigin, url }) => sameOrigin && [ 'images', 'icons', 'svg' ].some(path => url.pathname.startsWith(`/assets/${ path }/`)),
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'assets-images-cache',
          expiration: {
            purgeOnQuotaError: true,
            maxEntries: 256,
            maxAgeSeconds: 60 * 60 * 24 * 7, // <== 7 days
          },
          cacheableResponse: {
            statuses: [ 200 ],
          },
        },
      },
      {
        urlPattern: /^https:\/\/peiyanlu.github.io\/.*/i,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'gh-images-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24, // <== 1 day
          },
          cacheableResponse: {
            // don't remove 0, handling opaque responses (CORS)
            statuses: [ 0, 200 ],
          },
        },
      },
      {
        urlPattern: /someInterface/i, // 接口缓存 此处填你想缓存的接口正则匹配
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'interface-cache',
        },
      },
      {
        urlPattern: /(.*?)\.(js|css|ts)/, // js /css /ts静态资源缓存
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'js-css-cache',
        },
      },
      {
        urlPattern: /(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/, // 图片缓存
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'image-cache',
        },
      },
    ],
  },
  devOptions: {
    enabled: true,
    /* 构建时，PWA 插件将切换到传统模式 */
    type: 'module',
    disableRuntimeConfig: false,
    navigateFallback: 'index.html',
  },
}
