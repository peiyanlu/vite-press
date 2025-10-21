---
url: /vite-press/frontend/javascript/ES6/ES2023-ignore.md
---
## [ES2023(ES14)](https://tc39.es/ecma262/2023/)

### 数组扩展

* Array.prototype.findLast

> 接收一个方法返回从尾部查找中符合条件的第一个元素。如果没有找到符合条件的返回 undefined。

```ts
// arr.findLast(fn)

const cart = [ 'apple', 'banana', 'pear' ];

console.log(cart.findLast((x) => x === 'pear')) // pear
```

* Array.prototype.findLastIndex

> 接收一个方法返回从尾部查找中符合条件的第一个元素的索引。如果没有找到符合条件的返回 -1。

```ts
// arr.findLastIndex(fn)

const cart = [ 'apple', 'banana', 'pear' ];

console.log(cart.findLastIndex((x) => x === 'pear')) // 2
```

* Array.prototype.toReversed

> 将数组中的元素反转（相对应会改变数组的方法：reverse()）。

```ts
// arr.toReversed()

const cart = [ 'apple', 'banana', 'pear' ];

console.log(cart.toReversed()) // ['pear', 'banana', 'apple']
```

* Array.prototype.toSorted

> 将数组中的元素排序（相对应会改变数组的方法：sort()）。

```ts
// arr.toSorted(fn)

const cart = [ 'apple', 'banana', 'pear' ];

console.log(cart.toSorted()) // ['apple', 'banana', 'pear']
```

* Array.prototype.toSpliced

> 从数组中指定位置开始删除指定数量的元素，并可选择在删除后新增新元素（相对应会改变数组的方法：splice()）。

```ts
// arr.toSpliced(start, deleteCount, ...items)

const cart = [ 'apple', 'banana', 'pear' ];

console.log(cart.toSpliced(1, 1)) // ['apple', 'pear']
```

* Array.prototype.with

> 将数组索引处的值，替换为新值。

```ts
// arr.with(index, value)

const cart = [ 'apple', 'banana', 'pear' ];

console.log(cart.with(2, '')) // ['apple', 'pear', '']
```

### 集合扩展

* 支持 WeakMap 使用 Symbol 作为键名

```ts
const map = new WeakMap()

const symbol = Symbol('symbol')
map.set(symbol, 'DEMO')
```

### 语法支持

* Hashbang 语法

> Hashbang 注释是一种特殊的注释语法，其行为与单行注释（//）完全一样，只是它以 #! 开头，并且只在脚本或模块的最开始处有效。
> 注意，#! 标志之前不能有任何空白字符。注释由 #! 之后的所有字符组成直到第一行的末尾；只允许有一条这样的注释。

```js
#!/usr/bin/env node

console.log("Hello world");
```
