const asyncModule = require('./asyncModule')

module.exports.say = (req, res) => {
  asyncModule.tellMeSometing((err, someting) => {
    if (err) {
      res.writeHead(500)
      return res.end('Error: ' + err.message)
    } 
    res.writeHead(200)
    res.end('I say: ' + someting)
  })
}