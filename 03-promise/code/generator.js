function* passValue() {
  const what = yield null
  const that = yield 1+2
  console.log(what)
  console.log(that)
}

const g = passValue()
console.log(g.next())
console.log(g.next('world'))
console.log(g.next())