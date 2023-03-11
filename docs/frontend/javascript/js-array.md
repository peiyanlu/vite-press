# 数组 Array

## ES5.1及更早

[在 ECMA 查看](https://262.ecma-international.org/5.1/#sec-15.4)

Array ( [ item1 [ , item2 [ , … ] ] ] )
new Array ( [ item0 [ , item1 [ , … ] ] ] )
new Array (len)

Array.isArray ( arg )

Array.prototype.toLocaleString
Array.prototype.toString
Array.prototype.concat
Array.prototype.join
Array.prototype.pop
Array.prototype.push
Array.prototype.reverse
Array.prototype.shift
Array.prototype.slice
Array.prototype.sort
Array.prototype.splice
Array.prototype.unshift
Array.prototype.indexOf
Array.prototype.lastIndexOf
Array.prototype.every
Array.prototype.some
Array.prototype.forEach
Array.prototype.map
Array.prototype.filter
Array.prototype.reduce
Array.prototype.reduceRight



## ES2015

[在 ECMA 查看](https://262.ecma-international.org/6.0/#sec-array-objects)

Array.from ()
Array.of

Array.prototype.copyWithin
Array.prototype.entries
Array.prototype.fill
Array.prototype.find
Array.prototype.findIndex
Array.prototype.keys
Array.prototype.values

## ES2016

### includes

> 用于快速查找数组中是否包含某个元素，包括 `NAN`

* 语法
```markdown
includes(searchElement)
includes(searchElement, fromIndex)
```
* 示例
```ts
const pets = [ 'cat', 'dog', 'bat' ];

console.log(pets.includes('cat'));
// Expected output: true
```

## ES2019

### flat

用于快速查找数组中是否包含某个元素，包括 NAN

* 语法

```markdown
includes(searchElement)
includes(searchElement, fromIndex)
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
flat()
flat(depth = 1)
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
at(index)
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

