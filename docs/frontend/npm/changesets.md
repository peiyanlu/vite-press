---
title: changesets
description: monorepo发包工具
category: monorepo
tags:
  - monorepo
  - changesets
order: 0
---


# {{ $frontmatter.title }}


`changesets` 主要关心 `monorepo` 项目下子项目版本的更新、`changelog` 文件生成、包的发布。


```shell
pnpm add @changesets/cli -D
```

**特点**

- 在开发时，需要开发者提供本次变更涉及的包名称、升级版本类型(`patch`、`minor`、`major`)及变更信息，即 `changeset`。

- 在发布版本时，会根据 `changeset` 自动升级对应包的版本号，并在对应的包中生成 `Changelog` 信息。

- 在 `Monorepo` 场景中，`changeset` 会自动生成仓库依赖图，升级时只会升级变更包及相关依赖包的版本号。


## 初始化


执行 `changeset init`，在项目根目录下生成一个 `.changeset` 目录，里面会生成一个 `changeset` 的 `config` 文件


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

- `commit`：为 `true` 时，在执行 `change` 和 `version` 命令时，将自动执行提交代码操作

- `fixed`：用于 `monorepo` 中对包进行分组，相同分组中的包版本号将进行绑定，每次执行 `version` 命令时，同一分组中的包只要有一个升级版本号，其他会一起升级。支持使用正则匹配包名称。

- `linked`：和 `fixed` 类似，也是对 `monorepo` 中对包进行分组，但是每次执行 `version` 命令时，只有和 `changeset` 声明的变更相关的包才会升级版本号，同一分组的变更包的版本号将保持一致。支持使用正则匹配包名称。

- `access`：如果配置为 `restricted`，将作为私有包发布，如果为 `public`，则发布公共范围包。

:::info
对于仓库中存在部分包需要配置 access，可以在 package.json 中配置 publishConfig，例如：

```json
{
  "publishConfig": {
    "registry": "https://registry.npmjs.org/",
    "access": "public"
  }
}
```

:::

- `baseBranch`：仓库主分支。该配置用于计算当前分支的变更包并进行分类。

- `updateInternalDependencies`：用于声明更新内部依赖的版本号规则。当执行 `version` 命令升级版本号时，默认会自动更新仓库中使用该包的依赖声明。配置该字段为 `minor` 后，如果升级版本号为 `patch` 类型，将不会自动更新引用依赖声明。

:::info
e.g.,当配置 updateInternalDependencies 为 minor 时，升级 pkg-a 至 1.0.1 时，pkg-b 中的 pkg-a 的依赖版本将不会更新，只有 pkg-a 升级版本号为 1.1.0 或者 2.0.0 时，才会更新 pkg-b 中的 pkg-a 的依赖。
:::

- `changelog`：配置为 `false` 时，执行 `version` 命令时，在 `CHANGELOG.md` 文件中只声明版本号，不声明其他 `Changelog` 信息。

- `ignore`：用于声明执行 version 命令时忽略的包，和 `version` 命令的 `--ignore` 参数用法一致，注意两者不能同时使用。


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

- 不需要发布的包可以在 `package.json` 中设置

```json
{
  "private": true
}
```

:::


## 生成changeset文件


一个 `changeset` 是个包含了在某个分支或者 `commit` 上改动信息的 `md` 文件，包含的内容包括：

- 本次变更涉及哪些包的变更。

- 本次变更需要升级的版本号类型，类型符合 [semver](../../npm/SemVer.md) 规范。

- 本次变更的 `Changelog` 信息。

这个文件的本质是对包的版本和 `Changelog` 做一个预存储，我们也可以在这些文件中修改信息。


**模块工程方案**

在根目录执行 `pnpm changeset add`，选择本次变更需要升级的版本号类型，填入 `Changelog` 信息，并点击两次回车，执行完成后，将在项目的 `.changeset` 目录创建对应的 `changeset` 文件


**Monorepo 工程方案**

在根目录执行 `pnpm changeset add`，选择本次需要升级的包列表，分别选择不同版本类型对应的包，`changeset` 会询问版本号类型，如果存在包未选择这两种类型，将会默认使用 `patch` 类型，填入 `Changelog` 信息，并点击两次回车，执行完成后，将在项目的
`.changeset` 目录创建对应的 `changeset` 文件

:::info

- 假设现在要进行迭代，我们从主分支上切一个分支出来，完成代码修改，如果需要变更记录，执行 `pnpm changeset add` 命令生成 `changeset` 文件，最后提交代码。

- `changeset` 文件需要一并提交到远程仓库中。在后续的新版本发布后，这些 `changeset` 文件是会被自动消耗掉的。

> `changesets` 会根据当前代码变更(`git diff Head...baseBranch`)，将 `Monorepo` 中的 `package` 分为两类，`changed packages` 和 `unchanged packages`，方便用户进行选择。
> > 如果当前就是主分支，代码 `commit` 之后不能区分哪些是改变的
:::

**参数：**

- `--empty` 添加一个空的 `changeset`。

```shell
pnpm changeset add --empty
```

- `--open` 使用该参数时，在填写 `Changelog` 步骤会打开系统默认编辑器进行填写。


**注意事项**

- 不是所有的变更都需要 `changeset`

- 如果当前变更是修改仓库的一些基础设施，比如 `CI`、测试等，就不需要添加 `changeset` 或者可以添加一个空的 `changeset`。

- 一个 `pull request` 可以提交多个 `changeset`。当一个 `pull request` 存在多个功能开发或者问题修复时，可以多次执行 `pnpm changeset add` 添加多个 `changeset` 文件，每个文件选择对应功能的包和添加变更信息即可。

- 创建 `changeset` 时，需要选择该功能相关的所有包


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


## 用法假想


初次开发完毕后，直接打包、发布，提交代码到主分支 `master`；从主分支切新分支更新迭代（e.g.,例如新增 `dev` 分支，日常开发从 `dev` 切新分支），新分支开发完提交合并到 `dev`，
代码都合并到 `dev` 分支之后生成 `changeset` 文件，提交合并到主分支，在主分支修改包的版本（消耗掉 `changeset`），发布新版本（自动 `tag`）

```json
{
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev --parallel",
    "changeset:add": "changeset add",
    "changeset:version": "changeset version",
    "changeset:publish": "changeset publish",
    "release": "pnpm run build && pnpm run changeset:add && pnpm run changeset:version && pnpm run changeset:publish"
  }
}
```
