---
title: this 指向总结
description: 可恶的 this 指向问题
tags:
  - JavaScript
  - this
---


# {{ $frontmatter.title }}


`this` 指的是函数执行时所处的**上下文对象**，取决于函数**调用**方式，而不是**定义**方式。

| 场景                  | this 指向                        |
|---------------------|--------------------------------|
| 全局作用域（浏览器）          | `window`                       |
| 严格模式下全局函数           | `undefined`                    |
| 普通函数调用              | `window`（非严格）/ `undefined`（严格） |
| 对象方法调用 obj.fn()     | `obj`                          |
| 构造函数调用 new Fn()     | 新创建的实例对象                       |
| 箭头函数                | 定义时外层作用域的 `this`（不会改变）         |
| setTimeout(fn)      | `window`（非严格）                  |
| DOM 事件监听器           | 触发事件的元素（除非是箭头函数）               |
| call/apply(obj)     | 显式绑定为 obj                      |
| bind(obj)           | 永久绑定为 obj                      |
| class 实例方法          | 实例对象（除非解构丢失）                   |
| Vue Options API     | 组件实例对象                         |
| Vue Composition API | 不使用 this，直接访问 ref/reactive 变量  |

## ✅ 示例与解释


### 1. 全局作用域与普通函数

```js
function show() {
  console.log(this);
}

show(); // window（非严格）或 undefined（严格）
```

### 2. 对象方法调用

```js
const obj = {
  name: '延路',
  sayHi() {
    console.log(this.name);
  }
};
obj.sayHi(); // 延路
```

### 3. 箭头函数

```js
const obj = {
  name: '延路',
  show: () => {
    console.log(this.name); // undefined
  }
};
obj.show();
```

### 4. 构造函数

```js
function Person(name) {
  this.name = name;
}

const p = new Person('小明');
console.log(p.name); // 小明
```

### 5. call / apply / bind

```js
function say() {
  console.log(this.name);
}

const obj = { name: '测试' };
say.call(obj); // 测试
```

### 6. this 丢失与修复

```js
const obj = {
  name: '测试',
  say() {
    console.log(this.name);
  }
};
const fn = obj.say;
fn(); // undefined

// 修复方式
const fixed = obj.say.bind(obj);
fixed(); // 测试
```

### 7. Vue 中的 this


#### Vue 2:

```js
export default {
  data() {
    return { count: 0 };
  },
  methods: {
    inc() {
      this.count++;
    }
  }
};
```

#### Vue 3:

```js
setup()
{
  const count = ref(0);
  
  function inc() {
    count.value++;
  }
  
  return { count, inc };
}
```

## ✅ 面试题练习


### 题 1

```js
function sayHi() {
  console.log(this.name);
}

var name = "全局";
const obj = {
  name: "对象",
  sayHi: sayHi
};
obj.sayHi(); // 对象
sayHi();     // 全局（或 undefined）
```

### 题 2

```js
function Person(name) {
  this.name = name;
}

const p = new Person("小明");
console.log(p.name); // 小明
```

### 题 3

```js
const obj = {
  name: '对象',
  show: () => {
    console.log(this.name);
  }
};
obj.show(); // undefined
```

### 题 4

```js
const obj = {
  name: '测试',
  say() {
    console.log(this.name);
  }
};
const fn = obj.say;
fn(); // undefined
const fn2 = obj.say.bind(obj);
fn2(); // 测试
obj.say(); // 测试
```

### 题 5（多选）


以下哪种情况不会改变 `this`：
A. `fn.call(obj)`

B. `fn.bind(obj)`

C. 箭头函数

D. `obj.fn()`

✅ 答案：C（箭头函数的 this 是静态的）
