---
title: turborepo
description: 如何使用turbo管理monorepo
category: build
tags:
  - build
  - turborepo
  - monorepo
---


# {{ $frontmatter.title }}


:::info
执行 `pnpm dlx create-turbo@latest` 可以快速的获取 `turbo` 的项目模板，通过参数 `-e` 可指定模板

```shell
npx create-turbo -e with-changesets

npx create-turbo -e non-monorepo

npx create-turbo -e with-rollup

npx create-turbo -e with-vite
```

:::


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


## 安装 turbo

```shell
pnpm add turbo --global
```

## 创建配置文件


创建 `turbo.json`，通过 `pipeline` 配置 `monorepo` 的任务依赖图。

:::warning
没有在其 `package.json` 脚本列表（`scripts`）中定义指定脚本的工作区将被 `turbo` 忽略。
:::

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

在根目录 `package.json` 中

```json
{
  "scripts": {
    "build": "turbo build",
    "dev": "turbo dev --no-cache --continue",
    "lint": "turbo lint",
    "clean": "turbo clean && rm -rf node_modules"
  }
}
```

* 使用 `turbo` 运行的命令都需要配置在 `turbo.json` 中，例如 `pnpm dev` 执行的是根目录的 `dev` 命令，它对应的是 `turbo.json` 中已经配置的 `dev` 指令，执行的是各子目录的 `dev` 指令；

* 如果希望仅执行某个子目录的任务，需要使用命令行参数 `--filter` (or `-F`)：`pnpm --filter <package_selector> <command>`；


## 忽略日志文件


在 `.gitignore` 中新增

```md 
.turbo
dist/**
lib/**
```


## 添加工作区


使用命令行（实验性）：

```shell
turbo gen workspace
```

手动创建：

- 在 `packages/<folder>` 中创建新文件夹

- 添加一个 `package.json`, 并且 `name` 和 `types` 指向 `src/index.ts`

- 添加 `src/index.ts`，至少有一个命名导出

- 从根目录安装软件包


## 开发任务


`dev` 任务有多种形式和大小：

- 为 `Web` 应用程序运行本地开发服务器

- 运行 `nodemon` 在每次代码更改时重新运行后端进程

- `--watch` 模式下运行的脚本

```json
{
  "pipeline": {
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

1. 由于 `dev` 任务一般不产生输出，`outputs` 因此是空的。

2. 因为很少想缓存它们，所以设置 `cache` 为 `false`。

3. 设置 `persistent` 为 `true`，因为 `dev` 任务是长时间运行的任务，我们希望确保它不会阻止任何其他任务的执行。

:::warning
`persistent` 为 `true` 的任务不能被其他任务依赖
:::


## 配置


### globalDependencies


全局哈希依赖项的文件 `glob` 列表。这些文件的内容将包含在全局哈希算法中，并影响所有任务的哈希值。
这对于基于 `.env` 文件（不在 `Git` 中）或任何影响工作区任务的根级文件（但在传统依赖关系图中未表示（例如根目录 `tsconfig.json`、`jest.config.js`、 `.eslintrc` 等））有用。


### globalEnv


隐式全局哈希依赖项的环境变量列表。这些环境变量的内容将包含在全局哈希算法中，并影响所有任务的哈希。


### globalPassThroughEnv


环境变量的允许列表，这些变量应可用于所有任务，但不应对任务的缓存键做出贡献。使用此键将所有任务选择为严格环境变量模式。更改此列表将计入全局缓存键，但每个变量的值则不会。


### globalDotEnv


要包含在全局哈希键的文件哈希中的 `.env `文件的有序列表。


### pipeline


表示项目任务依赖关系图的对象。 `Turbo` 解释这些约定以正确安排、执行和缓存项目中任务的输出。

- `pipeline` 中的每个键都是 `turbo run` 可以执行的任务的名称。

- 如果 `Turbo` 找到一个工作区，并且 `package.json` 的 `scripts` 中包含有匹配的键，它将在执行期间将管道任务配置应用于该 `npm` 脚本。

- 允许使用 `pipeline` 在整个 `Turborepo` 中设置约定。


#### dependsOn


此任务所依赖的任务列表。

- 在 `dependsOn` 中以 `^` 为项添加前缀告诉 `turbo`，此管道任务取决于工作区的拓扑依赖项，首先完成使用 `^` 前缀任务（例如，工作区的 `build` 任务应仅在其所有 `dependencies` 和 `devDependencies` 完成自己的 `build` 命令后运行）。

- `dependsOn` 中的项目不带 `^` 前缀，表示工作区级别任务之间的关系（例如，工作区的 `test` 和 `lint` 命令取决于首先完成的 `build` 任务）。


#### dotEnv/globalDotEnv


框架通常使用 `dotenv` 来自动加载任务的环境变量。默认情况下，这会使 `Turborepo` 很难理解您的任务环境，`Turborepo` 使用 `turbo.json` 中的 `globalDotEnv` 和 `dotEnv` 字段明确支持 `.env` 文件模式。

:::warning
`Turborepo` 不会将 `.env` 文件加载到环境中！必须自行处理 `.env` 文件的加载。
:::

```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDotEnv": [
    ".env"
  ],
  "pipeline": {
    "build": {
      "dotEnv": [
        ".env.production.local",
        ".env.local",
        ".env.production",
        ".env"
      ]
    },
    "dev": {
      "dotEnv": [
        ".env.development.local",
        ".env.local",
        ".env.development",
        ".env"
      ]
    },
    "test": {
      "dotEnv": [
        ".env.test.local",
        ".env.test",
        ".env"
      ]
    }
  }
}
```


#### env/globalEnv


`Turborepo` 提供了表达应用程序所依赖的环境变量的工具。帮助 `developers` 和 `CI` 在不同的机器使用相同的环境


```json
{
  "$schema": "https://turbo.build/schema.json",
  "globalEnv": [
    "API_BASE_URL"
  ],
  "pipeline": {
    "test": {
      "env": [
        "MOCHA_REPORTER"
      ]
    },
    "build": {
      "env": [
        "NEXT_PUBLIC_*",
        "!NEXT_PUBLIC_GIT_*"
      ]
    }
  }
}
```


#### passThroughEnv


环境变量的允许列表，这些变量应可用于此任务，但不应对任务的缓存键做出贡献。使用此键将此任务选择为严格环境变量模式。


```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "passThroughEnv": [
        "AWS_SECRET_KEY",
        "GITHUB_TOKEN"
      ]
    },
    "lint": {}
  }
}
```


#### outputs


任务的可缓存文件系统输出的 `glob` 模式集。省略此键或传递空数组可用于告诉 `turbo` 任务是副作用，因此不会发出任何文件系统工件（例如，像 `linter`），但您仍然希望缓存其日志（并将它们视为工件）。


#### cache


是否缓存任务输出。默认为 `true`，将缓存设置为 `false` 对于您不想缓存的守护进程或长时间运行的 `watch` 或 `development` 模式任务很有用。


#### inputs


默认为 `[]`。告诉 `turbo` 在确定工作空间是否已针对特定任务更改时要考虑的文件集。将此设置为 `glob` 列表将导致仅当与这些 `glob` 匹配的文件发生更改时才重新运行任务。如果您想要跳过运行测试，除非源文件发生更改，这可能会很有帮助。


#### outputMode


设置输出日志类型："full" | "hash-only" | "new-only" | "errors-only" | "none"


#### persistent


将任务标记为持久任务。`Turbo` 会阻止其他任务依赖于持久化任务。如果不设置此配置，如果任何其他任务依赖于 `dev`，它将永远不会运行，因为 `dev` 永远不会退出。
