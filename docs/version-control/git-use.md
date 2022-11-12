# Git 使用

## Git 仓库同步
1. 首先通过git clone --mirror 将所有的分支都拉下来。

一般我们用git clone命令只会拉取master的最新信息。

但是使用--mirror会将所有分支内容都拉下来。

2. git remote update --prune origin

将远端已经删除的分支在本地清理掉。

这个可以参考这个博文：聊下 git remote prune origin_王清培-CSDN博客

3. git push -f --prune --all 目标仓库地址

git push -f --prune --all ssh://gerrit.../dest_repo_name

4. 同步tag

git tag --sort==-createordate | head -n2000 | git push -f ssh://gerrit.../dest_repo_name

最近发现一个迁移仓库的命令，特别简单。

场景：需要将一个平台（如gitlab）的仓库直接推送到另一个平台：如gerrit。

前提：需要有强制推送的权限。如果是往gitlab推送，需要把分支保护关闭。如果要往gerrit推送，需要给推送用户配置一个强制推送的权限。

三条命令：

git clone --bare 源git仓库地址  #源仓库

cd project.git/

git push --mirror 目标git仓库地址  #目标仓库
