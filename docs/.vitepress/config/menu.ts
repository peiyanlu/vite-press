import { join } from 'path'
import { DefaultTheme } from 'vitepress'

export const enum MENU {
  HOME = '/',
  ORIGIN = '/origin/',
  NAVIGATION = '/navigation/',
  FRONTEND = '/frontend/',
  BACKEND = '/backend/',
  CLI = '/cli/',
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
    text: 'CLI',
    link: MENU.CLI,
    activeMatch: MENU.CLI,
  },
]

export const getSidebar = (): DefaultTheme.Sidebar => ({
  [MENU.FRONTEND]: [
    {
      text: '浏览器与网络',
      collapsed: true,
      items: [
        {
          text: '计算机网络',
          items: [
            {
              text: '基础知识',
              link: join(MENU.FRONTEND, 'network/'),
            },
          ],
        },
        {
          text: '浏览器',
          collapsed: true,
          items: [
            {
              text: '基础知识',
              link: join(MENU.FRONTEND, 'browser/'),
            },
            {
              text: '浏览器缓存',
              link: join(MENU.FRONTEND, 'browser/browser-cache'),
            },
          ],
        },
      ],
    },
    {
      text: '编译构建',
      collapsed: true,
      items: [
        {
          text: 'rollup',
          collapsed: true,
          items: [
            { text: '构建JS库', link: join(MENU.FRONTEND, 'rollup/rollup-lib') },
            { text: '构建TS库', link: join(MENU.FRONTEND, 'rollup/rollup-ts') },
          ],
        },
        {
          text: 'webpack',
          collapsed: true,
          items: [
            { text: '构建ICON库', link: join(MENU.FRONTEND, 'webpack/webpack-icon') },
          ],
        },
      ],
    },
    {
      text: '依赖包',
      collapsed: true,
      items: [
        { text: '常用推荐', link: join(MENU.FRONTEND, 'npm/npm-libs') },
        { text: '版本规范', link: join(MENU.FRONTEND, 'npm/npm-SemVer') },
        { text: 'CLI', link: join(MENU.FRONTEND, 'npm/npm-cli') },
        { text: '打补丁', link: join(MENU.FRONTEND, 'npm/npm-package-patch') },
        { text: 'package.json', link: join(MENU.FRONTEND, 'npm/npm-package-json') },
        { text: 'package-exports', link: join(MENU.FRONTEND, 'npm/npm-package-exports') },
        { text: '开源许可协议', link: join(MENU.FRONTEND, 'npm/npm-license') },
      ],
    },
    {
      text: 'HTML',
      collapsed: true,
      items: [
        // { text: '选择器', link: join(MENU.FRONTEND, 'css-selector') }
      ],
    },
    {
      text: 'CSS',
      collapsed: true,
      items: [
        { text: '选择器', link: join(MENU.FRONTEND, 'css/css-selector') },
      ],
    },
    {
      text: 'JavaScript',
      collapsed: false,
      items: [
        { text: 'ES6+', link: join(MENU.FRONTEND, 'javascript/js-ES6+') },
        { text: '数组', link: join(MENU.FRONTEND, 'javascript/js-array') },
        { text: '字符串', link: join(MENU.FRONTEND, 'javascript/js-string') },
        { text: '对象', link: join(MENU.FRONTEND, 'javascript/js-object') },
        { text: 'fetch', link: join(MENU.FRONTEND, 'javascript/js-fetch') },
        { text: '二进制', link: join(MENU.FRONTEND, 'javascript/js-binary') },
        { text: '作用域', link: join(MENU.FRONTEND, 'javascript/js-scope') },
        { text: '事件循环', link: join(MENU.FRONTEND, 'javascript/js-EventLoop') },
        { text: '调用栈', link: join(MENU.FRONTEND, 'javascript/js-CallStack') },
        { text: '元素位置', link: join(MENU.FRONTEND, 'javascript/js-ElementPosition') },
        { text: '浏览器监听', link: join(MENU.FRONTEND, 'javascript/js-BOMObserver') },
        { text: '原型链', link: join(MENU.FRONTEND, 'javascript/js-prototype') },
        { text: '辞海', link: join(MENU.FRONTEND, 'javascript/js-dictionary') },
      ],
    },
    {
      text: '正则',
      collapsed: true,
      items: [
        { text: '基础', link: join(MENU.FRONTEND, 'regex/regex-basics') },
        { text: '使用', link: join(MENU.FRONTEND, 'regex/regex-use') },
      ],
    },
    {
      text: '代码',
      collapsed: true,
      items: [
        { text: '图片懒加载', link: join(MENU.FRONTEND, 'code/code-image-lazy') },
        { text: '防抖与节流', link: join(MENU.FRONTEND, 'code/code-debounce-throttle') },
        { text: '列表与树', link: join(MENU.FRONTEND, 'code/code-list-tree') },
        { text: 'Excel与TreeData', link: join(MENU.FRONTEND, 'code/code-excel-json') },
        { text: '其他应用', link: join(MENU.FRONTEND, 'code/code-others') },
      ],
    },
  ],
  [MENU.BACKEND]: [
    {
      text: 'Koa',
      collapsed: false,
      items: [
        { text: '开始', link: join(MENU.BACKEND, 'koa/koa-start') },
        { text: '实战', link: join(MENU.BACKEND, 'koa/koa-use') },
      ],
    },
    {
      text: 'MySQL',
      collapsed: false,
      items: [
        { text: '安装', link: join(MENU.BACKEND, 'mysql/mysql-install') },
      ],
    },
    {
      text: 'Redis',
      collapsed: false,
      items: [
        { text: '安装', link: join(MENU.BACKEND, 'redis/redis-install') },
      ],
    },
  ],
  [MENU.CLI]: [
    {
      text: 'Git',
      collapsed: true,
      items: [
        { text: 'CLI', link: join(MENU.CLI, 'git/git-cli') },
        { text: '集成', link: join(MENU.CLI, 'git/git-hub') },
        { text: '使用', link: join(MENU.CLI, 'git/git-use') },
        { text: '问题', link: join(MENU.CLI, 'git/git-FAQ') },
      ],
    },
    {
      text: 'Linux',
      collapsed: true,
      items: [
        { text: 'CLI', link: join(MENU.CLI, 'linux/linux-cli') },
        { text: '其他', link: join(MENU.CLI, 'linux/') },
      ],
    },
    {
      text: 'Windows',
      collapsed: true,
      items: [
        { text: 'CLI', link: join(MENU.CLI, 'windows/windows-cli') },
        { text: '其他', link: join(MENU.CLI, 'windows/') },
      ],
    },
  ],
})
