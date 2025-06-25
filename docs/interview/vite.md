---
title: Vite 面试题
category: interview
tags:
  - interview
  - vite
---


# {{ $frontmatter.title }}


# Vite 面试题题库（含详细答案）


---


## 一、基础理解类


### 1. 什么是 Vite？


Vite 是一个下一代前端构建工具，基于原生 ESM，开发时无需打包，利用浏览器原生支持 ES 模块特性按需加载模块。


### 2. Vite 和 Webpack 的区别？

| 特性      | Vite               | Webpack      |
| ------- | ------------------ | ------------ |
| 构建方式    | 开发时无需打包            | 启动时整体打包      |
| 启动速度    | 快，秒级启动             | 慢，项目越大越慢     |
| HMR 热更新 | 快速、精细模块热替换         | 慢，重新构建依赖链    |
| 生产构建    | 基于 Rollup          | 自定义打包机制      |
| 插件体系    | 兼容 Rollup 插件 + 自定义 | Webpack 插件体系 |

---


## 二、配置与使用类


### 3. 如何配置路径别名（alias）？

```ts
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src')
  }
}
```

### 4. 如何使用环境变量？

* 新建 `.env` 文件，变量以 `VITE_` 开头

```env
VITE_API_URL=https://api.xxx.com
```

* 使用：

```ts
const url = import.meta.env.VITE_API_URL
```

### 5. 如何配置多页面（MPA）应用？

```ts
build: {
  rollupOptions: {
    input: {
      main: 'index.html',
      admin: 'admin.html'
    }
  }
}
```

### 6. 如何使用插件？

```ts
import vue from '@vitejs/plugin-vue'
plugins: [vue()]
```

Vite 插件与 Rollup 插件兼容，支持开发专属钩子，如 `configureServer`、`transformIndexHtml`。

---


## 三、原理与架构类


### 7. Vite 为什么启动快？

* 利用原生 ESM 按需加载模块，不做整体打包
* 使用 `esbuild` 快速转译 TS/JS，速度远超 Babel

### 8. HMR 是如何实现的？

* 利用 WebSocket 与浏览器通信
* 文件改动后，增量推送变更模块
* 通过 `import.meta.hot` 接口接受更新

### 9. Vite 的预构建（pre-bundling）机制？

* 对 `node_modules` 中非 ESM 包预打包为 ESM
* 依赖 `esbuild` 转译，提升加载性能
* 可配置 `optimizeDeps.include/exclude`

### 10. Vite 的 SSR 原理？

* 使用 `vite.ssrLoadModule()` 加载模块
* 在 Node 环境中执行并渲染 HTML 字符串
* 配合框架实现 SSR，如 React/Vue 等

---


## 四、性能优化类


### 11. 如何优化构建速度？

* 减少全局导入（如全局样式）
* 精简依赖数量
* 配置缓存策略和分包策略
* 使用 `optimizeDeps` 提前构建三方依赖

### 12. 如何分析构建产物？

```bash
npm i -D rollup-plugin-visualizer
```

```ts
import { visualizer } from 'rollup-plugin-visualizer'
plugins: [visualizer({ open: true })]
```

### 13. 如何支持老旧浏览器？

```ts
import legacy from '@vitejs/plugin-legacy'
plugins: [legacy({ targets: ['defaults', 'not IE 11'] })]
```

---


## 五、实战技巧类


### 14. 如何配置静态资源路径？

```ts
base: '/your-sub-path/'
```

设置部署路径前缀，适用于 GitHub Pages 等场景。


### 15. 如何集成 PWA？


使用插件：`vite-plugin-pwa`

```ts
import { VitePWA } from 'vite-plugin-pwa'
plugins: [VitePWA({...})]
```

### 16. 如何自定义开发服务器行为？

```ts
configureServer(server) {
  server.middlewares.use((req, res, next) => {
    // 自定义逻辑
    next()
  })
}
```

---


## 六、加分项


### 17. 如何开发一个 Vite 插件？

```ts
export default function myPlugin() {
  return {
    name: 'my-plugin',
    transform(code, id) {
      if (id.endsWith('.js')) {
        // 转换逻辑
        return code.replace('old', 'new')
      }
    }
  }
}
```

### 18. Vite 是否可以用于构建库？


可以，通过 `build.lib` 选项支持打包为库模式：

```ts
build: {
  lib: {
    entry: 'src/index.ts',
    name: 'MyLib',
    fileName: 'my-lib'
  }
}
```

---

如需生成 PDF，可将本 Markdown 文件复制粘贴到 Typora、VSCode 插件 `Markdown PDF` 或使用在线工具转换。
