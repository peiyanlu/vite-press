---
title: WSL 安装 Docker
description: Win11 启用 WSL 并安装 Docker
tags:
  - windows
  - Win11
  - WSL
---


# {{ $frontmatter.title }}


:::warning
本文运行配置基于 `Win11 24H2` 系统版本，更多 `WSL` 信息请参阅 [适用于 Linux 的 Windows 子系统文档](https://learn.microsoft.com/zh-cn/windows/wsl/)
:::


## 安装 WSL 和 Ubuntu


在管理员模式下打开 `PowerShell` 或 `Windows 命令提示符`，输入 `wsl --install` 命令，然后重启计算机

```powershell
wsl --install

```

此命令将启用运行 WSL 并安装 Linux 的 `Ubuntu` 发行版所需的功能（从 `Microsoft Store` 安装）；

:::info

```powershell
wsl --install --no-distribution
```

此命令仅安装 WSL，后续可以自定义安装需要的 Linux 发行版
:::

基本命令：

* 列出已安装的 Linux 发行版

```powershell
wsl --list --online 
```

* 设置默认 WSL 版本

```powershell
wsl --set-default-version <Version>
```

* 更新 WSL

```powershell
wsl --update
```

* 检查 WSL 版本

```powershell
wsl --version
```

* 关闭

```powershell
wsl --shutdown
```

* Terminate

```powershell
wsl --terminate <Distribution Name>
```

* 标识 IP 地址

标识通过 WSL 2 安装的 Linux 分发版 IP 地址（WSL 2 VM 地址）

```powershell
wsl hostname -i
```

:::info

* `wsl hostname -i` 是本地计算机（127.0.1.1 是占位符诊断地址）

* `wsl hostname -I` 会返回其他计算机所看到的本地计算机的 IP 地址，应该用于识别通过 WSL 2 运行的 Linux 发行版的 `connectaddress`
  :::

表示从 WSL 2 看到的 WINDOWS 计算机的 IP 地址 (WSL 2 VM)

```shell
cat /etc/resolv.conf 
```

* 注销或卸载 Linux 发行版

```powershell
wsl --unregister <DistributionName>
```

更多 [WSL 的基本命令](https://learn.microsoft.com/zh-cn/windows/wsl/basic-commands)


## 配置 WSL


> [!IMPORTANT]
> `%UserProfile%` 表示 `C:\Users\<User_Name>`

Win + R 输入 `%UserProfile%\.wslconfig` 打开 WSL 配置文件，写入：

```text
# 设置适用于在WSL2上运行的所有Linux发行版
# https://learn.microsoft.com/zh-cn/windows/wsl/wsl-config#main-wsl-settings


[boot]
# 启用 systemd
systemd=true


[wsl2]

# 开启镜像网络
networkingMode=mirrored

# 开启 DNS Tunneling
dnsTunneling=true

# 开启自动同步代理
autoProxy=true

# 虚拟内存
swap=16GB

# 虚拟机内存
memory=8GB
 
# 虚拟处理器
processors=12


[experimental]

# 开启自动回收内存
autoMemoryReclaim=dropcache

# 开启自动释放 WSL2 虚拟硬盘空间
sparseVhd=true

# 允许 IPv4 地址访问
hostAddressLoopback=true
```

更多 [.wslconfig 配置参考](https://learn.microsoft.com/zh-cn/windows/wsl/wsl-config#main-wsl-settings)


## 配置 Ubuntu


打开安装的 Ubuntu 应用，按照提示设置 Username 和 Password

:::info 禁用命令行每日提醒

```shell
touch ~/.hushlogin
```

:::

设置软件下载镜像源

1. 切换到源路径

```shell
cd /etc/apt
```

2. 备份 Ubuntu 原始源

```shell
sudo cp sources.list sources.list.bak
```

3. 开始换源

```shell
sudo nano sources.list
```

```text
# 清华镜像源（jammy 对应 v22 版本）
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse
```

4. 检查更新

```shell
sudo apt update
```

5. 更新已安装软件包

```shell
sudo apt upgrade
```

6. 开机自启动

Win + R 运行 `shell:startup` 打开启动目录，在此目录中创建文件 `wsl-startup.vbs`

```text
set ws=wscript.CreateObject("wscript.shell")

ws.run "wsl -d Ubuntu", 0
```

## 安装 Docker

1. 卸载旧版本

卸载 Linux 发行版中提供的 Docker 软件包的非官方发行版

```shell
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
```

2. 配置 Docker 安装源【apt 安装】

```shell
# 添加 Docker 的官方 GPG 密钥

sudo apt-get update
sudo apt-get install ca-certificates curl

sudo install -m 0755 -d /etc/apt/keyrings
# sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo curl -fsSL https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# 产看生成的秘钥
ls  /etc/apt/keyrings/

# 将仓库添加到 Apt 源

# echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" |  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/ubuntu $(. /etc/os-release && echo "$UBUNTU_CODENAME") stable" |  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update
```

3. 安装 Docker 【apt安装】

```shell
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

:::info 不使用 apt 安装

* 直接使用命令行

```shell
curl -fsSL get.docker.com -o get-docker.sh
sudo sh get-docker.sh --mirror Aliyun
```

* 打开 get.docker.com 另存为 get-docker.sh

```shell
cp /mnt/c/Users/<User_Name>/Downloads/get-docker.sh get-docker.sh
sudo sh get-docker.sh --mirror Aliyun
```

:::

4. 配置 Docker 镜像源

```shell
sudo nano /etc/docker/daemon.json
```

```json lines
{
    "registry-mirrors": [
        "https://docker.m.daocloud.io"
    ]
}
```

5. 添加 Docker 到用户组

```shell
sudo usermod -aG docker $USER
```

6. 验证安装

```shell
docker --version
docker run --rm hello-world
```

7. 设置 Docker 自启动

```shell
# 开机自启
sudo systemctl enable docker

# 关闭开机自启
sudo systemctl disable docker

# 启动
sudo systemctl start docker

# 重启
sudo systemctl restart docker
```

## 网络问题


.wslconfig 中配置的 networkingMode=mirrored 带来的一些网络问题，参考 [镜像模式网络](https://learn.microsoft.com/zh-cn/windows/wsl/networking#mirrored-mode-networking)

1. Docker 端口转发失败

> [!TIP]
> 不能通过 localhost:xxx 访问

* 设置 Docker 防火墙

```shell
sudo nano /etc/docker/daemon.json
```

```json lines
{
  "iptables": false,
  // [!code ++]
  "registry-mirrors": [
    "https://docker.m.daocloud.io"
  ]
}
```

2. 无法外部访问（局域网访问）

* 设置 hyper-v 防火墙

使用管理员权限在 PowerShell 窗口中运行以下命令：

```powershell
Set-NetFirewallHyperVVMSetting -Name '{40E0AC32-46A5-438A-A0B2-2B479E8F2E90}' -DefaultInboundAction Allow
```

更多 [网络注意事项](https://learn.microsoft.com/zh-cn/windows/wsl/networking)

