---
title: Vue 面试题
tags:
  - interview
  - Vue
---


# {{ $frontmatter.title }}


Vue 的 diff 算法主要是比较新旧虚拟 DOM 树的差异，并尽量复用节点、减少 DOM 操作。在列表 diff 中，Vue 采用双端指针比较和 key 映射查找，
Vue 3 进一步引入最长递增子序列算法来减少节点移动，从而提高性能。整体是同层比较，时间复杂度一般是 O(n)。

## 1. Vue 有了数据响应式，为何还要 diff？


数据响应式 ≠ 直接更新 DOM，Vue 的响应式系统能追踪数据变化，但不知道具体如何高效地更新 DOM。
所以需要 Diff 算法来比较新旧虚拟 DOM 树的差异，找到最小修改路径，避免整棵 DOM 重渲染，从而提升性能。


## 2. Vue3 为什么不需要时间分片？


时间分片是 React Fiber 用于分段执行长任务的机制，而 Vue3 没有采用时间切片（Time Slicing），因为：

* Vue3 的渲染速度已经非常快，基本不需要中断执行。
* Vue3 使用 Proxy 优化依赖收集 + 编译时优化，减少了不必要的更新。
* Vue 的响应式更新是按组件粒度，而不是全局调度，天然避免了大块更新。

## 3. Vue3 为什么要引入 Composition API？


为了解决 Vue2 中逻辑复用困难、组件代码膨胀的问题。

* Options API 中逻辑分散在 `data`, `methods`, `computed`, `watch` 等中，不易组织复用。
* Composition API 通过函数封装逻辑，增强组合性、可读性与 TypeScript 支持。

## 4. 谈谈 Vue 的事件机制，并手写 \$on、\$off、\$emit、\$once


Vue 的事件机制基于发布订阅模式，每个组件实例都有一个事件中心。

```js
class EventBus {
  constructor() {
    this.events = {};
  }
  
  $on(event, fn) {
    (this.events[event] || (this.events[event] = [])).push(fn);
  }
  
  $off(event, fn) {
    if (!fn) return delete this.events[event];
    this.events[event] = (this.events[event] || []).filter(f => f !== fn);
  }
  
  $emit(event, ...args) {
    (this.events[event] || []).forEach(fn => fn(...args));
  }
  
  $once(event, fn) {
    const onceFn = (...args) => {
      fn(...args);
      this.$off(event, onceFn);
    };
    this.$on(event, onceFn);
  }
}
```

## 5. computed 为什么可以依赖另一个 computed？


因为 computed 是惰性求值 + 缓存机制，它的依赖会被自动追踪。
当一个 computed 中使用另一个 computed，会将其作为依赖追踪，只有当其值变化时才会触发重新计算。


## 6. 说一下 vm.\$set 原理


Vue2 无法检测数组索引和对象属性新增，因此提供 `$set`。
本质：

```js
Vue.set = function (target, key, val) {
  if (Array.isArray(target)) {
    target.splice(key, 1, val); // 数组触发响应
  } else {
    if (!(key in target)) {
      defineReactive(target, key, val); // 添加响应式
      dep.notify(); // 通知更新
    } else {
      target[key] = val;
    }
  }
}
```

## 7. 怎么在 Vue 中定义全局方法？

1. 直接挂载：

```js
Vue.prototype.$myMethod = function () { ... }
```

2. 插件方式：

```js
const MyPlugin = {
  install(Vue) {
    Vue.prototype.$myMethod = () => { ... };
  }
}
Vue.use(MyPlugin);
```

Vue3 中用 `app.config.globalProperties`:

```js
app.config.globalProperties.$myMethod = () => { ... };
```

## 8. Vue 中父组件怎么监听子组件生命周期？

1. 监听子组件的事件（在子组件生命周期中 `$emit` 事件）；
2. 使用 `ref` 和 `nextTick` 在子组件挂载后调用其方法；
3. 使用 `provide/inject` 配合生命周期 hook；
   Vue 本身不支持直接监听子组件生命周期。

