```javascript
"use strict";

const EventEmitter = require('events');

module.exports = class Roee extends EventEmitter {
  constructor (executor) {
    super();
    const emit = this.emit.bind(this); // 保存emit 使她能被executor使用
    this.emit = undefined; // 设置实例的emit为undfined
    executor(emit); 
  }
};

```

​	接受一个exectuor函数作为构造器的唯一参数



```javascript
"use strict";

const Roee = require('./roee');

const ticker = new Roee((emit) => {
  let tickCount = 0;
  setInterval(() => emit('tick', tickCount++), 1000);
});

module.exports = ticker
```

​	

```javascript
"use strict";

const ticker = require('./ticker');

ticker.on('tick', (tickCount) => console.log(tickCount, 'TICK'));
// ticker.emit('something', {}); <-- This will fail
// require('events').prototype.emit.call(ticker, 'someEvent', {}); <-- This workaround will instead work

```





# 使用一部分属性

