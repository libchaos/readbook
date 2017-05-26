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