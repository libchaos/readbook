const OfflineState = require('./offlineState')
const OnlineState = require('./onlineState')
class FailsafeSocke {
  constructor(options) {
    this.options = options
    this.queue = []
    this.currentState = null
    this.states = {
      offline: new OfflineState(this),
      online: new OnlineState(this)
    }
    this.changeState('offline')
  }
  changeState(state) {
    console.log('Activating state: ' + state)
    this.currentState = this.states[state]
    this.currentState.active()
  }
  send(data) {
    this.currentState.send(data)
  }
}

module.exports = options => {
  return new FailsafeSocke(options)
}