# Koa + MySQL + TS

## 1、创建项目

```shell
mkdir backend && cd backend
```

> 初始化项目

```shell
yarn init
```

## 2、安装依赖

```shell
# --registry=https://registry.npmjs.org/
#编译
yarn add typescript ts-node nodemon -D

#Node.js
yarn add @types/node -D

#Koa核心
yarn add koa
yarn add @types/koa -D

#数据库
yarn add redis  mysql2 sequelize reflect-metadata sequelize-typescript
yarn add @types/redis @types/sequelize @types/validator -D

#中间件
yarn add koa-body koa-compose @koa/router koa-combine-routers koa-logger @koa/cors koa-views koa-static
yarn add @types/koa-compose @types/koa__router @types/koa-logger @types/koa__cors @types/koa-views @types/koa-static -D

#其他
yarn add chalk nanoid mkdirp
yarn add @types/nanoid @types/mkdirp -D
```

- `typescript` TS 依赖
- `ts-node` 用于 Node.js 的 TypeScript 执行和 REPL
- `nodemon` Node.js 文件变更监听


- `koa` 框架核心包
- `koa-compose` 合并中间件，简化中间件引入
- `koa-router` 路由中间件
- `koa-body` body 请求体解析
- `koa-logger` 接口调用日志
- `@koa/cors` 解决跨域 CORS
- `koa-views` 用于模板渲染
- `koa-static` 用于静态资源访问
- `sequelize` 基于 promise 的 Node.js ORM
- `mysql2` Node.js MySQL 客户端
- `redis` Node.js Redis 客户端

- `chalk` 彩色文本输出
- `nanoid` 生成随机 id
- `mkdirp` 创建文件夹

## 3、快速开始

> 初始化 tsconfig.json

```shell
tsc --init
```

> 新建 app.test.ts

```ts
import Koa, { Context } from 'koa'
import Router from 'koa-router'

const app = new Koa()
const router = new Router()

app.use(router.routes())

router.get('/', async (ctx: Context) => {
  ctx.body = 'Hello Word!'
})

app.listen(3000, () => {
  console.log(`
		\r  Server running at:
		\r  - Local:   http://localhost:3000
		\r  - Network: http://127.0.0.1:3000
	`)
})
```

> 添加运行脚本

```json{4}
{
  "private": true,
  "scripts": {
    "dev": "nodemon --exec node --experimental-specifier-resolution=node --loader ts-node/esm app.test.ts" // [!code focus]
  },
  "devDependencies": {},
  "dependencies": {}
}
```

::: warning
ts-node + nodemon：组合使用可以支持 ESModule

- 用于不带扩展名的导入：--experimental-specifier-resolution=node
- 用于支持esm语法：ts-node/esm

~~ts-node-dev： 只支持 CommonJS，无法设置 `"module": "ESNext"`，无法使用 `Top-Level-Await`~~
:::

> 执行 `yarn dev` 即可启动服务

## 4、进阶开发

确定 **项目结构**

```
.
├─ config                        // 项目配置文件目录
├─ controllers                   // 接收数据传递给业务层
├─ middlewares                   // 中间件
├─ models                        // 数据模型
├─ logs                          // 日志文件
├─ routes                        // 路由配置
├─ www                           // 静态资源访问
│  └─ index.html
├─ app.ts                        // 入口文件
├─ tsconfig.json                 // tsconfig
└─ package.json
```

## 5、全局配置(config)

> 配置数据库端口、初始化数据库、token过期时间等

```ts
// index.ts

interface AuthConfig {
  DATABASE: string | number,
  USERNAME: string,
  PASSWORD: string,
  HOST: string,
  PORT: number
}

export default class Config {
  static readonly MySQL: AuthConfig = {
    DATABASE: 'koa-server',
    USERNAME: 'root',
    PASSWORD: '123456',
    HOST: '127.0.0.1',
    PORT: 3306
  }

  static readonly Redis: Partial<AuthConfig> = {
    DATABASE: 0,
    USERNAME: '',
    PASSWORD: '',
  }
}
```

> 需要提前创建使用的 `database`，如果数据库设置了密码，需要提供设置的密码

```ts
// mysql.ts

import chalk from 'chalk'
import { Sequelize, Options } from 'sequelize'

import Config from './index'

const sequelize: Sequelize = new Sequelize(
  <Options>{
    database: Config.MySQL.DATABASE,
    username: Config.MySQL.USERNAME,
    password: Config.MySQL.PASSWORD,
    host: Config.MySQL.HOST, // 主机
    port: Config.MySQL.PORT, // 端口
    protocol: 'tcp', // 协议
    dialect: 'mysql', // mysql数据库
    omitNull: true, // 允许Null通过验证
    pool: { // 连接池
      min: 0,
      max: 5,
      idle: 10000,
      acquire: 30000
    },
    retry: {
      max: 1 // 重试次数
    },
    timezone: '+08:00' // 时区
  }
)

// 测试数据库连接
try {
  await sequelize.authenticate()
  console.log(chalk.blue('MySQL 连接成功！'))
} catch (error: any) {
  console.error(chalk.red(`MYSQL 连接失败：${ error.message }`))
}

export default sequelize
```

