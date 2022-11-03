import {DefaultTheme, defineConfig, HeadConfig} from "vitepress";
import {monochrome} from "./icon";


const getHead = (): HeadConfig[] => [
  ['link', {rel: 'icon', href: './logo.svg'}]
];

const getNav = (): DefaultTheme.NavItem[] => [
  {text: 'Rollup', link: '/rollup/', activeMatch: '^/rollup/'},
  {text: 'Webpack', link: '/webpack/', activeMatch: '^/webpack/'},
];

const getSidebar = (): DefaultTheme.Sidebar => ({
  '/rollup/': [
    {
      text: 'Rollup',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        {text: '构建JS库', link: '/rollup/rollup-lib'},
        {text: '构建TS库', link: '/rollup/rollup-ts'},
      ]
    }
  ],
  '/webpack/': [
    {
      text: 'Webpack',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        {text: '构建ICON库', link: '/webpack/webpack-icon'},
      ]
    }
  ]
});


export default defineConfig({
  lang: "zh-CN",
  title: "开发笔记",
  titleTemplate: '开发笔记',
  description: "小路的开发笔记",
  base: '/vite-press/',
  head: getHead(),
  appearance: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
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
    lastUpdatedText: '上次更新',
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