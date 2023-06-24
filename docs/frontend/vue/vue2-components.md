---
title: vue2打包组件库
description: 使用vue2打包公共组件
category: vue
tags:
  - vue
  - vue2
  - components
ignore: false
---


# {{ $frontmatter.title }}


## 快速开始


通过命令 `vue create my-components` 快速创建一个项目模板


- 将原有的 `src` 目录改为 `examples`，用于存放示例代码，改的目的是为了命名上更好的区分功能模块

- 在根目录下新建一个 `packages` 目录，用于存放组件库代码

- 接着修改 `vue.config.js` 文件（根目录下，没有则创建一个）

```js
module.exports = {
  // 修改src目录为examples目录
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  }, // 扩展webpack配置，使packages加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => options)
  },
}
```

## 导出组件

```
packages
├───Button
│   ├───src
│   │    └───index.vue
│   └───index.js
└───index.js
```

- 单个组件

```js [index.js]
import Button from './src/index'


Button.install = Vue => {
  Vue.component(Button.name, Button)
}

export default Button
```

- 所有组件

```js
import Button from './Button'
import { clickoutside } from './directives'


const components = [
  Button,
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = (Vue, options = {}) => {
  window.popupEvt = new Vue()
  // 判断是否安装
  if (install.installed) return
  // 遍历注册组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
  
  // 注册指令
  Vue.directive('clickoutside', clickoutside)
}

// 判断直接引入
if (window?.Vue) {
  install(window.Vue)
}

const MyComponents = {
  version: '0.0.1',
  // 导出对象必须拥有install方法才能被安装
  install,
  // 具体的组件
  ...components
}

export default MyComponents
```

- 业务组件

将一个完整的功能页面作为组件，可能需要用到 `Vuex`、`request`、组件等

```js
import MyComponents from './packages'
import Tools from './components'
import storeModule from './store'

import FullFeatureComponents from './view'


const install = (Vue, options = {}) => {
  if (install.installed) return
  
  const { store, request } = options
  
  Vue.use(MyComponents)
  Vue.use(Tools)
  
  // 注入 Vuex
  store.registerModule(storeModule.name, storeModule)
  
  // 注入 axios
  Vue.prototype.$axios = request
  
  // 注册业务组件
  Vue.component(FullFeatureComponents.name, FullFeatureComponents)
}

if (window?.Vue) {
  install(window.Vue)
}

export default {
  version: 1.0,
  install,
  FullFeatureComponents
}
```

## 打包组件

```json lines
{
  "main": "lib/your-lib-name.umd.min.js",
  "scripts": {
    "build:lib": "vue-cli-service build --target lib --name your-lib-name --dest lib packages/index.js"
  }
}
```

## 按需引入


`ES6` 开始 `JavaScript` 就有了 `ES Module`，原生的模块系统采用的是静态编译，得益于静态编译可以做到在编译阶段就可以确定哪些模块是真正被使用，哪些模块是绝对不会用到的，也就是可以做 `tree shaking`。
在 `vue-cli` 中打包成的 `target` 只支持 `umd/commonjs`，而不支持 `ES Module` 的形式，咋整呢？如果让业务系统直接引用到库中的单个组件，交由业务系统本身去编译，这事其实就算完成了。

编写转换脚本，使用 `babel` 转换一次，导出成 `ES Module`

```js
/* 文件所在路径 build/build-component.js */
/* 编译组件 */
const fs = require('fs-extra');
const babel = require('@babel/core');
const path = require('path');

const esDir = path.join(__dirname, '../es');
const srcDir = path.join(__dirname, '../packages');
const babelConfig = {
  configFile: path.join(__dirname, '../babel.config.js')
};

const scriptRegExp = /\.(js|ts|tsx)$/;
const isScript = path => scriptRegExp.test(path);

/**
 * 是否是文件目录
 * @param {string} dir
 */
const isDir = dir => fs.lstatSync(dir).isDirectory();

/**
 * 编译指定目录
 * @param {string} dir
 */
function compile(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    
    // scan dir
    if (isDir(filePath)) {
      return compile(filePath);
    }
    
    // compile js or ts
    if (isScript(file)) {
      const { code } = babel.transformFileSync(filePath, babelConfig);
      fs.removeSync(filePath);
      fs.outputFileSync(filePath.replace(scriptRegExp, '.js'), code);
    }
  });
}

// 清除目录
fs.emptyDirSync(esDir);
// 编译目录
fs.copySync(srcDir, esDir)
compile(esDir);
```

在 `package.json` 新增命令

```json lines
{
  "scripts": {
    "build:es": "node build/build-component.js"
  }
}
```

按需引入针对的是业务系统，当前有两个流行的方案，分别是：

- babel-plugin-import

- babel-plugin-component

两种方案的本质，都是缩短了业务系统引入库文件时的路径，以 `babel-plugin-import` 为例，使用的对比如下：

```js
/* 不使用babel-plugin-import */
import SomeComp from 'YourComp/es/some-comp/index.js'

/* 使用babel-plugin-import */
import { SomeComp } from 'YourComp'
```

要达到下面那种导入形式需要在业务系统中的 `babel.config.js` 进行如下配置：

```js
module.exports = {
  ...,
  plugins: [
    [
      'import',
      {
        libraryName: 'your-lib-name',
        libraryDirectory: 'es',
      },
      'your-lib-name',
    ],
  ],
}
```
