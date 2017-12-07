// optional static types

let dynimic = 'string'
// dynimic = 52 error
const day = '52'
const hours = 24
const week = Number(day) * hours

const fortnight = day + day
function getVolumn(width: any, height: any, depth: any) {
  return width * height * depth
}

const xxx = getVolumn(9, undefined, undefined)
console.log(xxx);
// getVolumn(9, 1, 1, 1)

// DomainId type defination
namespace TypesSystem {
  type DomainId<T extends string>  = {
    type: T,
    value: number,
  }
  type CustomerId = DomainId<'CustomerId'>
  const createCustomerId = (value: number): CustomerId => (
    {type: 'CustomerId', value}
  )
  type ProductId = DomainId<'ProductId'>
  export const createProductId = (value: number): ProductId => (
    {type: 'ProductId', value}
  )

  class Example {
    static avoid(id: CustomerId) {

    }
    static useEquivalence(id: number) {

    }
  }

  function add(a: number, b: number) {
    return a + b
  }
  interface CallFunction {
    (cb: (result: string) => any): void
  }
  let callsFunction: CallFunction = function(cb) {
    cb('done')
    // cb(1)
  }
  callsFunction(function(result) {
    return result
  })
  let x = [0, 1, null]
  let y = [0, 1, null, 'a']
  interface DeviceMotionEvent extends Event {
    readonly acceleration: DeviceAcceleration | null
    readonly accelerationIncludingGravity: DeviceAcceleration | null

  }

}

console.log(TypesSystem.createProductId(10010));

class OrderArray<T> {
  private items: T[] = []
  constructor(private compare?: (a: T, b: T) => number) {

  }
  add(item: T) {
    this.items.push(item)
    this.items.sort(this.compare)
  }
  getItem(index: number): T|null{
    if(this.items.length > index) {
      return this.items[index]
    }
    return null
  }

  get length() {
    return this.items.length
  }
}

let orderedArray: OrderArray<number> = new OrderArray<number>()
orderedArray.add(5)
orderedArray.add(3)
orderedArray.add(1)


// for(let i of OrderArray[Symbol.iterator()]) {
//   console.log(i);
// }

for (let i: number=0; i<orderedArray.length; i++) {
  console.log(orderedArray.getItem(i))
}

