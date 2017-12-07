namespace Poly {
  interface Vehicle {
    moveTo(x: number, y: number): void
  }

  class Car implements Vehicle {
    moveTo(x: number, y: number): void {
      console.log('Driving to ' + x + ' ' + y);
    }
  }

  class SportCar extends Car {

  }
  class Airplane {
    moveTo(x: number, y: number) {
      console.log('flying to ' + y + ' ' + y);
    }
  }

  class Satellite {
    moveTo(x: number) {
      console.log('Targeting ' + x);
    }
  }
  function navigate(vehicle: Vehicle) {
    vehicle.moveTo(59.988394, 10.1231231)
  }

  export function main() {
    const car = new SportCar()
    navigate(car)
    const airplane = new Airplane()
    navigate(airplane)
    const satellite = new Satellite()
    navigate(satellite)
  }
}

Poly.main()



