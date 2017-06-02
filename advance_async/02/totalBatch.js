const totalSales = require('./totalSales')

const queuse = {}

module.exports = function totalSalesBatch(item, callback) {
  if (queues[item]) {
    console.log('Batching operating')
    return queues[item].push(callback)
  }
  queue[item] = [callback]
  totalSales(item, (err, res) => {
    const queue =queues[item]
    queues[item] = null
    queues.forEach(cb => cb(err, res))
  })
}