---
url: /vite-press/frontend/javascript/ES6+.md
description: ES 新版本 API 总结
---

# ES6+

`ES6` 是 [ECMA](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/) 为 `JavaScript` 制定的第 6 个标准版本。
`ES6` 既是一个历史名词也是一个泛指，含义是 `5.1` 版本以后的 JavaScript 下一代标准。

## [ES6(2015)](https://262.ecma-international.org/6.0/)

`ES6` 新增内容主要有：变量声明、函数扩展、字符串扩展、数组扩展、集合操作、异步编程、迭代等

### 声明和变量声明

包括使用 `let`、`const` 声明变量和对**对象**、**数组**解构绑定

#### 变量声明

`let` 和 `const`，用于解决使用 `var` 声明常量时存在的问题：不能定义常量，可以重复声明变量、存在声明提升、不支持块级作用域的问题

> 使用 `const` 可以定义常量，不能给常量重新赋值，但是如果是引用类型的话可以修改；

剖析暂时性死区的原理，其实 `let/const` 同样也有提升的作用，但是和 `var` 的区别在于

* `var` 在创建时就被初始化，并且赋值为 `undefined`

* `let/const`
  在进入块级作用域后，会因为提升的原因先创建，但不会被初始化，直到声明语句执行的时候才被初始化，初始化的时候如果使用 `let` 声明的变量没有赋值，则会默认赋值为 `undefined`，而 `const`
  必须在初始化的时候赋值。而创建到初始化之间的代码片段就形成了暂时性死区

> > 由 `let/const` 声明的变量，当它们包含的词法环境(Lexical Environment)被实例化时会被创建，但只有在变量的词法绑定(
> > LexicalBinding)已经被求值运算后，才能够被访问

```ts
let a = 'let' // 变量
const b = 'const' // 常量
```

#### 解构绑定

解构赋值语法是 `JavaScript` 的一种表达式，可以方便的从数组或者对象中快速提取值赋给定义的变量。

> ObjectBindingPattern 和 ArrayBindingPattern

* 数组解构

> 按照索引解构

```ts
const arr = [ 1, 2, 3 ]

const [ one, two, three ] = arr

// 忽略某些值
const [ , , threeA ] = arr

// 默认值
const [ a = 2, b = 4, c = 6 ] = []
```

* 对象解构

> 按 `key` 解构

```ts
const info = {
  name: 'Yanlu',
  age: 24
}

const { name, age } = info

// 支持别名和默认值
const { name: myName, age: myAge = 18 } = info
```

### 函数扩展

新增了箭头函数、新的方法定义方式、支持默认参数，新增 `Class`

#### 箭头函数

箭头函数是使用 `=>` 语法的函数简写。与一般函数不同的是

* 函数体内的 `this` 对象，就是定义时所在的对象，而不是使用时所在的对象。

* `this` 对象的指向是可变的，但是在箭头函数中，它是固定的。

* 不可以当作构造函数，也就是说，不可以使用 `new` 命令，否则会抛出一个错误。

* 不可以使用 `arguments` 对象，该对象在函数体内不存在。如果要用，可以用 `rest` 参数代替。

* 不可以使用 `yield` 命令，因此箭头函数不能用作 `Generator` 函数。

```ts
const date = () => Date.now()
```

#### 方法定义

> 省略 `function` 关键字

```ts
// object 中
const info = {
  say() {
    return 'Hello'
  }
}

// class 中
class Person {
  say() {
    return 'Hello'
  }
}
```

#### 类(Class)

> 构造函数语法糖，增强 `ES5` 构造函数
>
> > `extends`，`constructor`，`super`，`static`

```ts
class Persion {
  constructor(id, name) {
    this.name = name
  }
  
  info() {
    return this.name
  }
}

class Student extends Persion {
  constructor(id, name) {
    super(id, name)
  }
}
```

#### 默认参数

定义函数的时候为其设置默认值

```ts
const fn = (a = 1) => a * 2   
```

### 对象扩展

增强了字面量定义对象，更加便捷；扩展了对象的**静态方法**

#### 字面量增强

* 属性简写

> 允许直接写入变量，作为对象的属性

```ts
const name = 'Yanlu'

const info = { name }
// 等价于：
const infoCopy = { name: name }
```

* 方法

> 允许直接写入方法，作为对象的属性

```ts
const infoCopy = {
  say() {
    return 'hello'
  }
}
// 等价于：
const info = {
  say: function () {
    return 'hello'
  }
}
```

