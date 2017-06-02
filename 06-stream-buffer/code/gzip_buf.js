const fs = require('fs')
const zlib = require('zlib')

const file = process.argv[2]

fs.readFile(file, (err, buffer) => {
  zlib.gzip(buffer, (err, buffer) => {
    fs.writeFile(file + '.gz', buffer, err => {
      if (err) return process.exit(1);
      console.log('file successfully compressed!')
    })
  })
})


fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(file+'.gz'))
  .on('finish', () => console.log('file successfully compressed'))