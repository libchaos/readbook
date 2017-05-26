# 装饰器

![](http://7xojpa.com1.z0.glb.clouddn.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/b8b1524511ba0b92a6e2c7dc9a2c9b50.png)

装饰对象给组件对象增加了方法c。组件对象存在方法，被装饰对象所代理，没做进一步处理。当然可以和代理模式相结合，拦截操作组件对象的方法。



```javascript
"use strict";

function decorate(component) {
  const proto = Object.getPrototypeOf(component);
  
  function Decorator(component) {
    this.component = component;
  }
  
  Decorator.prototype = Object.create(proto);
  
  //new method
  Decorator.prototype.greetings = function() {
    return 'Hi!';
  };
  
  //delegated method
  Decorator.prototype.hello = function() {
    return this.component.hello.apply(this.component, arguments); 
  };
  
  return new Decorator(component);
}

class Greeter {
  hello(subject) {
    return `Hello ${subject}`;
  }
}

const decoratedGreeter = decorate(new Greeter());
console.log(decoratedGreeter.hello('world')); // uses original method
console.log(decoratedGreeter.greetings()); // uses new method
```







实战

```javascript

module.exports = function levelSubscribe(db) {
  db.subscribe = (pattern, listener) => {       //[1]
    db.on('put', (key, val) => {         //[2]
      const match = Object.keys(pattern).every(
        k => (pattern[k] === val[k])     //[3]
      );
      
      if(match) {
        listener(key, val);            //[4]
      }
    });
  };
  return db;
};

"use strict";

const level = require('level');           //[1]
const levelSubscribe = require('./levelSubscribe');     //[2]

let db = level(__dirname + '/db', {valueEncoding: 'json'});

db = levelSubscribe(db);
db.subscribe(
  {doctype: 'tweet', language: 'en'},     //[3]
  (k, val) => console.log(val)
);

db.put('1', {doctype: 'tweet', text: 'Hi', language: 'en'}); //[4]
db.put('2', {doctype: 'company', name: 'ACME Co.'});

```

