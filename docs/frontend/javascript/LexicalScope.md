---
title: 词法作用域
description: js 使用的作用域
tags:
  - JavaScript
  - scope
---


# {{ $frontmatter.title }}


**词法作用域是指**：变量的作用域在代码定义时就已经确定，由代码的书写结构决定，而不是执行时决定。

**作用域链**：定义时决定，一层层往外找；多层嵌套作用域形成作用域链；调用方式不影响查找路径。


## 作用域链

```js
const a = '全局';

function outer() {
  const a = '外部';
  
  function inner() {
    console.log(a); // 输出什么？
  }
  
  inner();
}

outer(); // 输出：外部
```

说明：`inner` 在 `outer` 中定义，形成了词法作用域链，查找变量 `a` 会优先使用 `outer` 中定义的。


## 调用位置不影响作用域

```js
const a = '全局';

function print() {
  console.log(a);
}

function run() {
  const a = '局部';
  print(); // 输出？
}

run(); // 输出：全局
```

说明：`print()` 的作用域在定义时就已经绑定，它不会因为在 `run()` 中调用而改变作用域链。


## 词法作用域 vs 动态作用域

| 对比项   | 词法作用域（JavaScript） | 动态作用域（如 bash 脚本） |
|-------|-------------------|------------------|
| 查找方式  | 定义时决定             | 调用时决定            |
| 查找链固定 | ✅ 永远从外层词法结构找      | ❌ 每次执行上下文不同可能变   |
| 代表语言  | JS、C、Java         | bash、某些宏语言       |

## 闭包与词法作用域

```js
function outer() {
  const secret = '秘密';
  return function inner() {
    console.log(secret); // 访问 outer 的作用域
  };
}

const fn = outer();
fn(); // 输出：秘密
```

说明：`inner` 在定义时捕获了 `outer` 的作用域环境，形成闭包，这就是词法作用域的体现。
