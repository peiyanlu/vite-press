---
title: JavaScript 面试题
category: interview
tags:
  - interview
  - JavaScript
---


# {{ $frontmatter.title }}


## 1. JavaScript 中的数据类型？存储上的差别？

* 原始类型：`Number`、`String`、`Boolean`、`undefined`、`null`、`Symbol`、`BigInt`
* 引用类型：`Object`、`Array`、`Function`、等

**存储差别：**

* 原始类型存储在栈中，值不可变。
* 引用类型存储在堆中，栈中存放的是指针地址。

---


## 2. JS 数据结构

* 数组、对象、集合（Set）、映射（Map）
* 栈、队列、链表、树、图（需自定义实现）

---


## 3. DOM 常见操作

* 获取：`getElementById`、`querySelector`
* 修改内容：`innerHTML`、`textContent`
* 操作属性：`setAttribute`、`classList`
* 插入/删除节点：`appendChild`、`removeChild`

---


## 4. BOM 及常见对象

* BOM 是浏览器对象模型，代表浏览器窗口。
* 常见对象：`window`、`navigator`、`location`、`history`、`screen`

---


## 5. == 与 === 区别

* `==` 会进行类型转换
* `===` 不会，类型和值都需相等

**建议：始终使用 `===`**

---


## 6. typeof 与 instanceof 区别

* `typeof` 用于原始类型判断
* `instanceof` 用于引用类型判断

```js
typeof [] // "object"
  [] instanceof Array // true
```

---


## 7. 原型与原型链

* 每个函数有 `prototype`
* 每个对象有 `__proto__`
* 原型链用于属性查找机制

---


## 8. 作用域链理解

* JavaScript 使用词法作用域
* 内部函数可以访问外部函数作用域
* 多层嵌套作用域形成作用域链

---


## 9. this 对象理解

* 普通函数：指向全局或 undefined（严格模式）
* 对象方法：指向该对象
* 箭头函数：没有自己的 this，继承外层作用域
* 构造函数：指向新实例

---


## 10. new 操作符做了什么？

1. 创建空对象
2. 设置原型连接
3. 调用构造函数
4. 返回对象（或构造函数返回的对象）

---


## 11. bind、call、apply 区别？实现 bind？

* `call` 立即调用，参数逗号分隔
* `apply` 立即调用，参数为数组
* `bind` 返回新函数

```js
Function.prototype.myBind = function (ctx, ...args) {
  const fn = this
  return function (...rest) {
    return fn.apply(ctx, [ ...args, ...rest ])
  }
}
```

---


## 12. 执行上下文与执行栈

* 执行上下文：代码执行的环境（全局、函数、eval）
* 执行栈：记录执行上下文的栈结构，先进后出

---


## 13. JS 的事件模型

1. 捕获阶段
2. 目标阶段
3. 冒泡阶段（默认）

---


## 14. 事件代理

* 将事件绑定到父元素，利用事件冒泡处理子元素事件

**应用场景：** 动态列表、表格行点击等

---


## 15. 闭包理解与应用

* 闭包：函数访问其外层作用域的变量
* 应用：私有变量、异步回调、函数工厂、缓存等

---


## 16. 类型转换机制

* 隐式：`==` 比较、运算
* 显式：`Number()`、`String()`、`Boolean()`、`parseInt()`

---


## 17. 深拷贝与浅拷贝

* 浅拷贝：只复制一层
* 深拷贝：递归复制所有层级

```ts
function deepClone(obj, map = new WeakMap()) {
  if (typeof obj !== 'object' || obj === null) return obj
  if (map.has(obj)) return map.get(obj)
  const clone = Array.isArray(obj) ? [] : {}
  map.set(obj, clone)
  for (const key in obj) {
    clone[key] = deepClone(obj[key], map)
  }
  return clone
}
```

---


## 18. 字符串常用方法

* `length`、`charAt()`、`indexOf()`、`includes()`
* `replace()`、`slice()`、`substr()`、`split()`
* `toUpperCase()`、`trim()`

---


## 19. 数组常用方法

* 修改类：`push`、`pop`、`shift`、`unshift`、`splice`
* 遍历类：`forEach`、`map`、`filter`、`reduce`
* 查找类：`find`、`includes`、`indexOf`
* 其他：`sort`、`reverse`、`concat`、`join`、`flat`

---


## 20. 事件循环理解

1. 执行同步任务
2. 清空微任务队列（`Promise`）
3. 执行宏任务（`setTimeout`、`setInterval`、`setImmediate`）

循环执行以上步骤

---


## 21. AJAX 原理与实现

* 异步请求数据无需刷新页面
* 原理基于 `XMLHttpRequest` 或 `fetch`

```js
function ajax({ url, method = 'GET', data = null }) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        xhr.status >= 200 && xhr.status < 300
          ? resolve(xhr.responseText)
          : reject(xhr.statusText)
      }
    }
    xhr.send(data)
  })
}
```

---
