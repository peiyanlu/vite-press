---
url: /frontend/javascript/ES6/ES2021-ignore.md
---
## [ES2021(ES12)](https://tc39.es/ecma262/2021/)

### 运算符扩展

* `&&=` 逻辑与赋值

> 逻辑与赋值 `x ||= y` 运算仅在 `x` 为 `true` 时赋值

```ts
x &&= y // x && (x = y)

let a = 1;
let b = 0;

a &&= 2;
console.log(a); // 2

b &&= 2;
console.log(b);  // 0
```

* `||=` 逻辑或赋值

> 逻辑或赋值 `x ||= y` 运算仅在 `x` 为 `false` 时赋值

```ts
x ||= y // x || (x = y)

const a = { duration: 50, title: '' };

a.duration ||= 10;
console.log(a.duration); // 50

a.title ||= 'title is empty.';
console.log(a.title); // "title is empty"
```

* `??=` 逻辑空赋值

> 逻辑空赋值运算符 `x ??= y` 仅在 `x` 是 `nullish(null 或 undefined)` 时对其赋值

```ts
x ??= y // x ?? (x = y)

const a = { duration: 50 };

a.duration ??= 10;
console.log(a.duration); // 50

a.speed ??= 25;
console.log(a.speed); // 25
```

### 字符串扩展

* String.prototype.replaceAll

> 返回一个新字符串，新字符串所有满足 `pattern` 的部分都已被 `replacement` 替换。

::: warning
使用正则表达式搜索值时，它必须是全局的
:::

```ts
// const newStr = str.replaceAll(regexp|substr, newSubstr|function)

'aabbcc'.replaceAll('b', '.');
// 'aa..cc'

'aabbcc'.replaceAll(/b/g, '.');
"aa..cc"
```

### 数字扩展

* 数字分隔符

1. 不能放在数值的最前面（`leading`）或最后面（`trailing`）。

2. 不能两个或两个以上的分隔符连在一起。

3. 小数点的前后不能有分隔符。

4. 科学计数法里面，表示指数的 `e` 或 `E` 前后不能有分隔符。

```ts
let budget = 1_000_000_000_000;
budget === 10 ** 12 // true
```

### Promise 扩展

* Promise.any

> `Promise.any()` 接收一个由 `promise` 所组成的可迭代对象，该方法会返回一个新的 `promise`，一旦可迭代对象内的任意一个 `promise` 变成了兑现状态，那么由该方法所返回的 `promise`
> 就会变成兑现状态，并且它的兑现值就是可迭代对象内的首先兑现的 `promise` 的兑现值。如果可迭代对象内的 `promise` 最终都没有兑现（即所有 `promise` 都被拒绝了），那么该方法所返回的 `promise`
> 就会变成拒绝状态，并且它的拒因会是一个 `AggregateError` 实例，这是 `Error` 的子类，用于把单一的错误集合在一起。

1. `Promise.all()` 会返回一组兑现值

2. `Promise.race()` 总是返回第一个敲定值（兑现或拒绝）

3. `Promise.any()` 第一个兑现的值

```ts
// Promise.any(iterable);

const pErr = new Promise((resolve, reject) => {
  reject("总是失败");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "最终完成");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "很快完成");
});

Promise.any([ pErr, pSlow, pFast ]).then((value) => {
  console.log(value);
  // pFast fulfils first
})
// 期望输出："很快完成"
```

### WeakRef

`WeakRef` 对象允许您保留对另一个对象的弱引用，而不会阻止被弱引用对象被 `GC` 回收

```ts
const ref = new WeakRef(element);
const el = ref.deref();
```
