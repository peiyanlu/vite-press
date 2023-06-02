import { sync } from 'fast-glob'
import matter from 'gray-matter'
import { dirname, extname } from 'path'
import { DefaultTheme } from 'vitepress'


export interface CustomFrontMatter {
  title: string;
  order: number;
  sidebar: boolean;
  group: boolean;
}

export type NavItem = NavItemWithLink | NavItemWithChildren

export interface NavItemChildren extends DefaultTheme.NavItemChildren {
  items: NavItemWithLink[];
  order: number;
  sidebar: boolean;
}

export interface NavItemWithChildren extends DefaultTheme.NavItemWithChildren {
  items: (NavItemChildren | NavItemWithLink)[];
  order: number;
  sidebar: boolean;
}

interface NavItemWithLink extends DefaultTheme.NavItemWithLink {
  order: number;
  sidebar: boolean;
}

export const pathJoin = (...paths: string[]) => paths.join('/').replace(/\/+/g, '/')

export const pathToLink = (path: string): string => path
  .replace(/^docs/, '')
  .replace('.md', '')
  .replace(/\/index$/g, '/')
  .replace(/\/+/g, '/')

interface BuildNavOptions {
  ignore?: string[];
}

interface BuildSidebarOptions extends BuildNavOptions {
  sidebarMapping?: Record<string, string>;
  showCount?: boolean;
}

export const getNavItem = <T extends (NavItemChildren | NavItemWithLink | NavItemWithChildren)>(path: string, options?: BuildNavOptions): T[] => {
  const { ignore } = options || {}
  return sync(
    pathJoin(path, `/**/index.md`),
    {
      onlyFiles: false,
      objectMode: true,
      ignore: ignore || [ pathJoin(path, `/index.md`) ],
      deep: 2,
    },
  ).reduce<T[]>((groups, entry) => {
    const { path } = entry
    const data = matter.read(path).data as CustomFrontMatter
    
    const link = pathToLink(path)
    
    const item = {
      text: data.title,
      activeMatch: link,
      order: data.order ?? 0,
      sidebar: data.sidebar ?? false,
    } as T
    
    if (data.group) {
      groups.push({
        items: getNavItem(dirname(path)),
        ...item,
      })
    } else {
      groups.push({
        link: link,
        ...item,
      })
    }
    
    return groups.sort((a, b) => a.order - b.order)
  }, [])
}

export const flatNavs = (nav: NavItem[]): NavItem[] => {
  return nav.reduce<(NavItem)[]>((group, item) => {
    return group.concat(item, flatNavs('items' in item && item.items || []))
  }, [])
}

export const getSidebarItem = (path: string, options?: BuildSidebarOptions): DefaultTheme.SidebarItem[] => {
  const { ignore, sidebarMapping, showCount } = options || {}
  const getItems = (path: string) => {
    return sync(
      pathJoin(path, `/**`),
      {
        onlyFiles: false,
        objectMode: true,
        ignore: ignore || [ '**/img/**', '**/components/**', '**/index.md' ],
        deep: 1,
      },
    ).reduce<DefaultTheme.SidebarItem[]>((groups, article) => {
      const { path, dirent, name } = article
      const isFile = dirent.isFile()
      
      if (isFile) {
        if ([ '.md' ].includes(extname(path))) {
          const { data } = matter.read(path)
          groups.push({
            text: data.title,
            link: pathToLink(path),
          })
        }
      } else {
        const items = getItems(path)
        const text = sidebarMapping?.[name] ?? name
        groups.push({
          text: showCount ? `[${ items.length }] ${ text }` : text,
          items: items,
          collapsed: true,
        })
      }
      return groups
    }, [])
  }
  
  return getItems(path)
}
