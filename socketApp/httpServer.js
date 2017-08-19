const http = require('http')
const socketIO = require('socket.io')
const fs = require('fs')



const server = http.createServer((req, res) => {
  fs.readFile(__dirname + '/index.html', (err, data) => {
    res.writeHead(200)
    res.end(data)
  }) 
})


server.listen(5000)


const io = socketIO(server)

io.on('connection', (socket) => {
  socket.emit('greeting-from-server', {
    greeting: 'hello client'
  })
  socket.on('greeting-from-client', (message) => {
    console.log(message)
  })
})