* 动态属性

> 通过中括号 `[]` 的方式来给对象动态增加属性

```ts
const dynamic = 'address'
const getAddress = () => 'HangZhou'

const infoCopy = {
  [dynamic]: 'YuHang',
  [getAddress() + 'Desc']: 'HangZhou YuHang',
}
// 等价于
const info = {}
info[dynamic] = 'YuHang'
info[getAddress() + 'Desc'] = 'HangZhou YuHang'
```

#### 新增方法

* Object.is

> 方法判断两个值是否为同一个值

```ts
// Object.is(value1, value2);

Object.is(25, 25);                // true
Object.is('foo', 'foo');          // true
Object.is('foo', 'bar');          // false
```

* Object.setPrototypeOf

> 设置一个指定的对象的原型（即，内部 \[\[Prototype]] 属性）到另一个对象或 `null`。

```ts
// Object.setPrototypeOf(obj, prototype)

function Human(name, level) {
  this.name = name
  this.level = level
}

function SuperHero(name, level) {
  Human.call(this, name, level)
}

Object.setPrototypeOf(SuperHero.prototype, Human.prototype)
```

* Object.assign

> 将所有可枚举（`Object.propertyIsEnumerable()` 返回 `true`）的自有（`Object.hasOwnProperty()` 返回
> `true`）属性从一个或多个源对象复制到目标对象，返回修改后的对象。
>
> > 浅拷贝

```ts
// Object.assign(target, ...sources)

let obj1 = { a: 0, b: { c: 0 } };
let obj2 = Object.assign({}, obj1);
console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}
```

* Object.getOwnPropertySymbols

> 返回一个给定对象自身的所有 `Symbol` 属性的数组。

```ts
// Object.getOwnPropertySymbols(obj)

let obj = {};
let a = Symbol("a");
let b = Symbol.for("b");

obj[a] = "localSymbol";
obj[b] = "globalSymbol";

let objectSymbols = Object.getOwnPropertySymbols(obj);

console.log(objectSymbols.length); // 2
console.log(objectSymbols)         // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0])      // Symbol(a)
```

### 数组扩展

扩展了数组的 **静态方法** 和 **实例方法**

#### 静态方法

* Array.from

> 从数组类对象或可迭代对象创建一个新的 `Array` 实例

```ts
// Array.from(arrayLike, (element, index) => { /* … */ }, thisArg)

Array.from("foo");
// [ "f", "o", "o" ]
```

* Array.of

> 通过可变数量的参数创建一个新的 `Array` 实例，而不考虑参数的数量或类型

```ts
// Array.of(element0, element1, /* … ,*/ elementN)

Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
```

#### 实例方法

* Array.prototype.copyWithin

> 浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度

```ts
// arr.copyWithin(target[, start[, end]])

[ 1, 2, 3, 4, 5 ].copyWithin(-2)
  // [1, 2, 3, 1, 2]
  
  [1, 2, 3, 4, 5].copyWithin(0, 3)
  // [4, 5, 3, 4, 5]
  
  [1, 2, 3, 4, 5].copyWithin(0, 3, 4)
// [4, 2, 3, 4, 5]
```

* Array.prototype.entries

> 返回一个新的数组迭代器对象，该对象包含数组中每个索引的键/值对

```ts
// arr.entries()

const array = [ "a", "b", "c" ];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']
```

* Array.prototype.fill

> 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引

```ts
// arr.fill(value[, start[, end]])

[ 1, 2, 3 ].fill(4);               // [4, 4, 4]
[ 1, 2, 3 ].fill(4, 1);            // [1, 4, 4]
[ 1, 2, 3 ].fill(4, 1, 2);         // [1, 4, 3]
```

* Array.prototype.find

> 返回数组中满足提供的测试函数的第一个元素的值。否则返回 `undefined`。

```ts
// arr.find((element, index, array) => { /* … */ }, thisArg)

const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 }
];

const result = inventory.find(({ name }) => name === 'cherries');
console.log(result) // { name: 'cherries', quantity: 5 }
```

* Array.prototype.findIndex

> 返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 `-1`

```ts
// arr.findIndex((element, index, array) => { /* … */ }, thisArg)

console.log([ 4, 6, 7, 12 ].findIndex(num => num === 1)); // -1
console.log([ 4, 6, 7, 12 ].findIndex(num => num === 7)); // 2
```

