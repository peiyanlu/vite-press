## 此系统上禁止运行脚本

解决方法：

1、win+x 打开PowerShell（管理员）


2、set-ExecutionPolicy RemoteSigned //设置为打开


3、键入Y或者A,同意

4、执行get-executionpolicy查看是否更改成功，为RemoteSigned表示成功