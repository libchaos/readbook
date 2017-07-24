// which not possible in es6


let instance = null

class Cache{
  constructor() {
    if (!instance) {
      instance = this
    }
    this.time = new Date()
    return instance
  }
}


let cache = new Cache()

console.log(cache.time)

setTimeout(() => {
  let cache = new Cache()
  console.log(cache.time)
}, 3000)