import { DefaultTheme } from 'vitepress'

export const BASE_URL = '/vite-press/'

export const joinPath = (base: string, path: string): string => `${ base }${ path }`.replace(/\/+/g, '/')
export const withBase = (path: string): string => joinPath(BASE_URL, path)

export const enum MENU {
  HOME = '/',
  NAVIGATION = '/navigation/',
  ORIGIN = '/origin/',
  FRONTEND = '/frontend/',
  VCS = '/vcs/',
  BACKEND = '/backend/',
  WINDOWS = '/windows/'
}

export const getNav = (): DefaultTheme.NavItem[] => [
  {
    text: '首页',
    link: MENU.HOME,
  },
  {
    text: '起源',
    link: MENU.ORIGIN,
    activeMatch: MENU.ORIGIN,
  },
  {
    text: '导航',
    link: MENU.NAVIGATION,
    activeMatch: MENU.NAVIGATION,
  },
  {
    text: '前端',
    link: MENU.FRONTEND,
    activeMatch: MENU.FRONTEND,
  },
  {
    text: '后端',
    // items: [],
    link: MENU.BACKEND,
    activeMatch: MENU.BACKEND,
  },
  {
    text: 'VSC',
    link: MENU.VCS,
    activeMatch: MENU.VCS,
  },
  {
    text: 'Windows',
    link: MENU.WINDOWS,
    activeMatch: MENU.WINDOWS,
  },
]

export const getSidebar = (): DefaultTheme.Sidebar => ({
  [MENU.FRONTEND]: [
    {
      text: 'rollup',
      collapsed: false, // 折叠
      items: [
        { text: '构建JS库', link: joinPath(MENU.FRONTEND, 'rollup/rollup-lib') },
        { text: '构建TS库', link: joinPath(MENU.FRONTEND, 'rollup/rollup-ts') },
      ],
    },
    {
      text: 'webpack',
      collapsed: false, // 折叠
      items: [
        { text: '构建ICON库', link: joinPath(MENU.FRONTEND, 'webpack/webpack-icon') },
      ],
    },
    {
      text: '依赖包管理',
      collapsed: false, // 折叠
      items: [
        { text: '依赖包推荐', link: joinPath(MENU.FRONTEND, 'npm/npm-libs') },
        { text: '依赖包打补丁', link: joinPath(MENU.FRONTEND, 'npm/package-patch') },
        { text: '开源许可协议', link: joinPath(MENU.FRONTEND, 'npm/npm-license') },
      ],
    },
    {
      text: 'HTML',
      collapsed: false, // 折叠
      items: [
        // { text: '选择器', link: joinPath(MENU.FRONTEND, 'css-selector') }
      ],
    },
    {
      text: 'CSS',
      collapsed: false, // 折叠
      items: [
        { text: '选择器', link: joinPath(MENU.FRONTEND, 'css/css-selector') },
      ],
    },
    {
      text: 'JavaScript',
      collapsed: false, // 折叠
      items: [
        { text: 'ES6+', link: joinPath(MENU.FRONTEND, 'javascript/js-ES6+') },
        { text: '数组', link: joinPath(MENU.FRONTEND, 'javascript/js-array') },
        { text: '字符串', link: joinPath(MENU.FRONTEND, 'javascript/js-string') },
        { text: '对象', link: joinPath(MENU.FRONTEND, 'javascript/js-object') },
        { text: 'fetch', link: joinPath(MENU.FRONTEND, 'javascript/js-fetch') },
        { text: '二进制', link: joinPath(MENU.FRONTEND, 'javascript/js-binary') },
        { text: '作用域', link: joinPath(MENU.FRONTEND, 'javascript/js-scope') },
        { text: '事件循环', link: joinPath(MENU.FRONTEND, 'javascript/js-EventLoop') },
        { text: '调用栈', link: joinPath(MENU.FRONTEND, 'javascript/js-CallStack') },
        { text: '元素位置', link: joinPath(MENU.FRONTEND, 'javascript/js-ElementPosition') },
        { text: '浏览器监听', link: joinPath(MENU.FRONTEND, 'javascript/js-BOMObserver') },
      ],
    },
    {
      text: '正则',
      collapsed: false, // 折叠
      items: [
        { text: '基础', link: joinPath(MENU.FRONTEND, 'regex/regex-basics') },
        { text: '使用', link: joinPath(MENU.FRONTEND, 'regex/regex-use') },
      ],
    },
  ],
  [MENU.BACKEND]: [
    {
      text: 'Koa',
      collapsed: false, // 折叠
      items: [
        { text: '开始', link: joinPath(MENU.BACKEND, 'koa/koa-start') },
        { text: '实战', link: joinPath(MENU.BACKEND, 'koa/koa-use') },
      ],
    },
    {
      text: 'MySQL',
      collapsed: false, // 折叠
      items: [
        { text: '安装', link: joinPath(MENU.BACKEND, 'mysql/mysql-install') },
      ],
    },
    {
      text: 'Redis',
      collapsed: false, // 折叠
      items: [
        { text: '安装', link: joinPath(MENU.BACKEND, 'redis/redis-install') },
      ],
    },
  ],
  [MENU.VCS]: [
    {
      text: 'Git',
      collapsed: false, // 折叠
      items: [
        { text: '基础', link: joinPath(MENU.VCS, 'git-basics') },
        { text: '集成', link: joinPath(MENU.VCS, 'git-hub') },
        { text: '使用', link: joinPath(MENU.VCS, 'git-use') },
      ],
    },
    {
      text: 'Shell',
      collapsed: false, // 折叠
      items: [
        { text: '基础', link: joinPath(MENU.VCS, 'shell-basics') },
      ],
    },
  ],
})
