---
url: /frontend/javascript/ES6/ES2017-ignore.md
---
## [ES2017(ES8)](https://tc39.es/ecma262/2017/)

### 对象扩展

* Object.values

> 返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用 `for...in` 循环的顺序相同（区别在于 `for-in` 循环枚举原型链中的属性）。

```ts
// Object.values(obj)

const objA = { foo: 'bar', baz: 42 };
console.log(Object.values(objA)); // ['bar', 42]

// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// array like object with random key ordering
// when we use numeric keys, the value returned in a numerical order according to the keys
const an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
const my_obj = Object.create({}, { getFoo: { value: function () { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values('foo')); // ['f', 'o', 'o']
```

* Object.entries

> 返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 `for...in` 循环遍历该对象时返回的顺序一致（区别在于 `for-in` 循环还会枚举原型链中的属性）

```ts
// Object.entries(obj)
const objA = { foo: 'bar', baz: 42 };
console.log(Object.entries(objA)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const objB = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(objB)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable
const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
myObj.foo = 'bar';
console.log(Object.entries(myObj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// iterate through key-value gracefully
const obj = { a: 5, b: 7, c: 9 };
for (const [ key, value ] of Object.entries(obj)) {
  console.log(`${ key } ${ value }`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([ key, value ]) => {
  console.log(`${ key } ${ value }`); // "a 5", "b 7", "c 9"
});
```

* Object.getOwnPropertyDescriptors

> 获取一个对象的所有自身属性的描述符。

```ts
// Object.getOwnPropertyDescriptors(obj)

// 浅拷贝一个对象
Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);
```

### 字符串扩展

* String.prototype.padStart

> 用另一个字符串填充当前字符串（如果需要的话，会重复多次），以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充。

```ts
// str.padStart(targetLength[, padString])

'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6, "123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
```

* String.prototype.padEnd

> 用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。

```ts
// str.padEnd(targetLength[, padString])

'abc'.padEnd(10);          // "abc       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);           // "abc"
```

### 函数扩展

函数参数列表结尾允许逗号

### Promise 增强

* async/await

> `async` 和 `await` 关键字让我们可以用一种更简洁的方式写出基于 `Promise` 的异步行为，而无需刻意地链式调用 `promise`

```ts
const getInfo = async () => {
  await fetch()
}
```
