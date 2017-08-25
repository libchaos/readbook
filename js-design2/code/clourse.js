function close() {
  let a = 1
  function b() {
    console.log(a)
  }
  return b
}


const x = close()

x()
