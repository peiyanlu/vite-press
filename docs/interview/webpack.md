---
title: webpack 基础知识
tags:
  - interview
  - webpack
---


# {{ $frontmatter.title }}


# Webpack 面试题总结


## 🌟 Webpack 基础概念


### 什么是 Webpack？


Webpack 是一个现代 JavaScript 应用程序的静态模块打包工具。它会递归构建依赖关系图，并将所有模块打包成一个或多个 bundle 文件。


### Webpack 的核心概念

- **Entry（入口）**：Webpack 构建的起点，指定从哪个文件开始打包。
- **Output（输出）**：打包后的文件输出位置和文件名。
- **Loader**：用于转换模块的转换器，例如处理 JS、CSS、图片等非 JS 文件。
- **Plugin**：扩展 Webpack 功能，在构建流程的不同阶段执行操作。
- **Module**：Webpack 处理的单个文件或资源。
- **Chunk**：Webpack 打包生成的代码块，用于按需加载。
- **Bundle**：最终输出的文件。

---


## ⚡ 常见 Webpack 面试题


### 1️⃣ Webpack 与其他打包工具（如 Parcel、Vite）区别

| 工具 | 特点 |
|-------|-------|
| Webpack | 功能强大、可高度定制、生态成熟，适合复杂工程 |
| Parcel | 零配置上手快，适合中小项目 |
| Vite | 基于 ES Module 和原生浏览器支持，开发体验好，冷启动快 |

---


### 2️⃣ Loader 和 Plugin 区别

| Loader | Plugin |
|--------|--------|
| 本质是函数，处理模块内容 | 插件是类，在构建生命周期钩子上扩展功能 |
| 用于转换文件类型，如 css-loader, babel-loader | 用于增强构建过程，如 HtmlWebpackPlugin, DefinePlugin |
| 写在 `module.rules` 中 | 写在 `plugins` 配置中 |

---


### 3️⃣ 常用的 Loader 和 Plugin


#### Loader

- `babel-loader`：转译 ES6+ 代码
- `css-loader`：处理 CSS 文件
- `style-loader`：将 CSS 插入 DOM
- `file-loader`：处理文件资源
- `url-loader`：小文件转 base64

#### Plugin

- `HtmlWebpackPlugin`：生成 html 文件
- `DefinePlugin`：定义全局常量
- `CleanWebpackPlugin`：清理 dist 目录
- `MiniCssExtractPlugin`：提取 CSS 文件
- `HotModuleReplacementPlugin`：热更新

---


### 4️⃣ 如何优化 Webpack 构建速度？

- 使用 `exclude` / `include` 限制 loader 处理范围
- 开启 `thread-loader` 或 `cache-loader`
- 使用 `DLLPlugin` / `DLLReferencePlugin`
- 开启 Webpack 5 持久化缓存
- 开启 HMR（热更新）
- 使用 `esbuild-loader` 或 `swc-loader` 替代 babel-loader

---


### 5️⃣ 如何优化 Webpack 打包体积？

- Tree-shaking（删除未使用代码）
- SplitChunks（代码分割，提取公用包）
- 动态导入（按需加载）
- 使用生产模式 + 压缩插件（TerserPlugin、CssMinimizerPlugin）
- 替换大库（如用 `lodash-es` + `babel-plugin-lodash`）

---


### 6️⃣ 如何实现代码分割？

- 配置 `splitChunks` 提取公共依赖
- 使用 `import()` 实现动态加载
- 多入口配置

---


### 7️⃣ Webpack 热更新（HMR）原理

- Webpack 通过 WebSocket 和浏览器通信
- 检测到文件变化后生成更新的模块
- 浏览器接收到更新消息后，替换已更新的模块，而不刷新整个页面

---


### 8️⃣ Tree-shaking 原理与生效条件

- Tree-shaking 利用 ES6 module 的静态分析特性，移除未使用的导出
- 生效条件：
    - 使用 ES6 模块语法（`import` / `export`）
    - 开启生产模式（`mode: 'production'`）
    - 配置 `sideEffects: false`（或精准配置）

---


### 9️⃣ Webpack 构建流程
