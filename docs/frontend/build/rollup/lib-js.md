---
title: 构建JS库
description: 使用rollup构建一个js库
category: rollup
tags:
  - rollup
  - js
  - lib
---


# {{ $frontmatter.title }}


## 快速开始

```shell
mkdir "dirname" && cd "dirname"

pnpm init

pnpm add rollup @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-json @rollup-plugin-terser rollup-plugin-cleanup -D
```


## 配置rollup

```javascript
import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from '@rollup-plugin-terser'
import cleanup from 'rollup-plugin-cleanup'


export default {
  input: 'source/index.js', // 入口文件
  output: {
    // file: 'bundle.js', // 输出单个文件时使用
    dir: 'lib', // 输出多个文件时使用
    format: 'es', // 输出模式
    exports: 'named', // 入口文件有多个导出时，取消警告
    preserveModules: true, // 保留模块结构
    preserveModulesRoot: 'source', // 将保留的模块放在根级别的此路径下
  },
  plugins: [
    nodeResolve(),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**' // 只编译我们的源代码
    }),
    terser(), // ES6代码压缩
    cleanup(), // 清除注释等
    commonjs()
  ],
  external: [
    /@babel\/runtime/
  ]
}

```

## 配置package.json

```json
{
  "scripts": {
    "clean": "node bin/clean.js --dir lib",
    "lib": "rollup --config build/rollup.config.js --silent"
  }
}
```

## 打包

```shell
pnpm lib
```


## 使用babel


`rollup` 打包的结果是 `ES6`，如果需要兼容低版本，则需要 `babel`

1. 配置babel预设

在 `src/.babelrc` 中配置

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "loose": true
      }
    ]
  ]
}
```

参数说明：

- `modules` 必须设置为 `false`，否则 `Babel` 默认将代码编译为 `Commonjs` 格式的模块，`Rollup` 处理时将会出错

- `loose`：是否设置使用宽松模式，宽松模式使 `Babel` 在编译代码不完全按照 `ES6` 语义进行编译，而是编译成更接近于我们手写代码的形式，这样好处除了使代码更加精简，还会避免产生副作用。

:::info
典型的是对 ES6 class 语法进行转译的区别：

- 如果不是用宽松模式，ES6 的方法通过 Object.defineProperty 进行定义，副作用导致 treeshaking 失效、class 语法报错等；

- 如果使用宽松模式，则直接在原型链上进行定义。

:::


2. 配置babelHelpers

如果在 `babel` 插件中设置使用 `runtime` 模式，如下

```js
export default {
  plugins: [
    babel({
      // 默认bundled，但需要显示设置
      babelHelpers: 'runtime', // [!code ++]
    })
  ],
}
```

```shell
pnpm add -D @babel/core @babel/preset-env @babel/plugin-transform-runtime @babel/runtime @rollup/plugin-babel
```

`rollup.config.js` 中：

```js
import babel from '@rollup/plugin-babel' // [!code ++]

export default {
  external: [
    /@babel\/runtime/ // [!code ++]
  ]
}
```


`.babelrc` 中：

```txt
{
  "plugins": [ // [!code ++]
    "@babel/plugin-transform-runtime" // [!code ++]
  ] // [!code ++]
}
```
