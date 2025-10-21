---
title: NestJs 面试题
tags:
  - interview
  - nest
---


# {{ $frontmatter.title }}


## 一、基础概念


### 1. NestJS 是什么？它与 Express 有什么关系和区别？


::: details 点击查看答案

NestJS 是一个渐进式的 Node.js 框架，使用 TypeScript 构建，内部使用 Express（或可选的 Fastify）作为底层 HTTP 处理引擎。它提供面向对象编程（OOP）、函数式编程（FP）和响应式编程（RP）的结合，适合构建可维护性强的企业级应用。

**与 Express 区别：**

* NestJS 是建立在 Express 之上的框架，提供模块化、依赖注入、装饰器等高级抽象。
* Express 是轻量级 Web 框架，Nest 提供结构化的开发体验。

:::


### 2. 模块（Module）、控制器（Controller）、服务（Service）的职责？


::: details 点击查看答案

* **Module**：用于组织代码结构，声明 Controller、Service 等；是 NestJS 应用的基本构建块。
* **Controller**：负责处理请求并返回响应，通常对应路由。
* **Service**：提供业务逻辑，供 Controller 调用，可注入到其他组件。
  :::

### 3. NestJS 使用的依赖注入机制如何实现？


::: details 点击查看答案

基于 TypeScript 元数据和 Reflect API 实现，装饰器 `@Injectable()` 将类标记为 IoC 容器管理的类，通过构造函数注入（推荐）和属性注入，支持作用域、生命周期钩子等。

::: details 作用域、生命周期

* NestJS 支持三种作用域：
    * DEFAULT：单例（默认）
    * REQUEST：每次 HTTP 请求一个实例
    * TRANSIENT：每次注入都会创建新实例

```typescript
import { Injectable, Scope } from '@nestjs/common';


@Injectable({ scope: Scope.REQUEST })
export class RequestScopedService {
  private readonly uuid = Math.random().toString(36).slice(2, 10);
  
  getUuid() {
    return this.uuid;
  }
}
```

* NestJS 提供以下生命周期钩子接口：
    * OnModuleInit：模块初始化完成时调用
    * OnModuleDestroy：模块销毁前调用
    * OnApplicationBootstrap：应用启动完成后调用
    * OnApplicationShutdown：应用关闭前调用

```typescript
import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'


@Injectable()
export class LifecycleService implements OnModuleInit, OnModuleDestroy {
  onModuleInit() {
    console.log('LifecycleService 初始化完成')
  }
  
  onModuleDestroy() {
    console.log('LifecycleService 即将销毁')
  }
}
```

:::


### 4. main.ts 的作用？可以配置哪些内容？


::: details 点击查看答案

Nest 应用入口文件，创建 App 实例并启动服务。常用于配置：

* 中间件（如全局拦截器、异常过滤器）
* CORS、安全、日志
* 全局管道、前缀、Swagger

:::


### 5. 什么是提供者（Provider）？如何注册和注入它？


::: details 点击查看答案

提供服务或逻辑的类或值。通过 `@Injectable()` 装饰，可注入到其他组件中。

* 注册方式：直接在模块中声明，或通过 `useClass`、`useValue`、`useFactory` 自定义注册。
* 注入方式：构造函数注入（推荐）和属性注入。

:::


## 二、装饰器与依赖注入


### 6. 常见参数装饰器


::: details 点击查看答案

| 装饰器          | 说明       |
|--------------|----------|
| `@Body()`    | 获取请求体    |
| `@Query()`   | 获取查询参数   |
| `@Param()`   | 获取路径参数   |
| `@Req()`     | 获取原始请求对象 |
| `@Res()`     | 获取原始响应对象 |
| `@Headers()` | 获取请求头    |

:::


### 7. 自定义装饰器 `@CurrentUser()`


::: details 点击查看答案

* 使用 `createParamDecorator` 创建装饰器
* 在 Guard 或 Interceptor 中将用户信息附加到 `request`
* 装饰器从 `ExecutionContext` 中提取 user 返回

```ts
export const CurrentUser = createParamDecorator((data, ctx) => {
  const request = ctx.switchToHttp().getRequest();
  return request.user;
});
```

:::


