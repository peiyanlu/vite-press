---
title: Changesets
description: monorepo发包工具
category: monorepo
tags:
  - monorepo
  - changesets
---


# {{ $frontmatter.title }}


Changesets 是一个用于 Monorepo 项目下版本以及 Changelog 文件管理的工具。目前一些比较火的 Monorepo 仓库都在使用该工具进行项目的发包例如 pnpm、mobx 等。

changesets 主要关心 monorepo 项目下子项目版本的更新、changelog 文件生成、包的发布。一个 changeset 是个包含了在某个分支或者 commit 上改动信息的 md 文件，它会包含这样一些信息:

需要发布的包
包版本的更新层级(遵循 semver 规范)
CHANGELOG 信息

pnpm install @changesets/cli

通过执行 changeset init，可以在项目根目录下生成一个 .changeset 目录，里面会生成一个 changeset 的 config 文件

```json
{
  "$schema": "https://unpkg.com/@changesets/config@2.3.0/schema.json",
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "fixed": [],
  "linked": [],
  "access": "restricted",
  "baseBranch": "master",
  "updateInternalDependencies": "patch",
  "ignore": []
}
```

changeset add 在 changesets 中算得上比较关键的命令之一了，它会根据 monorepo 下的项目来生成一个 changeset 文件，里面会包含前面提到的 changeset 文件信息(更新包名称、版本层级、CHANGELOG 信息)。

