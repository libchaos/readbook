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



