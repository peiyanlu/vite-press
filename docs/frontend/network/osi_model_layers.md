---
title: OSI 七层模型
description: 介绍什么是 OSI 七层模型（OSI Model）
category: network
tags:
  - network
  - OSI
---


# {{ $frontmatter.title }}


OSI 七层模型（Open Systems Interconnection Model，开放式系统互联模型）是由 ISO（国际标准化组织）提出的网络通信模型，用于描述计算机网络通信的分层架构。它将网络通信过程划分为七个层次。


## 🧱 OSI 七层模型结构图

```
┌──────────────┐
│ 7. 应用层     │ Application
├──────────────┤
│ 6. 表示层     │ Presentation
├──────────────┤
│ 5. 会话层     │ Session
├──────────────┤
│ 4. 传输层     │ Transport
├──────────────┤
│ 3. 网络层     │ Network
├──────────────┤
│ 2. 数据链路层 │ Data Link
├──────────────┤
│ 1. 物理层     │ Physical
└──────────────┘
```

## 📚 各层功能简述

| 层级 | 名称    | 英文名          | 主要功能                       |
|----|-------|--------------|----------------------------|
| 7  | 应用层   | Application  | 面向用户的接口，如 HTTP、FTP、SMTP    |
| 6  | 表示层   | Presentation | 数据格式转换、加密解密、压缩解压           |
| 5  | 会话层   | Session      | 建立、管理、终止会话连接（如 RPC、SQL 会话） |
| 4  | 传输层   | Transport    | 提供可靠传输（如 TCP）或不可靠传输（如 UDP） |
| 3  | 网络层   | Network      | IP 地址、路由选择（如 IP 协议、ICMP）   |
| 2  | 数据链路层 | Data Link    | MAC 地址、帧的传输（如 Ethernet）    |
| 1  | 物理层   | Physical     | 物理媒介传输比特流，如网线、电磁波等         |

## 🔍 常见协议与层级对应

| 协议/技术          | 所在层级     |
|----------------|----------|
| HTTP/HTTPS     | 应用层（7）   |
| TLS/SSL        | 表示层（6）   |
| TCP / UDP      | 传输层（4）   |
| IP / ICMP      | 网络层（3）   |
| Ethernet / PPP | 数据链路层（2） |
| 光纤、电缆、无线电      | 物理层（1）   |

## 💡 记忆技巧（由上到下）


**"应表会传网数物"**

> 应用层 → 表示层 → 会话层 → 传输层 → 网络层 → 数据链路层 → 物理层
