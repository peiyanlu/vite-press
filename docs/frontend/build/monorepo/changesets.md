---
title: Changesets
description: monorepo发包工具
category: monorepo
tags:
  - monorepo
  - changesets
---


# {{ $frontmatter.title }}


`Changesets` 是一个用于 `Monorepo` 项目下版本以及 `Changelog` 文件管理的工具。目前一些比较火的 `Monorepo` 仓库都在使用该工具进行项目的发包例如 `pnpm`、`mobx` 等。

`changesets` 主要关心 `monorepo` 项目下子项目版本的更新、`changelog` 文件生成、包的发布。一个 `changeset` 是个包含了在某个分支或者 `commit` 上改动信息的 `md` 文件，它会包含这样一些信息:

- 需要发布的包

- 包版本的更新层级(遵循 `semver` 规范)

- `CHANGELOG` 信息

```shell
pnpm add @changesets/cli -D
```

## 初始化


执行 `changeset init`，在项目根目录下生成一个 `.changeset` 目录，里面会生成一个 `changeset` 的 `config` 文件

> 目录需要提交到仓库

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

## 第一次发布


在项目根目录下直接运行下方指令为子项目发布第一个版本。发布完成后，提交代码~

```shell
pnpm run build

pnpm changeset publish
```

:::tip

- `@xxx/xx` 形式的包会被当作私有包，默认需要以组织的方式登录，可以通过参数发布为公共包

```shell
pnpm publish --access public
```

- `changeset publish` 时指定参数不生效，此时可以在 `package.json` 中指定配置

```json
{
  "publishConfig": {
    "access": "public"
  }
}
```

:::


## 生成changeset文件


假设现在要进行迭代，我们从主分支上切一个分支出来，完成代码修改，执行 `pnpm changeset add` 命令，选择要发布的包、选择要发布的版本、填写 `changelog`，
最终会在 `.changeset` 目录下新增一个随机名称的 `changeset` 文件。`changeset` 文件是需要一并提交到远程仓库中的。在后面的包发布后，这些 `changeset` 文件是会被自动消耗掉的。

- 包的版本类型（`patch`、`minor`、`minor`，严格遵循 [semver](../../npm/SemVer.md) 规范）。

- `changeset` 通过 `git diff` 和构建依赖图来获得要发布的包。（代码 `commit` 之后不能区分哪些是改变的）


## 发布测试版本


1. 进入 `pre` 模式

执行下方命令中的一条

```shell
pnpm changeset pre enter alpha   # 发布 alpha 版本
pnpm changeset pre enter beta    # 发布 beta 版本
pnpm changeset pre enter rc      # 发布 rc 版本
```

2. 修改包的版本

```shell
pnpm changeset version`
```

执行后包的版本发生变化，其他项目以来的此包的版本也相应发生变化

3. 发布测试版本

```shell
pnpm run build

pnpm changeset publish
```

5. 退出 `pre` 模式

```shell
pnpm changeset pre exit
```

## 发布正式版本

1. 修改版本号

```shell
pnpm changeset version
```

2. 发布

```shell
pnpm changeset publish
```

`changeset` 会检查当前工作区中所有包的版本是否已经被发布过，如果没有则自动发布。
