// 内部模块


namespace First {
  export class Example {
    log() {
      console.log('Logging from first example log');
    }
  }
}

namespace Second {
  export class Example {
    log() {
      console.log('loggin from second example log');
    }
  }
}


const first11 = new First.Example()
const second1 = new Second.Example()

namespace FirstLevel {
  export namespace SecondLevel {
    export class Example {

    }
  }
}

namespace FirstLevel.SecondLevel.ThirdLevel {
  export class Example {

  }
}

const nested = new FirstLevel.SecondLevel.Example()

const dotted = new FirstLevel.SecondLevel.ThirdLevel.Example()


export namespace Shipping {
  export interface Ship {
    name: string
    port: string
    displacement: number
  }

  export class Ferry implements Ship {
    constructor (
      public name: string,
      public port: string,
      public displacement: number
    ) {

    }
  }

  const defaultDisplacement = 40000
  
  class PrivateShip implements Ship {
    constructor (
      public name: string,
      public port: string,
      public displacement: number = defaultDisplacement
    ) {

    }
  }
}


namespace Docking {
  import Ship = Shipping.Ship

  export class Dock {
    private dockedShips: Ship[] = []
    arrival(ship: Ship) {
      this.dockedShips.push(ship)
    }
  }
}

const dock = new Docking.Dock()

// merging ... seems great
class Car {
  constructor(owner: string) {

  }

}

namespace Car {
  export class Engine {

  }
  export class GloveBox {

  }
}

const car = new Car('lilei')
const engine = new Car.Engine()
const gloveBox = new Car.GloveBox()


