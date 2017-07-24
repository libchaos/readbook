const PI = 3.141593

Object.defineProperty(typeof global === 'object' ? global : window, 'PI', {
  value: 3.14159,
  enumerable: true,
  writable: false,
  configurable: false,
})

console.log(PI);