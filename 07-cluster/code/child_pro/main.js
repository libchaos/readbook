const cp = require('child_process')
const n = cp.fork('./sub')

n.on('message', (m) => {
  console.log('PARENT got message: ', m)
})

n.send({hello: 'world'})