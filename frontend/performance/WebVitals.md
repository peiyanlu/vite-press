---
url: /frontend/performance/WebVitals.md
description: 前端性能衡量标准
---

# {{ $frontmatter.title }}

## 一、核心 Web Vitals（关键用户体验指标）

| 指标名                                | 含义                  | 衡量点                       | 理想值     |
|------------------------------------|---------------------|---------------------------|---------|
| **LCP（Largest Contentful Paint）**  | 最大内容绘制时间            | 页面最大内容元素出现在视口中所需时间 （加载性能） | ≤ 2.5s  |
| **FID（First Input Delay）**         | 首次输入延迟              | 用户首次交互（点击等）到浏览器响应之间的延迟    | ≤ 100ms |
| **INP（Interaction to Next Paint）** | 与用户交互后的响应速度（取代 FID） | 所有交互中响应最慢的一次 （交互性能）       | ≤ 200ms |
| **CLS（Cumulative Layout Shift）**   | 累计布局偏移              | 页面布局在加载过程中的跳动程度 （视觉稳定性）   | ≤ 0.1   |

## 二、加载性能指标

| 指标名                             | 含义                   |
|---------------------------------|----------------------|
| **TTFB（Time to First Byte）**    | 首字节到达时间，反映服务端响应速度    |
| **FCP（First Contentful Paint）** | 页面首次渲染文字/图像的时间       |
| **DOMContentLoaded**            | DOM 解析完成的时间          |
| **Load Event Time**             | 所有资源加载完成的时间          |
| **Fully Loaded**                | 包括懒加载等所有异步加载完成的时间    |
| **Resource Load Time**          | 静态资源（CSS、JS、图片等）加载耗时 |

## 三、运行时性能指标

| 指标名                           | 含义                     |
|-------------------------------|------------------------|
| **JS 执行耗时**                   | JavaScript 执行的总时间      |
| **Main Thread Blocking Time** | 主线程被阻塞时间               |
| **FPS（Frames Per Second）**    | 页面流畅度（60FPS 为理想值）      |
| **Long Tasks**                | 主线程中执行超过 50ms 的任务数量    |
| **Memory Usage**              | 页面内存占用量                |
| **CPU 使用率**                   | 高计算场景如动画、复杂渲染时的 CPU 压力 |

## 四、用户体验感知指标

| 指标         | 含义             |
|------------|----------------|
| **感知加载速度** | 页面是否提供骨架屏或加载反馈 |
| **可交互时间**  | 页面何时可以响应用户操作   |
| **视觉稳定性**  | 页面加载是否抖动跳动     |
| **动画流畅性**  | 页面过渡与滚动是否顺畅    |

## 五、常用性能评测工具

| 工具                                | 功能                  |
|-----------------------------------|---------------------|
| **Lighthouse**                    | 自动性能评分与优化建议         |
| **PageSpeed Insights**            | 基于 Web Vitals 的在线分析 |
| **WebPageTest**                   | 多网络、多区域真实加载测试       |
| **Chrome DevTools - Performance** | 精确分析执行帧、脚本、帧率等      |
| **Webpack Bundle Analyzer**       | 打包分析，识别过大模块         |
| **Sentry、LogRocket**              | RUM（真实用户监控）解决方案     |
