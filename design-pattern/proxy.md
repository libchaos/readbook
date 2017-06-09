# 代理（中间人）

![](http://7xojpa.com1.z0.glb.clouddn.com/983c3e30bc312d3c821b87208f4d6fc1.png)

```javascript
"use strict";

function createProxy(subject) {
  const proto = Object.getPrototypeOf(subject);

  function Proxy(subject) {
    this.subject = subject;
  }

  Proxy.prototype = Object.create(proto);

  //proxied method
  Proxy.prototype.hello = function(){
    return this.subject.hello() + ' world!';
  };

  //delegated method
  Proxy.prototype.goodbye = function(){
    return this.subject.goodbye
      .apply(this.subject, arguments);
  };

  return new Proxy(subject);
}

module.exports = createProxy


"use strict";

const createProxy = require('./createProxy');

class Greeter {
  hello() {
    return 'Hello';
  }

  goodbye() {
    return 'Goodbye';
  }
}

const greeter = new Greeter();
const proxy = createProxy(greeter);

console.log(proxy.hello());
console.log(proxy.goodbye());
```

我有一套房子，我找了个代理人，它能帮我卖房子

数据验证

安全

缓存

懒初始化 如果创建一个subject是耗时的，代理可以延迟

日志

中间件的角色



```javascript
const scientist = {
  name: 'nikola',
  surname: 'tesla'
};

const uppercaseScientist = new Proxy(scientist, {
  get: (target, property) => target[property].toUpperCase()
});

console.log(uppercaseScientist.name, uppercaseScientist.surname); // NIKOLA TESLA


const evenNumbers = new Proxy([], {
  get: (target, index) => index * 2,
  has: (target, number) => number % 2 === 0
});

console.log(2 in evenNumbers); // true
console.log(5 in evenNumbers); // false
console.log(evenNumbers[7]); // 14
```
### a easy way to implement proxy
##### 我们简单来说下method代理，其他同理 这里我们用obj.foo来替代obj.request.foo

```javacript
function method(proto, target, name) {
    proto[name] = function() {
        return proto[target][name].apply(proto[target], arguments)
    }
}
var obj = {};
obj.request = {
    foo: function(bar) {
       console.log(bar)
       console.log(this)
       return bar;
    }
}
method(obj, 'request', 'foo')
obj.foo('123')
```


