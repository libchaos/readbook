function A() {

}
A.c = function () {
  return 'c'
}
A.prototype.a = function() {
  return 1
}

function B() {

}

B.prototype.b = function() {
  return 2
}

const hasProp = {}.hasOwnProperty;

function extend(child, parent) {
  for (var key in parent) {
    if (hasProp.call(parent, key)) {
      child[key] = parent[key]
    }
  }
  child.prototype.constructor = child
  child.prototype.__proto__ = parent.prototype
  return child
}

extend(B, A)

let b = new B()
console.log(b.a());
console.log(b.b());
console.log(B.c());
// console.log(b.c());


function New(f) {
  let o = {}
  o.__proto__ = f.prototype
  return o
}

let newb = New(B)

console.log(newb.b());