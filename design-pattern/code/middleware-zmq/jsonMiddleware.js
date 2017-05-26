module.exports.json = () => {
  return {
    inbound: function(message, next) {
      message.data = JSON.parse(message)
      next()
    },
    onbound: function(message, next) {
      message.data = new Buffer(JSON.stringify(message))
      next()
    }
  }
}