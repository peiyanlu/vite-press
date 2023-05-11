# Git

[git 下载地址](https://git-scm.com/)

## 查看

```shell
git --version
```

## 配置

Git 提供了一个叫做 `git config` 的工具，专门用来配置或读取相应的工作环境变量，不同的参数对应不同的设置层级

> 每一个级别的配置都会覆盖上层的相同配置，所以 .git/config 里的配置会覆盖 /etc/gitconfig 中的同名变量

| 命令                  | 描述             | 对应读写文件           |
|---------------------|----------------|------------------|
| git config --system | 系统级配置，对所有用户都适用 | /etc/gitconfig   |
| git config --global | 用户级配置，只适用于该用户  | ~/.gitconfig     |
| git config          | 项目级配置，只适用于该项目  | 当前项目/.git/config |

### 配置用户信息

```shell
git config --global user.name "test"
git config --global user.email test@qq.com
```

### 查看用户信息

* 查看已有的配置信息

```shell
git config --list
```

* 查看某个配置信息

```shell
git config user.name
```
