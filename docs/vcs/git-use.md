# Git 使用

## Git 仓库同步

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

4、同步tag
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
