# GitHub  常用操作

## 获取 token / 私人令牌
::: tip steps
1、登录 `GitHub` 帐号；

2、通过路径「用户头像」→「Settings」进入「Developer setting」；

3、选择「Personal access tokens」选项后点击「Generate new token」；

4、「Note」字段可以随意填写；例如：Gitee_Mirror；

5、「Select scopes」字段根据需求进行勾选；

- repo 字段为必选字段，请您直接勾选；
- admin:repo_hook 字段为可选字段，用于自动生成 webhook；

> 当需要 Gitee 自动从 GitHub 同步仓库时，建议勾选。

6、点击「Generate token」生成私人令牌；

7、复制私人令牌并妥善保管。
:::