## 9. vue 组件里写的原生 addEventListener 监听事件，要手动解绑吗？


是的，Vue 并不会自动清除你在生命周期里添加的原生事件监听器，避免内存泄漏需要手动 `removeEventListener`，通常在 `beforeUnmount` 或 `destroyed` 中解绑。


## 10. 说说 Vue3 中的响应式设计原理


Vue3 使用 Proxy 实现响应式，核心是 `reactive` 和 `effect` 系统：

* `reactive(obj)` 用 Proxy 包裹目标对象，拦截 get/set/delete。
* `effect(fn)` 注册副作用函数，依赖收集。
* 使用 `WeakMap -> Map -> Set` 存储依赖结构。

优点：

* 支持数组、Map、Set 等更广泛的数据结构；
* 性能更优；
* 不再需要 Vue.set。

## 11. Vue 中 created 和 mounted 两个钩子之间调用时间差值受什么影响？


主要受 DOM 渲染和异步操作影响。

* `created` 执行时模板尚未挂载到页面，只能访问 data 和 methods；
* `mounted` 触发时 DOM 已插入文档，可以访问真实 DOM；

若 DOM 节点复杂或存在图片、异步组件、外部资源加载等，会导致 `mounted` 相比 `created` 更晚触发。


## 12. Vue 中推荐在哪个生命周期发起请求？


推荐在 `mounted` 生命周期发起请求，因为：

* 此时组件已完成初次渲染，DOM 可访问；
* 可避免在服务端渲染（SSR）时重复请求；

但对于服务端渲染场景，可以在 `created` 中发起请求并提前注入数据。


## 13. 为什么 React 需要 Fiber 架构，而 Vue 却不需要？


React 的更新调度是全量遍历虚拟 DOM，需要中断渲染任务，所以引入 Fiber 架构进行任务分片；
Vue 的响应式系统能精准追踪依赖变更，只重新渲染变更组件，不需要像 React 那样调度整棵树，所以不需要 Fiber 架构。


## 14. SPA（单页应用）首屏加载慢怎么解决？

* 路由懒加载 + 组件异步加载
* SSR / SSG（Nuxt、VitePress）
* 骨架屏优化体验
* 使用 CDN、开启 gzip/brotli 压缩
* 资源按需加载、提取公共 chunk

## 15. 说下 Vite 的原理


Vite 基于原生 ES Module，实现快速冷启动和即时热更新：

* 开发环境：基于原生浏览器 ES 模块加载 + 按需编译（依赖走 pre-bundling）
* 构建阶段：调用 Rollup 打包生产代码
* 使用 esbuild 编译 ts/js 更快（Go 编写）

优点：快、轻、热更新体验佳。


## 16. v-model 的原理与在组件中如何使用？


Vue2 中 v-model 实际是 `:value="modelValue" @input="$emit('input', $event)"` 的语法糖；
Vue3 改为 `modelValue` 和 `update:modelValue` 事件：

```vue

<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>
```

组件通过 `props` 接收 `modelValue`，事件通知外部更新。


## 17. Vue3 setup 中如何获取 props 和 context？

```ts
setup(props, context)
{
  // props 是响应式的
  // context.attrs / context.slots / context.emit
}
```

setup 的两个参数分别用于访问传入属性和上下文环境。


## 18. ref 和 reactive 有什么区别？

* `ref` 用于基本类型或对某个值的响应式包装，访问需 `.value`。
* `reactive` 只能用于对象，会深度递归转换为响应式。

使用场景不同：基础类型用 ref，对象/数组用 reactive。


## 19. watch 和 watchEffect 有什么区别？

* `watch` 明确指定监听的数据源，需要传 getter 或 ref。
* `watchEffect` 自动收集依赖，响应式依赖发生变化就重新执行。

`watch` 适合监听特定数据，`watchEffect` 更适合响应式副作用。


## 20. Vue 如何实现 keep-alive 组件缓存？


Vue 内部使用 LRU 缓存策略保存组件实例，在组件切换时通过 `activated/deactivated` 生命周期钩子保留状态。

