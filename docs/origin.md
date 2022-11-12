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
```shell
yarn docs:dev
```

## 5、添加更多页面
```text{3}
.
├─ docs
│  ├─ getting-started.md // [!code focus]
│  └─ index.md
└─ package.json
```

## 6、添加配置：导航栏、侧边栏等
> docs 文件下创建 .vitepress 文件放置页面配置
```text{3-4}
.
├─ docs
│  ├─ .vitepress // [!code focus:2]
│  │  └─ config.js
│  └─ index.md
└─ package.json
```