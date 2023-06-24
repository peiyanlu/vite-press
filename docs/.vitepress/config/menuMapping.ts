import { SidebarMapping } from 'vitepress-plugin-helper'


export const menuMapping: SidebarMapping = {
  browser: {
    text: '浏览器',
    order: 0,
    collapsed: true,
  },
  network: {
    text: '网络',
    order: 1,
    collapsed: true,
  },
  build: {
    text: '编译构建',
    order: 2,
    collapsed: true,
  },
  vue: {
    text: 'Vue',
    order: 3,
    collapsed: true,
  },
  html: {
    text: 'HTML',
    order: 4,
    collapsed: true,
  },
  css: {
    text: 'CSS',
    order: 5,
    collapsed: true,
  },
  javascript: {
    text: 'JavaScript',
    order: 6,
    collapsed: true,
  },
  npm: {
    text: '依赖包',
    order: 7,
    collapsed: true,
  },
  regex: {
    text: '正则',
    order: 8,
    collapsed: true,
  },
  code: {
    text: '代码',
    order: 99,
    collapsed: true,
  },
  // 后端
  koa: {
    text: 'Koa',
    order: 0,
    collapsed: true,
  },
  mysql: {
    text: 'MySQL',
    order: 1,
    collapsed: true,
  },
  redis: {
    text: 'Redis',
    order: 2,
    collapsed: true,
  },
  // CLI
  git: {
    text: 'Git',
    order: 0,
    collapsed: true,
  },
  linux: {
    text: 'Linux',
    order: 1,
    collapsed: true,
  },
  windows: {
    text: 'Windows',
    order: 2,
    collapsed: true,
  },
  node: {
    text: 'Node',
    order: 3,
    collapsed: true,
  },
}
