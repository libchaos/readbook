const net = require('net')
const fork = require('child_process').fork

const workers = []

for (let i=0; i<4; i++) {
  workers.push(fork('./worker'))
}

const handle = net._createServerHandle('0.0.0.0', 3000)

handle.listen()
console.log('listen on port: 30000')
handle.onconnection = function(err, handle) {
  const worker = workers.pop()
  worker.send({}, handle)
  workers.unshift(worker)
}