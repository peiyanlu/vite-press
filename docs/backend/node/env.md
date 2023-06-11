---
title: NodeEnv
description: 环境变量中的环境信息
category: node
tags:
  - node
  - env
order: 0
ignore: false
---


# {{ $frontmatter.title }}


> process.env.NODE_ENV

**释义**

- `process.env` 是 `Node.js` 中的一个环境对象。其中保存着系统的环境的变量信息；全局变量 `process` 表示的是当前的 `node`
  进程；
- `NODE_ENV` 是其中的一个环境变量。这个变量主要用于标识当前的环境（生产环境，开发环境）。默认是没有这个环境变量的，需要自己手动配置。不同系统有不同的环境变量配置方式

> `NODE_ENV` 在 `webpack` 中它的用途是判断 **生产环境或开发环境**。
> `vue/cli` 配置环境变量，在项目根目录创建 .env 文件即可

::: details vue/cli
***1、默认模式***

|     模式      | 对应npm命令 |      对应文件名称      |
|:-----------:|:-------:|:----------------:|
| development | server  | .env.development |
| production  |  build  | .env.production  |
|    test     |  test   |    .env.test     |

- 需要注意的是：`process.env.NODE_ENV` 为默认变量，会自动设置为上边对应的模式名称
-
- 其他变量必须以 `VUE_APP_` 开头，会被 `vue-cli-service` 的所有命令、插件、依赖可用

***2、自定义模式***
> `NODE_ENV` 还是只能为 `production` 或 `development`

比如我们的测试网址，就需要一个自定义 gray 模式

- 修改 `package.json`

```json{3}
{
  "scripts": {
    "build:gray": "vue-cli-service build --mode gray"
  }
}
```

- 添加.env.gray文件

```
NODE_ENV = production // [!code hl]
VUE_APP_URL = https://**.cc/
```

:::

**配置**

::: details Win/Linux

- windows环境配置如下：

```shell
#node中常用的到的环境变量是NODE_ENV，首先查看是否存在 
set NODE_ENV 
 
#如果不存在则添加环境变量 
set NODE_ENV=production 
 
#环境变量追加值 set 变量名=%变量名%;变量内容 
set path=%path%;C:\web;C:\Tools 
 
#某些时候需要删除环境变量 
set NODE_ENV=
```

- Linux配置(mac系统环境也属于这个)如下：

```shell
#node中常用的到的环境变量是NODE_ENV，首先查看是否存在
echo $NODE_ENV
 
#如果不存在则添加环境变量
export NODE_ENV=production
 
#环境变量追加值
export path=$path:/home/download:/usr/local/
 
#某些时候需要删除环境变量
unset NODE_ENV
 
#某些时候需要显示所有的环境变量
env
```

:::
