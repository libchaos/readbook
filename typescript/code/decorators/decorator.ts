// function log(target: any, key: string, descriptor: any) {
//   console.log(key)
// }


function logAttr(title: string) {
  return (target: any, key: string, descriptor: any) => {
    const original = descriptor.value

    descriptor.value = function(...args: any[]) {
      const result = original.apply(this, args)
      console.log(`${title}.${key}
        with args ${JSON.stringify(args)}
        returned ${JSON.stringify(result)}
      `);
      return result
    }
    return descriptor
  }
}

function logClass(target: any) {
  const original = target
  const constr: any = (...args: any[]) => {
    console.log(`creating new ${original.name}`);
    const c: any = () => {
      return original.apply(null, args)
    }
    c.prototype = original.prototype

    return new c()
  }
}

@logClass
class Calculator {
  @logAttr('the title is ')
  square(n: number) {
    return n * n
  }
}


function logattr(target: any, key: any) {
  let value = target[key]

  const getter = function() {
    console.log(`Getter for ${key} return ${value}`);
    return value
  }
  const setter = function(newVal: any) {
    console.log(`Set ${key} to ${newVal}`);
    value = newVal
  }
  if (delete target[key]) {
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    })
  }
}

class Calcu {
  @logattr
  public num: number
  square () {
    return this.num ** 2
  }
}

class Animal {
  protected name: string
}

class Cat extends Animal {
  constructor() {
    super()
  }
  meow(): string {
    return `${this.name} say Meow!`
  }
}



// const meow = (() => `${this.name} say Meow`).bind(Cat.prototype)
// Object.defineProperty(Cat.prototype, 'meow', {
//   value: meow,
//   enumerable: false,
//   configurable: true,
//   writable: true
// })

function readonly(target: any , key: any, descriptor: any) {
  descriptor.writable = false
  return descriptor
}

// let descriptor = {
//   value: meow,
//   enumerable: false,
//   configurable: true,
//   writable: true
// }

// descriptor = readonly(Cat.prototype, 'meow', descriptor) || descriptor

// Object.defineProperty(Cat.prototype, 'meow', descriptor)
function hello (name: string): string {
  return 'hello, world' + name
}

hello('hello')
