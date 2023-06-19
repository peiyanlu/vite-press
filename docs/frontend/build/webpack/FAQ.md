---
title: 问题记录
description: npm遇到的各种牛鬼蛇神
category: npm
tags:
  - npm
  - FAQ
order: 999
---


# {{ $frontmatter.title }}


## 关于 webpack 5 引入 node 内置模块报错


**问题**：部分依赖包中 `node` 内置模块引起报错

```txt
BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default. // [!code error:1]
This is no longer the case. Verify if you need this module and configure a polyfill for it.
```

**解决**：

1. 使用插件

```js
const { defineConfig } = require('@vue/cli-service')
const NodePolyfill = require('node-polyfill-webpack-plugin') // [!code ++]

module.exports = defineConfig({
  configureWebpack: config => {
    config.plugins?.push(new NodePolyfill()) // [!code ++]
  },
})
```

2. 按照错误提示配置

```js
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  configureWebpack: config => {
    config.resolve.fallback = { // [!code ++:6]
      // want to include a polyfill
      path: require.resolve('path-browserify'),
      // don't want to include a polyfill
      http: false
    }
  },
})
```
