const asyncModule = module.exports

asyncModule.initialized = false

asyncModule.initialize = callback => {
  setTimeout(function() {
    asyncModule.initialized = true
    callback()
  }, 10000);
}

asyncModule.tellMeSometing = callback => {
  process.nextTick(() => {
    if (!asyncModule.initialized) {
      return callback(new Error('I do not to say anyting now'))
    }
    callback(null, 'Current time is ' + new Date())
  })
}