使用方式：

```vue

<keep-alive>
  <component :is="view"></component>
</keep-alive>
```

keep-alive 会缓存 name 命中的组件。


## 21. Vue 3.0 中 Treeshaking 特性是什么，并举例进行说明？


Treeshaking 是一种移除未用代码的技术，Vue3 使用 ES Module 设计，按需导入，未用代码不会被打包。

示例：

```js
import { ref } from 'vue'; // 只引入需要的 API
```

## 22. Vue3.0 所采用的 Composition Api 与 Vue2.x 使用的 Options Api 有什么区别？

- Composition API 通过函数组织代码，更灵活，逻辑复用方便；
- Options API 通过配置对象分块管理，结构清晰但复用难；
- Composition API 支持更好的类型推断。

## 23. Vue3.0 性能提升主要是通过哪几方面体现的？

- 响应式系统使用 Proxy 替代 defineProperty，性能更优；
- 虚拟 DOM 重写，优化了 diff 算法；
- 支持 Tree shaking，减小包体积；
- 更快的模板编译。

## 24. Vue3.0 的设计目标是什么？做了哪些优化？


目标：更快、更小、更易维护、更好 TS 支持

优化：

- 基于 Proxy 的响应式系统；
- 更好的逻辑复用（Composition API）；
- 更轻量的核心包；
- 编译时优化。

## 25. 你是怎么处理 vue 项目中的错误的？

- 全局错误捕获（errorCaptured, errorHandler）；
- 请求异常统一处理；
- UI 友好提示；
- 日志上报。

## 26. Vue 项目如何进行部署？是否有遇到部署服务器后刷新 404 问题？

- 生成静态资源（npm run build）；
- 使用 Nginx 或 Apache 等静态服务器；
- 配置前端路由 history 模式时，需配置服务器所有路由指向 index.html，否则刷新 404。

## 27. Vue 项目中如何解决跨域问题？

- 通过后端设置 CORS；
- 使用代理（如 vue.config.js devServer.proxy）；
- JSONP（只支持 GET）。

## 28. Vue 怎么实现权限管理？控制到按钮级别的权限怎么做？

- 在 Vuex 或全局状态保存权限信息；
- 按钮通过指令或 v-if 判断权限是否展示；
- 动态路由权限控制。

## 29. 大型项目中，Vue 项目怎么划分结构和划分组件比较合理呢？

- 按功能模块划分目录；
- 组件分为基础组件、业务组件、容器组件；
- 按职责分层管理，易维护。

## 30. Vue 项目中有封装过 axios 吗？怎么封装的？


封装思路：创建 axios 实例，设置基础 URL 和拦截器，统一请求和响应处理，方便复用和全局错误处理。

示例：

```js
import axios from 'axios';

const service = axios.create({
  baseURL: '/api',
  timeout: 5000,
});

service.interceptors.request.use(config => {
  // 添加 token 等
  return config;
}, error => {
  return Promise.reject(error);
});

service.interceptors.response.use(
  response => response.data,
  error => Promise.reject(error)
);

export default service;
```

## 31. 说说 vue 中的 diff 算法


Vue 通过比较新旧虚拟 DOM 树找出最小变更。特点：

- 只比较同级节点；
- 利用 key 优化节点复用；
- Vue3 使用最长递增子序列（LIS）减少移动次数。

## 32. 什么是虚拟 DOM？如何实现一个虚拟 DOM？说说你的思路


虚拟 DOM 是用 JavaScript 对象描述真实 DOM 结构的抽象。

思路：定义虚拟节点对象，写函数渲染真实 DOM，比较新旧虚拟 DOM 差异，更新真实 DOM。

示例：

```js
function h(tag, props, children) {
  return { tag, props, children };
}

function createElement(vnode) {
  const el = document.createElement(vnode.tag);
  for (let key in vnode.props) el.setAttribute(key, vnode.props[key]);
  (vnode.children || []).forEach(child => {
    el.appendChild(typeof child === 'string' ? document.createTextNode(child) : createElement(child));
  });
  return el;
}
```

