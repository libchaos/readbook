"use strict";
var Poly;
(function (Poly) {
    class Car {
        moveTo(x, y) {
            console.log('Driving to ' + x + ' ' + y);
        }
    }
    class SportCar extends Car {
    }
    class Airplane {
        moveTo(x, y) {
            console.log('flying to ' + y + ' ' + y);
        }
    }
    class Satellite {
        moveTo(x) {
            console.log('Targeting ' + x);
        }
    }
    function navigate(vehicle) {
        vehicle.moveTo(59.988394, 10.1231231);
    }
    function main() {
        const car = new SportCar();
        navigate(car);
        const airplane = new Airplane();
        navigate(airplane);
        const satellite = new Satellite();
        navigate(satellite);
    }
    Poly.main = main;
})(Poly || (Poly = {}));
Poly.main();
//# sourceMappingURL=polymorphism.js.map