---
url: /interview/03-HTML && CSS.md
---

# {{ $frontmatter.title }}

## 🟢 初级（基础掌握）

### ✅ HTML5 基础

#### 1. HTML5 有哪些新特性？

* 语义化标签：`<header>`, `<footer>`, `<section>`, `<article>`, `<nav>`, `<aside>`, `<main>`
* 多媒体支持：`<audio>`, `<video>`
* 图形绘制：`<canvas>`, `<svg>`
* 本地存储：`localStorage`, `sessionStorage`
* 表单控件：`<input type="date|email|range|color">`、`<datalist>`、`<output>`、`<progress>`
* 拖拽 API、地理定位 API、Web Workers、WebSocket

#### 2. 什么是语义化？为什么推荐语义化标签？

语义化是指标签本身具有语义含义，有助于提高代码可读性、SEO 优化、可访问性（无障碍）和代码结构清晰。

#### 3. localStorage / sessionStorage / cookie 有何区别？

| 特性     | localStorage | sessionStorage | cookie          |
|--------|--------------|----------------|-----------------|
| 存储大小   | ~5MB         | ~5MB           | 4KB             |
| 生命周期   | 永久           | 页面关闭即清除        | 设置过期时间或会话结束     |
| 与服务器通信 | 否            | 否              | 每次请求都发送         |
| 接口     | JS API       | JS API         | document.cookie |

#### 4. 常见 input 类型有哪些？

如：`text`, `number`, `email`, `url`, `date`, `color`, `range`, `search`, `tel`, `checkbox`, `radio`

#### 5. HTML5 如何引入视频或音频？

```html

<video controls>
  <source src="movie.mp4" type="video/mp4" />
</video>

<audio controls>
  <source src="sound.mp3" type="audio/mpeg" />
</audio>
```

### ✅ CSS 基础

#### 6. 盒模型的两种类型？

* 标准盒模型（`box-sizing: content-box`）：width 只包含内容
* IE盒模型（`box-sizing: border-box`）：width 包含 padding 和 border

#### 7. position 属性有哪些？作用？

| 值        | 描述                        |
|----------|---------------------------|
| static   | 默认值，元素按照文档流排列             |
| relative | 相对自身原位置偏移                 |
| absolute | 相对最近的已定位祖先元素定位            |
| fixed    | 相对于视口固定                   |
| sticky   | 在滚动中相对切换 fixed 和 relative |

#### 8. 如何居中元素？

* 水平居中（块级）：`margin: 0 auto;`
* 水平居中（内联/inline-block）：`text-align: center;`
* 垂直居中（单行文本）：`line-height = height`
* 完整居中（现代）：`display: flex; justify-content: center; align-items: center;`
* 绝对居中：`position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);`

#### 9. rem 和 em 的区别？

* `rem`: 相对于根元素 `<html>` 的字体大小
* `em`: 相对于当前元素或父元素的字体大小
* 一般设置：`html { font-size: 16px; }` → 1rem = 16px

#### 10. 如何清除浮动？

```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

## 🟡 中级（进阶能力）

### ✅ HTML5 进阶

#### 11. defer 与 async 区别？

| 属性    | 加载顺序     | 执行时机             | 是否阻塞解析 |
|-------|----------|------------------|--------|
| defer | 按出现顺序    | DOMContentLoaded | 否      |
| async | 谁先加载谁先执行 | 加载完成立即执行         | 是      |

#### 12. 如何实现拖拽（Drag and Drop）？

```js
element.setAttribute("draggable", true);
element.ondragstart = function (e) { /* 拖动逻辑 */ };
dropTarget.ondrop = function (e) { /* 放置逻辑 */ };
```

#### 13. Canvas 和 SVG 区别？

| 特性   | Canvas  | SVG          |
|------|---------|--------------|
| 渲染方式 | 位图渲染    | 基于 XML 的矢量渲染 |
| 交互性  | 需手动绑定   | 支持 DOM 事件    |
| 缩放   | 会模糊     | 无损缩放         |
| 使用场景 | 游戏、图像处理 | 图表、图形展示      |

#### 14. IndexedDB vs Web Storage？

* IndexedDB 是结构化数据库，支持事务、索引、搜索
* localStorage 仅支持字符串键值对，简单快速但功能弱

#### 15. History API 有哪些常用方法？

```js
history.pushState(state, '', '/new-url');
history.replaceState(state, '', '/replace-url');
window.onpopstate = () => { ... }
```

### ✅ CSS 进阶

#### 16. 什么是 BFC？如何触发？

BFC（块级格式化上下文）是一个独立的布局环境。

**触发方式：**

* `overflow: hidden/auto/scroll`
* `float: left/right`
* `position: absolute/fixed`
* `display: flow-root`
* `flex` 或 `grid` 容器

#### 17. 实现等高列的方式？

* 使用 `flex` 容器，`align-items: stretch`
* Grid 布局
* 早期方案：使用 `table` 或背景图技巧

#### 18. 如何固定宽高比？

```css
.ratio-16-9 {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 9/16 = 0.5625 */
}

.ratio-16-9 > * {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

#### 19. CSS 如何统一默认样式？

* 使用 Reset.css：清除所有默认样式
* 使用 Normalize.css：保留标准样式，统一不同浏览器表现

## 🔴 高级（深入理解 + 性能 + 实战）

### ✅ HTML5 高级

#### 20. Web Workers 有什么用？

用于在后台线程运行 JS，避免阻塞主线程，适合处理大量计算任务。

#### 21. WebSocket 工作原理？

* 基于 TCP 的双向通信协议，建立后可实时收发消息
* 支持事件监听：`onopen`, `onmessage`, `onerror`, `onclose`

#### 22. Page Visibility API 作用？

用于检测当前页面是否在用户视口中，用于暂停动画、视频、节省资源等。

```js
document.addEventListener("visibilitychange", () => {
  if (document.hidden) pause();
  else resume();
});
```

#### 23. 如何进入全屏模式？

```js
document.documentElement.requestFullscreen();
document.exitFullscreen();
```

### ✅ CSS 高级

#### 24. CSS 渲染流程（简述）？

1. 解析 HTML → DOM
2. 解析 CSS → CSSOM
3. 生成 Render Tree
4. Layout（计算位置）
5. Paint（绘制）
6. Composite（合成图层）

#### 25. 如何优化 CSS 性能？

* 减少嵌套、避免复杂选择器
* 使用类选择器 > 标签 > 通配符
* 使用合适的 `transform` 和 `opacity` 实现动画
* 减少重排重绘，使用 `will-change` 提前声明

#### 26. 哪些属性会创建层叠上下文？

* `position: fixed/absolute` + `z-index`
* `transform`、`opacity < 1`
* `filter`、`will-change`
* `flex/grid` 的子元素也可能创建

#### 27. will-change 有什么作用？

提前告知浏览器哪些属性将要改变，触发硬件加速，避免动画卡顿。但滥用会浪费性能。

#### 28. 如何使用现代 CSS 提高维护性？

* 使用 CSS 变量：`--primary-color`
* 使用预处理器（Sass、Less）
* 使用 PostCSS 插件自动前缀
* 模块化工具（如 CSS Modules、Tailwind）
