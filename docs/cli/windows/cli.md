---
title: CLI
description: Windows常用命令
category: windows
tags:
  - Windows
  - CLI
---

# [Windows CLI](https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands)

这些命令在前端开发中常用于文件和目录的操作、进程管理、网络测试以及命令行窗口的控制等。使用这些命令可以提高工作效率并进行必要的调试和测试。

> 在使用这些命令时，可以通过在命令后添加 `/?` 参数来获取更详细的帮助信息，例如 `dir /?`。

## 文件和目录操作

- `cd` - 切换当前目录。
- `dir` - 列出当前目录中的文件和文件夹。
- `mkdir` - 创建新的文件夹。
- `rmdir` - 删除文件夹。
- `copy` - 复制文件或文件夹。
- `xcopy` - 复制文件和文件夹，并支持递归复制。
- `del` - 删除文件。
- `ren` - 重命名文件或文件夹。
- `type` - 显示文本文件的内容。
- `tree` - 显示目录结构。

## 进程管理

- `tasklist` - 显示当前运行的进程列表。
- `taskkill` - 终止运行的进程。

## 网络相关

- `ping` - 测试与另一台计算机的网络连接。
- `ipconfig` - 显示计算机的网络配置信息。
- `netstat` - 显示网络连接和端口信息。

## 其他

- `cls` - 清除命令行窗口内容。
- `exit` - 退出命令行窗口。
- `start` - 启动应用程序或打开文件。

## 使用


### 端口占用

* 查看所有端口的占用情况

```shell
netstat -ano
```

* 查看指定端口的占用情况

```shell
netstat -ano|findstr "端口"
```

* 查看 `PID` 对应的进程名

```shell
tasklist|findstr "PID"
```

* 结束进程

```shell
taskkill /f /t /im PID
```

### 删除文件（夹）

```shell
#删除文件夹
rmdir [/s] [/q] [drive:]path
#or
rd [/s] [/q] [drive:]path

#只删除文件
del [/s] [/q] [drive:]path
```

- `/s` 除目录本身外，还将删除指定目录下的所有子目录和文件。用于删除目录树。

- `/q` 安静模式，带 `/s` 删除目录树时不要求确认
