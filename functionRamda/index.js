const R = require('ramda')
const p = console.log
// p(R.add(2)(3)(4))

const add = R.curry((x, y) => x + y)


const double = x => x * 2
const r = R.map(double, [1, 2, 3])
p(r)

const addNum = (a, b) => a + b
p(R.reduce(addNum, 0, [1, 2, 3]))

const fruits = [{
  name: 'kiwi',
  price: 121
}, {
  name: 'apple',
  price: 10
}]
const getFirstFruitName = R.compose(
  R.prop('name'),
  R.head
)

p(getFirstFruitName(fruits))

let x = R.assoc('c', 3, {a:1, b:2})
p(x)

const length = word => word.length
p(length('abcd'))
const charAt = (pos, word) => word.charAt(pos)
charAt(2, 'MIssssfdsfa')

const addAll = nbrs => nbrs.reduce((acc, val) => acc+val, 0)
const findWords = sentence => sentence.split(/\s+/)
findWords('she has a shinning smile')
const addToAll = (val, nbrs) => nbrs.map(i => i + val)

const applyCalcu = (calc, nbrs) => nbrs.map(nbr => calc(nbr))

const obj = R.pick([0, 2], ['a', 'b', 'c'])
p(obj)

const pickIndexs = R.compose(R.values,
  R.pickAll)

e = pickIndexs([0, 1], ['a', ['b'], 'c'])
p(e)


const concat = (chars, inc) => chars.map(i => (+i)+inc+'')
  .reduce((pre, next) => pre.concat(next))


e = concat(['1', '3', '5'], 12)
p(e)



let compose = (...args) => x => args.reduceRight((value, item) => item(value), x)

let f = x => x + 1
let g = x => x ** 2

x = compose(g, f)(2)
p(x)

// functor



