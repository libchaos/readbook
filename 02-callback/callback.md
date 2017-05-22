# 回調

**In fact, it simply indicates that a result is propagated by passing it to another function (the callback), instead of directly returning it to the caller.**

回调就是 传入一个函数作为最后一个参数，当当前函数动作执行完之后
调用回调函数 并且以当前函数运行结果为参数传入，如果没有结果，可以不传。


## 同步情况 （callback sync continuation passing） CPS 延长参数传递模式？
```javascript 
function divide(a, b, cb) {
  const result = a / b;
  cb(result);
}

divide(3, 2, (res) => {console.log(res)});
```

## 异步情况 callback async cont passing
#### 事件 就是函数调用。
```javascript

function additionAsync(a, b, callback) {
  setTimeout(() => callback(a + b), 100);
}

console.log('before');
additionAsync(1, 2, result => console.log('Result: ' + result));
console.log('after');



console.log('third');
function div(a, b, cb) {
  const result = a / b;
  process.nextTick(() => { // 将此事件放入当前事件调用队列的末尾。
    cb(result);
  })
}
console.log('fourth');

div(1, 2, (r) => console.log(r));
console.log('fifth');
```

## callback hell、

**The situation where the abundance of closures and in-place callback definitions transform the code into an unreadable and unmanageable blob is known as callback hell.**

认识到如下的代码会变得越来越笨拙

```javascript
function spider(url, callback) {
  const filename = utilities.urlToFilename(url);
  fs.exists(filename, exists => { //[1]
    if (!exists) {
      console.log(`Downloading ${url}`);
      request(url, (err, response, body) => { //[2]
        if (err) {
          callback(err);
        } else {
          mkdirp(path.dirname(filename), err => { //[3]
            if (err) {
              callback(err);
            } else {
              fs.writeFile(filename, body, err => { //[4]
                if (err) {
                  callback(err);
                } else {
                  callback(null, filename, true);
                }
              });
            }
          });
        }
      });
    } else {
      callback(null, filename, false);
    }
  });
}
```
### 异步编程的困难点：
- 好处:  定义匿名函数又快又精简,不用另外写命名函数，不用跳来跳去看code
- 坏处:  容易写的很乱， 丧失模块化，重用性，可维护性
      可读性
      变量名重复使用，容易引起内存泄露

```javascript
asyncFoo( err => {
    asyncBar( err => {
       asyncFooBar( err => {
         //...
        }); 
    });
});
```
**callback 只看2层就有点蒙了**

那么如何避免回调地狱呢?


---
# Using plain javascript

## 1. 学习如何避免回调地狱

  
## 2. 学习如何使用简单和纯的javascript来实现一些最常见的控制模式


### callback 的规则

- 尽早的退出 使用 return continue 和 break 根据上下文立即退出当前语句
- 为回调函数命名,使他们不在闭包中作为中间参数传递，命名函数将在堆栈trace中看起来更好
- 代码模块化，只要有可能，将代码分成更小的可重用函数
- 可重复使用的代码独立成function


## 我太菜了，写出来的回调各种问题😢😢




# 顺序回调



























