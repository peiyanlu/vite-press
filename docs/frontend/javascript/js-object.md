# 对象 Object

## ES5.1及更早

[在 ECMA 查看](https://262.ecma-international.org/5.1/#sec-15.2)

### Object()

> 构造函数将给定的值包装为一个新对象。

* 语法

```markdown
Object([value])
new Object([value])
```

* 示例

```ts
Object()

new Object()
```

### Object.getPrototypeOf

> 返回指定对象的原型（内部 `[[Prototype]]` 属性的值）。

* 语法

```markdown
Object.getPrototypeOf(object)
```

* 示例

```ts
const proto = {};
const obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true

const reg = /a/;
Object.getPrototypeOf(reg) === RegExp.prototype; // true
```

### Object.getOwnPropertyDescriptor

> 返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性）

* 语法

```markdown
Object.getOwnPropertyDescriptor(obj, prop)
```

* 示例

```ts
let o, d;

o = { get foo() { return 17; } };
d = Object.getOwnPropertyDescriptor(o, "foo");
// d {
//   configurable: true,
//   enumerable: true,
//   get: /*the getter function*/,
//   set: undefined
// }
```

### Object.getOwnPropertyNames

> 返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括 `Symbol` 值作为名称的属性）组成的数组。

* 语法

```markdown
Object.getOwnPropertyNames(obj)
```

* 示例

```ts
const arr = [ "a", "b", "c" ];
console.log(Object.getOwnPropertyNames(arr).sort()); // ["0", "1", "2", "length"]

// 类数组对象
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.getOwnPropertyNames(obj).sort()); // ["0", "1", "2"]
```

### Object.create

> 用于创建一个新对象，使用现有的对象来作为新创建对象的原型（`prototype`）。

* 语法

```markdown
Object.create(proto[, propertiesObject])
```

* 示例

```ts
// Shape - superclass
function Shape() {
  this.x = 0;
  this.y = 0;
}

// superclass method
Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);

const o = Object.create({}, { p: { value: 42 } });

// by default properties ARE NOT writable,
// enumerable or configurable:
o.p = 24;
o.p;
// 42
```

### Object.defineProperty

> 直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。

* 语法

```markdown
Object.defineProperty(obj, prop, descriptor)
```

* 示例

```ts
const o = {}; // 创建一个新对象

// 在对象中添加一个属性与数据描述符的示例
Object.defineProperty(o, "a", {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true
});
```

### Object.defineProperties

> 直接在一个对象上定义新的属性或修改现有属性，并返回该对象。

* 语法

```markdown
Object.defineProperties(obj, props)
```

* 示例

```ts
const obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
  // etc. etc.
});
```

### Object.seal

> 封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变。

* 语法

```markdown
Object.seal(obj)
```

* 示例

```ts
let obj = {
  prop: function () {},
  foo: 'bar'
};

// 可以添加新的属性
// 可以更改或删除现有的属性
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

let o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // === true

// 仍然可以修改密封对象的属性值
obj.foo = 'quux';


// 但是你不能将属性重新定义成为访问器属性
// 反之亦然
Object.defineProperty(obj, 'foo', {
  get: function () { return 'g'; }
}); // throws a TypeError

// 除了属性值以外的任何变化，都会失败。
obj.quaxxor = 'the friendly duck';
// 添加属性将会失败
delete obj.foo;
// 删除属性将会失败

// 在严格模式下，这样的尝试将会抛出错误
function fail() {
  'use strict';
  delete obj.foo; // throws a TypeError
  obj.sparky = 'arf'; // throws a TypeError
}

fail();

// 通过 Object.defineProperty 添加属性将会报错
Object.defineProperty(obj, 'ohai', {
  value: 17
}); // throws a TypeError
Object.defineProperty(obj, 'foo', {
  value: 'eit'
}); // 通过 Object.defineProperty 修改属性值
```

### Object.freeze

> 冻结一个对象。一个被冻结的对象再也不能被修改；

冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。`freeze()`
返回和传入的参数相同的对象。

* 语法

```markdown
Object.freeze(obj)
```

* 示例

```ts
let obj = {
  prop: function () {},
  foo: 'bar'
};

// 新的属性会被添加，已存在的属性可能
// 会被修改或移除
obj.foo = 'baz';
obj.lumpy = 'woof';
delete obj.prop;

// 作为参数传递的对象与返回的对象都被冻结
// 所以不必保存返回的对象（因为两个对象全等）
let o = Object.freeze(obj);

o === obj; // true
Object.isFrozen(obj); // === true

// 现在任何改变都会失效
obj.foo = 'quux'; // 静默地不做任何事
// 静默地不添加此属性
obj.quaxxor = 'the friendly duck';

// 在严格模式，如此行为将抛出 TypeErrors
function fail() {
  'use strict';
  obj.foo = 'sparky'; // throws a TypeError
  delete obj.quaxxor; // 返回 true，因为 quaxxor 属性从来未被添加
  obj.sparky = 'arf'; // throws a TypeError
}

fail();

// 试图通过 Object.defineProperty 更改属性
// 下面两个语句都会抛出 TypeError.
Object.defineProperty(obj, 'ohai', { value: 17 });
Object.defineProperty(obj, 'foo', { value: 'eit' });

// 也不能更改原型
// 下面两个语句都会抛出 TypeError.
Object.setPrototypeOf(obj, { x: 20 })
obj.__proto__ = { x: 20 }
```

### Object.preventExtensions

> 让一个对象变的不可扩展，也就是永远不能再添加新的属性。

* 语法

```markdown
Object.preventExtensions(obj)
```

* 示例

```ts
// Object.preventExtensions 将原对象变的不可扩展，并且返回原对象。
const obj = {};
const obj2 = Object.preventExtensions(obj);
obj === obj2;  // true

// 字面量方式定义的对象默认是可扩展的。
const empty = {};
Object.isExtensible(empty) //=== true

// ...但可以改变。
Object.preventExtensions(empty);
Object.isExtensible(empty) //=== false

// 使用 Object.defineProperty 方法为一个不可扩展的对象添加新属性会抛出异常。
const nonExtensible = { removable: true };
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, "new", { value: 8675309 }); // 抛出 TypeError 异常

// 在严格模式中，为一个不可扩展对象的新属性赋值会抛出 TypeError 异常。
function fail() {
  "use strict";
  nonExtensible.newProperty = "FAIL"; // throws a TypeError
}

fail();
```

### Object.isSealed

> 判断一个对象是否被密封。

* 语法

```markdown
Object.isSealed(obj)
```

* 示例

```ts
// 新建的对象默认不是密封的。
const empty = {};
Object.isSealed(empty); // === false

// 如果你把一个空对象变的不可扩展，则它同时也会变成个密封对象。
Object.preventExtensions(empty);
Object.isSealed(empty); // === true

// 但如果这个对象不是空对象，则它不会变成密封对象，因为密封对象的所有自身属性必须是不可配置的。
const hasProp = { fee: "fie foe fum" };
Object.preventExtensions(hasProp);
Object.isSealed(hasProp); // === false

// 如果把这个属性变的不可配置，则这个属性也就成了密封对象。
Object.defineProperty(hasProp, 'fee', {
  configurable: false
});
Object.isSealed(hasProp); // === true
```

### Object.isFrozen

> 判断一个对象是否被冻结。

* 语法

```markdown
Object.isFrozen(obj)
```

* 示例

```ts
// 一个对象默认是可扩展的，所以它也是非冻结的。
Object.isFrozen({}); // === false

// 一个不可扩展的空对象同时也是一个冻结对象。
let vacuouslyFrozen = Object.preventExtensions({});
Object.isFrozen(vacuouslyFrozen) //=== true;

// 一个非空对象默认也是非冻结的。
let oneProp = { p: 42 };
Object.isFrozen(oneProp) //=== false

// 让这个对象变的不可扩展，并不意味着这个对象变成了冻结对象，
// 因为 p 属性仍然是可以配置的 (而且可写的).
Object.preventExtensions(oneProp);
Object.isFrozen(oneProp) //=== false

// 此时，如果删除了这个属性，则它会成为一个冻结对象。
delete oneProp.p;
Object.isFrozen(oneProp) //=== true

// 一个不可扩展的对象，拥有一个不可写但可配置的属性，则它仍然是非冻结的。
let nonWritable = { e: "plep" };
Object.preventExtensions(nonWritable);
Object.defineProperty(nonWritable, "e", { writable: false }); // 变得不可写
Object.isFrozen(nonWritable) //=== false

// 把这个属性改为不可配置，会让这个对象成为冻结对象。
Object.defineProperty(nonWritable, "e", { configurable: false }); // 变得不可配置
Object.isFrozen(nonWritable) //=== true

// 一个不可扩展的对象，拥有一个不可配置但可写的属性，则它仍然是非冻结的。
let nonConfigurable = { release: "the kraken!" };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, "release", { configurable: false });
Object.isFrozen(nonConfigurable) //=== false

// 把这个属性改为不可写，会让这个对象成为冻结对象。
Object.defineProperty(nonConfigurable, "release", { writable: false });
Object.isFrozen(nonConfigurable) //=== true

// 一个不可扩展的对象，值拥有一个访问器属性，则它仍然是非冻结的。
let accessor = { get food() { return "yum"; } };
Object.preventExtensions(accessor);
Object.isFrozen(accessor) //=== false

// ...但把这个属性改为不可配置，会让这个对象成为冻结对象。
Object.defineProperty(accessor, "food", { configurable: false });
Object.isFrozen(accessor) //=== true

// 使用 Object.freeze 是冻结一个对象最方便的方法。
let frozen = { 1: 81 };
Object.isFrozen(frozen) //=== false
Object.freeze(frozen);
Object.isFrozen(frozen) //=== true

// 一个冻结对象也是一个密封对象。
Object.isSealed(frozen) //=== true

// 当然，更是一个不可扩展的对象。
Object.isExtensible(frozen) //=== false
```

### Object.isExtensible

> 判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）。

* 语法

```markdown
Object.isExtensible(obj)
```

* 示例

```ts
// 新对象默认是可扩展的。
let empty = {};
Object.isExtensible(empty); // === true

// ...可以变的不可扩展。
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// 密封对象是不可扩展的。
let sealed = Object.seal({});
Object.isExtensible(sealed); // === false

// 冻结对象也是不可扩展。
let frozen = Object.freeze({});
Object.isExtensible(frozen); // === false
```

### Object.keys

> 返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致。

* 语法

```markdown
Object.keys(obj)
```

* 示例

```ts
// 简单数组
const arr = [ 'a', 'b', 'c' ];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// 类数组对象
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// 具有随机键顺序的类数组对象
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo 是一个不可枚举的属性
const myObj = Object.create({}, {
  getFoo: {
    value() { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']
```

### toString

> 返回一个表示该对象的字符串。该方法旨在重写（自定义）派生类对象的**类型转换**的逻辑

* 语法

```markdown
obj.toString()
```

* 示例

```ts
const toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
// Math has its Symbol.toStringTag
toString.call(Math); // [object Math]

toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]
```

### toLocaleString

> 返回一个该对象的字符串表示。此方法被用于派生对象为了特定语言环境的目的（locale-specific purposes）而重载使用。

* 语法

```markdown
obj.toLocaleString();
```

### valueOf

> 将 `this` 值转换为一个对象。此方法旨在用于自定义**类型转换**的逻辑时，重写派生类对象。

* 语法

```markdown
obj.valueOf()
```

* 示例

```ts
const obj = { foo: 1 };
console.log(obj.valueOf() === obj); // true

console.log(Object.prototype.valueOf.call("primitive"));
// [String: 'primitive'] (a wrapper object)
```

### hasOwnProperty

> 返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。

* 语法

```markdown
obj.hasOwnProperty(prop)
```

* 示例

```ts
o = new Object();
o.hasOwnProperty('prop'); // 返回 false
o.prop = 'exists';
o.hasOwnProperty('prop'); // 返回 true
delete o.prop;
o.hasOwnProperty('prop'); // 返回 false
```

### isPrototypeOf

> 用于测试一个对象是否存在于另一个对象的原型链上。

* 语法

```markdown
prototypeObj.isPrototypeOf(object)
```

* 示例

```ts
function Foo() {}

function Bar() {}

function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

let baz = new Baz();

console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
```

### propertyIsEnumerable

> 返回一个布尔值，表示指定的属性是否可枚举。

* 语法

```markdown
obj.propertyIsEnumerable(prop)
```

* 示例

```ts
let o = {};
let a = [];
o.prop = 'is enumerable';
a[0] = 'is enumerable';

o.propertyIsEnumerable('prop'); // 返回 true
a.propertyIsEnumerable(0);      // 返回 true
```

## ES2015

[在 ECMA 查看](https://262.ecma-international.org/6.0/#sec-object-objects)

### Object.assign

> 将所有可枚举（`Object.propertyIsEnumerable()` 返回 `true`）的自有（`Object.hasOwnProperty()` 返回 `true`）属性从一个或多个源对象复制到目标对象，返回修改后的对象
> > 浅拷贝

* 语法

```markdown
Object.assign(target, ...sources)
```

* 示例

```ts
const obj = { a: 1 };
const copy = Object.assign({}, obj);
console.log(copy); // { a: 1 }

```

### Object.getOwnPropertySymbols

> 返回一个给定对象自身的所有 `Symbol` 属性的数组。

* 语法

```markdown
Object.getOwnPropertySymbols(obj)
```

* 示例

```ts
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

### Object.is

> 判断两个值是否为同一个值。

* 语法

```markdown
Object.is(value1, value2);
```

* 示例

```ts
// Case 1: Evaluation result is the same as using ===
Object.is(25, 25);                // true
Object.is('foo', 'foo');          // true
Object.is('foo', 'bar');          // false
Object.is(null, null);            // true
Object.is(undefined, undefined);  // true
Object.is(window, window);        // true
Object.is([], []);                // false
```

### Object.setPrototypeOf

> 设置一个指定的对象的原型（即，内部 `[[Prototype]]` 属性）到另一个对象或 `null`。

* 语法

```markdown
Object.setPrototypeOf(obj, prototype)
```

* 示例

```ts
function Human(name, level) {
  this.name = name;
  this.level = level;
}

function SuperHero(name, level) {
  Human.call(this, name, level);
}

Object.setPrototypeOf(SuperHero.prototype, Human.prototype);
```

## ES2017

### Object.values

> 返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用 `for...in` 循环的顺序相同（区别在于 `for-in` 循环枚举原型链中的属性）。

* 语法

```markdown
Object.values(obj)
```

* 示例

```ts
let obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// array like object
let obj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj1)); // ['a', 'b', 'c']

