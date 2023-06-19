---
title: 快速开始
description: 从零搭建monorepo
category: monorepo
tags:
  - monorepo
  - pnpm
order: 0
---


# {{ $frontmatter.title }}


`monorepo`：单个代码库中许多不同应用和包的集合。

`polyrepo`：分别发布和版本控制的多个代码库。

---

- 在 `polyrepo` 设置中，在应用程序之间共享代码的过程相对较长。假设有三个单独的存储库：`app`、`docs` 和 `shared-utils`。`app` 和 `docs` 都依赖于 `shared-utils`，`shared-utils` 作为包发布在 `npm` 上。
  假设 `shared-utils` 中的错误导致 `app` 和 `docs` 中出现严重问题。您需要：
    
    - 在 `shared-utils` 中提交修复错误
    
    - 在共享实用程序中运行发布任务以将其发布到 `npm`
    
    - 在 `app` 中提交，升级 `shared-utils` 依赖项的版本
    
    - 在 `docs` 中提交，升级 `shared-utils` 依赖项的版本
    
    - `app` 和 `docs` 现已准备就绪，可以部署。


- 在 `monorepo` 设置中，`shared-utils` 将与 `app` 和 `docs` 位于同一代码库中。这使得过程非常简单：
    
    - 在 `shared-utils` 中提交修复错误
    
    - `app` 和 `docs` 现已准备就绪，可以部署。


## 初始化项目

```shell
# 创建一个新目录并进入
mkdir monorepo && cd monorepo

# 初始化
pnpm init
```

## 创建 workspace


在项目根目录中新建 `pnpm-workspace.yaml`，并指定子包，例如：

```yaml
packages:
  # 子目录 packages/ 中的所有包
  - 'packages/*'
  # 排除 test 目录的包
  - '!**/test/**'
```

## 构建 package 产物


项目根目录下执行 `pnpm run build` 来对每个子包进行构建：

```json
{
  "scripts": {
    "build": "pnpm -r run build"
  }
}

```

- 加入 `-r` 是指定为 `workspace` 中的子包执行 `build` 命令。

- 默认情况下，`pnpm` 会根据子包的依赖拓扑排序，按顺序对子包执行命令，以避免在构建某个包的时候，出现子依赖的构建产物未生成的问题，进而引发比如类型错误等问题。另外如果两个子包没有依赖关系，`pnpm` 会并发进行构建。


## 监听 package 变更


在项目根目录下执行 `pnpm run watch`，以对每个子包执行 `watch` 命令监听文件的变更以生成最新的构建产物：

```json
{
  "scripts": {
    "watch": "pnpm --parallel -r run watch"
  }
}
```

- 加入 `-r` 是指定为 `workspace` 中的子包执行 `watch` 命令。

- `watch` 命令是会长时间运行监听文件变更，进程不会自动退出（除了报错或者手动退出），因此需要加上 `--parallel` 告诉 `pnpm` 运行该脚本时完全忽略并发和拓扑排序。
