# 字符串 String

## ES2015

## ES2017

### padStart

> 用给定字符串从开头填充当前字符串并返回长度为 targetLength 的新字符串。

* 语法

```markdown
padStart(targetLength)
padStart(targetLength, padString)
```

* 示例

```ts
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6, "123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
```

### padEnd

> 用给定字符串从末尾填充当前字符串并返回长度为 targetLength 的新字符串。

* 语法

```markdown
padEnd(targetLength)
padEnd(targetLength, padString)
```

* 示例

```ts
'abc'.padEnd(10);          // "abc       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);           // "abc"
```

## ES2019

### trimStart

> 删除字符串开头的空白字符。`trimLeft()` 是此方法的别名。

* 语法

```markdown
trimEnd()

trimRight()
```

* 示例

```ts
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str); // 'foo  '
```

### trimEnd

> 删除字符串末尾的空白字符。`trimRight()` 是这个方法的别名。

* 语法

```markdown
padEnd(targetLength)
padEnd(targetLength, padString)
```

* 示例

```ts
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str); // '   foo'
```

## ES2020

### matchAll

> 返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。
> > 如果没有 `/g` 标志，`matchAll` 会抛出异常。

* 语法

```markdown
str.matchAll(regexp)
```

* 示例

```ts
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

## ES2021

### replaceAll

> 返回一个新字符串，新字符串所有满足 pattern 的部分都已被replacement 替换。pattern可以是一个字符串或一个 RegExp，
replacement可以是一个字符串或一个在每次匹配被调用的函数。
> > 使用正则表达式搜索值时，它必须是全局的

* 语法

```markdown
const newStr = str.replaceAll(regexp|substr, newSubstr|function)
```

* 示例

```ts
'aabbcc'.replaceAll('b', '.');
// 'aa..cc'

'aabbcc'.replaceAll(/b/g, '.');
// "aa..cc"
```

## ES2022

### at

> 接受一个整数值，并返回一个新的 String，该字符串由位于指定偏移量处的单个 UTF-16 码元组成。该方法允许正整数和负整数。负整数从字符串中的最后一个字符开始倒数。

* 语法

```markdown
at(index)
```

* 示例

```ts
const myString = 'Every green bus drives fast.';

// Using length property and charAt() method
const lengthWay = myString.charAt(myString.length - 2);
console.log(lengthWay); // Logs: 't'

// Using slice() method
const sliceWay = myString.slice(-2, -1);
console.log(sliceWay); // Logs: 't'

// Using at() method
const atWay = myString.at(-2);
console.log(atWay); // Logs: 't'

console.log(myString.at(2)); // Logs: 'e'
```
