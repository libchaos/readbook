
const a = []
for (let i=0; i<4; i++) {
  a.push(function() {
    return i+1
  })
}


a.forEach(i => console.log(i()))