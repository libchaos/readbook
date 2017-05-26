function decorate(component) {
  component.greetings = function() {
    return 'hi'
  }
  return component

}
class Greeter{
  hello(subject) {
    return `Hello ${subject}`
  }
}

const dg = decorate(new Greeter())
console.log(dg.hello('world'))
console.log(dg.greetings())