### 8. 如何实现基于角色的权限控制（RBAC）？如何设计权限码？


::: details 点击查看答案

* 定义权限码（如 `user:create`）
* 用户与角色关联，角色与权限码关联
* 使用 `@SetMetadata('roles', ['admin'])` 和 Guard 实现权限控制
* 权限码设计可采用 `模块:资源:操作` 格式，如 `user:profile:update`

:::


## 三、中间件、守卫、拦截器、管道


### 9. Middleware vs Interceptor


::: details 点击查看答案

| 对比项  | Middleware | Interceptor   |
|------|------------|---------------|
| 处理时机 | 请求进入前      | Controller 前后 |
| 操作对象 | 原始 req/res | 方法调用结果、流      |
| 场景   | 日志、鉴权、限流   | 响应包装、异常处理、缓存  |

:::


### 10. Pipe 的作用


::: details 点击查看答案

* 转换和验证请求数据
* 常结合 DTO 使用类验证器如 `class-validator`、`class-transformer`
* 通过 `ValidationPipe` 全局应用

:::


### 11. Guard 控制访问权限


::: details 点击查看答案

* 实现 `CanActivate` 接口，返回布尔值
* 可应用于方法、控制器、全局
* 可结合 JWT、角色权限判断使用

:::


### 12. 拦截器常见用途


::: details 点击查看答案

* 统一响应格式
* 日志记录
* 异步缓存处理
* 示例：统一响应格式：

```ts

@Interceptor()
export class ResponseInterceptor implements NestInterceptor {
  intercept(context, next) {
    return next.handle().pipe(map(data => ({ code: 0, message: 'OK', data })));
  }
}
```

:::


## 四、异常处理


### 13. 异常处理机制


::: details 点击查看答案

* 使用 `@Catch()` 创建异常过滤器
* 全局注册：`app.useGlobalFilters(new HttpExceptionFilter())`
* 可捕获业务异常、自定义异常、系统异常

:::


### 14. HttpException 和自定义异常


::: details 点击查看答案

* `HttpException` 可指定状态码和消息
* 继承 `HttpException` 实现自定义业务错误，如 `BusinessException`

:::


## 五、模块与架构设计


### 15. 动态模块（Dynamic Module）


::: details 点击查看答案

* 用于创建带配置选项的模块
* 使用 `register()` 静态方法返回 `DynamicModule`
* 场景：数据库、SDK、自定义模块初始化

:::


### 16. 避免模块循环依赖


::: details 点击查看答案

* 使用 `forwardRef(() => Module)`
* 拆分模块逻辑，使用事件或异步通信

:::


### 17. 声明全局模块


::: details 点击查看答案

* 使用 `@Global()` 装饰器 + exports 导出
* 在 `AppModule` 中导入即可全局使用

:::


## 六、数据库与持久化


### 18. TypeORM vs Prisma


::: details 点击查看答案

| 项目   | TypeORM | Prisma          |
|------|---------|-----------------|
| 学习曲线 | 轻       | 稍陡              |
| 类型支持 | 一般      | 非常强             |
| 配置方式 | 注解方式    | schema 文件 + CLI |

:::


### 19. TypeORM 实现关系和事务


::: details 点击查看答案

* 一对多：`@OneToMany` / `@ManyToOne`
* 多对多：`@ManyToMany` + `@JoinTable`
* 事务：使用 `QueryRunner` 或 `@Transaction()` 装饰器

:::


### 20. 通用 Repository 层设计


::: details 点击查看答案

* 使用基类封装通用增删改查
* 提供泛型支持，如 `BaseRepository<T>`

:::


## 七、认证与授权


### 21. JWT 实现流程


::: details 点击查看答案

1. 用户登录验证成功
2. 生成 JWT（包含 userId 等 payload）
3. 客户端保存（如放入 cookie/localStorage）
4. 每次请求附带 Authorization Header
5. 守卫中解析验证 JWT，附加 user 到请求中

:::


### 22. 使用 Passport 实现登录


::: details 点击查看答案

* 安装 `@nestjs/passport`, `passport-local`, `passport-github`
* 使用 Strategy 实现验证逻辑
* 使用 AuthGuard 自动处理策略

