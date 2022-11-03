#!/usr/bin/env sh

# 忽略错误
set -e

# 构建
npm run docs:build

# 进入待发布的目录
cd docs/.vitepress/dist

# 初始化 git 并强制提交到仓库
git init
git add -A
git commit -m "Updated version of git repositoryMap"
git remote add origin https://gitee.com/peiyanlu/vite-press.git
git push -f origin docs-build

# 返回上次所在的目录
cd -

# 删除dist文件夹
rm -rf docs/.vitepress/dist/.git

# 是否关闭命令行窗口
#exec /bin/bash