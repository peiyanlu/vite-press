## [ES2020(ES11)](https://tc39.es/ecma262/2020/)


### 运算符扩展

* `??` 空值合并操作符

> `??` 是一个逻辑操作符，当左侧的操作数为 `null` 或者 `undefined` 时，返回其右侧操作数，否则返回左侧操作数

```ts
const foo = undefined ?? "foo"
const bar = null ?? "bar"
console.log(foo) // foo
console.log(bar) // bar
```

* `?.` 可选链(Optional chaining)

> 可选链操作符 `?.` 允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效

```ts
const obj = {
  name: 'Ynalu',
  say() {
    return 'hello'
  }
}

console.log(obj?.name)
console.log(obj?.say?.())
```

### globalThis


`globalThis` 提供了一个标准的方式来获取不同环境下的全局 `this` 对象（也就是全局对象自身）


### 数字扩展

* BigInt

> `BigInt` 是一种内置对象，它提供了一种方法来表示大于 `2的53次方 \- 1` 的整数，这原本是 `Javascript` 中可以用 `Number` 表示的最大数字。`BigInt` 可以表示任意大的整数。

```ts
const bigIntNum = BigInt(9007199254740993) // 9007199254740992n
const bigIntNumA = BigInt(9007199254740993n) // 9007199254740993n
const bigInt = 9007199254740993n
console.log(bigInt) // 9007199254740993n
console.log(typeof bigInt) // bigint

// `BigInt` 和 [`Number`]不是严格相等的，但是宽松相等的。
console.log(1n == 1) // true
console.log(1n === 1) // false

// `Number` 和 `BigInt` 可以进行比较。
1n < 2 // ↪ true
2n > 1 // ↪ true
```

### 字符串扩展

* String.prototype.matchAll

> 返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。

:::warning
RegExp 必须是设置了全局模式 `g` 的形式，否则会抛出异常 `TypeError`
:::

```ts
// str.matchAll(regexp)
const regexp = RegExp('foo[a-z]*', 'g');
const str = 'table football, foosball';
const matches = str.matchAll(regexp);

for (const match of matches) {
  console.log(`Found ${ match[0] } start=${ match.index } end=${ match.index + match[0].length }.`);
}
// expected output: "Found football start=6 end=14."
// expected output: "Found foosball start=16 end=24."

// matches iterator is exhausted after the for..of iteration
// Call matchAll again to create a new iterator
Array.from(str.matchAll(regexp), m => m[0]);
// Array [ "football", "foosball" ]
```

### Promise 扩展

* Promise.allSettled

> Promise.allSettled() 方法以 `promise` 组成的可迭代对象作为输入，并且返回一个 `Promise` 实例。当输入的所有 `promise` 都已敲定时（包括传递空的可迭代类型），返回的 `promise` 将兑现，并带有描述每个
> `promise` 结果的对象数组。

```ts
// Promise.allSettled(iterable)

Promise.allSettled([
  Promise.resolve(33),
  new Promise((resolve) => setTimeout(() => resolve(66), 0)),
  99,
  Promise.reject(new Error("an error")),
]).then((values) => console.log(values));

// [
//   { status: 'fulfilled', value: 33 },
//   { status: 'fulfilled', value: 66 },
//   { status: 'fulfilled', value: 99 },
//   { status: 'rejected', reason: Error: an error }
// ]
```

### Module 扩展

* `import()` 动态导入

> 在希望按照一定的条件或者按需加载模块的时候，动态 `import()` 是非常有用的

```ts
let module = await import('/modules/my-module.js');
```
