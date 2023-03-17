# 数组 Array

## ES5.1及更早

[在 ECMA 查看](https://262.ecma-international.org/5.1/#sec-15.4)

### Array()

> 构造函数用于创建 `Array` 对象

* 语法

```markdown
new Array(element0, element1, /* … ,*/ elementN)
new Array(arrayLength)

Array(element0, element1, /* … ,*/ elementN)
Array(arrayLength)

```

* 示例

```ts
const fruits = [ 'Apple', 'Banana' ];

console.log(fruits.length); // 2
console.log(fruits[0]);     // "Apple"

const fruits1 = new Array(2);

console.log(fruits1.length); // 2
console.log(fruits1[0]);     // undefined


let fruits2 = new Array('Apple', 'Banana');

console.log(fruits2.length); // 2
console.log(fruits2[0]);     // "Apple"
```

### Array.isArray

> 用于确定传递的值是否是一个 `Array`。

* 语法

```markdown
Array.isArray(value)
```

* 示例

```ts
// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([ 1 ]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'))
Array.isArray(new Array(3));
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype);

// 下面的函数调用都返回 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32))
Array.isArray({ __proto__: Array.prototype });
```

### toLocaleString

> 返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开

* 语法

```markdown
arr.toLocaleString([locales[, options]]);
```

* 示例

```ts
var prices = [ '￥7', 500, 8123, 12 ];
prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });

// "￥7,￥500,￥8,123,￥12"
```

### toString

> 返回一个字符串，表示指定的数组及其元素。

* 语法

```markdown
arr.toString()
```

* 示例

```ts
const array1 = [ 1, 2, 'a', '1a' ];

console.log(array1.toString());
// expected output: "1,2,a,1a"
```

### concat

> 合并两个或多个数组。此方法**不会更改现有数组**，而是返回一个新数组。

* 语法

```markdown
arr.concat([value0[, value1[, /* … ,*/ valueN]]])
```

* 示例

```ts
const letters = [ 'a', 'b', 'c' ];
const numbers = [ 1, 2, 3 ];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

### join

> 将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串，用逗号或指定的分隔符字符串分隔。如果数组只有一个元素，那么将返回该元素而不使用分隔符

* 语法

```markdown
arr.join([, separator])
```

* 示例

```ts
const a = [ 'Wind', 'Water', 'Fire' ];
a.join();      // 'Wind,Water,Fire'
a.join(', ');  // 'Wind, Water, Fire'
a.join(' + '); // 'Wind + Water + Fire'
a.join('');    // 'WindWaterFire'
```

### pop

> 数组中删除最后一个元素，并返回该元素的值。此方法**会更改数组的长度**。

* 语法

```markdown
arr.pop()
```

* 示例

```ts
const myFish = [ 'angel', 'clown', 'mandarin', 'sturgeon' ];

const popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin']

console.log(popped); // 'sturgeon'
```

### push

> 将一个或多个元素添加到数组的末尾，并返回该数组的新长度。

* 语法

```markdown
arr.push([element0[, element1[, /* … ,*/ elementN]]])
```

* 示例

```ts
var sports = [ "soccer", "baseball" ];
var total = sports.push("football", "swimming");

console.log(sports);
// ["soccer", "baseball", "football", "swimming"]

console.log(total);
// 4
```

### reverse

> 将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法**会改变原数组**。

* 语法

```markdown
arr.reverse()
```

* 示例

```ts
const a = [ 1, 2, 3 ];

console.log(a); // [1, 2, 3]

a.reverse();

console.log(a); // [3, 2, 1]
```

### shift

> 从数组中删除**第一个**元素，并返回该元素的值。此方法**更改数组的长度**。

* 语法

```markdown
arr.shift()
```

* 示例

```ts
let myFish = [ 'angel', 'clown', 'mandarin', 'surgeon' ];

console.log('调用 shift 之前：' + myFish);
// "调用 shift 之前：angel,clown,mandarin,surgeon"

var shifted = myFish.shift();

console.log('调用 shift 之后：' + myFish);
// "调用 shift 之后：clown,mandarin,surgeon"

console.log('被删除的元素：' + shifted);
// "被删除的元素：angel"
```

### slice

> 返回一个新的数组对象，这一对象是一个由 `begin` 和 `end` 决定的原数组的浅拷贝（包括 `begin`，不包括 `end`）。原始数组**不会被改变**。

* 语法

```markdown
slice([start[, end]])
```

* 示例

```ts
var fruits = [ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ];
var citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

### sort

> 用**原地算法**对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的 `UTF-16` 代码单元值序列时构建的

:::waring
由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。
:::

| compareFn(a, b) 返回值 | 排序顺序         |
|---------------------|--------------|
| > 0                 | a 在 b 后      |
| < 0                 | a 在 b 前      |
| === 0               | 保持 a 和 b 的顺序 |

* 语法

```markdown
arr.sort([, compareFn])
```

* 示例

```ts
const numberArray = [ 40, 1, 5, 200 ];

const compareNumbers = (a, b) => a - b

console.log(numberArray.sort()); // 1,200,40,5
console.log(numberArray.sort(compareNumbers)); // 1,5,40,200
```

### splice

> 通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法**会改变原数组**。

* 语法

```markdown
arr.splice([start[, deleteCount[, item1[, item2[, itemN]]]]])
```

* 示例

```ts
var myFish = [ 'angel', 'clown', 'mandarin', 'sturgeon' ];
var removed = myFish.splice(2, 0, 'drum', 'guitar');

// 运算后的 myFish: ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// 被删除的元素：[], 没有元素被删除
```

### unshift

> 将一个或多个元素添加到数组的**开头**，并返回该数组的**新长度**。

* 语法

```markdown
arr.unshift([element0[, element1[, /* … ,*/ elementN]]])
```

* 示例

```ts
const arr = [ 1, 2 ];

arr.unshift(0); // 调用的结果是 3，这是新的数组长度
// arr is [0, 1, 2]
```

### indexOf

> 返回在数组中可以找到给定元素的第一个索引，如果不存在，则返回 -1。

* 语法

```markdown
arr.indexOf(searchElement[, fromIndex])
```

* 示例

```ts
const array = [ 2, 9, 9 ];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
```

### lastIndexOf

> 返回指定元素（也即有效的 JavaScript 值或变量）在数组中的最后一个的索引，如果不存在则返回 -1。从数组的后面向前查找，从 fromIndex 处开始。

* 语法

```markdown
arr.lastIndexOf(searchElement[, fromIndex])
```

* 示例

```ts
const array = [ 2, 5, 9, 2 ];
let index = array.lastIndexOf(2);
// index is 3
index = array.lastIndexOf(7);
// index is -1
```

### every

> 测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。

:::warning
若收到一个空数组，此方法在任何情况下都会返回true。
:::

* 语法

```markdown
arr.every(callbackFn[, thisArg])
```

* 示例

```ts
const isBigEnough = (element, index, array) => element >= 10
  
  [12, 5, 8, 130, 44].every(isBigEnough);   // false
[ 12, 54, 18, 130, 44 ].every(isBigEnough); // true
```

:::warning
如果用一个空数组进行测试，在任何情况下它返回的都是false。
:::

### some

> 测试数组中是不是至少有 1 个元素通过了被提供的函数测试。它返回的是一个 Boolean 类型的值

* 语法

```markdown
arr.some(callbackFn[, thisArg])
```

* 示例

```ts
const isBiggerThan10 = (element, index, array) => element > 10
  
  [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[ 12, 5, 8, 1, 4 ].some(isBiggerThan10); // true
```

### forEach

> 对数组的每个元素执行一次给定的函数。

* 语法

```markdown
arr.forEach(callbackFn[, thisArg])
```

* 示例

```ts
const arraySparse = [ 1, 3, /* empty */, 7 ];
let numCallbackRuns = 0;

arraySparse.forEach((element) => {
  console.log({ element });
  numCallbackRuns++;
});

console.log({ numCallbackRuns });

// { element: 1 }
// { element: 3 }
// { element: 7 }
// { numCallbackRuns: 3 }
```

### map

> 创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。

* 语法

```markdown
arr.map(callbackFn[, thisArg])
```

* 示例

```ts
const numbers = [ 1, 4, 9 ];
const roots = numbers.map((num) => Math.sqrt(num));

// roots 现在是     [1, 2, 3]
// numbers 依旧是   [1, 4, 9]
```

### filter

> 创建给定数组一部分的**浅拷贝**，其包含通过所提供函数实现的测试的所有元素。

* 语法

```markdown
arr.filter(callbackFn[, thisArg])
```

* 示例

```ts
const isBigEnough = value => value >= 10

const filtered = [ 12, 5, 8, 130, 44 ].filter(isBigEnough);
// filtered is [12, 130, 44]
```

### reduce

> 对数组中的每个元素按序执行一个由您提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。

第一次执行回调函数时，不存在“上一次的计算结果”。如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。否则，数组索引为 0 的元素将被作为初始值 initialValue，迭代器将从第二个元素开始执行（索引为
1 而不是 0）。

* 语法

```markdown
arr.reduce(callbackFn[, initialValue])
arr.reduce((previousValue, currentValue, currentIndex, array) => { /* … */ }, initialValue)
```

* 示例

```ts
let total = [ 0, 1, 2, 3 ].reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
)
// total is 6
```

### reduceRight

> 受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。

* 语法

```markdown
arr.reduceRight(callbackFn[, initialValue])
arr.reduceRight((accumulator, currentValue, index, array) => { /* … */ }, initialValue)
```

* 示例

```ts
// 求一个数组中所有值的和
const sum = [ 0, 1, 2, 3 ].reduceRight((a, b) => a + b);
// sum is 6

// 扁平化（flatten）一个二维数组
const flattened = [ [ 0, 1 ], [ 2, 3 ], [ 4, 5 ] ].reduceRight((a, b) => a.concat(b), []);
// flattened is [4, 5, 2, 3, 0, 1]
```

## ES2015

[在 ECMA 查看](https://262.ecma-international.org/6.0/#sec-array-objects)

### Array.from

> 对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

* 语法

```markdown
Array.from(arrayLike[, mapFn[, thisArg]])
```

* 示例

```ts
Array.from('foo');
// [ "f", "o", "o" ]

const set = new Set([ 'foo', 'bar', 'baz', 'foo' ]);
Array.from(set);
// [ "foo", "bar", "baz" ]

const map = new Map([ [ 1, 2 ], [ 2, 4 ], [ 4, 8 ] ]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]
```

### Array.of

> 通过可变数量的参数创建一个新的 Array 实例，而不考虑参数的数量或类型。

* 语法

```markdown
Array.of([element0[, element1[, /* … ,*/ elementN]]])
```

* 示例

```ts
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
```

### copyWithin

> 浅复制数组的一部分到同一数组中的另一个位置，并返回它，**不会改变原数组的长度**。

* 语法

```markdown
arr.copyWithin([targetIndex[, start[, end]]])
```

* 示例

```ts
[ 1, 2, 3, 4, 5 ].copyWithin(-2)
  // [1, 2, 3, 1, 2]
  
  [1, 2, 3, 4, 5].copyWithin(0, 3)
// [4, 5, 3, 4, 5]
```

### entries

> 返回一个新的**数组迭代器**对象，该对象包含数组中每个索引的键/值对。

* 语法

```markdown
arr.entries()
```

* 示例

```ts
const array = [ "a", "b", "c" ];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']
```

### fill

> 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。**不包括终止索引**。

* 语法

```markdown
arr.fill(value[, start[, end]])
```

* 示例

```ts
[ 1, 2, 3 ].fill(4);               // [4, 4, 4]
[ 1, 2, 3 ].fill(4, 1);            // [1, 4, 4]
[ 1, 2, 3 ].fill(4, 1, 2);         // [1, 4, 3]
[ 1, 2, 3 ].fill(4, -3, -2);       // [4, 2, 3]
[ 1, 2, 3 ].fill(4, NaN, NaN);     // [1, 2, 3]
[ 1, 2, 3 ].fill(4, 3, 5);         // [1, 2, 3]
```

### find

> 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。

* 语法

```markdown
arr.find(callbackFn[, thisArg])
```

* 示例

```ts
const inventory = [
  { name: 'apples', quantity: 2 },
  { name: 'bananas', quantity: 0 },
  { name: 'cherries', quantity: 5 }
];

const isCherries = fruit => fruit.name === 'cherries'

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
```

### findIndex

> 方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1。

* 语法

```markdown
arr.findIndex(callbackFn[, thisArg])
```

* 示例

```ts
[ 4, 6, 7, 12 ].findIndex(item => item % 2 === 1) // 2
```

### keys

> 返回一个包含数组中每个索引键的 **Array Iterator** 对象。

* 语法

```markdown
arr.keys()
```

* 示例

```ts
const arr = [ "a", , "c" ];
const sparseKeys = Object.keys(arr);
const denseKeys = [ ...arr.keys() ];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]
```

### values

> 返回一个新的 **Array Iterator** 对象，该对象包含数组每个索引的值。

* 语法

```markdown
arr.values()
```

* 示例

```ts
const arr = [ 'a', 'b', 'c', 'd', 'e' ];
const iterator = arr.values();

for (const letter of iterator) {
  console.log(letter);
}  //"a" "b" "c" "d" "e"
```

## ES2016

### includes

> 用于快速查找数组中是否包含某个元素，包括 `NAN`

* 语法

```markdown
includes(searchElement[, fromIndex])
```

* 示例

```ts
const pets = [ 'cat', 'dog', 'bat' ];

console.log(pets.includes('cat'));
// Expected output: true
```

## ES2019

### flat

> 用于快速查找数组中是否包含某个元素，包括 NAN

* 语法

```markdown
arr.includes(searchElement[, fromIndex])
```

* 示例

```ts
const pets = [ 'cat', 'dog', 'bat' ];

console.log(pets.includes('cat'));
// Expected output: true
```

### flatMap

> 按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
> > `flat()` 方法会移除数组中的空项

* 语法

```markdown
arr.flat([, depth = 1])
```

* 示例

```ts
var arr1 = [ 1, 2, [ 3, 4 ] ];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [ 1, 2, [ 3, 4, [ 5, 6 ] ] ];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [ 1, 2, [ 3, 4, [ 5, 6 ] ] ];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity，可展开任意深度的嵌套数组
var arr4 = [ 1, 2, [ 3, 4, [ 5, 6, [ 7, 8, [ 9, 10 ] ] ] ] ];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### sort Stability

> 增强稳定性

## ES2022

### at

> 接收一个整数值并返回该索引对应的元素，允许正数和负数。负整数从数组中的最后一个元素开始倒数。

* 语法

```markdown
arr.at([, index = 0])
```

* 示例

```ts
// 数组及数组元素
const colors = [ 'red', 'green', 'blue' ];

// 使用长度属性
const lengthWay = colors[colors.length - 2];
console.log(lengthWay); // 输出：'green'

// 使用 slice() 方法。注意会返回一个数组
const sliceWay = colors.slice(-2, -1);
console.log(sliceWay[0]); // 输出：'green'

// 使用 at() 方法
const atWay = colors.at(-2);
console.log(atWay); // 输出：'green'

console.log(colors.at(2)); // 输出：'blue'
```

