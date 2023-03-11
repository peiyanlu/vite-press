# ES6+

> `ES6` 是 [ECMA](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/) 为 `JavaScript` 制定的第6个标准版本。
> `ES6` 既是一个历史名词也是一个泛指，含义是 `5.1` 版本以后的JavaScript下一代标准


## ES6(2015)

[ES6](https://262.ecma-international.org/6.0/)
增加了大量内容，主要有：变量声明、函数扩展、字符串扩展、数组扩展、集合操作、异步编程、迭代 等

### 声明和变量声明

包括使用 `let、const` 声明变量和对 `对象、数组` 解构绑定

#### 变量声明

`let` 和 `const`，用于解决使用 `var` 声明常量时存在的问题：不能定义常量，可以重复声明变量、存在声明提升、不支持块级作用域的问题

> 使用const可以定义常量，不能给常量重新赋值，但是如果是引用类型的话可以修改；

剖析暂时性死区的原理，其实let/const同样也有提升的作用，但是和var的区别在于

* `var` 在创建时就被初始化，并且赋值为 `undefined`
* `let/const`
  在进入块级作用域后，会因为提升的原因先创建，但不会被初始化，直到声明语句执行的时候才被初始化，初始化的时候如果使用let声明的变量没有赋值，则会默认赋值为undefined，而const必须在初始化的时候赋值。而创建到初始化之间的代码片段就形成了暂时性死区

> > 由let/const声明的变量，当它们包含的词法环境(Lexical Environment)被实例化时会被创建，但只有在变量的词法绑定(
> > LexicalBinding)已经被求值运算后，才能够被访问

```ts
let a = 'let' // 变量
const b = 'const' // 常量
```

#### 解构绑定

解构赋值语法是JavaScript的一种表达式，可以方便的从数组或者对象中快速提取值赋给定义的变量。

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

> 按 key 解构

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

#### Method 定义

> 省略 function 关键字

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

> 构造函数语法糖，增强 ES5 构造函数
> > extends，constructor，super，static

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

增强了字面量定义对象，更加便捷；扩展了对象的 `静态方法`

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

* Object.is()

> 方法判断两个值是否为同一个值

```ts
Object.is(25, 25);                // true
Object.is('foo', 'foo');          // true
Object.is('foo', 'bar');          // false
```

* Object.setPrototypeOf(obj, prototype)

> 设置一个指定的对象的原型（即，内部 [[Prototype]] 属性）到另一个对象或 null。

```ts
function Human(name, level) {
  this.name = name
  this.level = level
}

function SuperHero(name, level) {
  Human.call(this, name, level)
}

Object.setPrototypeOf(SuperHero.prototype, Human.prototype)
```

* Object.assign()

> 将所有可枚举（Object.propertyIsEnumerable() 返回 true）的自有（Object.hasOwnProperty() 返回
> true）属性从一个或多个源对象复制到目标对象，返回修改后的对象。
> > 浅拷贝

```ts
let obj1 = { a: 0, b: { c: 0 } };
let obj2 = Object.assign({}, obj1);
console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}
```

### 数组扩展

扩展了数组的 `静态方法` 和 `实例方法`

#### 静态方法

* Array.from

> 从数组类对象或可迭代对象创建一个新的 `Array` 实例

```ts
Array.from(arrayLike, (element) => { /* … */ })
Array.from(arrayLike, (element, index) => { /* … */ }, thisArg)
```

* Array.of

> 通过可变数量的参数创建一个新的 `Array` 实例，而不考虑参数的数量或类型

```ts
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

> 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。

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

> 返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1

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

新增了 `模板字符串`；扩展了字符串的 `实例方法`

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

> 判断当前字符串是否是以另外一个给定的子字符串结尾

```ts
// str.endsWith(searchString[, length])

const str = "To be, or not to be, that is the question.";

alert(str.endsWith("question."));  // true
alert(str.endsWith("to be"));      // false
alert(str.endsWith("to be", 19));  // true
```

* String.prototype.endsWith

> 判断当前字符串是否以另外一个给定的子字符串开头

```ts
// str.startsWith(searchString[, position])

const str = "To be, or not to be, that is the question.";

alert(str.startsWith("To be"));         // true
alert(str.startsWith("not to be"));     // false
alert(str.startsWith("not to be", 10)); // true

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

### Spread & Rest 运算符

由上下文环境决定是 spread 还是 rest

#### 扩展操作符(spread operator)

扩展操作符（spread operator）允许一个表达式在某处展开。扩展操作符在多个参数（用于函数调用）或多个元素（用于数组字面量）或者多个变量（用于解构赋值）的地方可以使用

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

#### 剩余运算符(rest operator)

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
是异步编程的一种解决方案，其实是一个构造函数，有 all、race、reject、resolve 静态方法，原型上有 then、catch 方法

Promise对象有两个特点：

*

对象的状态不受外界影响：promise对象代表一个异步操作看，有pending（进行中），fulfilled（已成功）和rejected（已失败），对象的状态只能由异步操作结果决定，其他的操作不会产生影响，这也是promise（承诺）名字的由来，表示其他手段不能改变

*

一旦状态改变，就不会再发生改变：promise对象状态的改变只有两种可能，由pending到fulfilled或者由pending到rejected，只要这两种情况发生了，状态就凝固了，不会再改变了，会一直保持这个结果，这时处于resolved（已定型），状态发生来改变，给promise对象添加回调函数也会立即得到这个值，，这与事件（event）的错过了就再也得不到了有着很大的区别。

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

> 只要给定的迭代中的第一个 promise 解决或拒绝

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

> 返回一个被拒绝的 Promise 对象

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

> 返回一个以给定值解析后的 Promise 对象

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

> promise 被拒绝状态的回调函数
> > catch 的另一个作用是如果 resolve 的执行过程中出现异常，将会进入 catch 方法，不会报错卡死js

#### Iteration

***迭代协议***并不是新的内置实现或语法，而是协议。这些协议可以被任何遵循某些约定的对象来实现。具体分为:

* ***可迭代协议*** 允许 `JavaScript` 对象定义或定制它们的迭代行为，例如，在一个 `for..of`
  结构中，哪些值可以被遍历到。一些内置类型同时是内置的可迭代对象，并且有默认的迭代行为，比如`Array` 或者 `Map`，而其他内置类型则不是（比如 `Object`）
* ***迭代器协议*** 定义了产生一系列值（无论是有限个还是无限个）的标准方式，当值为有限个时，所有的值都被迭代完毕后，则会返回一个默认返回值。

#### Generator

[`Generator`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Generator)
对象由生成器函数返回并且它符合 [可迭代协议和迭代器协议](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Iteration_protocols)。

`Generator` 的声明与一般函数类似，只是多了一个 `*`，内部有 `yield` 关键字，迭代器有一个 `next` 方法，每次执行会返回一个对象，对象有两个属性，一个是 `value`
表示返回的值，另一个是布尔值 `done`，表示迭代是否完成

> Generator 构造函数并不是全局可用。Generator 的实例必须从生成器函数返回：

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

`生成器函数` 实际上都是 `GeneratorFunction` 对象

```ts
const GeneratorFunction = function* () {}.constructor;
const g = new GeneratorFunction("a", "yield a * 2");
const iterator = g(10);
console.log(iterator.next().value); // 20
```

### Module

一个独立文件就是一个模块，该文件内部的所有变量，外部无法获取。

* ES6模块自动开启严格模式，不管你有没有在模块头部加上 `use strict;`
* 模块中可以导入（`import`）和导出（`export`、`export default`）各种类型的变量，如函数，对象，字符串，数字，布尔值，类等。
* 每个模块都有自己的上下文，每一个模块内声明的变量都是局部变量，不会污染全局作用域。
* 每一个模块只加载一次（是单例的），若再去加载同目录下同文件，直接从内存中读取。
* `import` 导入的变量都是只读的，import命令具有提升效果，会提升到整个模块的头部，首先执行

> 一个模块中，`export` 支持导出多个但是导入时使用导出时的名字而且要使用 `{}`，`export default` 只能有一个但是导入时不一定使用导入时的名字
> > `as` 关键字可实现对模块内变量名的改写

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
```

### Proxy、Reflect

Proxy、Reflect 通常一起使用

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
是一个内置的对象，它提供拦截 JavaScript 操作的方法。这些方法与 proxy handler 的方法相同。Reflect 不是一个函数对象，因此它是不可构造的。

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

> `Set` 对象是值的集合，你可以按照插入的顺序迭代它的元素。`Set` 中的元素只会***出现一次***，即 `Set` 中的元素是唯一的
> > `NaN` 和 `undefined` 都可以被存储在 Set 中，NaN 之间被视为相同的值（NaN 被认为是相同的，尽管 NaN !== NaN）

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
是一种基本数据类型，`Symbol()` 返回的 symbol 值都是唯一的。一个 symbol 值能作为对象属性的标识符；这是该数据类型仅有的目的。

## ES2016(ES7)

### 数组扩展

* Array.prototype.includes

> 用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false

```ts
// arr.includes(searchElement[, fromIndex])

[ 1, 2, 3 ].includes(2);     // true
[ 1, 2, 3 ].includes(4);     // false
[ 1, 2, 3 ].includes(3, 3);  // false
[ 1, 2, 3 ].includes(3, -1); // true
[ 1, 2, NaN ].includes(NaN); // true
```

### 运算符

* 幂运算符

```ts
console.log(Math.pow(2, 10)); // 1024
console.log(2 ** 10); // 1024
```

## ES2017(ES8)

### 对象扩展

* Object.values


* Object.entries

* Object.getOwnPropertyDescriptors

### 字符串扩展

* String.prototype.padStart

* String.prototype.padEnd

### Promise增强

* async/await

## ES2018(ES9)

### Spread & Rest 运算符

增加了对对象的支持

```ts
const obj = { name: 'Yanlu' }

const info = { ...obj, ...'name' }

const { name, ...other } = info
```

### 字符串扩展

放松对标签模板里字符串转义的限制, 遇到不合法的字符串转义会返回undefined，并且从raw上可获取原字符串

::: warning
在模板字符串中，如果输入无效的unicode字符，还是会报错
:::

### for await of

### Promise扩展

* Promise.prototype.finally

## ES2019(ES10)

### 对象扩展

* Object.fromEntries

### 数组扩展

* Array.prototype.flat
* Array.prototype.flatMap

### 字符串扩展

* String.prototype.trimStart
* String.prototype.trimEnd

### try/catch

可选的 Catch Binding

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

### Symbol扩展

* Symbol.prototype.description

### JSON增强

* JSON.stringify

> 修复了对于一些超出范围的 Unicode 展示错误的问题，用转义字符的方式来处理这部分字符（0xD800–0xDFFF）而非编码的方式

### 函数增强

* Function.prototype.toString

> 以前函数的toString方法来自Object.prototype.toString()，现在的 Function.prototype.toString() 方法返回一个表示当前函数源代码的字符串。以前只会返回这个函数，不包含注释、空格等

## ES2020(ES11)

### 运算符扩展

* 空值合并操作符

> `??` 是一个逻辑操作符，当左侧的操作数为 null或者undefined时，返回其右侧操作数，否则返回左侧操作数

```ts
const foo = undefined ?? "foo"
const bar = null ?? "bar"
console.log(foo) // foo
console.log(bar) // bar
```

* 可选链 Optional chaining

> 可选链操作符 `?.` 允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效

```ts
const obj = {
  name: 'Ynalu',
  say(){
    return 'hello'
  }
}

console.log(obj?.name)
console.log(obj?.say?.())
```

### globalThis

`globalThis` 提供了一个标准的方式来获取不同环境下的全局 `this` 对象（也就是全局对象自身）

### 

* BigInt

> `BigInt` 是一种内置对象，它提供了一种方法来表示大于 `2的53次方 \- 1` 的整数，这原本是 Javascript中可以用 Number 表示的最大数字。BigInt 可以表示任意大的整数。

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

### Promise扩展

* Promise.allSettled

### Module扩展

* Dynamic Import
> 
```ts
import(./a.js)
```

## ES2021(ES12)

### 运算符

* &&=

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

* ||=

> 逻辑或赋值 `x ||= y` 运算仅在 `x` 为 `false` 时赋值

```ts
x ||= y // x || (x = y)

const a = { duration: 50, title: '' };

a.duration ||= 10;
console.log(a.duration); // 50

a.title ||= 'title is empty.';
console.log(a.title); // "title is empty"
```
* ??=

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

### 数字增强

* 数字分隔符

不能放在数值的最前面（leading）或最后面（trailing）。
不能两个或两个以上的分隔符连在一起。
小数点的前后不能有分隔符。
科学计数法里面，表示指数的e或E前后不能有分隔符。

```ts
let budget = 1_000_000_000_000;
budget === 10 ** 12 // true
```

### Promise扩展

* Promise.any

### WeakRef

## ES2022(ES13)

## ES2023(ES14)
