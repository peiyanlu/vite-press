import { defineConfig } from 'vitepress'
import { MONOCHROME } from './icon'
import { BASE_URL, getNav, getSidebar, GIT_PAGE, withBase } from './menu'

export default defineConfig({
  lang: 'zh-CN',
  title: '笔记',
  titleTemplate: '开发笔记',
  description: '小路的开发笔记',
  base: BASE_URL,
  head: [
    [ 'link', { rel: 'icon', href: withBase('/logo.svg') } ]
  ],
  appearance: true,
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    lineNumbers: true
  },
  locales: {
    en: {
      label: 'French',
      lang: 'fr',
      link: '/fr/guide'
    }
  },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '开发笔记',
    i18nRouting: true,
    outline: {
      level: 'deep',
      label: '快速导航'
    },
    nav: getNav(),
    sidebar: getSidebar(),
    editLink: {
      pattern: `${ GIT_PAGE }docs/:path`,
      text: '在 gitee 编辑此页'
    },
    docFooter: {
      prev: '上一节',
      next: '下一节'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: `Copyright © 2022-${ new Date().getFullYear() } YanluPei`
    },
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',
    darkModeSwitchLabel: '外观',
    socialLinks: [
      {
        icon: {
          svg: MONOCHROME.GITEE
        },
        link: GIT_PAGE
      },
      { icon: 'github', link: 'https://github.com/peiyanlu/vite-press/' }
    ],
    algolia: {
      appId: '02WXO09HIV',
      apiKey: '2f7bbd5974b6fe9dc9c946d5d406f334',
      indexName: 'vite-press',
      locales: {
        zh: {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档'
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消'
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除'
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接'
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者'
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈'
              }
            }
          }
        }
      }
    }
  },
})
