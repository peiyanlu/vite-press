# 对象 Object

## ES2015

## ES2017

### values

> 返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用 for...in 循环的顺序相同（区别在于 for-in 循环枚举原型链中的属性）。

* 语法

```markdown
Object.values(obj)
```

* 示例

```ts
var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// array like object with random key ordering
// when we use numeric keys, the value returned in a numerical order according to the keys
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo is property which isn't enumerable
var my_obj = Object.create({}, { getFoo: { value: function () { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// non-object argument will be coerced to an object
console.log(Object.values('foo')); // ['f', 'o', 'o']
```

### entries

> 返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in
循环还会枚举原型链中的属性）。

* 语法

```markdown
Object.entries(obj)
```

* 示例

```ts
const obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

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

## ES2019

### fromEntries

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

### hasOwn

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
