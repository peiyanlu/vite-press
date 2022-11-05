import {DefaultTheme, defineConfig, HeadConfig} from "vitepress";
import {monochrome} from "./icon";

const BASE_URL = '/vite-press/'

const withBase = (path: string): string => `${BASE_URL}${path}`.replace(/\/+/g, '/');

const getHead = (): HeadConfig[] => [
  ['link', {rel: 'icon', href: withBase('/logo.svg')}],
];

const getNav = (): DefaultTheme.NavItem[] => [
  {
    text: '首页',
    link: '/',
    activeMatch: ''
  },
  {
    text: '构建工具',
    link: '/build/',
    activeMatch: '^/build/'
  },
  {
    text: '后端',
    items: [],
    activeMatch: '^/backend/'
  },
  {
    text: 'Windows',
    link: '/windows/disable-scripts',
    activeMatch: '^/windows/'
  },
];

const getSidebar = (): DefaultTheme.Sidebar => ({
  '/build/': [
    {
      text: 'Rollup',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        {text: '构建JS库', link: '/build/rollup-lib'},
        {text: '构建TS库', link: '/build/rollup-ts'},
      ]
    },
    {
      text: 'Webpack',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        {text: '构建ICON库', link: '/build/webpack-icon'},
      ]
    }
  ]
});


const config = defineConfig({
  lang: "zh-CN",
  title: "笔记",
  titleTemplate: '开发笔记',
  description: "小路的开发笔记",
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
      pattern: 'https://gitee.com/peiyanlu/vite-press/tree/docs/docs/:path',
      text: '在 gitee 编辑此页'
    },
    docFooter: {
      prev: '上一节',
      next: '下一节'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2022-${new Date().getFullYear()} Yanlu Pei`
    },
    lastUpdatedText: '上次更新时间',
    socialLinks: [
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: monochrome.gitee
        },
        link: 'https://gitee.com/peiyanlu/vite-press/tree/docs/'
      }
    ]
  },
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  }
})

export default config