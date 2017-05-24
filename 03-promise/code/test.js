const promisfy = require('./promisefy')
const fs = require('fs')

const promiseReadFile = promisfy(fs.readFile)

promiseReadFile('./readme.txt')
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })


// function promiseReadfile(filename) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(filename, (err, body) => {
//       if (err) return reject(err)
//       resolve(body)
//     })
//   })
// }

// promiseReadfile('./promisefy.js')
//   .then(data => {
//     console.log(data.toString())
//   })



