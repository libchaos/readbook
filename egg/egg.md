# Egg

## what why how



![](http://7xojpa.com1.z0.glb.clouddn.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/52cbf697402f66ed2b0275e08afa94b2.png)

从egg的源码看出它主要有4部分构成

1. 扩展程序
2. 中间件
3. 配置
4. lib中的core模块， loader 代理 应用程序 egg主应用


##  egg debug 

- vscode

## egg 框架约定

- app/router.js 用于配置URL路由规则
- app/controller/** 用于配置用户输入，处理后返回结果
- app/service/** 用于编写业务逻辑层
- app/middleware/** 用于编写中间件
- app/extend/** 用于编写框架扩展
- config/config.{env}.js 用于编写配置文件
- config/plugin.js 用于编写需要加载的插件
- test/** 用于单元测试
- app.js / agent.js 用于定义启动时的初始化工作
- app/model/** 用于放置model
- app/view 放置模板
- app/public 静态资源
- app/schedule/** 定时任务



## 内置基础对象

### Application

 app 对象挂载一些全局方法和对象

L

### Context



### Requets & Response

### Controller

### Service

### Helper

### Logger







