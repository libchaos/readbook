const fs = require('fs')
function createLogingWritealbe(writeableOrig) {
  const proto = Object.getPrototypeOf(writeableOrig)
  function LoggingWritable(writeableOrig) {
    this.writeableOrig = writeableOrig
  }
  LoggingWritable.prototype = Object.create(proto)
  LoggingWritable.prototype.write = function (chunk, encoding, callback) {
    if (!callback && typeof encoding === 'function') {
      callback = encoding
      encoding = undefined
    }
    console.log('Writing ', chunk)
    return this.writeableOrig.write(chunk, encoding, function() {
      console.log('Fiinished writing', chunk)
      callback && callback()
    })
  }
  LoggingWritable.prototype.on = function() {
    return this.writeableOrig.on.apply(this.writeableOrig, arguments)
  }
  LoggingWritable.prototype.end = function() {
    return this.writeableOrig.end.apply(this.writeableOrig, arguments)
  }
  return new LoggingWritable(writeableOrig)
}

const writeable = fs.createWriteStream('text.txt')
const writeableProxy = createLogingWritealbe(writeable)

writeableProxy.write('fisrt chunk')
writeableProxy.write('second chunk')
writeable.write('this is not logging')
writeableProxy.end()
