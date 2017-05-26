const zmq = require('zmq')
const ZmqMiddlewareManager = require('./zmqMiddlewareManager')
const jsonMiddleware = require('./jsonMiddleware')

const reply = zmq.socket('rep')

reply.bind('tcp://127.0.0.1:5000')

const zmqm = new ZmqMiddlewareManager(reply)

zmqm.use(jsonMiddleware.json())
zmqm.use({
  inbound(message, next) {
    console.log('Received: ', message)
    if (message.data.action === 'ping') {
      this.send({action: 'pong', echo: message.data.echo})
    }
    next()
  }
})