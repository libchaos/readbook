# Koa

![](http://7xojpa.com1.z0.glb.clouddn.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/8101f28ba60f38b13f3d1f2e615863bd.png)

## 初始化应用

```javascript
const app = new Koa() // new 一个Koa实例
app.use(...)  // 开始写各种use use把你写的函数一个个push进middleware 数组
app.listen(3000) //监听 就是 http.createServer(app.callback()).listen
```

##  请求到来-创建上下文部分

```javascript
// 当请求过来的时候，http.createServer的callback 传入 req， res。
// 然后Koa拿到req， res后用createContext创建应用上下文，根据 contex.js request.js response.js 创建， 并进行属性代理
```

## 请求到来-中间件执行部分

```javascript
// 用koa-compose将传入的middleware组合起来，然后返回一个Promise

http.createServer((req, res) => {
  // ... 通过req， res创建上下文
  // fn 是 koa-compose 返回的promise
  return fn(ctx).then(handleResponse).catch(onerror)
})
```

## 返回res特殊处理部分

- handleResponse? 应为这里没有res.end(), Koa 之前都是使用ctx.body = xxx， 那么他是怎么write回res， 这部分逻辑在```function respond(){}```

- ```javascript
  const handleResponse = () => respond(ctx)
  ```

- respond到底做了什么？ 判断你之前中间件写的body的类型，做一些处理，然后使用```res.end``

  ### 结束返回页面