## 33. 说说你对 Vue 中 keep-alive 的理解


`keep-alive` 是一个抽象组件，用来缓存动态组件实例，避免重复销毁和重建，提升性能。它会缓存激活的组件实例，切换时不会重新渲染。支持 `include` 和 `exclude` 属性控制缓存组件，触发生命周期钩子 `activated` 和 `deactivated`。


## 34. Vue.observable 是什么？


Vue2.6+提供的响应式 API，将普通对象转换成响应式对象，适合状态管理或跨组件状态共享。

示例：

```js
const state = Vue.observable({ count: 0 });
export default state;
```

## 35. 说说你对 slot 的理解？slot 使用场景有哪些？


Slot 是 Vue 的内容分发机制，允许父组件将内容传递给子组件的特定插槽。

- **默认插槽**：未命名的插槽；
- **具名插槽**：通过 name 属性区分多个插槽；
- **作用域插槽**：子组件传数据给插槽内容。

适用于组件内容高度可定制场景。


## 36. 说说你对 vue 的 mixin 的理解，以及有哪些应用场景？


Mixin 是复用组件逻辑的方式，把多个组件共用的选项抽离出来。

缺点：可能命名冲突，难以追踪。

适用场景：多个组件共享逻辑时。


## 37. Vue 中的＄nextTick 有什么作用？


`$nextTick` 用于在 DOM 更新完成后执行回调，保证拿到最新的 DOM 状态。

示例：

```js
this.message = 'hello';
this.$nextTick(() => {
  // 访问更新后的 DOM
});
```

## 38. Vue 组件问通信方式都有哪些？

- props / $emit（父子）；
- provide / inject（祖孙）；
- eventBus（兄弟）；
- Vuex / Pinia（全局状态）；
- $attrs / $listeners（透传）；

## 39. Vue 中组件和插件有什么区别？

- 组件是 UI 单元；
- 插件是给 Vue 添加全局功能（如指令、过滤器、原型方法等）。

## 40. 为什么 Vue 中的 data 属性是一个函数而不是一个对象？


防止组件之间共享同一数据引用，确保每个组件实例都有独立的数据副本。


## 41. 说说你对 Vue 生命周期的理解


Vue 生命周期是组件从创建、更新到销毁的过程，包含 beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、beforeDestroy、destroyed 等钩子。


## 42. Vue 实例挂载的过程中发生了什么？

- 初始化事件和生命周期；
- 解析模板生成渲染函数；
- 挂载到真实 DOM；
- 调用生命周期钩子。

## 43. 谈谈对 Vue 中双向绑定的理解


Vue 通过数据响应式和事件监听，实现视图与数据的同步更新。


## 44. Vue 模板是如何编译的


模板先编译成渲染函数，再执行渲染函数生成虚拟 DOM，最终更新真实 DOM。


## 45. 说说 Vue 中 CSS scoped 的原理


给每个组件的样式添加独特属性选择器，限制样式只作用于该组件的 DOM。


## 46. 说说你对渐进式框架的理解


框架可以逐步采纳，核心简单易用，扩展性强，可按需使用不同功能。


## 47. Vue 中的 v-show 和 v-if 有什么区别

- `v-if` 是真正的条件渲染，切换时销毁/重建 DOM；
- `v-show` 只是 CSS 控制显示隐藏，初次渲染都存在。

## 48. Vue3.0 里为什么要用 Proxy API 替代 defineProperty API？


Proxy API 支持拦截更多操作，性能更好，且解决了 defineProperty 无法监听新增和删除属性的问题。


## 49. SSR 是什么？Vue 中怎么实现？


服务端渲染，将 Vue 组件渲染成 HTML 字符串返回，提升首屏性能和 SEO。Vue 官方提供 `vue-server-renderer` 实现。


## 50. vue 的祖孙组件的通信方案有哪些？

- provide / inject；
- eventBus；
- Vuex / Pinia 全局状态管理。
