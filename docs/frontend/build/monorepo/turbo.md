---
title: turbo构建单仓库应用
description: 如何使用turbo管理monorepo
category: build
tags:
  - build
  - turbo
  - monorepo
---


# {{ $frontmatter.title }}


## 初始化项目

```shell
# 创建一个新目录并进入
mkdir turbo-monorepo && cd turbo-monorepo

# 初始化
pnpm init
```

## 创建工作空间


创建 `pnpm-workspace.yaml` 文件，配置 `workspace` 目录

```yaml
packages:
  # 子目录 packages/ 中的所有包
  - 'packages/*'
  # 排除 test 目录的包
  - '!**/test/**'
```

## 安装turbo

```shell
pnpm add turbo --global
```

## 创建turbo.json


通过配置 `pipeline` 定义 `monorepo` 的任务依赖图

```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": [
        "^build"
      ],
      "outputs": [
        "dist/**"
      ]
    },
    "deploy": {
      "dependsOn": [
        "build",
        "test",
        "lint"
      ]
    },
    "test": {
      "dependsOn": [
        "build"
      ],
      "inputs": [
        "test/**/*.ts",
        "test/**/*.tsx"
      ]
    },
    "lint": {},
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

* 命令先配置后使用，类似 `pnpm dev` 执行的是根目录的 `dev` 命令，它对应的是 `turbo.json` 中 已经配置的 `dev` 指令，执行的是各子目录的 `dev` 指令；

* 如果希望执行某个子目录的任务，需要使用命令行参数 `--filter` (or `-F`)：`pnpm --filter <package_selector> <command>`；

## 忽略turbo日志文件


.gitignore

```md 
.turbo
```
