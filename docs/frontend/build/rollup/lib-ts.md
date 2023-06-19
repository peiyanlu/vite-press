---
title: 构建TS库
description: 使用rollup构建一个ts库
category: rollup
tags:
  - rollup
  - lib
  - ts
---


# {{ $frontmatter.title }}


## 快速开始

```shell
mkdir "dirname" && cd "dirname"

pnpm init

pnpm add rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-json -D

pnpm add typescript rollup-plugin-esbuild rollup-plugin-dts -D

tsc --init
```

:::tip
`rollup-plugin-esbuild`: 可以替代 `rollup-plugin-typescript2`、`@rollup/plugin-typescript`、`rollup-plugin-terser`
:::

生成声明文件的方法：

- `tsc --emitDeclarationOnly`：不会捆绑 `.d.ts`

- `rollup-plugin-dts`：捆绑 `.d.ts`

::: warning

使用 `插件` 配合 `tsconfig.json` 生成声明文件时，声明文件输出位置要在 `rollup` 输出文件夹内

:::

## 配置tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": [
      "ESNext",
      "DOM"
    ],
    "moduleResolution": "Node",
    "strict": true,
    "sourceMap": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "noEmit": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "skipLibCheck": true
  },
  "include": [
    "src",
    "rollup.config.ts"
  ]
}
```


## 配置rollup

```javascript
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { builtinModules, createRequire } from 'module'
import { resolve } from 'path'
import { defineConfig, type RollupOptions } from 'rollup'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import { fileURLToPath } from 'url'


const ROOT = fileURLToPath(import.meta.url)
const r = (p: string) => resolve(ROOT, '..', p)


const req = createRequire(import.meta.url)
const pkg = req('./package.json')


const createReg = (deps: string[]) => new RegExp(`^(?:${ deps.join('|') })(?:/.+)?$`)
const externalDeps = (deps: string[]) => createReg(deps.flatMap(dep => Object.keys(pkg[dep])))
const external = [
  externalDeps([ 'dependencies' ]),
  createReg(builtinModules.flatMap(m => m.includes('punycode') ? [] : [ m, `node:${ m }` ])),
]


const plugins = [
  commonjs(),
  nodeResolve({ preferBuiltins: false }),
  esbuild(),
  json(),
]

const esmBuild: RollupOptions = {
  input: [ r('src/index.ts') ],
  output: {
    format: 'esm',
    dir: r('lib'),
    entryFileNames: `[name].js`,
    chunkFileNames: 'chunk-[hash].js',
  },
  external,
  plugins,
  onwarn(warning, warn) {
    if (warning.code !== 'EVAL') warn(warning)
  },
}

const cjsBuild: RollupOptions = {
  input: [ r('src/index.ts') ],
  output: {
    format: 'cjs',
    dir: r('lib'),
    entryFileNames: `[name].cjs`,
    chunkFileNames: 'chunk-[hash].cjs',
    // manualChunks:(id, { getModuleIds, getModuleInfo})=>{
    //   console.log(id, getModuleIds(), getModuleInfo(id))
    // }
  },
  external,
  plugins,
  onwarn(warning, warn) {
    if (warning.code !== 'EVAL') warn(warning)
  },
}

const nodeTypes: RollupOptions = {
  input: r('src/index.ts'),
  output: {
    format: 'esm',
    file: 'lib/index.d.ts',
  },
  external,
  plugins: [ dts() ],
}

const config = defineConfig([])

config.push(esmBuild)

config.push(cjsBuild)

config.push(nodeTypes)

export default config

process.on('exit', () => {
  console.log(`\nbuild:lib complete: ${ pkg.name }`)
})
```


## 配置package.json

```json
{
  "scripts": {
    "clean": "npx rimraf node_modules pnpm-lock.yaml",
    "build": "rollup --config rollup.config.ts --configPlugin esbuild",
    "dev": "pnpm build:lib --watch",
    "preinstall": "npx only-allow pnpm"
  }
}
```

## 初始化Eslint

```shell
pnpm add eslint -D

eslint --init
```

```javascript
module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint"
  ],
  "rules": {
    // 规则
  }
}
```

## Prettier(可选)

```shell
pnpm add prettier -D
```

```json lines
{
  "printWidth": 100,
  //单行长度
  "tabWidth": 2,
  //缩进长度
  "useTabs": false,
  //使用空格代替tab缩进
  "semi": true,
  //句末使用分号
  "singleQuote": true,
  //使用单引号
  "bracketSpacing": true,
  //在对象前后添加空格-eg: { foo: bar }
  "arrowParens": "avoid"
  //单参数箭头函数参数周围使用圆括号-eg: (x) => x
}
```

[Prettier配置参考](https://prettier.io/docs/en/options.html)


## Git提交约束 (可选)


> 引入 Husky 作为 Git commit 提交前做一个自动格式化暂存区内的文件，以及校验是否符合 Eslint 规则，引入 commitlint 工具，用于校验提交的 message 格式是否符合规范

```shell
pnpm add husky@3.1.0 -D
pnpm add lint-staged -D
pnpm add @commitlint/cli @commitlint/config-conventional -D
```

```json lines
{
  // other
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "commitlint": {
    "extends": [
      "@commitlint/config-conventional"
    ]
  },
  "lint-staged": {
    "*.{ts,js}": [
      "node --max_old_space_size=8192 ./node_modules/.bin/prettier -w",
      "node --max_old_space_size=8192 ./node_modules/.bin/eslint --fix --color",
      "git add"
    ]
  },
}
```

> git commit 时，会首先调用 lint-staged 字段中命令，首先是 prettier 格式化，然后是 ESlint 校验并修复，然后将修改后的文件存入暂存区。 然后是校验 commit message 是否符合规范，符合规范后才会成功
> commit。


## publish约束

```json lines
{
  "scripts": {
    "prepublishOnly": "pnpm version && pnpm build"
  },
}
```

## 提交代码

```shell
git add -A
git commit -m "feat: init"
git remote add origin "https://xxxx.com/xx/xx.git"
git push -u origin master
```
