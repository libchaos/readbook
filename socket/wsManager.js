class WSManager {
  constructor() {
    this.wsMap = new Map()
  }
  put(userId, ws) {
    let ary = this.wsMap[userId]
    if (ary == null) {
      ary = this.wsMap[userId] = []
    }
    ary.push(ws)
  }
  remove(userId, ws) {
    let ary = this.wsMap[userId]
    if (ary == null) return
    let index = ary.indexOf(ws)
    if (index > 0) {
      ary.splice(index, 1)
    }
    return ary
  }
  // send(124, {content: 'xx'})
  send(userId, message) {
    let ary = this.wsMap[userId]
    if (ary) {
      for (let ws of ary) {
        ws.send(JSON.stringify(message), {mask: true})
      }
    }
  }
}