## 使用 webpack 打包 svg 图标

### 1、初始化 项目

>创建文件夹，初始化项目

```shell
mkdir "dirname"

cd "dirname"

yarn init
```

### 2、初始化 webpack

>安装 webpack、webpack-cli，创建 webpack.config.js 文件

```shell
yarn add webpack webpack-cli -D
```

### 3、处理 svg

>安装 svg 加载器；通过 js 批量引入 .svg

```shell
yarn add svg-sprite-loader -D
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

### 4、配置 webpack

> 创建 webpack.config.js 文件

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

### 5、选用 webpack-chain

>使用 webpack-chain 链式操作配置webpackConfig

```shell
yarn add webpack-chain -D
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
  // .library('CFWICON')
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