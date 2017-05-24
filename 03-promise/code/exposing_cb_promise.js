module.exports = function asyncDivision(divdend, divssor, cb) {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      const result = divdend / divssor
      if(isNan(result) || !Number.isFinite(result)) {
        const error = new Error('Invalid operands')
        if(cb) {cb(error)}
        return reject(error)
      }
      if(cb) {cb(null, result)}
      resolve(result)
    })
  })
}