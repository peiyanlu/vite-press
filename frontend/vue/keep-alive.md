---
url: /frontend/vue/keep-alive.md
description: 在多个组件间动态切换时缓存被移除的组件实例
---

# {{ $frontmatter.title }}

`keep-alive` 是 Vue 的内置组件，用于**缓存动态组件或路由组件**，防止组件反复创建和销毁，提升性能，常用于页面切换、表单数据缓存场景。

## 常用属性

| 属性        | 类型                      | 说明                   |
|-----------|-------------------------|----------------------|
| `include` | string / RegExp / Array | 匹配名称的组件会被缓存          |
| `exclude` | string / RegExp / Array | 匹配名称的组件不会被缓存         |
| `max`     | number                  | 最多缓存实例数，超出时采用 LRU 淘汰 |

> ⚠️ `include`/`exclude` 是根据组件的 `name` 属性匹配的，未命名的组件将无法命中。

## 生命周期钩子（组件中）

| 钩子            | 触发时机                   |
|---------------|------------------------|
| `activated`   | 被 `keep-alive` 激活时触发   |
| `deactivated` | 被 `keep-alive` 暂时移除时触发 |
| `created`     | 只在首次加载时触发一次            |
| `destroyed`   | 缓存组件不会触发该钩子            |

## 原理简述

* `keep-alive` 内部维护一个缓存对象 `cache`，键为组件名称或唯一 key，值为对应的 vnode 实例；
* 首次渲染时，组件会被创建并加入缓存；
* 再次渲染时，若命中缓存，则直接复用 vnode 实例；
* 超出 `max` 限制时，淘汰最久未使用组件（LRU 算法）；
* 被缓存组件不会重新执行 `created`，但会执行 `activated`。

## 常见使用场景

1. **路由缓存**（防止重复请求和状态丢失）：

```vue

<keep-alive>
  <router-view />
</keep-alive>
```

2. **表单填写保留状态**：

```vue

<keep-alive :include="['FormPage']">
  <component :is="currentPage" />
</keep-alive>
```

3. **复杂视图切换（如 tab 页）避免销毁和重建**

## Vue2 vs Vue3（简述）

| 特性   | Vue 2                     | Vue 3                 |
|------|---------------------------|-----------------------|
| 缓存方式 | 手动匹配 `name`               | 支持基于 `setup` name 推导  |
| 底层实现 | 使用 vnode.key + LRU Map 实现 | 更细粒度缓存、内置 Suspense 支持 |
| 类型支持 | Options API               | 支持 Composition API    |

## 注意事项

* 匹配组件名时要确保组件设置了 `name`；
* `keep-alive` 只缓存组件实例，不缓存 DOM 快照；
* 对缓存组件数据的更新，应放在 `activated` 钩子中处理；
* 可通过 `key` 改变强制刷新组件缓存。

## 典型面试问题及答案

### 1. `keep-alive` 的作用是什么？使用场景有哪些？

用于缓存组件实例，避免反复销毁重建，提升性能。常用于路由切换、tab 页面、表单缓存等场景。

### 2. `include` 和 `exclude` 如何工作？

根据组件的 `name` 属性进行匹配，可用字符串、正则或数组。匹配上的会被缓存，排除的不会缓存。

### 3. 生命周期钩子 `activated` 和 `deactivated` 的使用场景？

* `activated`: 每次组件从缓存中激活时触发，可用于刷新数据。
* `deactivated`: 组件被缓存挂起时触发，可用于暂停计时器、取消订阅等。

### 4. 为什么缓存组件的数据可能不是最新的？如何刷新？

因为组件实例没有被销毁，数据仍为上次的状态。可在 `activated` 钩子中重新加载数据。

### 5. 如何只缓存某些组件？如何清除某个缓存组件？

* 使用 `include` 或 `exclude` 控制。
* 手动更改组件 `key` 或使用动态 `is` 切换组件强制重建。

### 6. `keep-alive` 的缓存原理？是否会缓存 DOM？

缓存的是组件实例（VNode 和组件状态），不会缓存 DOM 结构，但会保留虚拟 DOM 及状态以便复用。

### 7. 如何取消缓存组件？

* 使用 `exclude` 属性将组件排除出缓存；
* 动态改变 `key` 强制组件重新渲染（如 `<component :is="view" :key="dynamicKey" />`）；
* 条件渲染时去掉 `keep-alive` 包裹；
* 在 Vue3 中还可以使用 `cache` 对象引用手动调用 `cache.delete(key)`（需要结合自定义渲染器或高级特性）。
