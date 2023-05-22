import { DefaultTheme } from 'vitepress'
import { sync } from "fast-glob";
import * as matter from "gray-matter";


const getNavItem = (path: string): DefaultTheme.NavItem[] => sync(
  `${ path }/**/**.md`,
  {
    onlyFiles: false,
    objectMode: true,
    ignore: [ '**/img/**', '**/.vitepress/**', `${ path }/index.md` ],
    deep: 2,
  },
).reduce<DefaultTheme.NavItem[]>((groups, entry) => {
  const { path } = entry
  const { data } = matter.read(path)
  
  const link = path
    .replace(/^docs/, '')
    .replace('index.md', '')
    .replace(/\/+/g, '/')
  groups.push({
    text: data.title,
    link: link,
    activeMatch: link,
  })
  
  return groups
}, []);


const getSidebarItem = (path: string): DefaultTheme.SidebarItem[] => {
  const getItems = (path: string) => {
    return sync(
      `${ path }/**`,
      {
        onlyFiles: false,
        objectMode: true,
        ignore: [ '**/img/**', '**/components/**', '**/index.md' ],
        deep: 1,
      },
    ).reduce<DefaultTheme.SidebarItem[]>((groups, article) => {
      const { path, dirent, name } = article
      const isFile = dirent.isFile()
      
      if (isFile) {
        const { data } = matter.read(path)
        // 向前追加标题
        groups.push({
          text: data.title,
          link: path
            .replace(/^docs/, '')
            .replace('.md', '')
            .replace(/\/+/g, '/'),
        })
      } else {
        const arr = getItems(path)
        groups.push({
          text: `[${ arr.length }] ${ menuData[name] ?? name }`,
          items: arr,
          collapsed: arr.length < 10,
        })
      }
      return groups
    }, [])
  }
  
  return getItems(path)
};

export const enum MENU {
  HOME = '/',
  FRONTEND = '/frontend/',
  BACKEND = '/backend/',
  CLI = '/cli/',
}

const navOrder = [ '/origin/', '/navigation/', '/frontend/', '/backend/', '/cli/', '/archive/' ]


export const getNav = (): DefaultTheme.NavItem[] => [
  {
    text: '首页',
    link: MENU.HOME,
  },
  ...getNavItem('docs')
    .sort((
      a,
      b,
    ) => navOrder.indexOf((a as DefaultTheme.NavItemWithLink).link) - navOrder.indexOf((b as DefaultTheme.NavItemWithLink).link)),
]

export const getSidebar = (): DefaultTheme.Sidebar => ({
  [MENU.FRONTEND]: getSidebarItem('docs/frontend'),
  [MENU.BACKEND]: getSidebarItem('docs/backend'),
  [MENU.CLI]: getSidebarItem('docs/cli'),
})

export const menuData: Record<string, string> = {
  browser: '浏览器与网络',
  build: '编译构建',
  code: '代码',
  css: 'CSS',
  html: 'HTML',
  javascript: 'JavaScript',
  npm: '依赖包',
  regex: '正则',
  // 后端
  koa: 'Koa',
  mysql: 'MySQL',
  redis: 'Redis',
  // CLI
  git: 'Git',
  linux: 'Linux',
  windows: 'Windows',
}
