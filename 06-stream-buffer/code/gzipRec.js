const http = require('http')
const fs = require('fs')
const zlib = require('zlib')
const crypto = require('crypto')

const server = http.createServer((req, res) => {
  const filename = req.headers.filename
  console.log('File request received: ')
  req
    .pipe(crypto.createDecipher('aes192', 'secret'))
    .pipe(zlib.createUnzip())
    .pipe(fs.createWriteStream(filename))
    .on('finish', () => {
      res.writeHead(201, {'Content-Type': 'text/plain'})
      res.sendDate('That is it')
      console.log(`File saved ${filename}`)
    })
})

server.listen(3000, () => console.log('listening on port 3000'))