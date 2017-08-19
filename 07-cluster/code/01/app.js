const http = require('http')
const pid = process.pid
http.createServer((req, res) => {
  res.writeHead(200)
  res.end('hello from '+pid+'\n')
}).listen(3000, (err) => {
  if (err) {
    console.log(err)
  }
  console.log('listioning on the port: 3000 ', pid)
})