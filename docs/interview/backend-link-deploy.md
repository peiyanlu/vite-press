---
title: 前后端联动部署
tags:
  - interview
  - Docker
---


# {{ $frontmatter.title }}（Docker Compose）


本文介绍如何使用 `Docker Compose` 一键联动部署前端与后端项目，实现本地或服务器上的统一访问和管理。


## 🧩 什么是前后端联动部署？


> 把前端和后端打包在一起部署，前端可以直接访问 `/api`，不需要跨域、不需要额外端口。

通过 Nginx 代理 `/api/` 到后端容器，达到统一入口的效果。


## 🛠️ 项目结构说明

```
docker-fullstack-example/
├── docker-compose.yml
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── dist/
│       └── index.html
└── backend/
    ├── Dockerfile
    ├── index.js
    └── package.json
```

## 📦 docker-compose.yml

```yaml
version: '3'
services:
  frontend:
    build: ./frontend
    ports:
      - "80:80"
    restart: always
  
  backend:
    build: ./backend
    ports:
      - "3000:3000"
    restart: always
```

## 🚪 Nginx 配置（frontend/nginx.conf）

```nginx
server {
    listen 80;
    server_name localhost;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://backend:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

## 🧱 前端 Dockerfile

```Dockerfile
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## ⚙️ 后端 Dockerfile（Node 示例）

```Dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install --production
RUN npm run build
CMD ["node", "dist/main.js"]
EXPOSE 3000
```

简化版本也可以：

```Dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "index.js"]
EXPOSE 3000
```

## 🚀 启动部署

```bash
docker compose up --build -d
```

然后访问：

- http://localhost/ 前端网页
- http://localhost/api 接口响应

## 🧪 测试接口

```bash
curl http://localhost/api
```

## 🧯 常见问题排查

| 问题              | 解决方法                           |
|-----------------|--------------------------------|
| 前端访问不了接口        | 检查 nginx.conf 中 proxy_pass 配置  |
| 容器没启动或自动退出      | 用 `docker compose logs` 查看错误日志 |
| WSL 无法运行 docker | 打开 Docker Desktop 并启用 WSL 集成   |

## 📚 建议

- 使用 `.env` 文件管理端口、路径
- 将服务拆分模块化结构部署到云平台（如阿里云、腾讯云）
- 加上 HTTPS / nginx gzip / 日志持久化等优化

## ✅ 总结


使用 Docker Compose 联动部署：

- 保证前后端能互相访问（通过服务名通信）
- 简化部署流程，一条命令启动整个系统
- 易于迁移、扩展和上线

