---
title: 深（浅）拷贝
description: 浅拷贝、深拷贝是什么？如何实现
tags:
  - JavaScript
  - copy
---


# {{ $frontmatter.title }}


## Object


### 浅拷贝（Shallow Copy）


只复制第一层属性，对于引用类型的属性，仅拷贝其引用地址，不复制其内容。

- `...` 延展运算符

```js
const shallow = { ...obj };
```

- `Object.assign`

```js
const shallow = Object.assign({}, obj);
```

✅ 示例（引用共享）：

```js
const obj = { a: 1, b: { c: 2 } };
const shallow = { ...obj };

shallow.b.c = 100;
console.log(obj.b.c); // 100（原对象也被修改了）
```

### 深拷贝（Deep Copy）


递归复制所有层级，嵌套对象/数组都重新创建，互不影响。

- `structuredClone`

> 不支持 Function、Symbol

```js
const deep = structuredClone(obj);
```

- 递归实现（基础版）

```js
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  const clone = {};
  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }
  return clone;
}
```

✅ 示例：

```js
const obj = { a: 1, b: { c: 2 } };
const deep = structuredClone(obj);

deep.b.c = 100;
console.log(obj.b.c); // 2（不会影响原对象）
```

## Array


### 浅拷贝（Shallow Copy）


浅拷贝只复制第一层元素，如果数组内有对象或数组，则仍共享引用。

- `slice`

```js
const arr = [ 1, 2, 3 ];
const copy = arr.slice(); // [1, 2, 3]
```

- `...` 延展运算符

```js
const arr = [ 1, 2, 3 ];
const copy = [ ...arr ]; // [1, 2, 3]
```

- `Array.from`

```js
const arr = [ 1, 2, 3 ];
const copy = Array.from(arr); // [1, 2, 3]
```

- `concat`

```js
const arr = [ 1, 2, 3 ];
const copy = [].concat(arr); // [1, 2, 3]
```

✅ 示例（引用共享）：

```js
const arr = [ { name: 'a' }, { name: 'b' } ];
const shallow = [ ...arr ];

shallow[0].name = 'changed';
console.log(arr[0].name); // 'changed'（原数组中对象也被修改了）
```

### 深拷贝（Deep Copy）


递归复制数组中嵌套的对象或数组，确保完全独立。

- `structuredClone`（推荐）

> 不支持 Function、Symbol

```js
const arr = [ { a: 1 }, { b: 2 } ];
const deep = structuredClone(arr);
```

- 手写递归深拷贝

```js
function deepCloneArray(arr) {
  return arr.map(item => {
    if (Array.isArray(item)) return deepCloneArray(item);
    if (item !== null && typeof item === 'object') return deepCloneObject(item);
    return item;
  });
}

function deepCloneObject(obj) {
  const clone = {};
  for (const key in obj) {
    const val = obj[key];
    if (Array.isArray(val)) clone[key] = deepCloneArray(val);
    else if (val !== null && typeof val === 'object') clone[key] = deepCloneObject(val);
    else clone[key] = val;
  }
  return clone;
}
```

✅ 示例：

```js
const arr = [ { a: 1, b: { c: 2 } } ];
const deep = structuredClone(arr);

deep[0].a = 100;
console.log(deep[0].a); // 1（不会影响原数组中对象）
```

## `JSON.stringify` 深拷贝问题

```js
const obj = {
  a: undefined,
  b: () => {},
  c: Symbol('c'),
  d: new Date(),
  e: /abc/,
  f: new Map(),
  g: new Set(),
  h: NaN,
  i: null
};

const copy = JSON.parse(JSON.stringify(obj));
console.log(copy);
// 输出结果：{ d: '2025-06-11T10:38:56.380Z', e: {}, f: {}, g: {}, h: null, i: null }

console.log(JSON.stringify([ ...Object.values(obj) ]))
// 输出结果：[ null, null, null, '2025-06-11T14:03:26.781Z', {}, {}, {}, null, null ]
```

| 类型               | 示例值                    | 对象中的表现                                          | 数组中的表现       |
|------------------|------------------------|-------------------------------------------------|--------------|
| `undefined`      | `{ a: undefined }`     | ❌ 被移除                                           | ✅ 转为 `null`  |
| `function`       | `{ a: () => {} }`      | ❌ 被移除                                           | ✅ 转为 `null`  |
| `Symbol`         | `{ a: Symbol("sym") }` | ❌ 被移除                                           | ✅ 转为 `null`  |
| `Date`           | `{ a: new Date() }`    | ✅ 转为 ISO 字符串（如 `2025-06-11T...`）                | ✅ 同左         |
| `RegExp`         | `{ a: /abc/g }`        | ✅ 转为空对象 `{}`                                    | ✅ 转为空对象 `{}` |
| `Map`            | `{ a: new Map() }`     | ✅ 转为空对象 `{}`                                    | ✅ 转为空对象 `{}` |
| `Set`            | `{ a: new Set() }`     | ✅ 转为空对象 `{}`                                    | ✅ 转为空对象 `{}` |
| `NaN` `Infinity` | `{ a: NaN }`           | ✅ 转为 `null`                                     | ✅ 转为 `null`  |
| `null`           | `{ a: null }`          | ✅ 保持为 `null`                                    | ✅ 保持为 `null` |
| 循环引用             | `obj.a = obj`          | ❌ 报错 `TypeError: Converting circular structure` | ❌ 同左         |

## 方案对比

| 特性                  | 浅拷贝      | 深拷贝                   |
|---------------------|----------|-----------------------|
| 拷贝层级                | 一层       | 所有层级                  |
| 引用对象是否共享            | 是        | 否                     |
| 是否处理循环引用            | 否        | 是                     |
| 性能                  | 快        | 慢                     |
| 推荐方式                | `...`    | `structuredClone` 或手写 |
| `JSON.stringify` 拷贝 | ❌ 丢失大量数据 | ❌ 报错/类型丢失             |

✅ 场景：

| 使用场景        | 推荐方式                |
|-------------|---------------------|
| 简单对象或一层数据结构 | 浅拷贝（`...`）          |
| 复杂对象、嵌套结构   | `structuredClone()` |
| 含循环引用/特殊类型  | 自定义递归或 `lodash` 等库  |
