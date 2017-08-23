## 多态

人都会说，每个人的说话方式不一样

```javascript
const print = console.log
const makesound = function(animal) {
  if (animal instanceof Duck) {
    print('gagaga')
  } elif (animal instanceof Chicken) {
    print('gegege')
  }
}
```



## 封装

会说被隔离， 不同人说话方式被隔离

不变的部分隔离，变得部分封装

```javascript
const makesound = function(animal) {
    animal.sound()
}
class Chicken {
    sound() {
        print('gegege')
    }
}
class Duck {
    sound() {
        print('gagaga')
    }
}
```

- 私有属性的实现

  ```javascript
  const o = function(){
    	const private = 'i am private'
      return {
          getPrivate() {
              return private
          }
      }
  }()
  o.private === undefined
  ```



## 原型编程的原则

- 所有数据都是对象
- 要的到一个对象不是实例化类，而是找到一个对象作为原型并克隆他
- 对象会记住他的原型
- 对象无法响应某个请求，它会把请求委托给它的原型

```javascript
new 的理解
function Person(name) {
    this.name = name
}
Person.prototype.getName = function() {
    return this.name
}

const objFactory = function() {
    const obj = new Object()
    const constructor = [].shift.apply(arguments)
    obj.__proto__ = constructor.prototype
  	constructor.apply(obj, arguments)
  	return obj
}
```

# this

this是个对象，运行指定

## this的指向



- 作为对象的方法调用
- 作为普通函数调用
- 构造器调用 
- Function.prototype.call || Function.prototype.apply

```javascript
// 对象方法调用
const o = {
  	name: 'lilei'
    t() {
        this.name
    }
}
o.t()
// 普通函数调用
function t() {
    return this.name
}

window.id = 'window'

document.getElement('div1').onclick = function() {
    alert(this.id) // output: div1
  	const callback = function() {
        alert(this.id)
    }
    callback() // output: window
}

let self = this // 解决方案保存this的引用

function MyClass() {
    this.name = 'sven'
  	return {
        name: 'ame'
    }
}
function MyClass2() {
    this.name = 'sven'
  	return 'ame'
}

const x = new MyClass()
x.name = 'ame' // not sven 因为返回了一个对象
const y = new MyClass2()
x.name = 'sven'


```

