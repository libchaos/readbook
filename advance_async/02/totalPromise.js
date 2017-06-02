const pify = require('pify')
const totalSales = pify(require('./totalSales'))


const cache = {}

module.exports = function totalSalePromise(item) {
  if (cache[item]) return cache[item]
  cache[item] = totalSales(item)
    .then(res => {
      setTimeout(() => {delete cache[item]})
      return res
    })
    .catch(err => {
      delete cache[item]
      throw err
    })
  return cache[item]
}