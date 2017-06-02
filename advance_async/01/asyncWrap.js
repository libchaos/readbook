const asyncModule = require('./asyncModule')

const asyncModuleWrapper = module.exports

asyncModuleWrapper.initialized = false
asyncModuleWrapper.initiailize = function() {
  activate.initiailize.apply(activate, arguments)
}

asyncModuleWrapper.tellSometing = function () {
  activate.tellSometing.apply(activate, arguments)
}

let pending = []
let notIntializedState = {
  initialize: function(callback) {
    asyncmoww .initiailized = true
    activate = initializedState

    pending.forEach(function(req) {
      asyncModule[req.method].apply(null, req.args)
    })
    pending = []
    callback()
  },
  tellMeSometing: function(callback) {
    return pending.push({
      method: 'tellMeSomting',
      args: arguments,
    })
  }
}

let initializedState = asyncModule

let activate = notIntializedState