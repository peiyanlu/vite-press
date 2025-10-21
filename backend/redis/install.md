---
url: /vite-press/backend/redis/install.md
description: Redis安装
---

# Redis 安装

`redis` 是一个开源的、使用 `C` 语言编写的、支持网络交互的、可基于内存也可持久化的 `Key-Value` 数据库

## 下载

打开 [下载地址](https://github.com/MicrosoftArchive/redis/releases)，选择 `Latest` 版本

## 验证

`win + r` 打开cmd窗口，输入 `redis-cli.exe -h 127.0.0.1 -p 6379` 回车

```shell
# 登录
redis-cli.exe -h 127.0.0.1 -p 6379

# 设置密码
config set requirepass [password]

# 清除密码
config set requirepass ''

# 获取密码
config get requirepass

# 密码登录
redis-cli.exe -h [host] -p [port] -a [password]
# or
redis-cli.exe -h [host] -p [port]
auth [password]

```
