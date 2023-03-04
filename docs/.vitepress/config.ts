import { defineConfig } from 'vitepress'
import { MONOCHROME } from './icon'
import { BASE_URL, getNav, getSidebar, GIT_PAGE, withBase } from './menu'

export default defineConfig({
  lang: 'zh-CN',
  title: '笔记',
  titleTemplate: '开发笔记',
  description: '小路的开发笔记',
  base: BASE_URL,
  head: [
    [ 'link', { rel: 'icon', href: withBase('/logo.svg') } ]
  ],
  appearance: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '开发笔记',
    i18nRouting: true,
    outline: {
      level: 'deep',
      label: '快速导航'
    },
    nav: getNav(),
    sidebar: getSidebar(),
    editLink: {
      pattern: `${ GIT_PAGE }docs/:path`,
      text: '在 gitee 编辑此页'
    },
    docFooter: {
      prev: '上一节',
      next: '下一节'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2022-${ new Date().getFullYear() } Yanlu Pei`
    },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',
    darkModeSwitchLabel: '外观',
    socialLinks: [
      {
        icon: {
          svg: MONOCHROME.GITEE
        },
        link: GIT_PAGE
      },
      { icon: 'github', link: 'https://github.com/peiyanlu/vite-press/' }
    ],
    algolia: {
      appId: '02WXO09HIV',
      apiKey: '2f7bbd5974b6fe9dc9c946d5d406f334',
      indexName: 'vite-press',
    }
  },
  markdown: {
    // theme: 'github-dark',
    lineNumbers: true
  },

})
