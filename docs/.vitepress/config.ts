import { withPwa } from '@vite-pwa/vitepress'
import container from 'markdown-it-container'
import { defineConfig } from 'vitepress'
import { BASE_URL, isDev, withBase } from './config/common'
import { pwa } from './config/pwa'
import { algolia, local } from './config/search'
import { vite } from './config/vite'
import { getNav, getSidebar } from './menu'



export default withPwa(defineConfig({
  title: '笔记',
  titleTemplate: '开发笔记',
  description: '小路的开发笔记',
  head: [
    [ 'link', { rel: 'icon', href: withBase('/favicon.ico') } ],
    [ 'meta', { property: 'og:title', content: '开发笔记' } ],
    [ 'meta', { property: 'og:image', content: withBase('/logo.svg') } ],
    [ 'meta', { property: 'og:description', content: '小路的开发笔记' } ],
  ],
  lang: 'zh-CN',
  base: BASE_URL,
  appearance: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    lineNumbers: true,
    config(md) {
      // the second parameter is HTML tag name
      md.use(container, 'sandbox', {
        render(tokens: [], idx: number) {
        
        },
      })
    },
    image: {
      lazyLoading: true,
    },
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
      pattern: 'https://github.com/peiyanlu/vite-press/edit/docs-deploy/docs/:path',
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
    lastUpdated: {
      text: '上次更新',
    },
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '浅色',
    darkModeSwitchTitle: '深色',
    langMenuLabel: '切换语言',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/peiyanlu/vite-press/' },
    ],
    search: isDev ? local : algolia,
    // search: algolia,
    externalLinkIcon: true,
  },
  locales: {
    root: {
      label: '中文',
      lang: 'zh-CN',
    },
  },
  vite: vite as any,
  pwa: pwa,
  async buildEnd() {
  
  },
}))

