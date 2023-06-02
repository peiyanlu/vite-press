import { DefaultTheme } from 'vitepress'
import { flatNavs, getNavItem, getSidebarItem, NavItem } from '../helper/menu-helper'


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

const navs = getNavItem('docs')

export const nav: NavItem[] = navs.slice()

export const sidebar: DefaultTheme.Sidebar = flatNavs(nav)
  .filter(nav => nav.sidebar)
  .reduce<DefaultTheme.SidebarMulti>((sidebar, nav) => {
    if ('activeMatch' in nav && nav.activeMatch) {
      sidebar[nav.activeMatch] = getSidebarItem(`docs${ nav.activeMatch }`, { sidebarMapping: menuMap })
    }
    return sidebar
  }, {})

