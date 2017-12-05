"use strict";
// 内部模块
Object.defineProperty(exports, "__esModule", { value: true });
var First;
(function (First) {
    class Example {
        log() {
            console.log('Logging from first example log');
        }
    }
    First.Example = Example;
})(First || (First = {}));
var Second;
(function (Second) {
    class Example {
        log() {
            console.log('loggin from second example log');
        }
    }
    Second.Example = Example;
})(Second || (Second = {}));
const first11 = new First.Example();
const second1 = new Second.Example();
var FirstLevel;
(function (FirstLevel) {
    let SecondLevel;
    (function (SecondLevel) {
        class Example {
        }
        SecondLevel.Example = Example;
    })(SecondLevel = FirstLevel.SecondLevel || (FirstLevel.SecondLevel = {}));
})(FirstLevel || (FirstLevel = {}));
(function (FirstLevel) {
    var SecondLevel;
    (function (SecondLevel) {
        var ThirdLevel;
        (function (ThirdLevel) {
            class Example {
            }
            ThirdLevel.Example = Example;
        })(ThirdLevel = SecondLevel.ThirdLevel || (SecondLevel.ThirdLevel = {}));
    })(SecondLevel = FirstLevel.SecondLevel || (FirstLevel.SecondLevel = {}));
})(FirstLevel || (FirstLevel = {}));
const nested = new FirstLevel.SecondLevel.Example();
const dotted = new FirstLevel.SecondLevel.ThirdLevel.Example();
var Shipping;
(function (Shipping) {
    class Ferry {
        constructor(name, port, displacement) {
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
    }
    Shipping.Ferry = Ferry;
    const defaultDisplacement = 40000;
    class PrivateShip {
        constructor(name, port, displacement = defaultDisplacement) {
            this.name = name;
            this.port = port;
            this.displacement = displacement;
        }
    }
})(Shipping = exports.Shipping || (exports.Shipping = {}));
var Docking;
(function (Docking) {
    class Dock {
        constructor() {
            this.dockedShips = [];
        }
        arrival(ship) {
            this.dockedShips.push(ship);
        }
    }
    Docking.Dock = Dock;
})(Docking || (Docking = {}));
const dock = new Docking.Dock();
// merging ... seems great
class Car {
    constructor(owner) {
    }
}
(function (Car) {
    class Engine {
    }
    Car.Engine = Engine;
    class GloveBox {
    }
    Car.GloveBox = GloveBox;
})(Car || (Car = {}));
const car = new Car('lilei');
const engine = new Car.Engine();
const gloveBox = new Car.GloveBox();
//# sourceMappingURL=namspace.js.map