* Array.prototype.keys

> 返回一个包含数组中每个索引键的 `Array Iterator` 对象

```ts
// arr.keys()
const arr = [ "a", , "c" ];
const sparseKeys = Object.keys(arr);
const denseKeys = [ ...arr.keys() ];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
```

* Array.prototype.values

> 返回一个新的 `Array Iterator` 对象，该对象包含数组每个索引的值

```ts
// arr.values()

const arr = [ 'a', 'b', 'c', 'd', 'e' ]
const iterator = arr.values()

for (const letter of iterator) {
  console.log(letter)
}  //"a" "b" "c" "d" "e"
```

### 字符串扩展

新增了模板字符串；扩展了字符串的实例方法

#### 模板字符串

增强的字符串，通过 `反引号` 定义，可以通过 `${}` 使用变量，支持换行

```ts
const name = 'Yanlu'

const getName = `
  my name is ${ name }
  my age is 18
`
```

#### 新增方法

* String.prototype.startsWith

> 判断当前字符串是否以另外一个给定的子字符串开头

```ts
// str.startsWith(searchString[, position])

const str = "To be, or not to be, that is the question.";

alert(str.startsWith("To be"));         // true
alert(str.startsWith("not to be"));     // false
alert(str.startsWith("not to be", 10)); // true
```

* String.prototype.endsWith

> 判断当前字符串是否是以另外一个给定的子字符串结尾

```ts
// str.endsWith(searchString[, length])

const str = "To be, or not to be, that is the question.";

alert(str.endsWith("question."));  // true
alert(str.endsWith("to be"));      // false
alert(str.endsWith("to be", 19));  // true
```

* String.prototype.includes

> 判断当前字符串是否以包含一个给定的子字符串，区分大小写

```ts
// str.includes(searchString[, position])

const str = "To be, or not to be, that is the question.";

console.log(str.includes("To be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false
```

* String.prototype.repeat

> 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本

```ts
// str.repeat(count)
"abc".repeat(-1)     // RangeError: repeat count must be positive and less than inifinity
"abc".repeat(0)      // ""
"abc".repeat(1)      // "abc"
"abc".repeat(2)      // "abcabc"
```

### 运算符扩展

`...` 运算符由上下文环境决定是展开运算符 `Spread operator` 还是剩余运算符 `Rest operator`

#### 展开运算符

展开运算符允许一个表达式在某处展开。展开运算符在多个参数（用于函数调用）或多个元素（用于数组字面量）或者多个变量（用于解构赋值）的地方可以使用

* 函数调用-展开参数

```ts
const sum = (a, b, c) => a + b + c

const args = [ 1, 2, , 3 ]

sum(...args)
```

* 数组构建

```ts
const arr = [ 1, 2, 3 ]

const args = [ ...arr, ...'456', 7 ]
```

#### 剩余运算符

> 剩余运算符和扩展运算符的区别就是，剩余运算符会收集这些集合，放到右边的数组中，扩展运算符是将右边的数组拆分成元素的集合，它们是相反的

* 函数 rest 参数

```ts
// rest 形参
const fn = (...rest) => console.log(rest)
```

* 解构赋值

> 剩余运算符可以和数组的解构赋值一起使用，但是必须放在最后一个，因为剩余运算符的原理其实是利用了数组的迭代器，它会消耗3个点后面的数组的所有迭代器

```ts
const arr = [ 1, 2, 3, 4, 5 ]

const [ one, two, ...other ] = arr
```

### for...of

`for...of` 允许遍历一个含有 `iterator` 接口的数据结构并且返回各项的值

和 `ES3` 中的 `for...in` 的区别如下

* `for...of` 只能用在可迭代对象上，获取的是迭代器返回的 `value值`，`for...in` 可以获取所有对象的 `键名`

* `for...in` 会遍历对象的整个原型链，性能非常差不推荐使用,而 `for...of` 只遍历当前对象不会遍历它的原型链

* 对于数组的遍历，`for...in` 会返回数组中所有可枚举的属性(包括原型链上可枚举的属性)，`for...of` 只返回数组的下标对应的属性值

```ts
let arr = [ { a: 1 }, { a: 2 }, { a: 3 } ]

for ({ a: aa } of arr) {
  console.log(aa)
}
```

### 控制抽象对象

