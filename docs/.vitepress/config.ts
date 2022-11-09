import {DefaultTheme, defineConfig, HeadConfig} from "vitepress";
import {MONOCHROME} from "./icon";
import MENU from "./menu";

const BASE_URL = '/vite-press/'

const joinPath = (base: string, path: string): string => `${base}${path}`.replace(/\/+/g, '/');
const withBase = (path: string): string => joinPath(BASE_URL, path);

const getHead = (): HeadConfig[] => [
  ['link', {rel: 'icon', href: withBase('/logo.svg')}],
];

const getNav = (): DefaultTheme.NavItem[] => [
  {
    text: '首页',
    link: MENU.HOME
  },
  {
    text: '前端',
    link: MENU.FRONTEND,
    activeMatch: MENU.FRONTEND
  },
  {
    text: '版本控制',
    link: '/version-control/',
    activeMatch: '^/version-control/'
  },
  {
    text: '后端',
    items: [],
    activeMatch: '^/backend/'
  },
  {
    text: 'Windows',
    link: '/windows/',
    activeMatch: '^/windows/'
  },
];

const getSidebar = (): DefaultTheme.Sidebar => ({
  '/frontend/': [
    {
      text: 'rollup',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        {text: '构建JS库', link: '/frontend/rollup-lib'},
        {text: '构建TS库', link: '/frontend/rollup-ts'},
      ]
    },
    {
      text: 'webpack',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        {text: '构建ICON库', link: '/frontend/webpack-icon'},
      ]
    },
    {
      text: '依赖包管理',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        {text: '依赖包推荐', link: '/frontend/npm-dependencies'},
      ]
    }
  ],
  '/version-control/': [
    {
      text: 'Git',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        {text: 'Git 基础', link: '/version-control/git-basics'}
      ]
    },
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
          svg: MONOCHROME.GITEE
        },
        link: 'https://gitee.com/peiyanlu/vite-press/tree/docs-deploy/'
      }
    ]
  },
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  }
})

export default config