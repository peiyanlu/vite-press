---
title: release-it
description: 使用release-it自动管理版本号和CHANGELOG
category: npm
tags:
  - npm
  - release-it
order: 0
---

# {{ $frontmatter.title }}

用于自动执行版本控制和打包发布相关任务的通用 `CLI` 工具

`release-it` 它做了什么？

- 变更版本号
- 提交变更
- 创建 `git tag`
- 推送分支与 `tag`
- 创建 `GitHub Release`
- 发布到 `npm`


## 快速开始

将 `release-it` 添加到项目中，可通过：

- 自动安装

```shell
pnpm dlx release-it init
```

- 手动安装

```shell
pnpm add release-it -D
```

```txt
{
  "name": "my-package",
  "version": "1.0.0",
  "scripts": {
    "release": "release-it" // [!code ++:1]
  },
  "devDependencies": {
    "release-it": "^15.10.0" // [!code ++:1]
  }
}
```

## 增加配置

在项目根目录中使用 `.release-it.json` 文件，或在 `package.json` 中使用 `release-it` 属性。

```json lines .release-it.json
{
  "git": {
    "commitMessage": "chore: release v${version}"
  },
  "github": {
    "release": true
  }
}
```

## 交互与CI

默认情况下，`release-it` 是交互式的，允许在执行之前确认每个任务：

![](https://github.com/release-it/release-it/blob/main/docs/assets/release-it-interactive.gif?raw=true)

通过使用 `--ci` 选项，该过程完全自动化，无需提示。配置的任务将按照上面动画中所示执行。在持续集成（`CI`）环境中，非交互模式会自动激活。

使用 `--only-version` 仅使用提示来确定版本，并自动执行其余操作。

## Git

`release-it` 可以自动执行任务以 `stage`, `commit`, `tag` 和 `push` 到远程。

## Changelog

- 自动变更日志

对于更丰富的变更日志（例如，带有标题、部分）

```json lines
{
  "git": {
    "changelog": "npx auto-changelog --stdout --commit-limit false -u --template https://raw.githubusercontent.com/release-it/release-it/main/templates/changelog-compact.hbs"
  },
  "hooks": {
    "after:bump": "npx auto-changelog -p"
  }
}
```

:::tip
hooks.after:bump 将在每个版本中更新 CHANGELOG.md 以包含在版本提交中。如果项目不保留 CHANGELOG.md 或类似的内容，则可以省略此项。
:::

- 常规变更日志

如果项目遵循约定，例如 [Angular](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)
提交指南，则 `@release-it/conventional-changelog` 插件非常有用。

```shell
pnpm add @release-it/conventional-changelog -D
```

```json lines
{
  "plugins": {
    "@release-it/conventional-changelog": {
      "preset": "angular",
      "infile": "CHANGELOG.md"
    }
  }
}
```

:::tip

- 使用此插件可以根据提交消息获取推荐的版本。

- 它可以生成常规的更改日志，并可选择在此过程中更新 `CHANGELOG.md` 文件。

:::

- 保留变更日志

如果项目遵循 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/) 约定，则 `@release-it/keep-a-changelog`插件很有用。它根据
**使用人类可读项目**和 **`Unreleased` 部分**的约定更新 `CHANGELOG.md` 文件。

```shell
pnpm add @release-it/keep-a-changelog -D
```

```json lines
{
  "plugins": {
    "@release-it/keep-a-changelog": {
      "filename": "CHANGELOG.md"
    }
  }
}
```

## 预发布

使用 `release-it`，可以轻松创建预发布版本：想要提供的软件版本，但它尚未处于稳定的 semver 范围内。通常，`alpha`、`beta` 和 `rc`
（候选版本）用作预发布的标识符。

一个例子。目前版本 `awesome-pkg` 为 `1.3.0`，新的主要更新工作已完成。发布新主要版本的最新测试版：

```shell
release-it major --preRelease=beta
```

这将标记并发布版本 `2.0.0-beta.0`：

- 正常 `npm` 安装的 `awesome-pkg` 仍为 `1.3.0` 版本。

- `npm` 标签将是 `beta`，使用以下命令安装它：`npm install awesome-pkg@beta`

- `GitHub` 版本将被标记为 `Pre-release`。

上面命令是以下命令的简写：

```shell
release-it premajor --preReleaseId=beta --npm.tag=beta --github.preRelease
```

