---
title: 构建ICON库
description: 使用webpack打包svg图标
category: webpack
tags:
  - Webpack
  - svg
  - icon
---


# {{ $frontmatter.title }}


## 快速开始


> 创建文件夹，初始化项目

```shell
mkdir "dirname" && cd "dirname"

pnpm init

pnpm add webpack webpack-cli -D
```

## 处理svg


安装 `svg` 加载器；通过 `js` 批量引入 `.svg`

```shell
pnpm add svg-sprite-loader -D
```

```javascript
// src/index.js

/**
 * @directory：检索目录
 * @useSubdirectories：是否检索子目录
 * regExp：匹配文件的正则
 */
const req = require.context('../src', true, /\.svg$/)

req.keys().forEach(req)
```

## 配置webpack


```javascript
// webpack.config.js

const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  mode: 'production',
  context: resolve('./src'),
  entry: {
    index: './index.js'
  },
  output: {
    path: resolve('./lib'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        include: resolve('./src'),
        use: {
          loader: 'svg-sprite-loader',
          options: {
            symbolId: 'icon-[name]'
          }
        }
      }
    ]
  }
}
```

## 选用webpack-chain


使用 `webpack-chain` 链式操作配置 `webpackConfig`

```shell
pnpm add webpack-chain -D
```

```javascript
// webpack.config.chain.js

const WebpackConfigChain = require('webpack-config-chain')
const path = require('path')

const config = new WebpackConfigChain()

const resolve = (dir) => path.resolve(__dirname, dir)

config
  .mode('production')
  .context(resolve('./src'))
  // Interact with entry points
  .entry('index')
  .add('./index.js')
  .end()
  // Modify output settings
  .output
  .path(resolve('./lib'))
  .filename('[name].js')
  // .library('YLICON')
  // .libraryTarget('umd')
  // .umdNamedDefine(true)
  // .globalObject('this')
  .end()

config.module
  .rule('svg-icons')
  .test(/\.svg$/)
  .include
  .add(resolve('./src'))
  .end()
  .use('svg-loader')
  .loader('svg-sprite-loader')
  .options({
    symbolId: 'icon-[name]'
  })
  .end()

module.exports = config.toConfig();
```

## 参考文档


[webpack（中文文档）](https://webpack.docschina.org/concepts/)

[webpack-chain（中文文档）](https://github.com/Yatoo2018/webpack-chain/tree/zh-cmn-Hans)
