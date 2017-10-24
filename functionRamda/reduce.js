// const reduce = function(array, callback, initialValue) {

//   const o = array
//   const len = o.length >>> 0
//   let k = 0
//   let value
//   if (arguments.length >= 3) {
//     value = arguments[2]
//   } else {
//     while (k < len && !(k in o)) {
//       k++
//     }
//     if (k >= len) {
//       throw new TypeError('Reduce of empty array' + 'with no initial value')
//     }
//     value = o[k++]
//   }
//   while (k < len) {
//     if (k in o) {
//       value = callback(value, o[k], k, o)
//     }
//     k++
//   }
  // return value
// }


const reduceRight = function(array, callback, initialValue) {
    let value = initialValue || 0
    let o = array
    let k = o.length - 1
    for(; k>=0; k--) {
      if (k in o) {
        value = callback(value, o[k], k, o)
      }
    }
    return value
  }


x = reduceRight([1, 2, 3, 4, 5], function(a, b){return a + b})
console.log('sfsf  ', x)


let compose = (...args)