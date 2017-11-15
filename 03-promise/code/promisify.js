function convert(callbackBasedApi) {
  return function promised() {
    const args = [].slice.call(arguments)
    return new Promise((resolve, reject) => {
      args.push((err, result) => {
        if (err) reject(err)
        console.log(args)
        if (arguments.length <= 2) {
          resolve(result)
        } else {
          resolve(result)
        }
      })     
      callbackBasedApi.apply(null, args)
    })
  }
}



function div(a, b, c, callback) {
  setTimeout(function() {
    if (b === 0) {
      callback(new Error('b = 0'))
    }
    callback(null, a/b * c)
  }, 1000);
}

const div_convert = convert(div)
div_convert(2, 3, 4)
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })