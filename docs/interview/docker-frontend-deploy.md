---
title: 部署前端应用
tags:
  - interview
  - Docker
---


# {{ $frontmatter.title }}（静态资源）


本文介绍如何使用 Docker 将构建后的 Vue/React 等前端项目通过 Nginx 进行部署。


## 📁 项目结构示例

```
my-app/
├── dist/                  # 构建后的静态资源（npm run build）
├── Dockerfile             # Docker 构建文件
└── nginx.conf             # 自定义 Nginx 配置
```

## 🐳 Dockerfile 示例

```Dockerfile
FROM nginx:stable-alpine

# 拷贝 Nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 拷贝构建产物
COPY dist/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

## ⚙️ nginx.conf 示例


支持 history 路由 + API 接口反代。

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

## 🏗️ 构建并运行容器

```bash
# 构建镜像
docker build -t my-frontend-app .

# 启动容器
docker run -d -p 80:80 --name frontend my-frontend-app
```

## 🤝 联动后端（可选 docker-compose 示例）

```yaml
version: '3'
services:
  frontend:
    build: .
    ports:
      - "80:80"
    restart: always
  
  backend:
    image: my-backend-app
    ports:
      - "3000:3000"
    restart: always
```

## 🧩 常见问题

| 问题       | 解决方案                                         |
|----------|----------------------------------------------|
| 页面刷新 404 | `try_files $uri $uri/ /index.html;` 配置处理路由问题 |
| 接口跨域     | 通过 Nginx 反向代理 `/api/`，或后端配置 CORS             |
| 更新无效     | `docker build --no-cache` 重构镜像，避免缓存          |

## ✅ 总结


你已经完成了：

- 前端静态资源容器化
- Nginx 自定义配置
- 支持前端路由、接口代理
- 可联动部署后端服务

下一步可拓展：

- HTTPS 支持（Let’s Encrypt）
- CI/CD 自动部署
