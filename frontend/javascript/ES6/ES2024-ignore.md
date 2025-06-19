---
url: /frontend/javascript/ES6/ES2024-ignore.md
---
## [ES2024(ES15)](https://tc39.es/ecma262/2024/)

### ArrayBuffers 扩展

* Atomics.waitAsync

> 异步等待共享内存的特定位置并返回一个 Promise。

> \[!WARNING]
> 此操作仅适用于基于 SharedArrayBuffer 的 Int32Array 或 BigInt64Array 视图。

```ts
Atomics.waitAsync(typedArray, index, value)
Atomics.waitAsync(typedArray, index, value, timeout)

```

### 正则扩展

* `/v` 标志

> "Verbose mode"（可读性模式）让正则更易读、更易维护

```ts
const reg = new RegExp('d+', 'v')
```

### Promise 扩展

* Promise.withResolvers

> 静态方法返回一个对象，其包含一个新的 Promise 对象和两个函数，用于解决或拒绝它，对应于传入给 Promise() 构造函数执行器的两个参数。

```ts
const { promise, resolve, reject } = Promise.withResolvers();
```

### 对象扩展

* Object.groupBy

> 根据提供的回调函数返回的**字符串值**对给定可迭代对象中的元素进行分组。

> \[!WARNING]
> 分组名称必须是字符串

```ts
// Object.groupBy(obj, fn)

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const restock = { restock: true };
const sufficient = { restock: false };
const result = Object.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? "restock" : "sufficient",
);
console.log(result.restock);
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

### 集合扩展

* Map.groupBy

> 提供的回调函数返回的值对给定可迭代对象中的元素进行分组。

```ts
// Map.groupBy(obj, fn)

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
  quantity < 6 ? restock : sufficient,
);
console.log(result.get(restock));
// [{ name: "bananas", type: "fruit", quantity: 5 }]
```

### 字符串扩展

* String.prototype.isWellFormed

> 返回一个表示该字符串是否包含单独代理项的布尔值。

```ts
// 合法 UTF-16：一个完整的 emoji 表情
const str1 = 'A\uD83D\uDE00B'; // 😀 是代理对 \uD83D\uDE00
console.log(str1.isWellFormed()); // true

// 非法 UTF-16：只有一个孤立高位代理项
const str2 = 'A\uD800B';
console.log(str2.isWellFormed()); // false

// 非法 UTF-16：只有一个孤立低位代理项
const str3 = 'A\uDC00B';
console.log(str3.isWellFormed()); // false
```

* String.prototype.toWellFormed

> 此方法将其中所有的单独代理项被替换为 `Unicode` 替换字符 `U+FFFD`。

```ts
// str.toWellFormed()

const str = 'A\uD800B'; // A + lone surrogate + B
console.log(str); // 输出时可能看起来正常，但含非法字符

const wellFormed = str.toWellFormed();
console.log(wellFormed); // "A�B"
```
