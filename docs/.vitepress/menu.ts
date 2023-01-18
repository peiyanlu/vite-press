import { DefaultTheme } from 'vitepress'

export const BASE_URL = '/vite-press/'

export const GIT_PAGE = 'https://gitee.com/peiyanlu/vite-press/tree/docs-deploy/'

export const joinPath = (base: string, path: string): string => `${ base }${ path }`.replace(/\/+/g, '/')
export const withBase = (path: string): string => joinPath(BASE_URL, path)

export const enum MENU {
  HOME = '/',
  ORIGIN = '/origin/',
  FRONTEND = '/frontend/',
  VCS = '/vcs/',
  BACKEND = '/backend/',
  WINDOWS = '/windows/'
}

export const getNav = (): DefaultTheme.NavItem[] => [
  {
    text: '首页',
    link: MENU.HOME
  },
  {
    text: '起源',
    link: MENU.ORIGIN,
    activeMatch: MENU.ORIGIN
  },
  {
    text: '前端',
    link: MENU.FRONTEND,
    activeMatch: MENU.FRONTEND
  },
  {
    text: '后端',
    // items: [],
    link: MENU.BACKEND,
    activeMatch: MENU.BACKEND
  },
  {
    text: 'VSC',
    link: MENU.VCS,
    activeMatch: MENU.VCS
  },
  {
    text: 'Windows',
    link: MENU.WINDOWS,
    activeMatch: MENU.WINDOWS
  }
]

export const getSidebar = (): DefaultTheme.Sidebar => ({
  [MENU.FRONTEND]: [
    {
      text: 'rollup',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        { text: '构建JS库', link: joinPath(MENU.FRONTEND, 'rollup-lib') },
        { text: '构建TS库', link: joinPath(MENU.FRONTEND, 'rollup-ts') }
      ]
    },
    {
      text: 'webpack',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        { text: '构建ICON库', link: joinPath(MENU.FRONTEND, 'webpack-icon') }
      ]
    },
    {
      text: '依赖包管理',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        { text: '依赖包推荐', link: joinPath(MENU.FRONTEND, 'npm-libs') },
        { text: '开源许可', link: joinPath(MENU.FRONTEND, 'npm-license') },
      ]
    },
    {
      text: 'HTML',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        { text: '选择器', link: joinPath(MENU.FRONTEND, 'css-selector') }
      ]
    },
    {
      text: 'CSS',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        { text: '选择器', link: joinPath(MENU.FRONTEND, 'css-selector') }
      ]
    },
    {
      text: 'JavaScript',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        { text: 'fetch', link: joinPath(MENU.FRONTEND, 'js-fetch') }
      ]
    },
    {
      text: '正则',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        { text: '基础', link: joinPath(MENU.FRONTEND, 'regex-basics') },
        { text: '使用', link: joinPath(MENU.FRONTEND, 'regex-use') }
      ]
    }
  ],
  [MENU.BACKEND]: [
    {
      text: 'Koa',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        { text: '开始', link: joinPath(MENU.BACKEND, 'koa-start') },
        { text: '实战', link: joinPath(MENU.BACKEND, 'koa-use') }
      ]
    },
    {
      text: 'MySQL',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        { text: '安装', link: joinPath(MENU.BACKEND, 'mysql-install') }
      ]
    },
    {
      text: 'Radis',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        { text: '安装', link: joinPath(MENU.BACKEND, 'radis-install') }
      ]
    }
  ],
  [MENU.VCS]: [
    {
      text: 'Git',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        { text: '基础', link: joinPath(MENU.VCS, 'git-basics') },
        { text: '集成', link: joinPath(MENU.VCS, 'git-hub') },
        { text: '使用', link: joinPath(MENU.VCS, 'git-use') }
      ]
    },
    {
      text: 'Shell',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        { text: '基础', link: joinPath(MENU.VCS, 'shell-basics') }
      ]
    }
  ]
})
