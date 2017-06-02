const RrandomStream = require('./randomStream')
const randomStream = new RrandomStream()

randomStream.on('data', chunk => {
  console.log(`${chunk.toString()}`)
})
.on('end', () => console.log('done'))