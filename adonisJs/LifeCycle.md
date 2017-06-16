# Http Server

1. 提供者及其别名在 `bootstrap/app.js` 文件中定义。
2. `bootstrap/http.js` 文件将使用 `providers` 数组，并将其注册到IoC容器。
3. 接下来，我们注册在`package.json`文件中定义的自动加载目录。您可以随意更改设置名为`App`的目录或自动加载命名空间。


 ```javascript
   {
     "autoload": {
       "App": "./app"
     }
   }
 ```
4. 然后，引导过程将按照定义的顺序加载以下文件

   ​	

   - bootstrap/events.js
   - app/Http/kernel.js
   - app/Http/routes.js
   - database/factory.js

5. 最后，它将通过监听`.env`文件中定义的主机和端口启动HTTP服务器，并发出`Http.start`事件，您可以侦听该事件并添加自己的逻辑

   ​

   ​

# Ace Command

连接ace命令的过程类似于 [Http Server](https://adonis-china.org/docs/3.2/app-lifecycle#_http_server) ，但是有以下区别。

1. 在`bootstrap/app.js`文件中定义的所有提供程序将被加载。这意味着`aceProviders`和`provider`将被连接并发送到IoC容器。
2. 所有`commands`数组都将注册为 [Ace](https://adonis-china.org/docs/3.2/interactive-shell)。
3. 这次将触发`Ace.start`事件而不是`Http.start`。

# Http Request

HTTP请求是在给定时间处理一个或多个HTTP请求的动态流程。

1. 根据`public`目录中的静态文件检查传入请求URL，如果发现静态文件就直接返回。
2. 否则，将根据请求URL搜索相应的路由，然后执行以下步骤。
   - 运行所有全局中间件
   - 运行所有特定于路由的中间件
   - 执行路由动作，可以是**控制器方法**或**闭包**。
3. 如果以上两个都不符合，将会抛出一个404的`HttpException`。

- 