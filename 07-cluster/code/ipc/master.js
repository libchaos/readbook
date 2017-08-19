const writeWrap = process.binding('stream_wrap').writeWrap
const cp = require('child_process')

const worker = cp.fork('./worker')

const channel = worker._channel

channel.onread = function (len, buf, handle) {
  if (buf) {
    console.log(buf.toString())
    channel.close()
  } else {
    channel.close()
    console.log('channel closed')
  }
}

const message = {hello: 'worker', pid: process.pid}
const req = new writeWrap()
const string = JSON.stringify(message) + '\n'
channel.writeUtf8String(req, string, null)