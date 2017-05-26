# 策略模式

![](http://7xojpa.com1.z0.glb.clouddn.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/b9352afef640e05164a094dbbc84220a.png)

不同的env下采用不同的策略

```javascript
const fs = require('fs')
const objectPath = require('object-path')

class Config {
  constructor(strategy) {
    this.data = {}
    this.strategy = strategy
  }
  get(path) {
    return ObjectPath.get(this.data, path)
  }
  set(path, value) {
    return objectPath.set(this.data, path, value)
  }
  read(file) {
    console.log(`Deserializing from ${file}`)
    fs.writeFileSync(file, this.strategy.serialize(this.data))
  }
  save(file) {
    console.log(`Serializing to ${file}`)
    fs.writeFileSync(file, this.strategy.serialize(this.data))
  }
  
}
module.exports = Config
```

```javascript
const fs = require('fs')
const objectPath = require('object-path')

class Config {
  constructor(strategy) {
    this.data = {}
    this.strategy = strategy
  }
  get(path) {
    return ObjectPath.get(this.data, path)
  }
  set(path, value) {
    return objectPath.set(this.data, path, value)
  }
  read(file) {
    console.log(`Deserializing from ${file}`)
    fs.writeFileSync(file, this.strategy.serialize(this.data))
  }
  save(file) {
    console.log(`Serializing to ${file}`)
    fs.writeFileSync(file, this.strategy.serialize(this.data))
  }
  
}
module.exports = Config
```

```javascript
const Config = require('./config')
const strategies = require('./strategies')

const jsonConf = new Config(strategies.json)

jsonConf.read('sampels/conf.json')
jsonConf.set('book.nodejs', 'design patterns')
jsonConf.save('sampels/conf_mod.json')

const iniConfig = new Config(strategies.ini)

iniConfig.read('sampels/conf.ini')
iniConfig.set('book.nodejs', 'design patterns')
iniConfig.save('sampels/conf_mod.ini')
```