:::


### 23. 实现刷新 Token


::: details 点击查看答案

* 登录时返回 accessToken + refreshToken
* 刷新时验证 refreshToken，签发新 token
* 可存储 refreshToken 到 Redis 防盗用

:::


## 八、配置与环境管理


### 24. 环境配置管理


::: details 点击查看答案

* 使用 `ConfigModule.forRoot({ isGlobal: true })`
* 支持 `.env` 多环境文件（如 `.env.development`）

:::


### 25. `@nestjs/config` 使用方法


::: details 点击查看答案

* 读取配置项 `ConfigService.get('DB_HOST')`
* 可组合 schema 校验（如 Joi）
* 支持类型提示、环境注入

:::


## 九、性能、安全与扩展能力


### 26. 使用缓存（Redis）


::: details 点击查看答案

* 安装 `cache-manager` 和 Redis store
* 设置 `CacheModule.register()`
* 使用 `@Cacheable()` 或 `interceptor` 缓存响应

:::


### 27. 限流实现


::: details 点击查看答案

* 使用 `@nestjs/throttler`
* 配置全局 `ThrottlerModule.forRoot({ ttl, limit })`
* 使用 `@Throttle()` 装饰器

:::


### 28. 防御 XSS/CSRF


::: details 点击查看答案

* 使用 `@nestjs/helmet` 提供安全头
* 配置 CORS，使用 CSRF token 验证

:::


## 十、微服务与消息队列


### 29. 微服务架构支持


::: details 点击查看答案

* 内置支持 TCP、Redis、NATS、MQTT、gRPC
* 使用 `ClientsModule.register()` 创建 ClientProxy 通信

:::


### 30. 使用 Bull/BullMQ 队列


::: details 点击查看答案

* 安装 `@nestjs/bullmq`
* 配置 `BullModule.forRoot()`
* 使用 `@Processor()` 和 `@OnQueueCompleted()` 等装饰器处理任务

:::


### 31. RPC 通信实现


::: details 点击查看答案

* 使用 `ClientProxy` 发起请求
* Server 端使用 `@MessagePattern()` 监听消息

:::


## 十一、测试与部署


### 32. Jest 单元测试


::: details 点击查看答案

* 使用 `Test.createTestingModule()` 创建测试模块
* 使用 `service.method()` 验证逻辑

:::


### 33. Supertest 接口测试


::: details 点击查看答案

* 使用 `supertest(app.getHttpServer())`
* 测试 Controller 路由

:::


### 34. Docker 部署 Nest 项目


::: details 点击查看答案

* 创建 `Dockerfile`
* 使用 `docker-compose` 管理数据库/Redis
* 使用 `NODE_ENV=production` 构建

:::


## 十二、实战能力题（代码）


### 35. 全局异常过滤器

```ts

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception instanceof HttpException ? exception.getStatus() : 500;
    const message = exception instanceof HttpException ? exception.getResponse() : 'Internal error';
    console.error('异常:', exception);
    response.status(status).json({ code: status, message });
  }
}
```

### 36. 统一响应结构拦截器

```ts

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, any> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(map(data => ({ code: 0, message: 'success', data })));
  }
}
```

### 37. 权限 Guard

```ts

@Injectable()
export class PermissionGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const required = this.reflector.get<string[]>('permission', context.getHandler());
    return required.every(p => user.permissions.includes(p));
  }
}
```

### 38. 动态模块

```ts

@Module({})
export class DbModule {
  static register(config: DbConfig): DynamicModule {
    return {
      module: DbModule,
      providers: [ { provide: 'DB_CONFIG', useValue: config } ],
      exports: [ 'DB_CONFIG' ]
    };
  }
}
```

### 39. 登录与刷新 Token

```ts
class AuthController {
  @Post('login')
  async login(@Body() dto: LoginDto) {
    const user = await this.authService.validate(dto);
    return this.authService.login(user); // 返回 accessToken 和 refreshToken
  }
}
```

### 40. 日志中间件

```ts

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();
    res.on('finish', () => {
      console.log(`[${ req.method }] ${ req.originalUrl } ${ Date.now() - start }ms`);
    });
    next();
  }
}
```
