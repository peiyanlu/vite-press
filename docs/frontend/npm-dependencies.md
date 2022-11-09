# 记录一些有趣的依赖

## enquirer

>交互式问答 CLI

```javascript
const { prompt } = require('enquirer');
 
const response = await prompt({
  type: 'input',
  name: 'username',
  message: 'What is your username?'
});
 
console.log(response);

//=> { username: xxx }
```

[enquirer](https://www.npmjs.com/package/enquirer)

## minimist

>命令行参数解析

```javascript
const argv = require('minimist')(process.argv.slice(2));

console.log(argv);
```

```json lines
$ node example/parse.js -x 3 -y 4 -n5 -abc --beep=boop foo bar baz

{ _: [ 'foo', 'bar', 'baz' ],
  x: 3,
  y: 4,
  n: 5,
  a: true,
  b: true,
  c: true,
  beep: 'boop' 
}
```

[minimist](https://www.npmjs.com/package/minimist)

## semver

>语义化版本

```javascript
const semver = require('semver')

semver.valid('1.2.3') // '1.2.3'
```

```text
版本格式：主版本号.次版本号.修订号，版本号递增规则如下：
主版本号：当你做了不兼容的 API 修改，
次版本号：当你做了向下兼容的功能性新增，
修订号：当你做了向下兼容的问题修正。
先行版本号及版本编译信息可以加到 “主版本号.次版本号.修订号” 的后面，作为延伸。
```

[semver](https://www.npmjs.com/package/semver)

## execa

>执行命令

```javascript
import { execa } from 'execa';

const { stdout } = await execa('echo', ['unicorns']);

console.log(stdout);

//=> 'unicorns'
```

[execa](https://www.npmjs.com/package/execa)

## chalk

>终端多彩输出

```javascript
const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
```

[chalk](https://www.npmjs.com/package/chalk/v/4.1.2)