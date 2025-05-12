# Vue 3 面试题大全


## 📘 一、基础知识类

1. **Vue 3 相比 Vue 2 有哪些变化？**

    * 使用 Proxy 替代 defineProperty 实现响应式。
    * 引入 Composition API。
    * 支持 Fragment、Teleport、Suspense。
    * 更快的性能，更小的打包体积。
    * 更好的 TypeScript 支持。

2. **Composition API 和 Options API 有什么区别？**

    * Composition API 更加灵活、可复用逻辑。
    * Options API 更适合小项目和初学者，语义更清晰。
    * Composition API 更适合 TS 和大型项目。

3. **ref 和 reactive 的区别？**

    * `ref` 适用于基本类型，内部是 `{ value: xxx }`。
    * `reactive` 适用于对象和数组，返回一个 Proxy。

4. **setup 函数什么时候执行？可以访问 this 吗？**

    * 在组件创建前（beforeCreate）执行一次。
    * `this` 是 undefined，不能访问组件实例。

5. **watch 和 watchEffect 有什么区别？**

    * `watch` 明确监听指定的响应式源。
    * `watchEffect` 自动追踪内部依赖并立即执行，适合副作用。

6. **生命周期钩子在 Vue 3 中怎么写？**

    * 使用 `onMounted()`、`onUnmounted()` 等组合式 API。
    * Options API 中仍可使用传统写法（mounted 等）。

## ⚙️ 二、进阶知识类

7. **为什么 Vue 3 中使用 Proxy？优势是什么？**

    * 能深度监听整个对象，无需递归。
    * 可监听属性新增/删除，数组索引变化等。
    * 性能更优。

8. **Vue 3 中响应式系统的原理？**

    * 使用 Proxy + Reflect 监听 get/set 操作。
    * 创建依赖收集器（effect），实现依赖追踪与触发。

9. **Teleport 是做什么用的？**

    * 将子组件 DOM 挂载到组件外的 DOM 容器中。
    * 常用于弹窗、模态框、浮动面板等场景。

10. **Suspense 的作用？**

    * 异步组件加载时提供占位内容，适合 SSR/异步数据加载场景。

11. **Vue 3 中的自定义指令写法？**

    ```ts
    const vFocus = {
      mounted(el) {
        el.focus();
      }
    }
    ```

12. **如何使用 `defineExpose`？**

    * 用于在 `<script setup>` 中暴露变量给父组件。

    ```ts
    defineExpose({ doSomething })
    ```

## 🧱 三、组件通信类

13. **组件通信的方式有哪些？**

    * `props` / `emit`
    * `v-model`
    * `provide/inject`
    * `ref`
    * 第三方状态管理（如 Pinia）

14. **Vue 3 中如何使用 v-model？支持多个吗？**

    * 支持多个 v-model，通过 `modelValue` 和 `update:modelValue` 机制。

    ```vue
    <MyComp v-model:title="title" v-model:content="content" />
    ```

15. **如何实现一个全局事件总线？**

    * 推荐使用第三方状态管理工具代替。
    * 或者使用 mitt：

      ```ts
      import mitt from 'mitt';
      const emitter = mitt();
      ```

## 🧪 四、性能优化类

16. **如何优化 Vue 3 性能？**

    * 使用 `defineAsyncComponent` 懒加载组件。
    * 使用 `v-memo`（Vue 3.3）避免不必要的更新。
    * 使用 `teleport` 优化 DOM 层级。
    * 拆分组件，使用 `keep-alive`。
    * 合理使用 `computed` 和 `watch`。

17. **v-memo 是什么？**

    * Vue 3.3 引入的指令，缓存组件渲染，减少 DOM diff 和更新。

18. **如何实现 SSR？**

    * 使用 Vue 官方 SSR 构建工具，如 Nuxt 3 或 vite-ssr 等。

## 🧠 五、源码与原理类

19. **Vue 3 中 effect 和 reactive 的核心关系？**

    * `reactive` 创建响应式对象。
    * `effect` 收集依赖，触发响应更新。

20. **Vue 中如何实现依赖收集？**

    * 使用全局 `activeEffect` 记录当前副作用函数。
    * 每次访问响应式属性时通过 getter 收集依赖。

21. **虚拟 DOM 是如何工作的？**

    * 创建 VNode → Patch → Diff → 最终更新 DOM。
    * Vue 3 使用 block tree 优化 Patch 过程。

22. **Vue 的模板编译过程是怎样的？**

    * 模板字符串 → AST → 优化 → 生成 render 函数。

## 🧰 六、实战题/开放题

23. **你在项目中是如何组织组件逻辑的？使用了哪些 Composition API？**

24. **如何封装一个通用弹窗组件？支持 v-model、slot、异步关闭等功能？**

25. **你在 Vue 项目中是如何做权限控制的？前端路由权限？组件级权限？**

26. **如何封装一个 useFetch 请求钩子？支持 loading、error、自动取消等？**

27. **如何处理大型表单的性能和可维护性？**

28. **你对 Vue 3 的响应式系统有什么理解？有没有踩过什么坑？**


