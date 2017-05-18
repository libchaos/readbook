# es 

## 1. 箭头函数
  -  箭头函数里面没有this关键字

    **备注（this是一个对象，包含了正在运行的代码**
  - 写法
    ```javascript
      (args) => result; // 当返回一个表达式时用一行写法
      (args) => {
        console.log('test')
        return result;
      } 
    ```


## 2. let and const 变量定义
 - let 和 const 是块内生效的

 **备注 块作用域是对象字面量 函数作用域 if for 其实就是凡是用{}都是一个块**
 - let 是可以修改的
 - const 其实绑定的是内存地址，单层值不可改变，如果是对象怎可修改内部属性。

## 3. 类
- 和java语言类似
- set 
- get
- static

## 4. 增强版的对象字面量
- key 是 一个可计算属性

## 5. map and set
- map 的key可以是任意类型
- set 
```javascript
"use strict";

let obj1 = {key: "val1"};
let obj2 = {key: "val2"};
const set = new WeakSet([obj1, obj2]);

console.log(set.has(obj1)); // true
obj1 = undefined; // now obj1 will be removed from the set
console.log(set.has(obj1)); // false
```

## 6. weakmap and weakset
- 设计缓存
- weakmap 是可以设置**弱引用** 方便下次回收
```javascript
"use strict";

let obj = {};
const map = new WeakMap();
map.set(obj, {key: "some_value"});
console.log(map.get(obj)); // {key: "some_value"}
obj = undefined; // now obj and the associated data in the map will be cleaned up in the next gc cycle
console.log(map.get(obj));

let obj2 = {};
const map2 = new WeakMap();
map2.set(obj2, {1: 2});


"use strict";

let obj1 = {key: "val1"};
let obj2 = {key: "val2"};
const set = new WeakSet([obj1, obj2]);

console.log(set.has(obj1)); // true
obj1 = undefined; // now obj1 will be removed from the set
console.log(set.has(obj1)); // false
```


## 7. 模板
```javascript
"use strict";

const name = "Leonardo";
const interests = ["arts", "architecture", "science", "music", "mathematics"];
const birth = { year : 1452, place : 'Florence' };
const text = `${name} was an Italian polymath interested in many topics such
as ${interests.join(', ')}.
He was born in ${birth.year} in ${birth.place}.`;
console.log(text);
```


## 8. 模式匹配


```javascript
// new
function bar(a = 5) {
}

function sum (a = 5, ...args) {
  var l = args.length
  var i = 0
  for (; i < l; ++i) {
    a += args[i]
  }
  return a
}

function apply (...args) {
  function fn () {}
  fn.apply(null, args)
}
```

