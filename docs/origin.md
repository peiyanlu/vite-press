# Vitepress 搭建个人博客网站并部署 GitHub pages 和 Gitee pages

## 1、创建一个新项目
```shell
mkdir vitepress-starter && cd vitepress-starter
```

## 2、初始化项目
```shell
yarn init
```

## 3、安装 VitePress
```shell
yarn add --dev vitepress
```
> 创建第一篇文档
```shell
mkdir docs && echo '# Hello VitePress' > docs/index.md
```

## 4、启动开发环境
> 添加脚本到 package.json
```json{4}
{
   ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
  ...
}
```
> 执行 `yarn docs:dev` ，然后就可以看到最简单的页面效果


## 5、配置首页
```markdown
---
layout: home

title: VitePress
titleTemplate: Vite & Vue powered static site generator

hero:
  name: 我的博客
  text: </dev>
  tagline: coding
  image:
    src: /logo.svg
    alt: logo
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/
    - theme: alt
      text: 在 Gitee 上查看
      link: https://gitee.com/

features:
  - icon: ⚡️
    title: vite + vue3
    details: 两岸猿声啼不住，轻舟已过万重山
  - icon: 🖖
    title: 知新
    details: 好记性不如烂笔头
  - icon: 🛠️
    title: 温故
    details: 书读百遍其义自见
---
```
> [参考链接](https://vitepress.vuejs.org/guide/theme-home-page)

## 5、添加更多页面
```text{3}
.
├─ docs
│  ├─ getting-started.md // [!code focus]
│  └─ index.md
└─ package.json
```

## 6、添加网站配置
> docs 文件下创建 .vitepress 文件放置页面配置
```text{3-4}
.
├─ docs
│  ├─ .vitepress // [!code focus:2] 
│  │  └─ config.ts
│  └─ index.md
└─ package.json
```

### 1、基础配置
```ts
export default {
  // These are app level configs.
  lang: 'en-US', // <html lang="en-US">
  title: 'VitePress', // 网站标题
  titleTemplate: 'Blog', // 网站标题后缀- “VitePress | Blog”
  description: 'Vite & Vue powered static site generator.', // 网站描述 - <meta name="description" content="Vite & Vue powered static site generator.">
  base: '/', // base url
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
    // 渲染为: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ],
  appearance: true, // 外观切换 - 深色浅色
  ignoreDeadLinks: false, // 当设置为 true 时，VitePress 不会因为死链接而导致构建失败。
  lastUpdated: true, // 页面最后更新时间
  cleanUrls: 'without-subfolders', // 删除路径中的.html后缀
  themeConfig: {}, // 主题配置
  markdown: { // markdown 解析配置
    theme: 'material-palenight', // 主体配色
    lineNumbers: true // 显示行号
  }
}
```
::: tip
1、titleTemplate：当 titleTemplate 的内容与 title 的内容相同时，不出现后缀;

2、base：当网站部署在 GitHub Pages 或 Gitee Pages 时会存在子路径，例如：https://username.github.io/repo/ ，需要设置 base 为仓库名称;

3、head：引入的公共资源不会自动在路径拼接 base 内容，需自行处理，例如：
```ts
const BASE_URL = '/vite-press/'
const joinPath = (base: string, path: string): string => `${ base }${ path }`.replace(/\/+/g, '/')
const withBase = (path: string): string => joinPath(BASE_URL, path)

const getHead = () => {
  return [
    [ 'link', { rel: 'icon', href: withBase('/logo.svg') } ]
  ]
}
```
:::


### 2、主题配置
```ts
export default {
  // Theme related configurations.
  themeConfig: {
    logo: '/logo.svg', // 左侧导航栏图标
    siteTitle: 'Hello World', // 左侧导航栏标题
    nav: [
      { text: 'Guide', link: '/guide' },
    ], // 导航菜单
    sidebar: { ... }, // 侧边栏菜单
    outline: 'deep', // 在大纲中显示的标题级别
    outlineTitle: '快速导航', // 大纲的标题
    editLink: { // 提供编辑页面的连接
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdatedText: '上次更新时间', // 上次更新时间显示文本
    docFooter: { // 文档底部文本
      prev: '上一节',
      next: '下一节'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    socialLinks: [ // 友情连接
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      // You can also add custom icons by passing SVG as string:
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...'
      }
    ]
  }
}
```
::: tip
1、link：页面路由，支持外链；'/guid/' 表示加载 guid/index.md，'/guid' 表示加载 guid.md

2、sidebar：默认为数组形式，侧边栏在所有页面会显示；可以使用对象形式，将需要匹配的路径作为 key ，该路径需要显示的侧边栏数组作为 value，例如：
```ts
const getSildBar = ()=>({
  '/guid/': [
    {
      text: 'Guid',
      link: '/guide/'
    },
    {
      text: 'Config',
      collapsible: true, // 可折叠
      collapsed: false, // 折叠
      items: [
        { text: 'Item1', link: '/guid/item1' },
        { text: 'Item2', link: '/guid/item2' }
      ]
    },
  ]
})
```
:::

## 7、写写写
```text
逐步完善博客内容
```

## 8、网站部署

因为我选择的仓库是 `Gitee` ，所以选择使用 `Gitee pages` 部署:

> 通过脚本打包并推送到仓库
```shell
#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

# 初始化 git 并强制提交到仓库
git init
git add -A
git commit -m "Updated version of git repositoryMap"
git remote add origin https://gitee.com/peiyanlu/vite-press.git
git push -f origin master:gh-pages

# 返回上次所在的目录
cd -

# 删除dist文件夹
rm -rf docs/.vitepress/dist

# 是否关闭命令行窗口
exec /bin/bash
```

1、通过路径：项目仓库 -> 服务 -> `Gitee pages`，进入部署页面

2、按照要求进行实名认证

3、选择部署额分支

4、选择部署的目录，如果整个分支就是打包后的内容，空着即可；否则，选择项目打包后的目录

5、勾选强制使用 `https`

6、点击 `启动` ，稍等片刻即可部署完成；后续分支内容更新后，点击 `更新`

## 9、优化部署
Gitee 相比 GitHub 在国内可以访问更加快速，但是在功能上还是有些差别，比如 Gitee Pages 不能自动更新，每次内容推送后都需要手动执行，非常麻烦；

经过一番思考，最终还是选择使用 GitHub Actions 辅助完成，GitHub 中有相对丰富的资源可以利用；

整体的想法是将仓库镜像到 `GitHub` ，然后使用 `GitHub Actions` 的能力实现对 `Gitee Pages` 的自动更新

接下来开始实施：

### 9.1、使用 VitePress 官方提供的部署到 GitHub Pages 的脚本
> `.github/workflows` 文件夹下的 `.yml` 文件会自动执行
```yaml
name: Deploy

on:
  push:
    branches:
      - main # 监听的分支

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: yarn
      - run: yarn install --frozen-lockfile

      - name: Build
        run: yarn docs:build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }} # GitHub 私人令牌
          publish_dir: docs/.vitepress/dist # 部署的文件目录
          # cname: example.com # if wanna deploy to custom domain
```
[获取个人令牌](/version-control/git-hub#获取-token-私人令牌)

### 9.2、解决更新 Gitee Pages 的问题。
我们使用第三方 actions 来完成操作，通过路径 github.com -> Marketplace；直接以 gitee 为关键字搜索相关内容，找一个 stars 高的，
这里选择 [Gitee Pages Action](https://github.com/marketplace/actions/gitee-pages-action),
在第一步创建的文件中添加新的 job ：
```yaml{2-16}
jobs:
  gitee-pages-sync: 
    runs-on: ubuntu-latest
    steps:
      - name: Build Gitee Pages
        uses: yanglbme/gitee-pages-action@main
        with:
          # 注意替换为你的 Gitee 用户名
          gitee-username: xxxxx
          # 注意在 Settings->Secrets 配置 GITEE_PASSWORD
          gitee-password: ${{ secrets.GITEE_PASSWORD }}
          # 注意替换为你的 Gitee 仓库，仓库名严格区分大小写，请准确填写，否则会出错
          gitee-repo: xxxxx/vite-press
          # 要部署的分支，默认是 master，若是其他分支，则需要指定（指定的分支必须存在）
          branch: gh-pages
```
注：
- `branch` 参数默认是 `master`，如果你是部署在 `gh-pages` (或者 `main`) 分支等等，务必指定 `branch: gh-pages`(或者 `branch: main`)。
- `branch` 对应的分支，必须在仓库中实际存在，请不要随意（不）指定分支，否则可能导致 Gitee Pages 站点出现 404 无法访问的情况。
- 对于 `gitee-repo` 参数，如果你的项目在 Gitee 的地址为 https://gitee.com/用户名/xxx ，那么 `gitee-repo` 就填写为 `用户名/xxx`

### 9.3、提交代码、测试结果
在仓库的 `Actions` 标签页查看运行结果 ，什么也没有发生，What？，这是为什么呢，因为仓库的 `actions` 默认是关闭的，通过路径：仓库 -> Settings -> Actions -> General -> Actions permissions，设置允许执行 `actions`

完成修改后，再次提交代码测试执行结果：发现预设的两个 job 都已完成，打开 Gitee 部署的站点发现并未更新，又是为什么呢？回看执行流程就会发现，虽然打包后代码已经更新到了 `gh-pages` 分支，但是并没有同步到 Gitee，所以在 Gitee 中更新了个寂寞！！！

### 9.4、解决将 GitHub 的分支同步到 Gitee 的问题
作为一个小白，本着面向搜索引擎编程的原则，先搜索了一把，发现基本都是将 GitHub 仓库镜像到 Gitee 的操作，并没有只同步某一分支的情况；这里如果采用再将整个项目镜像到 Gitee 的方式的话会陷入死循环；
于是乎，只能想办法自己解决，最终，参考镜像仓库的方式，自己实现了同步某一分支的 `action`：[git-sync-action](https://github.com/peiyanlu/git-sync-action)，用法如下：
```yaml{2-12}
jobs:
  gitee-branch-sync:
    runs-on: ubuntu-latest
    steps:
      - uses: peiyanlu/git-sync-action@v1
        env:
          SSH_PRIVATE_KEY: ${{ secrets.PRIVATE_KEY }}
        with:
          source-repo: "git@github.com:peiyanlu/vite-press.git"
          destination-repo: "git@gitee.com:peiyanlu/vite-press.git"
          destination-branch: "gh-pages"
```