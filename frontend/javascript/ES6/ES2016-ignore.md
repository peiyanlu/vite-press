---
url: /frontend/javascript/ES6/ES2016-ignore.md
---
## [ES2016(ES7)](https://tc39.es/ecma262/2016/)

### 数组扩展

* Array.prototype.includes

> 用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 `true`，否则返回 `false`

```ts
// arr.includes(searchElement[, fromIndex])

[ 1, 2, 3 ].includes(2);     // true
[ 1, 2, 3 ].includes(4);     // false
[ 1, 2, 3 ].includes(3, 3);  // false
[ 1, 2, 3 ].includes(3, -1); // true
[ 1, 2, NaN ].includes(NaN); // true
```

### 运算符扩展

* `**` 幂运算符

```ts
console.log(Math.pow(2, 10)); // 1024
console.log(2 ** 10); // 1024
```
