const net = require('net')

process.on('message', (m, handle) => {
  start(handle)
})

const buf = 'hello, nodejs'
const res = ['HTTP/1.1 200 OK', 'content-length:'+buf.length].join('\r\n')+'\r\n\r\n'+buf

function start(handle) {
  console.log('got a connection on worker: pid=%d', process.pid)
  const socket = new net.Socket({
      handle
  })
  socket.readable = socket.writable = true
  socket.end(res)
  
}