const WebSocket = require('ws')


const wss = new WebSocket.Server({
  port: 4000
})

wss.on('connection', (ws, req) => {
  console.log('on connected', ws.upgradeReq, req.url, req.headers)
  ws.on('message', (message) => {
    console.log('on message', message)
    ws.send('server: ' + message, {mask: true})
  })
})