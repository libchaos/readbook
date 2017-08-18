const net = require('net')

const client = net.connect(4000, '127.0.0.1', () => {
  console.log('connect')
  client.write('Hello server')
})

client.on('data', (data) => {
  console.log('Server: ', data.toString())
})

client.on('end', () => {
  console.log('Server: I done')
})