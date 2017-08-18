const WebSocket = require('ws')


const ws = new WebSocket('ws://localhost:4000/test')

ws.on('open', () => {
  console.log('connected')
  ws.on('message', (message) => {
    console.log('on message', message)
  })

  setInterval(() => {
    ws.send('' + new Date(), {mask: true})
  }, 10000) 
})