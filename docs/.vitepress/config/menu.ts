import { DefaultTheme } from 'vitepress'
import { flatNavs, getNavItem, getSidebarItem } from 'vitepress-plugin-helper'
import { menuMapping } from './menuMapping'


const navs = getNavItem('docs')

export const nav = navs.slice()

export const sidebar: DefaultTheme.Sidebar = flatNavs(nav)
  .filter(nav => nav.sidebar)
  .reduce<DefaultTheme.SidebarMulti>((sidebar, nav) => {
    if ('activeMatch' in nav && nav.activeMatch) {
      sidebar[nav.activeMatch] = getSidebarItem(
        `docs${ nav.activeMatch }`,
        {
          sidebarMapping: menuMapping,
          ignore: [ '**/img/**', '**/components/**' ],
        },
      )
    }
    return sidebar
  }, {})

