import { defineConfig } from 'vitepress'
import { MONOCHROME } from './icon'
import { BASE_URL, GIT_PAGE, getHead, getNav, getSidebar } from './menu'

export default defineConfig({
  lang: 'zh-CN',
  title: '笔记',
  titleTemplate: '开发笔记',
  description: '小路的开发笔记',
  base: BASE_URL,
  head: getHead(),
  appearance: true,
  ignoreDeadLinks: true,
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
      pattern: `${GIT_PAGE}docs/:path`,
      text: '在 gitee 编辑此页'
    },
    docFooter: {
      prev: '上一节',
      next: '下一节',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2022-${ new Date().getFullYear() } Yanlu Pei`,
    },
    lastUpdatedText: '上次更新时间',
    socialLinks: [
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: MONOCHROME.GITEE
        },
        link: GIT_PAGE
      },
    ]
  },
  markdown: {
    theme: 'github-dark',
    lineNumbers: true,
  },
})