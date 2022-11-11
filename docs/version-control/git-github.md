# GitHub  常用操作

## 获取 token / 私人令牌
::: info steps
1、登录 `GitHub` 账号；

2、通过路径「用户头像」→「Settings」进入「Developer setting」；

3、选择「Personal access tokens」选项后点击「Generate new token」；

4、「Note」字段可以随意填写；例如：ACCESS_TOKEN；

5、「Select scopes」字段根据需求进行勾选；

- repo 字段为必选字段，请您直接勾选；
- admin:repo_hook 字段为可选字段，用于自动生成 webhook；

> 当需要 Gitee 自动从 GitHub 同步仓库时，建议勾选。

6、点击「Generate token」生成私人令牌；

7、复制私人令牌并妥善保管。
:::

## 获取和设置 SSH
::: info
1、命令行生成秘钥
```shell
ssh-keygen -t rsa -b 4096 -C "$(git config user.email)" -f gh-pages -N ""
```
得到两个文件：
- `gh-pages.pub` 是一个公钥
- `gh-pages` 是一个私钥

2、登录 `GitHub` 账号；

3、通过路径「用户头像」→「Settings」进入「SSH and GPG keys」，点击「New SSH key」；

4、「Title」字段可以随意填写；例如：SSH_KEY；

-t：指定生成密钥的类型，默认使用SSH2d的rsa
-f：指定生成密钥的文件名，默认id_rsa（私钥id_rsa，公钥id_rsa.pub）
-P：提供旧密码，空表示不需要密码（-P ‘’）
-N：提供新密码，空表示不需要密码(-N ‘’)
-b：指定密钥长度（bits），RSA最小要求768位，默认是2048位；DSA密钥必须是1024位（FIPS 1862标准规定）
-C：提供一个新注释
-R hostname：从known_hosta（第一次连接时就会在家目录.ssh目录下生产该密钥文件）文件中删除所有属于hostname的密钥
:::

## 设置 SSH Deploy Key
::: info
1、执行命令行生成秘钥

2、前往代码仓库设置
- 前往 `Deploy Keys` 添加公钥，并且勾选 `Allow write access`
- 前往 `Secrets` 并且添加私钥作为 `ACTIONS_DEPLOY_KEY`

[参考链接](https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-create-ssh-deploy-key)
:::