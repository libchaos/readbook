# Promise

## what
  promise 一种抽象  一个函数返回一个对象叫做promise
  这个promise表示异步操作最终的结果
  promise 是有状态
  异步操作未完成 --- pending
  异步操作完成   --- fulfilled
  异步操作出错 ----  rejected
  只要promise是fulfilled 或者 rejected 则promise被认为是稳定的（settled）

  为了收到fulfilled的值 和 error 的值 用then方法
  promise.then([onFuifilled], [onRejected])

```javascript
asyncOperation(arg, (err, result) => {
  if (err){
    // handle err
  }
  // do stuff with result
})
asynOperation(arg)
  .then(result => {
    
  }, err => {

  })


```




1. promise状态
2. promise的then方法是同步的， 当它返回另外一个promise的时候
  - 当resolve 或者reject返回一个值 x
    - resolve(x) if x is value
    - resolve(y) if x is promise it fulill y = resovlve(x)
    - reject(t) if x is promise it reject y = reject(x)


```javascript
module.exports = function (callbackBasedApi) {
  return function promisefied() {
    const args = [].slice.call(arguments)
    return new Promise((resolve, reject) => {
      args.push((err, result) => {
        if (err) return reject(err)
        resolve(result)
      })
      callbackBasedApi.apply(null, args)
    })
  }
}
```

- Promise.all
- Promise.race



