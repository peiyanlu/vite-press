import { defineConfig } from 'vitepress'
import { getNav, getSidebar } from './menu'

export const BASE_URL = '/vite-press/' as const

export const joinPath = (base: string, path: string): string => `${ base }${ path }`.replace(/\/+/g, '/')

export const withBase = (path: string): string => joinPath(BASE_URL, path)

export default defineConfig({
  lang: 'zh-CN',
  title: '笔记',
  titleTemplate: '开发笔记',
  description: '小路的开发笔记',
  base: BASE_URL,
  head: [
    [ 'link', { rel: 'icon', href: withBase('/logo.svg') } ],
  ],
  appearance: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '开发笔记',
    i18nRouting: true,
    outline: {
      level: 'deep',
      label: '快速导航',
    },
    nav: getNav(),
    aside: true,
    sidebar: getSidebar(),
    editLink: {
      pattern: 'https://github.com/peiyanlu/vite-press/edit/main/docs/:path',
      text: `编辑此页`,
    },
    docFooter: {
      prev: '上一节',
      next: '下一节',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2022-${ new Date().getFullYear() } YanLuPei`,
    },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',
    darkModeSwitchLabel: '外观',
    langMenuLabel: '切换语言',
    socialLinks: [
      {
        icon: {
          svg: '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" fill="currentColor"></path></svg>',
        },
        link: 'https://gitee.com/peiyanlu/vite-press',
      },
      { icon: 'github', link: 'https://github.com/peiyanlu/vite-press/' },
    ],
    search: {
      provider: 'algolia',
      options: {
        // appId: '02WXO09HIV',
        // apiKey: '2f7bbd5974b6fe9dc9c946d5d406f334',
        // indexName: 'vite-press',
        appId: 'LYHDYEDZR7',
        apiKey: 'a7de6a75d69fb8405716c4334ab56a55',
        indexName: 'vite-press',
      },
    },
  },
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
    },
    // zh: {
    //   label: '中文d',
    //   lang: 'zh-CN',
    //   link: '/zh-CN/'
    // }
  },
})
