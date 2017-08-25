const R = require('ramda')
const p = console.log
// p(R.add(2)(3)(4))

const add = R.curry((x, y) => x + y)

p(add(2)(3))