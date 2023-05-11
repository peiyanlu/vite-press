# 字符串 String

## ES5.1及更早

[在 ECMA 查看](https://262.ecma-international.org/5.1/#sec-15.5)

### String()

> 构造函数用于创建 `String` 对象

* 语法

```markdown
new String(thing)
String(thing)
```

* 示例

```ts
const a = new String("Hello world"); // a === "Hello world" is false
const b = String("Hello world"); // b === "Hello world" is true
```

### String.fromCharCode

> 返回一个由指定的 `UTF-16` 编码单元序列创建的字符串

* 语法

```markdown
String.fromCharCode([num1, [num2[, /* …, */ numN]]])
```

* 示例

```ts
String.fromCharCode(65, 66, 67); // returns "ABC"
String.fromCharCode(0x2014); // returns "—"
```

### toString

> 返回一个字符串，表示指定的字符串。

:::tip
`String` 对象覆盖了 `Object` 对象的 `toString()` 方法；并没有继承 `Object.prototype.toString()`。对于 `String` 对象，`toString()` 方法返回一个字符串来表示这个对象，和 `String.prototype.valueOf()`
方法的返回值相同。
:::

* 语法

```markdown
str.toString()
```

* 示例

```ts
const x = new String("Hello world");

console.log(x.toString()); // 输出 'Hello world'
```

### valueOf

> 返回 `String` 对象的原始值

* 语法

```markdown
str.valueOf()
```

* 示例

```ts
const x = new String('Hello world');
console.log(x.valueOf()); // Displays 'Hello world'
```

### charAt

> 从一个字符串中返回指定的字符。

* 语法

```markdown
str.charAt([, index = 0])
```

* 示例

```ts
const anyString = "Brave new world";
anyString.charAt(0) // 输出： B
```

### charCodeAt

> 返回 `0` 到 `65535` 之间的整数，表示给定索引处的 `UTF-16` 代码单元

* 语法

```markdown
str.charCodeAt([, index = 0])
```

* 示例

```ts
"ABC".charCodeAt(0) // returns 65:"A"
"ABC".charCodeAt(3) // returns NaN
```

### concat

> 将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。

* 语法

```markdown
str.concat(str2, [, ...strN])
```

* 示例

```ts
let hello = 'Hello, '
console.log(hello.concat('Kevin', '. Have a nice day.'))
// Hello, Kevin. Have a nice day.
```

### indexOf

> 给定一个参数：要搜索的子字符串，搜索整个调用字符串，并返回指定子字符串第一次出现的索引。给定第二个参数：一个数字，该方法将返回指定子字符串在大于或等于指定数字的索引处的第一次出现。

* 语法

```markdown
str.indexOf(searchString[, position])
```

* 示例

```ts
const str = 'Brave new world';

str.indexOf('w') // logs 8
str.indexOf('new') // logs 6
```

### lastIndexOf

> 返回调用 `String` 对象的指定值最后一次出现的索引，在一个字符串中的指定位置 `fromIndex` 处从后向前搜索。如果没找到这个特定值则返回 `-1`。

该方法将从尾到头地检索字符串 `str`，看它是否含有子串 `searchValue`。开始检索的位置在字符串的 `fromIndex` 处或字符串的结尾（没有指定 `fromIndex` 时）。如果找到一个 `searchValue`，则返回 `searchValue`
的第一个字符在 `str` 中的位置。str中的字符位置是从 `0` 开始的。

* 语法

```markdown
str.lastIndexOf(searchValue[, fromIndex])
```

* 示例

```ts
const anyString = "Brave new world";

anyString.lastIndexOf("w") // 10
```

### localeCompare

> 返回一个数字来指示一个参考字符串是否在排序顺序之前、之后或与给定字符串相同

1. 当 `referenceStr` 在 `compareString` 前面时返回负数

2. 当 `referenceStr` 在 `compareString` 后面时返回正数

3. 当两者相等时返回 `0`

* 语法

```markdown
str.localeCompare(compareString[, locales[, options]])
```

* 示例

```ts
// 字母 "a" 在 "c" 之前，产生负值
"a".localeCompare("c"); // -2 or -1 (or some other negative value)

// 按字母顺序，"check" 一词出现在 "against" 之后，产生正值
"check".localeCompare("against"); // 2 or 1 (or some other positive value)

// "a" 和 "a" 相等，产生中性值 0
"a".localeCompare("a"); // 0
```

### match

> 检索返回一个字符串匹配正则表达式的结果。

* 语法

```markdown
str.match(regexp)
```

* 示例

```ts
const str = 'For more information, see Chapter 3.4.5.1';
const re = /see (chapter \d+(\.\d)*)/i;
const found = str.match(re);

console.log(found);

// logs [ 'see Chapter 3.4.5.1',
//        'Chapter 3.4.5.1',
//        '.1',
//        index: 22,
//        input: 'For more information, see Chapter 3.4.5.1' ]

// 'see Chapter 3.4.5.1' 是整个匹配。
// 'Chapter 3.4.5.1' 被'(chapter \d+(\.\d)*)'捕获。
// '.1' 是被'(\.\d)'捕获的最后一个值。
// 'index' 属性 (22) 是整个匹配从零开始的索引。
// 'input' 属性是被解析的原始字符串。
```

### replace

> 返回一个由替换值（`replacement`）替换部分或所有的模式（`pattern`）匹配项后的新字符串。模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。*
*如果 `pattern` 是字符串，则仅替换第一个匹配项**。

* 语法

```markdown
str.replace(regexp|substr, newSubStr|function)
```

* 示例

```ts
const re = /(\w+)\s(\w+)/;
const str = "John Smith";
const newstr = str.replace(re, "$2, $1");
// Smith, John
console.log(newstr);
```

### search

> 执行正则表达式和 `String` 对象之间的一个搜索匹配。

* 语法

```markdown
str.search(regexp)
```

* 示例

```ts
const str = "hey JudE";
const re = /[A-Z]/g;
const re2 = /[.]/g;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(re2)); // returns -1 cannot find '.' dot punctuation
```

### slice

> 提取某个字符串的一部分，并返回一个新的字符串，且**不会改动原字符串**。

* 语法

```markdown
str.slice(beginIndex[, endIndex])
```

* 示例

```ts
const str1 = 'The morning is upon us.', // str1 的长度 length 是 23。
  str2 = str1.slice(1, 8),
  str3 = str1.slice(4, -2),
  str4 = str1.slice(12),
  str5 = str1.slice(30);
console.log(str2); // 输出：he morn
console.log(str3); // 输出：morning is upon u
console.log(str4); // 输出：is upon us.
console.log(str5); // 输出：""
```

### split

> 使用指定的分隔符字符串将一个 `String` 对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。

* 语法

```markdown
str.split([separator[, limit]])
```

* 示例

```ts
"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(',')
// ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

"Oh brave new world that has such people in it.".split(" ")
// ['Oh', 'brave', 'new', 'world', 'that', 'has', 'such', 'people', 'in', 'it.']
```

### substring

> 返回一个字符串在开始索引到结束索引之间的一个子集，或从开始索引直到字符串的末尾的一个子集。

1. 如果 `indexStart` 等于 `indexEnd`，`substring` 返回一个空字符串。

2. 如果省略 `indexEnd`，`substring` 提取字符一直到字符串末尾。

3. 如果任一参数小于 `0` 或为 `NaN`，则被当作 `0`。

4. 如果任一参数大于 `stringName.length`，则被当作 `stringName.length`。

5. 如果 `indexStart` 大于 `indexEnd`，则 `substring` 的执行效果就像两个参数调换了一样。

* 语法

```markdown
str.substring(indexStart[, indexEnd])
```

* 示例

```ts
const anyString = "Mozilla";

// 输出 "Moz"
console.log(anyString.substring(0, 3));
console.log(anyString.substring(3, 0));
console.log(anyString.substring(3, -3));
console.log(anyString.substring(3, NaN));
console.log(anyString.substring(-2, 3));
console.log(anyString.substring(NaN, 3));
```

### toLowerCase

> 将调用该方法的字符串值转为小写形式，并返回。

* 语法

```markdown
str.toLowerCase()
```

* 示例

```ts
console.log('中文简体 zh-CN || zh-Hans'.toLowerCase());
// 中文简体 zh-cn || zh-hans

console.log("ALPHABET".toLowerCase());
// "alphabet"
```

### toLocaleLowerCase

> 根据任何指定区域语言环境设置的大小写映射，返回调用字符串被转换为小写的格式。

* 语法

```markdown
str.toLocaleLowerCase([locale, locale, ...])
```

* 示例

```ts
'ALPHABET'.toLocaleLowerCase(); // 'alphabet'

'\u0130'.toLocaleLowerCase('tr') === 'i';    // true
'\u0130'.toLocaleLowerCase('en-US') === 'i'; // false
```

### toUpperCase

> 将调用该方法的字符串转为大写形式并返回（如果调用该方法的值不是字符串类型会被强制转换）。

* 语法

```markdown
str.toUpperCase()
```

* 示例

```ts
console.log('alphabet'.toUpperCase()); // 'ALPHABET'
```

### toLocaleUpperCase

> 根据本地主机语言环境把字符串转换为大写格式，并返回转换后的字符串。

* 语法

```markdown
str.toLocaleUpperCase([locale, locale, ...])
```

* 示例

```ts
'alphabet'.toLocaleUpperCase(); // 'ALPHABET'

'Gesäß'.toLocaleUpperCase(); // 'GESÄSS'

'i\u0307'.toLocaleUpperCase('lt-LT'); // 'I'
```

### trim

> 从字符串的两端清除空格，返回一个新的字符串，而**不修改原始字符串**。此上下文中的空格是指所有的空白字符（空格、`tab`、不换行空格等）以及所有行终止符字符（如 `LF`、`CR` 等）

* 语法

```markdown
str.trim()
```

* 示例

```ts
const orig = "   foo  ";
console.log(orig.trim()); // 'foo'
```

## ES2015

[在 ECMA 查看](https://262.ecma-international.org/6.0/#sec-string-objects)

### String.fromCodePoint

> 返回使用指定的代码点序列创建的字符串。

* 语法

```markdown
String.fromCodePoint(num1[, ...[, numN]])
```

* 示例

```ts
String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404"
```

### String.raw

> 是一个 `模板字符串` 的标签函数

* 语法

```markdown
String.raw(callSite, ...substitutions)

String.raw`templateString`
```

* 示例

```ts
String.raw`Hi\n${ 2 + 3 }!`;
// 'Hi\\n5!'，Hi 后面的字符不是换行符，\ 和 n 是两个不同的字符

String.raw`Hi\u000A!`;
// "Hi\\u000A!"，同上，这里得到的会是 \、u、0、0、0、A 6 个字符，
// 任何类型的转义形式都会失效，保留原样输出，不信你试试.length

let name = "Bob";
String.raw`Hi\n${ name }!`;
// "Hi\nBob!"，内插表达式还可以正常运行


// 正常情况下，你也许不需要将 String.raw() 当作函数调用。
// 但是为了模拟 `t${0}e${1}s${2}t` 你可以这样做：
String.raw({ raw: 'test' }, 0, 1, 2); // 't0e1s2t'
// 注意这个测试，传入一个 string，和一个类似数组的对象
// 下面这个函数和 `foo${2 + 3}bar${'Java' + 'Script'}baz` 是相等的。
String.raw({
  raw: [ 'foo', 'bar', 'baz' ]
}, 2 + 3, 'Java' + 'Script'); // 'foo5barJavaScriptbaz'
```

### codePointAt

> 返回 一个 `Unicode` 编码点值的非负整数。

* 语法

```markdown
str.codePointAt(pos)
```

* 示例

```ts
'ABC'.codePointAt(1);          // 66
'\uD800\uDC00'.codePointAt(0); // 65536

'XYZ'.codePointAt(42); // undefined
```

### endsWith

> 判断当前字符串是否是以另外一个给定的子字符串结尾的，根据判断结果返回 `true` 或 `false`。

* 语法

```markdown
str.endsWith(searchString[, length])
```

* 示例

```ts
const str = "To be, or not to be, that is the question.";

alert(str.endsWith("question."));  // true
alert(str.endsWith("to be"));      // false
alert(str.endsWith("to be", 19));  // true
```

### includes

> 执行区分大小写的搜索，以确定是否可以在另一个字符串中找到一个字符串，并根据情况返回 `true` 或 `false`。

* 语法

```markdown
str.includes(searchString[, position])
```

* 示例

```ts
const str = 'To be, or not to be, that is the question.'

console.log(str.includes('To be')) // true
console.log(str.includes('question')) // true
console.log(str.includes('nonexistent')) // false
console.log(str.includes('To be', 1)) // false
console.log(str.includes('TO BE')) // false
console.log(str.includes('')) // true
```

### normalize

> 按照指定的一种 `Unicode` 正规形式将当前字符串规范化。（如果该值不是字符串，则首先将其转换为一个字符串）。

* 语法

```markdown
str.normalize([form])
```

* 示例

```ts
let string1 = '\u00F1';           // ñ
let string2 = '\u006E\u0303';     // ñ

string1 = string1.normalize('NFD');
string2 = string2.normalize('NFD');

console.log(string1 === string2); // true
console.log(string1.length);      // 2
console.log(string2.length);      // 2
```

### repeat

> 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。

* 语法

```markdown
str.repeat(count)
```

* 示例

```ts
"abc".repeat(-1)     // RangeError: repeat count must be positive and less than inifinity
"abc".repeat(0)      // ""
"abc".repeat(1)      // "abc"
"abc".repeat(2)      // "abcabc"
"abc".repeat(3.5)    // "abcabcabc" 参数 count 将会被自动转换成整数。
"abc".repeat(1 / 0)    // RangeError: repeat count must be positive and less than inifinity
  
  ({ toString: () => "abc", repeat: String.prototype.repeat }).repeat(2)
//"abcabc",repeat 是一个通用方法，也就是它的调用者可以不是一个字符串对象。
```

### startsWith

> 判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 `true` 或 `false`。

* 语法

```markdown
str.startsWith(searchString[, position])
```

* 示例

```ts
const str = "To be, or not to be, that is the question.";

alert(str.startsWith("To be"));         // true
alert(str.startsWith("not to be"));     // false
alert(str.startsWith("not to be", 10)); // true
```

## ES2017

### padStart

> 用给定字符串从开头填充当前字符串并返回长度为 `targetLength` 的新字符串。

* 语法

```markdown
str.padStart(targetLength[, padString])
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

> 用给定字符串从末尾填充当前字符串并返回长度为 `targetLength` 的新字符串。

* 语法

```markdown
str.padEnd(targetLength[, padString])
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
str.trimEnd()

str.trimRight()
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
str.padEnd(targetLength[, padString])
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

> 返回一个新字符串，新字符串所有满足 `pattern` 的部分都已被 `replacement` 替换。`pattern` 可以是一个字符串或一个 `RegExp`，
> `replacement` 可以是一个字符串或一个在每次匹配被调用的函数。
> > 使用正则表达式搜索值时，它必须是全局的

* 语法

```markdown
str.replaceAll(regexp|substr, newSubstr|function)
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

> 接受一个整数值，并返回一个新的 `String`，该字符串由位于指定偏移量处的单个 `UTF-16` 码元组成。该方法允许正整数和负整数。负整数从字符串中的最后一个字符开始倒数。

* 语法

```markdown
str.at(index)
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