1. 连续测试版（2.0.0-beta.1）

```shell
release-it --preRelease
```

2. 发布下一阶段时（2.0.0-rc.0）

```shell
release-it --preRelease=rc
```

3. 最终版本（2.0.0）

```shell
release-it major
```

![](https://github.com/release-it/release-it/blob/main/docs/assets/release-it-prerelease.gif?raw=true)

:::tip
当自最新主要标记以来的所有提交都应添加到更改日志中时，请使用 `--git.tagExclude`：

```shell
release-it major --git.tagExclude='*[-]*'
```

这将找到最新的 `major matching tag`，不包括 `pre-release tags`，这些标记通常在其名称中包含 `-` 。
:::

让我们回到最新版本是 `2.0.0-rc.0` 的时候。我们添加了新功能，这些功能在 `v2` 版本中还不需要，而是在以后的 `v2.1`
版本中。可以为 `2.1.0-alpha.0` 之后的次要版本创建新的预发布 `ID`：

```shell
release-it preminor --preRelease=alpha
```

:::info 笔记：

- `pre-releases` 与 **推荐版本** 同时进行。

- 您仍然可以覆盖各个选项，例如 `release-it --preRelease=rc --npm.tag=next`。

:::

## npm

如果当前目录中有 `package.json` 时，`release-it` 将允许 `npm` 在 `package.json` （以及 `package-lock.json`
（如果存在））中提升版本，并发布到 `npm` 仓库。

- 如果只应跳过发布步骤，使用 `npm.publish：false`。

```json lines
{
  "npm": {
    "publish": false
  }
}
```

- 如果应该忽略 `package.json`，不提升版本并且不将任何内容发布到 `npm`，使用 `--no-npm` 或 `"npm"：false`。

```json lines
{
  "npm": false
}
```

- 要忽略 `package.json` 中的版本（并改用最新的 `Git tag`），使用 `--npm.ignoreVersion` 或 `npm.ignoreVersion：true`

```json lines
{
  "npm": {
    "ignoreVersion": true
  }
}
```

## Hooks

使用 `script hooks` 在发布过程中的任何时刻运行 `shell` 命令（例如 `before:init` 或 `after:release`）。

格式为 `[prefix]:[hook]` 或 `[prefix]:[plugin]:[hook]`:

| part   | value                                       |
|--------|---------------------------------------------|
| prefix | `before` or `after`                         |
| plugin | `version`, `git`, `npm`, `github`, `gitlab` |
| hook   | `init`, `bump`, `release`                   |

```json
{
  "hooks": {
    "before:init": [
      "npm run lint",
      "npm test"
    ],
    "after:my-plugin:bump": "./bin/my-script.sh",
    "after:bump": "npm run build",
    "after:git:release": "echo After git push, before github release",
    "after:release": "echo Successfully released ${name} v${version} to ${repo.repository}."
  }
}
```

- 插件执行顺序：`init` 方法先执行配置的插件（如果存在），然后执行核心插件：`npm` → `git` → `github` → `gitlab` → `version`

- 公开变量：在除了 `init` 之外的其他 `Hooks` 中均可用

```
version
latestVersion
changelog
name
repo.remote, repo.protocol, repo.host, repo.owner, repo.repository, repo.project
branchName
```

## GitHub

### 自动化添加releases

要自动化发布（使用 `GitHub REST API`），需要配置以下内容：

- 配置 `github.release: true`

- 获得个人访问令牌（`release-it` 只需要 `repo` 访问权限; 不需要 `admin` 或其他访问权限）.

- 确保令牌是可用的环境变量

### 手动添加releases

这种模式下 `release-it` 将打开指向 `GitHub web` 界面的默认浏览器，并预先填充字段，在发布发布之前，可以修改数据并上传资产。


- 配置 `github.release: true`

- 当未设置 `GITHUB_TOKEN` 环境变量时，此模式会自动启用。

- 显式设置 `github.web: true` 以覆盖此 `GITHUB_TOKEN` 检查。

- 使用 `github.autoGenerate: true` 让 `github` 生成发行说明。


### action

```yaml
jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout the repository
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
      
      - name: Git config
        run: |
          git config user.name "${GITHUB_ACTOR}"
          git config user.email "${GITHUB_ACTOR}@users.noreply.github.com"
      
      - name: Use pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - name: Use node
        uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: pnpm
      
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      
      - name: Release
        run: pnpm release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
