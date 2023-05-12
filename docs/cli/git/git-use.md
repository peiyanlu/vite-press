# Git 使用

## Git 配置

每一个级别的配置都会覆盖上层的相同配置，所以 `.git/config` 里的配置会覆盖 `/etc/gitconfig` 中的同名变量

| 命令                  | 描述             | 对应读写文件           |
|---------------------|----------------|------------------|
| git config --system | 系统级配置，对所有用户都适用 | /etc/gitconfig   |
| git config --global | 用户级配置，只适用于该用户  | ~/.gitconfig     |
| git config          | 项目级配置，只适用于该项目  | 当前项目/.git/config |

## 仓库克隆

```shell
git clone [options] <repository> [<directory>]

# 克隆某个 my-branch 到名为 my-project 的新目录中
git clone --branch my-branch https://github.com/user/repo.git my-project
```

- `-v` 或 `--verbose`：输出详细的进度信息；

- `-q` 或 `--quiet`：减少输出信息的冗杂度；

- `--depth <depth>`：指定要克隆的历史记录的深度，即克隆最近的几个提交；

- `--branch <branch>`：指定要克隆的分支；

- `--single-branch`：仅克隆指定的分支，而不是所有分支；

- `--no-tags`：不克隆标签；

- `--recurse-submodules`：递归克隆子模块。

## 仓库同步

1、拉取所有分支

```shell
git clone --mirror
```

- `git clone` 命令只会拉取 `master` 的最新信息。
- `--mirror` 会将所有分支内容都拉下来。

2、将远端已经删除的分支在本地清理掉

```shell
git remote update --prune origin
```

3、推送所有分支到目标仓库

```shell
git push -f --prune --all [target_repository]
```

4、同步 tag

```shell
git tag --sort==-createordate | head -n2000 | git push -f [target_repository]
```

三条命令同步仓库：
> 需要有强制推送的权限；部分需要把分支保护关闭

```shell
git clone --bare [source_repository] [dir_name]  # 源仓库

cd [dir_name]

git push --mirror [target_repository]  # 目标仓库
```
