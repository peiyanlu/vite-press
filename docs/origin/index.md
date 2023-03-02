# VitePress 搭建静态网站并在 `GitHub/Gitee Pages` 部署

## 1、创建新项目

```shell
mkdir vitepress-starter && cd vitepress-starter
```

> 初始化项目

```shell
yarn init
```

## 2、安装 VitePress

```shell
yarn add --dev vitepress
```

> 创建第一篇文档

```shell
mkdir docs && echo '# Hello VitePress' > docs/index.md
```

## 3、启动开发环境

> 添加脚本到 package.json

```json{4}
{
   ...
  "scripts": { // [!code focus:5] 
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:serve": "vitepress serve docs"
  },
  ...
}
```

> 执行 `yarn docs:dev` ，然后就可以看到最简单的页面效果

## 4、添加更多页面

```text{3}
.
├─ docs
│  ├─ getting-started.md // [!code focus:2]
│  └─ index.md
└─ package.json
```

> 配置首页 ->`index.md`

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

[参考链接](https://vitepress.vuejs.org/guide/theme-home-page)

> 现在，已经有了一个基本的 VitePress 文档站点。但我们无法在网站上导航，因为它缺少了导航栏和侧边栏菜单。要启用这些导航，我们必须向站点添加一些配置

## 5、添加网站配置

> docs 文件下创建 .vitepress 文件夹放置页面配置

```text{3-4}
.
├─ docs
│  ├─ .vitepress // [!code focus:2] 
│  │  └─ config.ts
│  └─ index.md
└─ package.json
```

> docs 文件下创建 public 文件夹放置公共文件

```text{4-5}
.
├─ docs
│  ├─ .vitepress
│  ├─ public // [!code focus:2] 
│  │  └─ logo.svg
│  └─ index.md
└─ package.json
```

> .vitepress 文件下创建 theme 文件夹放置样式文件

```text{4-6}
.
├─ docs
│  ├─ .vitepress
│  │  ├─ theme // [!code focus:3] 
│  │  │  ├─ index.css 
│  │  │  └─ index.ts
│  │  └─ config.ts
│  ├─ public
│  └─ index.md
└─ package.json
```

### 5.1、基础配置

```ts
export default {
  // 应用层面的配置
  lang: 'en-US',
  // 渲染为： <html lang="en-US">
  title: 'VitePress', // 网站标题
  titleTemplate: 'Blog', // 网站标题后缀- “VitePress | Blog”
  description: 'Vite & Vue powered static site generator.', // 网站描述 
  // 渲染为：<meta name="description" content="Vite & Vue powered static site generator.">
  base: '/', // base url
  head: [
    [ 'link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' } ],
    // 渲染为: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    [ 'link', { rel: 'icon', href: '/logo.svg' } ]
    // 渲染为: <link rel="icon" href="/logo.svg" />
  ],
  appearance: true, // 外观切换 - 深色浅色
  ignoreDeadLinks: false, // 当设置为 true 时，VitePress 不会因为死链接而导致构建失败。
  lastUpdated: true, // 显示页面最后更新时间
  cleanUrls: 'without-subfolders', // 删除路径中的.html后缀
  themeConfig: {}, // 主题配置，详见 5.2
  markdown: { // markdown 解析配置
    // theme: 'material-palenight', // 主体配色
    lineNumbers: true // 显示行号
  }
}
```

**注意事项：**

1、`titleTemplate`：当 `titleTemplate` 的内容与 `title` 的内容相同时，不出现后缀;

2、`base`：当网站部署在 `GitHub Pages` 或 `Gitee Pages` 时会存在子路径，例如：`https://username.github.io/repo/`
，需要设置 `base` 为 `/repo/`;

3、`head`：引入的公共资源不会自动在路径拼接 `base` 内容，需自行处理，例如：

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

### 5.2、主题配置

```ts
export default {
  // 主题相关配置
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
    lastUpdatedText: '上次更新', // 上次更新时间显示文本
    docFooter: { // 文档底部文本
      prev: '上一节',
      next: '下一节'
    },
    footer: { // 有 sidebar 时不显示
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

**注意事项：**

1、link：页面路由，支持外链；'/guid/' 表示加载 `guid/index.md`，'/guid' 表示加载 `guid.md`

2、sidebar：默认为数组形式，侧边栏在所有页面会显示；可以使用对象形式，将需要匹配的路径作为 key ，该路径需要显示的侧边栏数组作为
value，例如：

```ts
const getSildBar = () => ({
  '/': [ // 所有页面都显示
    {
      text: 'Global Settings',
      link: '/global'
    },
  ],
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

## 6、网站创建完成

> 现在，一个完整的 VitePress 站点已经搭建完成，只需要逐步完善博客内容即可

## 7、网站部署

因为选择的仓库是 `Gitee` ，所以使用 `Gitee pages` 部署:

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

## 8、优化部署

`Gitee` 相比于 `GitHub` 在国内可以访问更加快速，但是在功能上还是有些差别，比如 `Gitee Pages` 不能自动更新，每次内容推送后都需要手动执行，非常麻烦；
经过一番思考，最终还是选择使用 `GitHub Actions` 辅助完成自动更新操作，`GitHub` 中有相对丰富的资源可以利用；

___
> 需求：`Gitee Pages` 自动更新
>> 思路：将仓库镜像到 `GitHub` ，然后使用 `GitHub Actions` 的能力实现对 `Gitee Pages` 的自动更新
---

接下来开始实施：

### 8.1、在 `GitHub` 新建仓库导入 `Gitee` 仓库

> 既然在 GitHub 建了仓库，那么也顺道将站点部署到 `GitHub Pages`

1、通过路径：`仓库 -> Settings -> Pages`，进入部署页面

2、Build and deployment

- `Source`：选择 `Deploy from a branch`
- `Branch`：选择分支，选择资源目录，点击 `Save`

::: warning
仓库的 **actions** 默认是关闭的，通过路径：**仓库 -> Settings -> Actions -> General -> Actions permissions** ，设置允许执行
**actions**
:::

### 8.2、同步 Gitee 仓库到 GitHub

通过路径：`仓库 -> 管理 -> 仓库镜像管理`，添加新的镜像，选择镜像方向为 `push`，将仓库同步到 `GitHub`

### 8.3、更新 `GitHub` 的 `gh-pages` 分支

> `.github/workflows` 文件夹下的 `.yml` 文件会自动执行；创建 `deploy.yml` 文件

```yaml
name: Deploy

on:
  push:
    branches:
      - docs-deploy # 监听的分支

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

[获取个人令牌](/vcs/git-hub#获取-token-私人令牌)

### 8.4、同步 gh-pages 分支到 Gitee

> 在 [github.com/marketplace](https://github.com/marketplace) 可以找合适的第三方 actions 来辅助完成操作

由于没有找到仅同步分支的 `action`，自己实现了[git-sync-action](https://github.com/peiyanlu/git-sync-action)
，在 `deploy.yml` 中添加新的 job ：
::: warning
这里如果采用将整个项目镜像到 Gitee 的方式的话会陷入死循环
:::

```yaml{2-11}
jobs:
  gitee-branch-sync: // [!code focus:10]
    runs-on: ubuntu-latest
    steps:
      - uses: peiyanlu/git-sync-action@v1
        env:
          SSH_PRIVATE_KEY: ${{ secrets.PRIVATE_KEY }}
        with:
          source-repo: git@github.com:peiyanlu/vite-press.git
          destination-repo: git@gitee.com:peiyanlu/vite-press.git
          destination-branch: gh-pages
```

配置公钥：

- 在 GitHub 的个人设置页面 `Settings -> SSH and GPG keys` 配置 SSH 公钥（即：id_rsa.pub），命名随意。
- 在 Gitee 的个人设置页面 `安全设置 -> SSH 公钥` 配置 SSH 公钥（即：id_rsa.pub），命名随意。

### 8.5、更新 Gitee Pages

这里选择 [Gitee Pages Action](https://github.com/marketplace/actions/gitee-pages-action), 在 `deploy.yml` 中添加新的
job ：

```yaml{2-11}
jobs:
  gitee-pages-sync: // [!code focus:10]
    runs-on: ubuntu-latest
    steps:
      - name: Build Gitee Pages
        uses: yanglbme/gitee-pages-action@main
        with:
          gitee-username: peiyanlu
          gitee-password: ${{ secrets.GITEE_PASSWORD }}
          gitee-repo: peiyanlu/vite-press
          branch: gh-pages
```

参数说明：

- `gitee-username`：`Gitee` 用户名，例如：`https://gitee.com/用户名/仓库名` ，那么 `gitee-username` 就填写为 `用户名`
- `gitee-password`：`Gitee` 密码，通过路径 `Settings -> Secrets -> Actions` 新建 `GITEE_PASSWORD` 存放 `Gitee 帐号的密码`
- `gitee-repo` ：指定部署的仓库，例如：`https://gitee.com/用户名/仓库名` ，那么 `gitee-repo` 就填写为 `用户名/仓库名`
- `branch` ：指定部署的分支，默认 master

::: warning 短信验证
关注 Gitee 官方公众号，并绑定个人 Gitee 账号，用于接收账号登录通知、以及绕过短信验证码校验
:::

### 8.6、控制任务执行顺序

这时，即使三个任务可以正常执行，但也无法达到预期的效果，因为任务之间没有关联，需要设定任务按顺序执行而非同时执行。

> 通过 `needs` 字段指定任务的先行条件

```yaml{8,14}
jobs:
  gh-pages-deploy:
    runs-on: ubuntu-latest
    steps:
      // ...

  gitee-branch-sync:
    needs: ["gh-pages-deploy"] // [!code focus]
    runs-on: ubuntu-latest
    steps:
      // ...

  gitee-pages-sync:
    needs: ["gitee-branch-sync"] // [!code focus]
    runs-on: ubuntu-latest
    steps:
      // ...
```

## 9、Algolia 搜索

> [algolia](https://www.algolia.com/) 是一个搜索、推荐服务平台，可以通过简单的配置来为站点添加全文检索功能。
>> 基本原理：通过爬虫对目标网站的内容创建 `Records`（记录），在用户搜索时调用接口返回相关内容。

一、去注册 `algolia` 账号，根据指引创建应用（`Application`）和索引（`Index`）

二、增加 `Records`（关键）

- 使用官方的 `Algolia Crawler` 爬虫后台
- 使用 `GitHub Actions` 的 `DocSearch Scraper Action` （个人博客网站 推荐）

1、分别新建 `ALGOLIA_APP_ID` 和 `ALGOLIA_API_KEY` 存放 `Application ID`和 `Admin API Key`
> path: Settings -> Secrets and variables -> Actions

2、在 `deploy.yml` 中新增job

```yaml{2-17}
jobs:
  search-algolia: // [!code focus:16]
    needs: [ "gh-pages-deploy" ]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Get the content of algolia.json as config
        id: algolia_config
        run: echo "::set-output name=config::$(cat algolia.json | jq -r tostring)"

      - name: Push indices to Algolia
        uses: signcl/docsearch-scraper-action@master
        env:
          APPLICATION_ID: ${{ secrets.ALGOLIA_APP_ID }}
          API_KEY: ${{ secrets.ALGOLIA_API_KEY }}
          CONFIG: ${{ steps.algolia_config.outputs.config }}
```

3、配置 `algolia.json`

> 而更多配置可参考 [apis/configuration](https://www.algolia.com/doc/tools/crawler/apis/configuration/)

```json
{
  "index_name": "vite-press",
  "start_urls": [
    "https://peiyanlu.github.io/vite-press/",
    "https://peiyanlu.gitee.io/vite-press/"
  ],
  "rateLimit": 8,
  "maxDepth": 10,
  "selectors": {
    "lvl0": {
      "selector": "",
      "defaultValue": "Documentation"
    },
    "lvl1": ".content h1",
    "lvl2": ".content h2",
    "lvl3": ".content h3",
    "lvl4": ".content h4",
    "lvl5": ".content h5",
    "content": ".content p, .content li"
  }
}
```

4、在 `.vitepress/config.ts` 中新增配置

```ts
export default defineConfig({
  themeConfig: {
    algolia: { // [!code focus:5]
      appId: 'ALGOLIA_APP_ID',
      apiKey: 'ALGOLIA_API_KEY',
      indexName: 'vite-press'
    }
  }
})
```

::: details 完整 `GitHub Actions` 配置

```yaml
name: Deploy

on:
  push:
    branches:
      - docs-deploy

jobs:
  gh-pages-deploy:
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
          github_token: ${{ secrets.ACCESS_TOKEN }}
          publish_dir: docs/.vitepress/dist

  gitee-branch-sync:
    needs: [ "gh-pages-deploy" ]
    runs-on: ubuntu-latest
    steps:
      - uses: peiyanlu/git-sync-action@v1
        env:
          SSH_PRIVATE_KEY: ${{ secrets.PRIVATE_KEY }}
        with:
          source-repo: git@github.com:peiyanlu/vite-press.git
          destination-repo: git@gitee.com:peiyanlu/vite-press.git
          destination-branch: gh-pages

  gitee-pages-sync:
    needs: [ "gitee-branch-sync" ]
    runs-on: ubuntu-latest
    steps:
      - name: Build Gitee Pages
        uses: yanglbme/gitee-pages-action@main
        with:
          gitee-username: peiyanlu
          gitee-password: ${{ secrets.GITEE_PASSWORD }}
          gitee-repo: peiyanlu/vite-press
          branch: gh-pages

  search-algolia:
    needs: [ "gh-pages-deploy" ]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Get the content of algolia.config.json as config
        id: algolia_config
        run: echo "::set-output name=config::$(cat algolia.config.json | jq -r tostring)"

      - name: Push indices to Algolia
        uses: signcl/docsearch-scraper-action@master
        env:
          APPLICATION_ID: ${{ secrets.ALGOLIA_APP_ID }}
          API_KEY: ${{ secrets.ALGOLIA_API_KEY }}
          CONFIG: ${{ steps.algolia_config.outputs.config }}
```

:::

## 10、结束

至此，通过 `VitePress` 搭建博客站点，并且部署到 `GitHub Pages` 和 `Gitee Pages` 已全部完成