[有 Iteration、GeneratorFunction、Generator、Promise 四大内容](https://262.ecma-international.org/6.0/#sec-control-abstraction-objects)

#### Promise

[`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)
是异步编程的一种解决方案，其实是一个构造函数，有 `all`、`race`、`reject`、`resolve` 静态方法，原型上有 `then`、`catch` 方法

`Promise` 对象有两个特点：

* 对象的状态不受外界影响：`promise` 对象代表一个异步操作看，有 `pending`（进行中），`fulfilled`（已成功）和 `rejected`（已失败），对象的状态只能由异步操作结果决定，其他的操作不会产生影响，这也是 `promise`（承诺）名字的由来，表示其他手段不能改变

* 一旦状态改变，就不会再发生改变：`promise` 对象状态的改变只有两种可能，由 `pending` 到 `fulfilled` 或者由 `pending` 到 `rejected`，只要这两种情况发生了，状态就凝固了，不会再改变了，会一直保持这个结果，这时处于 `resolved`（已定型），状态发生来改变，给
  `promise` 对象添加回调函数也会立即得到这个值，这与事件（`event`）的错过了就再也得不到了有着很大的区别。

##### 静态方法

* Promise.all

> 等待所有都完成（或第一个失败）

```ts
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([ p1, p2, p3 ]).then(values => {
  console.log(values); // [3, 1337, "foo"]
});
```

* Promise.race

> 只要给定的迭代中的第一个 `Promise` 解决或拒绝

```ts
const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one')
})
const p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two')
})

Promise.race([ p1, p2 ]).then((value) => {
  console.log(value) // "two"
  // 两个都完成，但 p2 更快
})
```

* Promise.reject

> 返回一个被拒绝的 `Promise` 对象

```ts
Promise.reject(new Error('fail'))
// 等同于：
new Promise((resolve, reject) => {
  reject(new Error('fail'))
})

Promise.reject(new Error('fail'))
  .then(
    (res) => {
      // not called
    },
    (error) => {
      console.error(error) // Stacktrace
    },
  )
```

* Promise.resolve

> 返回一个以给定值解析后的 `Promise` 对象

```ts
Promise.resolve('Success')
// 等同于：
new Promise((resolve, reject) => {
  resolve('Success')
})

Promise.resolve('Success')
  .then(
    (value) => {
      console.log(value) // "Success"
    },
    (value) => {
      // 不会被调用
    },
  )
```

##### 实例方法

* Promise.prototype.then

> promise 被兑现和被拒绝状态的回调函数

* Promise.prototype.catch

> `Promise` 被拒绝状态的回调函数
>
> > `catch` 的另一个作用是如果 `resolve` 的执行过程中出现异常，将会进入 `catch` 方法，不会报错卡死 `js`

#### Iteration

迭代协议并不是新的内置实现或语法，而是协议。这些协议可以被任何遵循某些约定的对象来实现。具体分为:

* 可迭代协议允许 `JavaScript` 对象定义或定制它们的迭代行为，例如，在一个 `for..of`
  结构中，哪些值可以被遍历到。一些内置类型同时是内置的可迭代对象，并且有默认的迭代行为，比如 `Array` 或者 `Map`，而其他内置类型则不是（比如 `Object`）

* 迭代器协议定义了产生一系列值（无论是有限个还是无限个）的标准方式，当值为有限个时，所有的值都被迭代完毕后，则会返回一个默认返回值。

#### Generator

[`Generator`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator)
对象由生成器函数返回并且它符合 [可迭代协议和迭代器协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)。

`Generator` 的声明与一般函数类似，只是多了一个 `*`，内部有 `yield` 关键字，迭代器有一个 `next` 方法，每次执行会返回一个对象，对象有两个属性，一个是 `value`
表示返回的值，另一个是布尔值 `done`，表示迭代是否完成

> `Generator` 构造函数并不是全局可用。`Generator` 的实例必须从生成器函数返回：

* 生成器函数：`function* () {}`

```ts
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```

#### GeneratorFunction

生成器函数实际上都是 `GeneratorFunction` 对象

```ts
const GeneratorFunction = function* () {}.constructor;
const g = new GeneratorFunction("a", "yield a * 2");
const iterator = g(10);
console.log(iterator.next().value); // 20
```

### Module

一个独立文件就是一个模块，该文件内部的所有变量，外部无法获取。

* `ES6` 模块自动开启严格模式，不管你有没有在模块头部加上 `use strict;`

* 模块中可以导入（`import`）和导出（`export`、`export default`）各种类型的变量，如函数，对象，字符串，数字，布尔值，类等。

* 每个模块都有自己的上下文，每一个模块内声明的变量都是局部变量，不会污染全局作用域。

* 每一个模块只加载一次（是单例的），若再去加载同目录下同文件，直接从内存中读取。

* `import` 导入的变量都是只读的，`import` 命令具有提升效果，会提升到整个模块的头部，首先执行

> 一个模块中，`export` 支持导出多个但是导入时使用导出时的名字而且要使用 `{}`，`export default` 只能有一个但是导入时不一定使用导入时的名字
>
> > `as` 关键字可实现对模块内变量名的改写，但不能用于 `export default` 导出的变量

```ts
// a.ts
export const name = 'Yanlu'

