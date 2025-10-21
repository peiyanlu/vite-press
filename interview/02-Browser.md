---
url: /vite-press/interview/02-Browser.md
---

# {{ $frontmatter.title }}

## 🧠 一、浏览器工作原理

### 1. 浏览器从输入 URL 到页面展示的全过程？

**答题要点：**

* DNS 解析 → TCP 连接（三次握手）→ 发送 HTTP 请求 → 服务器响应 → 浏览器接收响应 → 渲染页面
* 渲染过程：

  * 解析 HTML → 构建 DOM
  * 解析 CSS → 构建 CSSOM
  * DOM + CSSOM → Render Tree
  * Layout（计算位置）→ Painting（绘制）→ Compositing（合成层）

### 2. 浏览器内核有哪些？有哪些区别？

**答题要点：**

* 常见内核：

  * Blink（Chrome、Edge）
  * WebKit（Safari）
  * Gecko（Firefox）
* 区别：

  * 渲染机制不同
  * 兼容性表现不同
  * API 实现略有差异

### 3. 浏览器的多进程与多线程模型？

**答题要点：**

* 一个标签页对应一个进程（隔离性高）
* 渲染进程内是多线程的：

  * GUI 渲染线程
  * JS 引擎线程（互斥）
  * 事件触发线程
  * 定时器线程
  * 网络线程等

## ⏱ 二、性能优化

### 4. 如何优化首次加载性能（白屏时间）？

**答题要点：**

* 资源压缩（JS/CSS/图片）
* 懒加载（图片、组件、模块）
* SSR 或预渲染
* CDN 加速
* 优化关键渲染路径（Critical CSS、defer/async）

### 5. 什么是关键渲染路径（Critical Rendering Path）？

**答题要点：**

* 浏览器将 HTML、CSS、JS 转化为像素的流程
* 关键阶段包括：

  * DOM 构建
  * CSSOM 构建
  * Render Tree 构建
  * Layout
  * Paint
  * Composite

## 🔐 三、安全相关

### 6. 常见的前端安全问题有哪些？如何防御？

**答题要点：**

* XSS（跨站脚本攻击）：输出时转义、使用 CSP、避免 innerHTML
* CSRF（跨站请求伪造）：使用 Token 校验、SameSite Cookie、Referer 校验
* 点击劫持：使用 `X-Frame-Options`，设置 CSP frame-ancestors
* 内容劫持：设置 `Content-Security-Policy`、避免开放上传

### 7. 什么是 SameSite Cookie？有哪些值？

**答题要点：**

* 用于限制第三方 Cookie 发送
* 可选值：

  * Strict：完全禁止跨站发送
  * Lax：部分允许（GET 请求）
  * None：允许第三方发送，需 `Secure` 配合

## 📆 四、浏览器存储

### 8. localStorage、sessionStorage、cookie 的区别？

| 特性      | localStorage | sessionStorage | cookie    |
|---------|--------------|----------------|-----------|
| 生命周期    | 永久（除非手动清除）   | 会话级别           | 可设置过期时间   |
| 大小限制    | ~5MB        | ~5MB          | ~4KB     |
| 是否随请求发送 | 否            | 否              | 是（自动发送）   |
| 使用场景    | 本地持久化        | 页面会话数据         | 登录状态、跨域验证 |

### 9. IndexedDB 和 localStorage 区别？

**答题要点：**

* IndexedDB 是一个异步、支持对象存储的数据库
* localStorage 是同步的，字符串存储
* IndexedDB 适合大型数据、复杂结构、异步场景

## 📤 五、事件机制

### 10. 浏览器中的事件循环（Event Loop）机制？

**答题要点：**

* 主线程处理调用堆
* 执行宏任务（如：setTimeout、事件回调）和微任务（Promise.then、MutationObserver）
* 每个宏任务执行完 → 执行所有微任务 → 才进入下一个宏任务

### 11. 什么是事件捕获与事件冒泡？

**答题要点：**

* 捕获阶段：从 document → 目标元素
* 冒泡阶段：从目标元素 → document
* 可以通过 `addEventListener(type, handler, useCapture)` 控制

### 12. 什么是事件委托？优点？

**答题要点：**

* 父元素监听子元素事件，通过冒泡捕获
* 优点：

  * 动态元素也可绑定事件
  * 提升性能，减少事件绑定

## 📄 六、页面渲染与回流重绘

### 13. 什么是回流（Reflow）与重绘（Repaint）？

**答题要点：**

* 回流：元素尺寸/结构/布局变化，影响后代 → 重新计算布局
* 重绘：样式变化但不影响布局（如颜色变）→ 重新绘制
* 回流性能开销 > 重绘

### 14. 如何减少回流与重绘？

**答题要点：**

* 批量操作 DOM（如：使用 DocumentFragment）
* 避免逐帧操作样式（合并操作）
* 使用 `class` 代替 style 修改
* 使用 `requestAnimationFrame`

## 🌐 七、跨域

### 15. 浏览器中如何实现跨域通信？

**答题要点：**

* CORS（设置响应头）
* JSONP（只支持 GET）
* WebSocket
* postMessage
* 代理转发（如：前端 devServer）

### 16. CORS 的原理和流程？

**答题要点：**

* 浏览器自动发送预检请求（OPTIONS）
* 服务端需返回响应头
  * `Access-Control-Allow-Origin`
  * `Access-Control-Allow-Methods`
  * `Access-Control-Allow-Headers`
* 非简单请求触发预检，请求头和方法需允许

## 🧪 八、调试与开发者工具

### 17. 如何使用 DevTools 进行性能分析？

**答题要点：**

* `Performance` 面板：记录帧率、Layout、Paint 时间线
* `Lighthouse`：自动生成页面优化建议报告
* `Network` 面板：查看资源加载 waterfall，识别瓶颈
* `Memory`：分析内存泄漏、快照、GC

### 18. 如何阻止默认事件和阻止冒泡？

**答题要点：**

```js
// 阻止默认行为
event.preventDefault();

// 阻止冒泡
event.stopPropagation();
```

* 可以结合捕获阶段精细控制事件流

## 📶 九、网络相关

### 19. 浏览器缓存有哪些类型？它们的区别？

**答题要点：**

* 强缓存（不发请求）：通过 `Cache-Control: max-age` 或 `Expires`
* 协商缓存（需请求服务器）：通过 `ETag / If-None-Match` 或 `Last-Modified / If-Modified-Since`
* 区别：强缓存命中直接使用缓存，协商缓存需询问服务端是否变更

### 20. 浏览器的重定向状态码有哪些？

**答题要点：**

* 301：永久重定向（搜索引擎会更新链接）
* 302：临时重定向（原地址仍有效）
* 303：POST 请求重定向为 GET
* 307/308：保留请求方法的临时/永久跳转

### 参考链接

[浏览器基础知识](../frontend/browser/basics.md)