// array like object with random key ordering
// when we use numeric keys, the value returned in a numerical order according to the keys
let an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
let my_obj = Object.create({}, { getFoo: { value: function () { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values('foo')); // ['f', 'o', 'o']
```

### Object.entries

> 返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 `for...in` 循环遍历该对象时返回的顺序一致（区别在于 `for-in`
> 循环还会枚举原型链中的属性）。

* 语法

```markdown
Object.entries(obj)
```

* 示例

```ts
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const objA = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(objA)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

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
const objB = { a: 5, b: 7, c: 9 };
for (const [ key, value ] of Object.entries(objB)) {
  console.log(`${ key } ${ value }`); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(objB).forEach(([ key, value ]) => {
  console.log(`${ key } ${ value }`); // "a 5", "b 7", "c 9"
});
```

### Object.getOwnPropertyDescriptors

## ES2019

### Object.fromEntries

> 把键值对列表转换为一个对象。

* 语法

```markdown
Object.fromEntries(iterable);
```

* 示例

```ts
const map = new Map([ [ 'foo', 'bar' ], [ 'baz', 42 ] ]);
const obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }
```

## ES2022

### Object.hasOwn

> 如果指定的对象自身有指定的属性，则静态方法 `Object.hasOwn()` 返回 `true`。如果属性是继承的或者不存在，该方法返回 `false`。
> > 一个替代 `Object.prototype.hasOwnProperty` 的方案

* 语法

```markdown
hasOwn(instance, prop)
```

* 示例

```ts
const example = {};
Object.hasOwn(example, 'prop');   // false - 'prop' has not been defined

example.prop = 'exists';
Object.hasOwn(example, 'prop');   // true - 'prop' has been defined

example.prop = null;
Object.hasOwn(example, 'prop');   // true - own property exists with value of null

example.prop = undefined;
Object.hasOwn(example, 'prop');   // true - own property exists with value of undefined
```
