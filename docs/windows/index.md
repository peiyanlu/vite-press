# Windows Problem

## 此系统上禁止运行脚本

1、`win+x` 打开 `PowerShell`（管理员）

2、输入 `set-ExecutionPolicy RemoteSigned` 回车

3、键入 `Y` 或者 `A` 回车

4、输入 `get-executionpolicy` 回车

5、`RemoteSigned` 表示成功

## HDMI显示器颜色

> 设置显示器的颜色就和笔记本保持一致

1、在桌面点击鼠标右键，选择 `NVIDIA 控制面板`

2、在 `显示` 中选择 `更改分辨率`

3、在 `应用以下设置` 中，选择 `使用 NVIDIA 颜色设置`，`输出动态范围` 改为 `完全`

## 删除文件（夹）

```shell
#删除文件夹
RMDIR [/S] [/Q] [drive:]path
#or
RD [/S] [/Q] [drive:]path

#只删除文件
DEL [/S] [/Q] [drive:]path
```

- /S 除目录本身外，还将删除指定目录下的所有子目录和文件。用于删除目录树。
- /Q 安静模式，带 /S 删除目录树时不要求确认