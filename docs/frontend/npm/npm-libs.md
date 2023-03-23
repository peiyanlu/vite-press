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

```markdown
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

```js
import path from 'node:path';
import slash from 'slash';

const string = path.join('foo', 'bar');
// Unix    => foo/bar
// Windows => foo\\bar

slash(string);
// Unix    => foo/bar
// Windows => foo/bar
```

[slash](https://www.npmjs.com/package/slash)

## hash-sum

> 非常快的唯一哈希生成器

[hash-sum](https://www.npmjs.com/package/hash-sum)

## address

> 获取当前机器的IP, MAC和DNS服务器

```js
const address = require('address');

// default interface 'eth' on linux, 'en' on osx.
address.ip();   // '192.168.0.2'
address.ipv6(); // 'fe80::7aca:39ff:feb0:e67d'
address.mac(function (err, addr) {
  console.log(addr); // '78:ca:39:b0:e6:7d'
});

// local loopback
address.ip('lo'); // '127.0.0.1'

// vboxnet MAC
address.mac('vboxnet', function (err, addr) {
  console.log(addr); // '0a:00:27:00:00:00'
});
```

[address](https://www.npmjs.com/package/address)

## default-gateway

> 通过对OS路由接口的exec调用获得机器的默认网关

```js
const defaultGateway = require('default-gateway');

const { gateway, interface } = await defaultGateway.v4();
// gateway = '1.2.3.4', interface = 'en1'

const { gateway, interface } = await defaultGateway.v6();
// gateway = '2001:db8::1', interface = 'en2'

const { gateway, interface } = defaultGateway.v4.sync();
// gateway = '1.2.3.4', interface = 'en1'

const { gateway, interface } = defaultGateway.v6.sync();
// gateway = '2001:db8::1', interface = 'en2'
```

[default-gateway](https://www.npmjs.com/package/default-gateway)

## lru-cache

> 删除最近最少使用的项的缓存对象

```js
const LRU = require('lru-cache')

const options = {
  max: 500,

  // for use with tracking overall storage size
  maxSize: 5000,
  sizeCalculation: (value, key) => {
    return 1
  },

  // for use when you need to clean up something when objects
  // are evicted from the cache
  dispose: (value, key) => {
    freeFromMemoryOrWhatever(value)
  },

  // how long to live in ms
  ttl: 1000 * 60 * 5,

  // return stale items before removing from cache?
  allowStale: false,

  updateAgeOnGet: false,
  updateAgeOnHas: false,

  // async method to use for cache.fetch(), for
  // stale-while-revalidate type of behavior
  fetchMethod: async (key, staleValue, { options, signal }) => {
  },
}

const cache = new LRU(options)

cache.set('key', 'value')
cache.get('key') // "value"
```

[lru-cache](https://www.npmjs.com/package/lru-cache)

## xmldom

> Node.js 的 xml 解析器；支持浏览器的 DOMParser 和 XMLSerializer 接口

```js
const { DOMParser } = require('xmldom')

const doc = new DOMParser().parseFromString(
  '<xml xmlns="a" xmlns:c="./lite">\n' +
  '\t<child>test</child>\n' +
  '\t<child></child>\n' +
  '\t<child/>\n' +
  '</xml>',
  'text/xml'
)
doc.documentElement.setAttribute('x', 'y')
doc.documentElement.setAttributeNS('./lite', 'c:x', 'y2')
console.info(doc)

const nsAttr = doc.documentElement.getAttributeNS('./lite', 'x')
console.info(nsAttr)
```

[xmldom](https://www.npmjs.com/package/xmldom)

## juice

> CSS 属性内联到 style 属性

```js
const juice = require('juice');
const result = juice("<style>div{color:red;}</style><div/>");

// <div style="color: red;"></div>
```

[juice](https://www.npmjs.com/package/juice)

## html-minifier

> 基于 JavaScript 的 HTML 压缩工具

```js
const minify = require('html-minifier').minify;
const result = minify('<p title="blah" id="moo">foo</p>', {
  removeAttributeQuotes: true
});
result; // '<p title=blah id=moo>foo</p>'
```

[html-minifier](https://www.npmjs.com/package/html-minifier)

## release-it

> 用于自动执行版本控制和包发布相关任务的通用 CLI 工具

```shell
npm init release-it
```

或者

```shell
npm install -D release-it
```

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "scripts": {
    "release": "release-it"
  },
  "devDependencies": {
    "release-it": "*"
  }
}
```

[release-it](https://www.npmjs.com/package/release-it)









