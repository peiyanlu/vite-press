import { sync } from 'fast-glob'
import * as matter from 'gray-matter'
import { extname } from 'path'
import { DefaultTheme } from 'vitepress'


export const menuMap: Record<string, string> = {
  browser: '浏览器',
  network: '网络',
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

interface NavItem extends DefaultTheme.NavItemWithLink {
  order: number
  sidebar: boolean
}

const getNavItem = (path: string): NavItem[] => sync(
  `${ path }/**/**.md`.replace(/\/+/g, '/'),
  {
    onlyFiles: false,
    objectMode: true,
    ignore: [ `${ path }/index.md` ],
    deep: 2,
  },
).reduce<NavItem[]>((groups, entry, index) => {
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
    order: data.order ?? 0,
    sidebar: data.sidebar ?? false,
  })
  
  return groups.sort((a, b) => a.order - b.order)
}, [])


const getSidebarItem = (path: string): DefaultTheme.SidebarItem[] => {
  const getItems = (path: string) => {
    return sync(
      `${ path }/**`.replace(/\/+/g, '/'),
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
        if ([ '.md' ].includes(extname(path))) {
          const { data } = matter.read(path)
          // 向前追加标题
          groups.push({
            text: data.title,
            link: path
              .replace(/^docs/, '')
              .replace('.md', '')
              .replace(/\/+/g, '/'),
          })
        }
      } else {
        const arr = getItems(path)
        groups.push({
          text: `[${ arr.length }] ${ menuMap[name] ?? name }`,
          items: arr,
          collapsed: arr.length < 10,
        })
      }
      return groups
    }, [])
  }
  
  return getItems(path)
}

const navs = getNavItem('docs')

export const nav: DefaultTheme.NavItem[] = navs.map(({ order, sidebar, ...other }) => other)

export const sidebar: DefaultTheme.Sidebar = navs
  .filter(nav => nav.sidebar)
  .reduce<DefaultTheme.SidebarMulti>((sidebar, nav) => {
    sidebar[nav.link] = getSidebarItem(`docs${ nav.link }`)
    return sidebar
  }, {})

