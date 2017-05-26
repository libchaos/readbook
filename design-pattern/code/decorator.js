function decorate(component) {
  const proto = Object.getPrototypeOf(component)
  function Decorator(component) {
    this.component = component
  }
  Decorator.prototype = Object.create(proto)
  Decorator.prototype.greeting = function() {
    return 'hi'
  }
  Decorator.prototype.hello = function() {
    return this.component.hello(this.component, arguments)
  }
  return new Decorator(component)
}

class Greeter {
  hello(subject) {
    return `Hello ${subject}`
  }
}

const dg = decorate(new Greeter())
console.log(dg.hello('world'))
console.log(dg.greeting())