export const age = 18

export default function hello() {
  return 'hello'
}
```

```ts
// b.ts
import hello, { name, age as myAge } from 'a.js'
import * as aModule from 'a.js'
```

### Proxy、Reflect

`Proxy`、`Reflect` 通常一起使用

#### Proxy

[`Proxy`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。

```ts
const handler = {
  get: function (obj, prop) {
    return prop in obj ? obj[prop] : 37
  },
}

const p = new Proxy({}, handler)
p.a = 1
p.b = undefined

console.log(p.a, p.b)      // 1, undefined
console.log('c' in p, p.c) // false, 37
```

#### Reflect

[`Reflect`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
是一个内置的对象，它提供拦截 `JavaScript` 操作的方法。这些方法与 `proxy handler` 的方法相同。`Reflect` 不是一个函数对象，因此它是不可构造的。

```ts
const duck = {
  name: 'Maurice',
  color: 'white',
  greeting: function () {
    console.log(`Quaaaack! My name is ${ this.name }`);
  }
}

Reflect.has(duck, 'color');
// true
Reflect.has(duck, 'haircut');
// false
```

### 集合操作

#### Map

[`Map`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)
对象保存键值对，并且能够记住键的原始插入顺序。任何值（对象或者基本类型）都可以作为一个键或一个值。

```ts
const myMap = new Map();

const keyString = 'a string';
const keyObj = {};
const keyFunc = function () {};

// 添加键
myMap.set(keyString, "和键'a string'关联的值");
myMap.set(keyObj, "和键 keyObj 关联的值");
myMap.set(keyFunc, "和键 keyFunc 关联的值");

console.log(myMap.size); // 3

// 读取值
console.log(myMap.get(keyString)); // "和键'a string'关联的值"
console.log(myMap.get(keyObj)); // "和键 keyObj 关联的值"
console.log(myMap.get(keyFunc)); // "和键 keyFunc 关联的值"

console.log(myMap.get('a string')); // "和键'a string'关联的值"，因为 keyString === 'a string'
console.log(myMap.get({})); // undefined，因为 keyObj !== {}
console.log(myMap.get(function () {})); // undefined，因为 keyFunc !== function () {}
```

#### Set

[`Set`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)
对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。

> `Set` 对象是值的集合，你可以按照插入的顺序迭代它的元素。`Set` 中的元素只&#x4F1A;***出现一次***，即 `Set` 中的元素是唯一的
>
> > `NaN` 和 `undefined` 都可以被存储在 `Set` 中，`NaN` 之间被视为相同的值（`NaN` 被认为是相同的，尽管 `NaN !== NaN`）

```ts
let mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, "some text" ]
```

#### WeakMap

[`WeakMap`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。

> 不支持迭代

#### WeakSet

[`WeakSet`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
对象允许你将弱保持对象存储在一个集合中，只能是对象的集合

> 不支持迭代

### Symbol

[`symbol`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
是一种基本数据类型，`Symbol()` 返回的 `symbol` 值都是唯一的。一个 `symbol` 值能作为对象属性的标识符；这是该数据类型仅有的目的。

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

## [ES2022(ES13)](https://tc39.es/ecma262/2022/)

### Class 扩展

* 类字段定义

> 类字段可以在类的顶层被定义和初始化。在这之前，类的字段定义和初始化是在类的构造函数中完成的

:::tip
类公有字段通过 `Object.defineProperty` 定义
:::

```ts
class Person {
  name;
  age: 18;
}
```

* 类私有域

> 类属性在默认情况下是公有的，但可以使用增加哈希前缀 `#` 的方法来定义私有类属性

