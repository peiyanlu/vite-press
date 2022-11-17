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
  ignoreDeadLinks: false,
  lastUpdated: true,
  cleanUrls: 'without-subfolders',
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '开发笔记',
    outline: 'deep',
    outlineTitle: '快速导航',
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
    lastUpdatedText: '上次更新',
    socialLinks: [
      {
        icon: {
          svg: MONOCHROME.GITEE
        },
        link: GIT_PAGE
      },
      { icon: 'github', link: 'https://github.com/peiyanlu/vite-press/' }
    ]
  },
  markdown: {
    // theme: 'github-dark',
    lineNumbers: true
  }
})