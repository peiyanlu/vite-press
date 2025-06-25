---
url: /interview/Performance.md
---

# {{ $frontmatter.title }}答题模板

## 一、为什么要进行性能优化？

* 提升用户体验（加载速度、流畅交互）
* 降低跳出率，提高转化率
* 对 SEO 有积极影响
* Google 核心指标 Web Vitals 会影响搜索排名

***

## 二、性能优化的维度与常用方案

### 1. 首屏加载优化

* 使用 CDN 分发资源
* 启用 Gzip/Brotli 压缩
* 图片懒加载、压缩与格式优化（WebP）
* Skeleton 屏骨架屏 / loading 占位
* SSR / CSR 混合渲染方案
* 合理拆分首屏所需资源

### 2. 静态资源优化

* Tree Shaking、代码分包（Webpack、Vite）
* 使用 HTTP/2 并行加载资源
* 字体子集化 + 字体懒加载
* 图片/音视频资源采用懒加载 + 解码优化

### 3. 渲染与交互优化

* 合理使用 `requestAnimationFrame`
* 避免重排重绘（合并 DOM 操作）
* 虚拟列表优化长列表渲染（如 react-window）
* 节流、防抖优化事件触发频率
* 使用 `will-change` 提前提示浏览器优化布局

### 4. JavaScript 执行优化

* 降低主线程阻塞时间（避免 Long Tasks）
* 使用 Web Worker 分担计算任务
* 按需加载组件（import() 动态引入）
* 组件懒加载 + 路由懒加载

### 5. 缓存与离线优化

* 利用浏览器缓存、Service Worker 缓存关键资源
* 设置合理的 Cache-Control / ETag
* IndexedDB 本地缓存用户数据

### 6. 数据请求优化

* 请求合并、分页、懒加载
* 使用 SWR、React Query 做缓存与请求状态控制
* 减少重复请求，接口防抖

### 7. 性能监控与持续评估

* 接入 Sentry、LogRocket、Lighthouse CI、Web Vitals SDK
* 监控用户真实使用情况（RUM）
* 定期分析 Bundle Size、加载时长、JS 执行瓶颈

***

## 三、常见优化误区

* 一味压缩代码，忽略模块分割
* 使用 SSR 但没有缓存策略，反而变慢
* 滥用 useEffect / 监听导致频繁更新
* 不合理的动画/transition 影响帧率

***

## 四、总结语（面试收尾）

> 性能优化没有银弹，通常是围绕用户体验、加载速度和交互流畅性进行综合提升。我的策略是先监控、识别瓶颈，然后有针对性地优化关键路径，同时保证优化手段具备可维护性与成本效益。