1. 私有字段：包括私有**实例字段**和私有**静态字段**

2. 私有方法：包括私有**实例方法**和私有**静态方法**

:::tip
`in` 操作符，如果指定的属性/字段在指定的对象/类中，则返回真，并且也能判断私有字段
::::

```ts
class Person {
  #privateField;
  static #PRIVATE_STATIC_FIELD;
  
  #privateMethod() {
    return 'hello world';
  }
  
  static #privateStaticMethod() {
    return 42;
  }
  
  static hasAttr() {
    return this.#PRIVATE_STATIC_FIELD in this
  }
}
```

* 类静态域

> 在类字段和私有字段基础上，增加了静态公共字段、静态私有方法和 静态私有字段

```ts
class Person {
  static name;
  
  static #age;
  
  static #getAge() {
    return this.#age
  }
}
```

* 静态块

> 可以访问修改私有静态字段和方法

```ts
class Counter {
  static #baseNum = 100;
  
  static getDoubleBaseNum() {
    return this.#baseNum * 2;
  }
  
  static {
    this.#baseNum = 200;
  }
}

console.log(Counter.getDoubleBaseNum());  // 400
```

### 数组扩展

* Array.prototype.at

> 接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。

```ts
// arr.at(index)

const cart = [ 'apple', 'banana', 'pear' ];

console.log(cart.at(0)) // apple
console.log(cart.at(-1)) // pear
```

### 字符串扩展

* String.prototype.at

> 接受一个整数值，并返回一个新的 `String`，该字符串由位于指定偏移量处的单个 `UTF-16` 码元组成。该方法允许正整数和负整数。负整数从字符串中的最后一个字符开始倒数。

```ts
// str.at(index)

const myString = 'Every green bus drives fast.';

console.log(myString.at(0)) // E
console.log(myString.at(-1)) // .
```

### 正则扩展

* `/d` 修饰符

> 利用 `/d` 标识符来表示想要匹配字符串的开始和结束索引
>
> > 通过 `/d` 标识符，匹配结果会多出一个属性 `.indices`

```ts
const re1 = /a+(z)?/d;

const s1 = "xaaaz";
const m1 = re1.exec(s1);

console.log(m1.indices[0]);               // [1, 5]
console.log(s1.slice(...m1.indices[0]));  // 'aaaz'
console.log(m1.indices[1]);               // [4, 5]
console.log(s1.slice(...m1.indices[1]));  // 'z'
```

### 对象扩展

* Object.hasOwn

> 如果指定的对象自身有指定的属性，则静态方法` Object.hasOwn()` 返回 `true`。如果属性是继承的或者不存在，该方法返回 `false`
>
> > `Object.hasOwn()` 旨在取代 `Object.prototype.hasOwnProperty()`

```ts
// Object.hasOwn(instance, prop)

const example = {};
Object.hasOwn(example, 'prop');   // false - 'prop' has not been defined

example.prop = 'exists';
Object.hasOwn(example, 'prop');   // true - 'prop' has been defined

example.prop = null;
Object.hasOwn(example, 'prop');   // true - own property exists with value of null

example.prop = undefined;
Object.hasOwn(example, 'prop');   // true - own property exists with value of undefined
```

### Error 扩展

* Error cause

> `Error` 实例中的 `cause` 数据属性指示导致该错误的具体原始原因。

在捕获错误时，我们可能会使用更具体或更加实用的信息对错误进行包装，再将其重新抛出。`cause` 属性就用于这一场景，以便仍然可以访问原始的错误。

:::tip
🎉 `Error cause` 是第一个由中国公司（阿里巴巴 `TC39` 代表 `legendecas`）代表主导推动的 `JavaScript` 达到 `stage 4` 的新特性提案！
:::

```ts
try {
  connectToDatabase();
} catch ( err ) {
  throw new Error('Connecting to database failed.', { cause: err });
}
```

### Promise 扩展

* 顶层 await

> 在模块的顶层，可以单独使用关键字 `await`（异步函数的外面）。也就是说一个模块如果包含用了 `await` 的子模块，该模块就会等待该子模块，这一过程并不会阻塞其他子模块

:::warning
在 `Class` 代码块或非 `async` 函数仍不支持
:::

任何文件只要导入这个模块，后面的代码就会等待，直到 `fetch` 完成。

```ts
// fetch request
const colors = fetch("../data/colors.json").then((response) => response.json());

export default await colors;
```

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
