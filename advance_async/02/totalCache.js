
const totalSales = require('./totalSales')

const queues = {}
const cache = {}

module.exports = function totalSalesBatch(item, callback) {
  const cached = cache[item]
  if (cached) {
    console.log('cache hit')
    return process.nextTick(callback.bind(null, null, cached))
  }

  if (queues[item]) {
    console.log('Batching operations')
    return queues[item].push(callback)
  }
  queues[item] = [callback]
  totalSales(item, (err, res) => {
    if (!err) {
      cache[item] =res
      setTimeout(() => {
        delete cache[item]
      }, 30 * 1000)
    }
    const queue = queues[item]
    queues[item] = null
    queue.forEach(cb => cb(err, res))
  })
}