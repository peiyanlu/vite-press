---
title: 包管理器
description: 目前最流行的三种包管理工具
category: npm
tags:
  - npm
  - yarn
  - pnpm
  - registry
---


# {{ $frontmatter.title }}


## 包管理工具

- `NPM`：它是当今最广泛的 `JavaScript` 包管理工具，它开创了包管理标准，其开发者还维护了世界上最多人使用的分布式开源 `JavaScript` 包管理网站 `npmjs.com`。

- `Yarn`：它重新实现了 `NPM`, 与之相比，`Yarn` 具有相同的管理方式，但是安装速度更快，稳定性更好，而且提供了一些新特性（例如 `Yarn workspaces`），用于大型开发。

- `PNPM`：它提供了一个全新的包管理模式，该模式解决了**幻影依赖**和**NPM 分身**的问题，同时**符号链接**使之与 `NodeJS` 模块解析标准保持 `100%` 兼容。

## 依赖源

- `Yarn`：`https://registry.yarnpkg.com`

- `TaoBao`：`https://registry.npmmirror.com`

- `NPM`：`https://registry.npmjs.org`

```txt
// .npmrc
registry=https://registry.npmmirror.com

// 临时指定
pnpm add vite -D --registry=https://registry.npmmirror.com
```
