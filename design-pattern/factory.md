# factory

## generic interface for creating objects

 分离对象的创建和实现  特别是 工厂封装一个实例的创建过程 使得程序的灵活性提高

```javascript
function createImage(name) {
	return new Image(name)
}
const image = createImage('photo.jpg')
```

上面createImage()看起来好像不是很必要，为什么不直接使用 new 关键字呢

```javascript
const image = new Image(name)
```

使用new关键字，使得image对象只能指向特定的Image类型，如果我想用createImage接口根据不同name创建不同类型的image对象。。。

```javascript
function createImage(name) {
  if (name.match(/\.jpg$/)) return new JpgImage(name)
  if (name.match(/\.gif$/)) return new GifImage(name)
  throw new Error('不支持的类型')
}
```

工厂允许我们不暴露构造函数， 在Node中可以导出工厂

- **信息被隐藏**

```javascript
function createPerson(name) {
	const privateProperties = {}
    const person = {
		setName: name => {
          if(!name) throw new Error('A person must hava a name')
          privateProperties.name = name
		},
      	getName: () => {
          return privateProperties.name
      	}
    }
    person.setName(name)
    return person
}
// es6
class Person {
	constructor(name) {
		if (!name) throw new Error('name needed')
        this.name = name
    }
  	set name(name) {
      this.name = name
  	}
  	get name(name) {
		return this.name
    }
}
```

## 一个完整的例子 构建一个简单的代码分析器

- start 方法 触发 开始计时
- end 方法   终止 分析 打印执行时间

```javascript
class Profiler {
	constructor(label) {
      this.label = label
      this.lastTime = null
	}
  	start() {
      this.lastTime = process.hrtime()
  	}
  	end() {
	  const diff = process.hrtime(this.lastTime)
      console.log(`${this.labele} took ${diff[0]} seconds and ${diff[1]} nanoseconds`)
    }
}
module.exports = function(label) {
  if (process.env.NODE_ENV === 'development') return new Profile(label)
  if (process.env.NODE_ENV === 'production') return {start: function(){}, end: function(){}}
  throw new Error('must set env')
}

const profiler = require('./profiler')
function getRandomArray(len) {
	const p = profiler(`Generating a ${len} items long array`)
    const arr = []
    p.start()
	for (let i=0; i<len; i++) {
      arr.push(Math.random())
	}
  	p.end()
}
getRandomArray(1e6)
console.log('Done')
```



## 组合工厂

一种特定类型的工厂函数可以和组合到一起，构建增强版的角色，不通过继承，单纯的组合方法，构建复杂的工厂

就是使用其他方法，组合强大的自己

```javascript
"use strict";
// Create objects from reusable, composable behaviors
const stampit = require('stampit');

const character = stampit()
  .props({
    name: 'anonymous',
    lifePoints: 100,
    x: 0,
    y: 0
  })
;

const mover = stampit()
  .methods({
    move(xIncr, yIncr) {
      this.x += xIncr;
      this.y += yIncr;
      console.log(`${this.name} moved to [${this.x}, ${this.y}]`);
    }
  })
;

const slasher = stampit()
  .methods({
    slash(direction) {
      console.log(`${this.name} slashed to the ${direction}`);
    }
  })
;

const shooter = stampit()
  .props({
      bullets: 6
  })
  .methods({
    shoot(direction) {
      if (this.bullets > 0) {
        --this.bullets;
        console.log(`${this.name} shoot to the ${direction}`);
      }
    }
  })
;

const runner = stampit.compose(character, mover);
const samurai = stampit.compose(character, mover, slasher);
const sniper = stampit.compose(character, shooter);
const gunslinger = stampit.compose(character, mover, shooter);
const westernSamurai = stampit.compose(gunslinger, samurai);

const gojiro = westernSamurai();
gojiro.name = 'Gojiro Kiryu';
gojiro.move(1,0);
gojiro.slash('left');
gojiro.shoot('right');
```