> redis 默认会连接到 `本地主机` 的 `6379` 端口

```ts
// redis.ts

import chalk from 'chalk'
import { createClient, RedisClientType } from 'redis'

import Config from './index'

const client: RedisClientType = createClient({
  database: <number>Config.Redis.DATABASE,
  username: Config.Redis.USERNAME,
  password: Config.Redis.PASSWORD
})

client.on('error', err => console.log(chalk.red('Redis: ' + err)))

try {
  await client.connect()
  console.log(chalk.blue('Redis 连接成功！'))
} catch (err: any) {
  console.log(chalk.red(`Redis 连接失败：${ err.message }`))
}

export default client
```

## 6、数据模型(models)

> 定义各个业务模块的数据库模型

```markdown
.
├─ models
│  └─ xxxModel.ts                // 各模块业务对应的数据模型
│  └─ xxxModel.ts
└─ package.json
```

在将数据存入数据库之前，需要先确定数据格式，以上传 svg 为例：

```ts
import { DataTypes } from 'sequelize'
import sequelize from '../config/mysql'

const svgModel = sequelize.define(
  'svgModel',
  {
    // 在这里定义模型属性
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true // 不允许值重复
    },
    uid: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    file: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    filePath: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fileType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fileStyle: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fileOriginalName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fileSize: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createBy: {
      type: DataTypes.STRING,
      allowNull: false
    },
    updateBy: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'sys_svg',
    createdAt: 'createDate',
    updatedAt: 'updateDate'
  }
)

export default svgModel
```

## 7、控制器(controller)

> 接收用户传递的数据，并处理业务

```markdown
.
├─ controller
│  └─ xxxController.ts                // 各模块业务逻辑
│  └─ xxxController.ts
└─ package.json
```

以上传 svg 为例，通过上一步定义的数据模型在这里增删改查

```ts
// svgController.ts

import { Context } from 'koa'
import { customAlphabet } from 'nanoid'
import svgModel from '../models/svg' // [!code hl]

const nanoid = customAlphabet('1234567890', 19)


export default class SvgController {
  static async upload(ctx: Context) {
    const id = nanoid()
    const res = await svgModel.findOne({ where: { id: id } }) // [!code hl]
    if (res) {
      ctx.body = '已存在'
    } else {
      ctx.body = '不存在'
    }
  }
}
```

## 8、路由配置(router)

> 路由配置

- 通过 `koa-combine-routers` 插件可以将各模块的依赖合并，并且自动使用 `router.allowedMethods()` 中间件
- 通过实现类似 `require.context` 的 `autoRequireFile` 方法自动导入，简化后续的导入操作

```markdown
.
├─ router
│  └─ index.ts                     // 路由统一导出
│  └─ xxxRouter.ts                 // 各模块路由
└─ package.json
```

以 svg 路由为例，引入上一步定义的 Controller

```ts
// svgRouter.ts
import Router from 'koa-router'
import SvgController from '../controller/svgController'

const router = new Router({ prefix: '/svg' })

router.get('/test', (ctx) => {
  ctx.body = 'GET TEST'
})

router.post('/test', (ctx) => {
  ctx.body = 'POST TEST'
})

router.get('/upload', SvgController.upload) // [!code ++]

export default router
```

```ts
// index.ts
import combineRouters from 'koa-combine-routers'
import path from 'path'
import { fileURLToPath } from 'url'

import { autoRequireFile, dirname } from '../utils'
// ESModule 没有 __dirname 全局变量
const __dirname = dirname(import.meta.url)

const files = await autoRequireFile(__dirname, false, /(\w+)Router\.ts/) // [!code hl]

const routes = files.map(file => file['data']['default']) // [!code hl]

export default combineRouters(routes) // [!code hl]
```

```ts
// app.test.ts
import router from './router' // [!code hl]

app.use(router()) // [!code hl]
```

## 9、配置中间件
```ts
// app.test.ts

app.use(compose([
  KoaLogger(), // 接口执行日志输出
  koaBody({ // 请求体解析
    multipart: true, // 支持文件格式
    formidable: {
      keepExtensions: true // 保留文件扩展名
    }
  }),
  cors(), // 跨域 CROS
  router() // 路由
]))
```

## 10、模板渲染
```markdown
.
├─ www                        // HTML 页面
│  └─ index.html
└─ package.json
```

```ts
app.use(async (ctx, next) => {
  if (ctx.url === '/') {
    await ctx.render('index') // [!code focus]
  }

  await next()
});
```
