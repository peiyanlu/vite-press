# Radis 安装

`redis` 是一个开源的、使用C语言编写的、支持网络交互的、可基于内存也可持久化的Key-Value数据库

## 下载

打开 [下载地址](https://github.com/MicrosoftArchive/redis/releases)，选择 `Latest` 版本
![img.png](img/img.png)

## 安装

#### 1、双击运行下载好的文件，点击 `Next`
![img_1.png](img/img_1.png)

#### 2、勾选协议，点击 `Next`
![img_2.png](img/img_2.png)

#### 3、勾选将安装目录添加到 `PATH` 环境变量（按需更改安装目录）
![img_3.png](img/img_3.png)

#### 4、使用默认配置，点击 `Next`
![img_4.png](img/img_4.png)

#### 5、使用默认配置，点击 `Next`
![img_5.png](img/img_5.png)

#### 6、点击 `Install`
![img_6.png](img/img_6.png)

#### 7、点击 `Finish`
![img_7.png](img/img_7.png)

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
