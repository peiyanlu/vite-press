---
title: 快速开始
description: rollup
category: rollup
tags:
  - rollup
  - doc
order: 0
ignore: false
---


# {{ $frontmatter.title }}


## format


- `amd`：异步模块加载，适用于 `RequireJS` 等模块加载器

- `cjs`：`CommonJS`，适用于 `Node` 环境和其他打包工具（别名：`commonjs`）

- `es`：将 `bundle` 保留为 `ES` 模块文件，适用于其他打包工具，以及支持 `<script type=module>` 标签的浏览器。（别名：`esm`，`module`）

- `iife`：自执行函数，适用于 `<script>` 标签（如果你想为你的应用程序创建 `bundle`，那么你可能会使用它）。`iife` 表示 “自执行 函数表达式”

- `umd`：通用模块定义规范，同时支持 `amd`，`cjs` 和 `iife`

- `system`：`SystemJS` 模块加载器的原生格式（别名：`systemjs`）


## 常用插件


| 插件                             | 用途                                                 |
|--------------------------------|----------------------------------------------------|
| @rollup/plugin-node-resolve    | rollup 无法识别 node_modules 中的包，帮助 rollup 查找外部模块，然后导入 |
| @rollup/plugin-commonjs        | 将 CommonJS 模块转换为 ES6 供 rollup 处理                   |
| @rollup/plugin-babel           | ES6 转 ES5，让我们可以使用 ES6 新特性来编写代码                     |
| @rollup/plugin-eslint          | js代码检测                                             |
| @rollup/plugin-require-context | 使用 require.context 语法                              |
| @rollup/plugin-alias           | 设置别名，比如将 src 目录设置别名为 @                             |
| @rollup/plugin-terser          | 压缩 js 代码，包括 ES6 代码压缩                               |
| rollup-plugin-cleanup          | 去除注释等无效代码                                          |


## 参考文档


[rollup官方文档](hhttps://rollupjs.org/guide/zh/#introduction)

[rollup官方插件](https://github.com/rollup/plugins/tree/master/packages)

[babel官方文档](https://www.babeljs.cn/docs/usage)

[Rollup 配置（Babel7）](https://xiaogliu.github.io/2019/07/24/rollup-config/)
