"use strict";
// optional static types
let dynimic = 'string';
// dynimic = 52 error
const day = '52';
const hours = 24;
const week = Number(day) * hours;
const fortnight = day + day;
function getVolumn(width, height, depth) {
    return width * height * depth;
}
const xxx = getVolumn(9, undefined, undefined);
console.log(xxx);
// getVolumn(9, 1, 1, 1)
// DomainId type defination
var TypesSystem;
(function (TypesSystem) {
    const createCustomerId = (value) => ({ type: 'CustomerId', value });
    TypesSystem.createProductId = (value) => ({ type: 'ProductId', value });
    class Example {
        static avoid(id) {
        }
        static useEquivalence(id) {
        }
    }
    function add(a, b) {
        return a + b;
    }
    let callsFunction = function (cb) {
        cb('done');
        // cb(1)
    };
    callsFunction(function (result) {
        return result;
    });
    let x = [0, 1, null];
    let y = [0, 1, null, 'a'];
})(TypesSystem || (TypesSystem = {}));
console.log(TypesSystem.createProductId(10010));
class OrderArray {
    constructor(compare) {
        this.compare = compare;
        this.items = [];
    }
    add(item) {
        this.items.push(item);
        this.items.sort(this.compare);
    }
    getItem(index) {
        if (this.items.length > index) {
            return this.items[index];
        }
        return null;
    }
    get length() {
        return this.items.length;
    }
}
let orderedArray = new OrderArray();
orderedArray.add(5);
orderedArray.add(3);
orderedArray.add(1);
// for(let i of OrderArray[Symbol.iterator()]) {
//   console.log(i);
// }
for (let i = 0; i < orderedArray.length; i++) {
    console.log(orderedArray.getItem(i));
}
//# sourceMappingURL=type.js.map