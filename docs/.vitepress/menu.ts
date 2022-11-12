import { DefaultTheme } from 'vitepress'

export const BASE_URL = '/vite-press/'

export const GIT_PAGE = 'https://gitee.com/peiyanlu/vite-press/tree/docs-deploy/'

export const joinPath = (base: string, path: string): string => `${ base }${ path }`.replace(/\/+/g, '/')
export const withBase = (path: string): string => joinPath(BASE_URL, path)

export const enum MENU {
  HOME = '/',
  FRONTEND = '/frontend/',
  VCS = '/version-control/',
  BACKEND = '/backend/',
  WINDOWS = '/windows/'
}

export const getNav = (): DefaultTheme.NavItem[] => [
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
    link: MENU.VCS,
    activeMatch: MENU.VCS
  },
  {
    text: '后端',
    items: [],
    activeMatch: MENU.BACKEND
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
        { text: '依赖包推荐', link: joinPath(MENU.FRONTEND, 'npm-dependencies') }
      ]
    }
  ],
  [MENU.VCS]: [
    {
      text: 'Git',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        { text: 'Git 基础', link: joinPath(MENU.VCS, 'git-basics') },
        { text: 'Git 集成', link: joinPath(MENU.VCS, 'git-hub') },
        { text: 'Git 使用', link: joinPath(MENU.VCS, 'git-use') },
      ]
    }
  ]
})
