---
url: /vite-press/frontend/javascript/ES6/ES2019-ignore.md
---
## [ES2019(ES10)](https://tc39.es/ecma262/2019/)

### 对象扩展

* Object.fromEntries

> 把键值对列表转换为一个对象。

```ts
// Object.fromEntries(iterable);

const map = new Map([ [ 'foo', 'bar' ], [ 'baz', 42 ] ]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }

const arr = [ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ] ];
const objA = Object.fromEntries(arr);
console.log(objA); // { 0: "a", 1: "b", 2: "c" }
```

### 数组扩展

* Array.prototype.flat

> 按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

```ts
// arr.flat([depth])

const arr1 = [ 1, 2, [ 3, 4 ] ];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [ 1, 2, [ 3, 4, [ 5, 6 ] ] ];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [ 1, 2, [ 3, 4, [ 5, 6 ] ] ];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity，可展开任意深度的嵌套数组
const arr4 = [ 1, 2, [ 3, 4, [ 5, 6, [ 7, 8, [ 9, 10 ] ] ] ] ];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

* Array.prototype.flatMap

> 首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 `map` 连着深度值为 `1` 的 `flat` 几乎相同，但 `flatMap` 通常在合并成一种方法的效率稍微高一些

```ts
// arr.flatMap(callbackFn[, thisArg])

var arr1 = [ 1, 2, 3, 4 ];

arr1.map(x => [ x * 2 ]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [ x * 2 ]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x => [ [ x * 2 ] ]);
// [[2], [4], [6], [8]]

let arr2 = [ "it's Sunny in", "", "California" ];

arr2.map(x => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr2.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "California"]
```

### 字符串扩展

* String.prototype.trimStart

> 删除字符串开头的空白字符。`trimLeft()` 是此方法的别名

```ts
// str.trimStart()

let str = "   foo  ";

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str); // 'foo  '
```

* String.prototype.trimEnd

> 删除字符串末尾的空白字符。`trimRight()` 是这个方法的别名

```ts
// str.trimEnd()

let str = "   foo  ";

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str); // '   foo'
```

### try...catch 扩展

可选的 `Catch Binding`

```ts
// 之前
try {
  // tryCode
} catch ( err ) {
  // catchCode
}

// 现在
try {
  console.log('Foobar')
} catch {
  console.error('Bar')
}
```

### Symbol 扩展

* Symbol.prototype.description

> 只读属性，它会返回 `Symbol` 对象的可选描述的字符串。

```ts
console.log(Symbol('desc').description);
// Expected output: "desc"

console.log(Symbol.iterator.description);
// Expected output: "Symbol.iterator"

console.log(Symbol.for('foo').description);
// Expected output: "foo"
```

### JSON增强

* JSON.stringify

> 修复了对于一些超出范围的 `Unicode` 展示错误的问题，用转义字符的方式来处理这部分字符（`0xD800–0xDFFF`）而非编码的方式

### 函数增强

* Function.prototype.toString

> 以前函数的 `toString` 方法来自 `Object.prototype.toString()`，现在的 `Function.prototype.toString()` 方法返回一个表示当前函数源代码的字符串。以前只会返回这个函数，不包含注释、空格等
