## 原型继承



![](http://ww1.sinaimg.cn/large/9e58a4edly1fmhhpek7a2j21080nodig.jpg)







![](http://ww1.sinaimg.cn/large/9e58a4edly1fmhhqv4382j210o0pg0vk.jpg)

```javascript
function extend(child, parent) {
  for (var key in parent) {
    if (hasProp.call(parent, key)) {
      child[key] = parent[key]
    }
  }
  child.prototype.constructor = child
  child.prototype.__proto__ = parent.prototype
  return child
}
```





![](http://ww1.sinaimg.cn/large/9e58a4edly1fmhjm50eq9j20l70dijsq.jpg)



```javascript
child.prototype = parent.prototype

child.prototype = new parent()

function middle() {}
middle.prototype = parent.prototype
child.prototype = new middle()

```



```javascript
var hasProp = {}.hasOwnProperty;

var extend = function(child, parent) {
  // 拷贝静态方法（类方法）
  for (var key in parent) {
    if (hasProp.call(parent, key))
      child[key] = parent[key];
  }

  // 设置原型继承
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();

  // 跟 `prototype` 属性不一样，`__super__` 属性并不是一个特殊属性。你暂时可以先忽略它。
  child.__super__ = parent.prototype;

  return child;
};
```

ctor 函数看起来好像很神秘。在我们继续下一步学习之前，你可以先思考一下这些问题：

为什么要把 child 的 prototype 属性设置成 new ctor()？
为什么要在 ctor 里面设置 this.constructor？
如果我们只是把 ctor 定义成一个空的构造函数 function ctor() {} 会怎么样？
child 的原型和 parent 的原型是如何链接起来的？





## New 的实现

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var p1 = new Person('cj', 22);

p1 instanceof Person

new Person(name, age)

function New(f) { //f is a function and f is a constructor function

  return function() { //take arguments
    var o = {
      "__proto__": f.prototype
    };
    // o.name = arguments[0];
    // o.age = arguments[1];
    f.apply(o, arguments);
    //o.f()
    return o;
  }
}
```



```javascript
// inherit

C.prototype = P.prototype 

//

C.prototype = new P(); //浪费内存

function F() {}
F.prototype = P.prototype
var f = new F()
C.prototype = f;

C.prototype = Object.create(P.prototype); 推介

C.prototype.constructor = C;






function P() {

}

function C() {

}

C.prototype = P.prototype
C.prototype.constructor

function PP() {}

function CC() {}
CC.prototype = Object.create(PP.prototype)
CC.prototype === new Object();

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.headCount = 1;

Person.prototype.eat = function() {
  console.log('eating...');
}

function Programer(name, age, title) {
  Person.apply(this, arguments);
  this.title = title;
}
Programer.prototype = Object.create(Person.prototype);
Programer.prototype.constructor = Programer; //重要的问题


Programer.prototype.language = "js"
Programer.prototype.work = function() {
  console.log('I am writing code in ' + this.language);
  Programer.super.eat();
}

function createEx(Child, Parent) {
  function F() {}
  F.prototype = Parent.prototype;
  var f = new F();
  Child.prototype = f;
  Child.prototype.constructor = Child;
  Child.super = Child.base = Parent.prototype;
}


createEx(Programer, Parent);
```

