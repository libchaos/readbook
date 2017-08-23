const MyClass = function(){
  const key = Symbol('key')
  function MyClass(privateData) {
    this[key] = privateData
  }
  MyClass.prototype = {
    doStuff: function() {
      console.log(this[key])
    }
  }
  return MyClass
}()

const p = console.log

const c = new MyClass('AB')

p(c['AB'] === undefined)
c.doStuff()