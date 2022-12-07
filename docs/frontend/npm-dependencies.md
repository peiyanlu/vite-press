# NPM 库推荐

## enquirer

> 交互式问答 CLI

```javascript
const { prompt } = require('enquirer')

const response = await prompt({
  type: 'input',
  name: 'username',
  message: 'What is your username?'
})

console.log(response)

//=> { username: xxx }
```

[enquirer](https://www.npmjs.com/package/enquirer)

## minimist

> 轻量级命令行参数解析引擎

```javascript
const argv = require('minimist')(process.argv.slice(2));

console.log(argv);
```
```
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

## commander

> node.js 命令行界面的完整解决方案

```js
const { program } = require('commander');

program
  .option('--first')
  .option('-s, --separator <char>');

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;
console.log(program.args[0].split(options.separator, limit));
```

```
$ node split.js -s / --fits a/b/c

error: unknown option '--fits'
(Did you mean --first?)

$ node split.js -s / --first a/b/c
// [ 'a' ]
```

[commander](https://www.npmjs.com/package/commander)

## semver

> 语义化版本

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

> 执行命令

```javascript
import { execa } from 'execa';

const { stdout } = await execa('echo', [ 'unicorns' ]);

console.log(stdout);

//=> 'unicorns'
```

[execa](https://www.npmjs.com/package/execa)

## chalk

> 终端多彩输出

```javascript
const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
```

[chalk](https://www.npmjs.com/package/chalk/v/4.1.2)

## processenv

> 解析环境变量

```ts
import { processenv } from 'processenv';

const port = processenv('PORT');

// const port = processenv('PORT', 3000); // 提供默认值
```

[processenv](https://www.npmjs.com/package/processenv)

## cross-env

> 设置环境变量

```json
{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  }
}
```

[cross-env](https://www.npmjs.com/package/cross-env)

## dotenv
> 环境变量从 .env 文件加载到 process.env 中
```js
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
```
[dotenv](https://www.npmjs.com/package/dotenv)

## dotenv-expand
> 扩展计算机上已经存在的环境变量

```js
const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')

const myEnv = dotenv.config()
dotenvExpand.expand(myEnv)

console.log(process.env)
```

[dotenv-expand](https://www.npmjs.com/package/dotenv-expand)


## slash
> 系统路径符处理


## hash-sum
> 非常快的唯一哈希生成器

## address
> 获取当前机器的IP, MAC和DNS服务器
```js

```
[address](https://www.npmjs.com/package/address)

## default-gateway
> 通过对OS路由接口的exec调用获得机器的默认网关


## lru-cache
> 删除最近最少使用的项的缓存对象




