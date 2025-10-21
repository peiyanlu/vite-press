---
url: /vite-press/frontend/javascript/ES6/ES2018-ignore.md
---
## [ES2018(ES9)](https://tc39.es/ecma262/2018/)

### 运算符扩展

`...` 运算符增加了对 `Object` 的支持

```ts
const obj = { name: 'Yanlu' }

const info = { ...obj, ...'name' }

const { name, ...other } = info
```

### 字符串扩展

放松对标签模板里字符串转义的限制, 遇到不合法的字符串转义会返回 `undefined`，并且从 `raw` 上可获取原字符串

::: warning
在模板字符串中，如果输入无效的 `unicode` 字符，还是会报错
:::

### for await...of

`for await...of` 语句创建一个循环，该循环遍历异步可迭代对象以及同步可迭代对象，包括：内置的 `String`, `Array`，类似数组对象 (例如 `arguments` 或 `NodeList`)，`TypedArray`, `Map`, `Set`
和 `用户定义的异步/同步迭代器`。它使用对象的每个不同属性的值调用要执行的语句来调用自定义迭代钩子。

> 类似于 `await` 运算符一样，该语句只能在一个 `async function` 内部使用。

:::warning
`for await...of` 不适用于不是异步可迭代的异步迭代器。
:::

```ts
for await (variable of iterable) {
  // statement
}
```

### Promise 扩展

* Promise.prototype.finally

> 无论结果是 `fulfilled` 或者是 `rejected`，都会执行指定的回调函数。避免了同样的语句需要在 `then()` 和 `catch() `中各写一次的情况

```ts
let isLoading = true;

fetch(myRequest)
  .then(function (response) {
    var contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
  })
  .then(function (json) { /* process your JSON further */ })
  .catch(function (error) { console.log(error); })
  .finally(function () { isLoading = false; });
```
