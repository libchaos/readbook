"use strict";
const nameString = 'lili';
const height = 131;
const numbers = [1, 2, 3, 4];
const bool = true;
// 对象注释
let person;
person = {
    name: 'lilie',
    height: 132131
};
// 函数注释
let sayHello;
sayHello = (name) => {
    console.log('hello' + name);
};
// 接口实现
const xiaoMing = {
    name: 'xiaoMing',
    height: 10
};
// 类型实例化
const lilei = {
    name: 'lilei',
    height: 1230
};
// 枚举类型
var VehicleType;
(function (VehicleType) {
    VehicleType[VehicleType["Car"] = 0] = "Car";
    VehicleType[VehicleType["Van"] = 1] = "Van";
    VehicleType[VehicleType["Bus"] = 2] = "Bus";
    VehicleType[VehicleType["Lorry"] = 3] = "Lorry";
})(VehicleType || (VehicleType = {}));
const type = VehicleType.Bus;
const typeName = VehicleType[type];
console.log(typeName); // Bus
var BoxSize;
(function (BoxSize) {
    BoxSize[BoxSize["Large"] = 2] = "Large";
    BoxSize[BoxSize["XLarge"] = 3] = "XLarge";
    BoxSize[BoxSize["XXLarge"] = 4] = "XXLarge";
})(BoxSize || (BoxSize = {}));
let size = BoxSize.XLarge;
console.log(size); // 3
var DiscFlags;
(function (DiscFlags) {
    DiscFlags[DiscFlags["None"] = 0] = "None";
    DiscFlags[DiscFlags["Drive"] = 1] = "Drive";
    DiscFlags[DiscFlags["Influence"] = 2] = "Influence";
    DiscFlags[DiscFlags["Steadiness"] = 4] = "Steadiness";
    DiscFlags[DiscFlags["Conscientiousness"] = 8] = "Conscientiousness";
})(DiscFlags || (DiscFlags = {}));
const discSize = DiscFlags.Conscientiousness;
let union;
union = 5;
union = false;
let kingdom;
// OK
kingdom = 'Bacteria';
let num;
// OK 
num = 8;
let random;
// OK
random = 'Text';
random = 10;
random = false;
// The array is typed using the Monument interface 
const monuments = [];
// Each item added to the array is checked for type compatibility
monuments.push({
    name: 'Statue of Liberty',
    heightInMeters: 46
});
monuments.push({
    name: 'Peter the Great',
    heightInMeters: 96
});
monuments.push({
    name: 'Angel of the North',
    heightInMeters: 20
});
function compareMonumentHeights(a, b) {
    if (a.heightInMeters > b.heightInMeters) {
        return -1;
    }
    if (a.heightInMeters < b.heightInMeters) {
        return 1;
    }
    return 0;
}
// The array.sort method expects a comparer that accepts two Monuments
const monumentsOrderedByHeight = monuments.sort(compareMonumentHeights);
// Get the first element from the array, which is the tallest
const tallestMonument = monumentsOrderedByHeight[0];
// Peter the Great
console.log(tallestMonument.name);
// Tuple Types 元组类型
let poem;
poem = [1, true, 'love'];
let dictionary = {};
dictionary['octopus vulgaris'] = {
    hasInk: true,
    arms: 8,
    tentacles: 123
};
// dictionary[0] = {
//   hasInk: false,
//   arms: 9,
// }
delete dictionary['octopus vulgaris'];
const opt1 = {
    material: 'lilei',
    backlight: false
};
const opt2 = {
    material: 'sf'
};
const op3 = {
    material: null,
    backlight: null
};
function getProperty() {
    //...
    const house = {
        bathrooms: 12,
        bedrooms: 12,
        butlers: 13
    };
    return house;
}
const property = getProperty();
const bedRoomCount = property.bedrooms;
// const bulterCount = property.bulters
const workingBulterCount = property.butlers;
console.log(workingBulterCount);
const addr = 'Avenue Road';
const bedroomcount = addr;
function test(options) {
    console.log(options);
}
function getOptions() {
    let options = {
        name: 'sfs',
    };
    let option = JSON.stringify(options);
    let option1 = JSON.parse(option);
    return option1;
}
const x = getOptions();
console.log(x.name);
// 类型守卫
function typeGuardExaple(stringNumber) {
    // Errors
    // const a = stringNumber.length
    // const b = stringNumber.toFixed()
    if (typeof stringNumber === 'string') {
        return stringNumber.length;
    }
    else {
        return stringNumber.toFixed();
    }
}
function isSpeedControllable(treadmill) {
    if (treadmill.increaseSpeed
        && treadmill.desreaseSpped
        && treadmill.stop) {
        return true;
    }
    return false;
}
function customTypeGuardExample(treadmill) {
    // const a = treadmill.increaseSpeed()
    // const b = treadmill.lift()
    if (isSpeedControllable(treadmill)) {
        treadmill.increaseSpeed();
    }
    else {
        treadmill.lift();
    }
}
function volumn(prism) {
    switch (prism.kind) {
        case 'cube':
            return Math.pow(prism.size, 3);
        case 'cuboid':
            return prism.width * prism.depth * prism.height;
        default:
            assertNever(prism);
            break;
    }
}
function assertNever(arg) {
    throw new Error('Possiable new tagged type: ' + arg);
}
// 操作符
let counter = 0;
do {
    ++counter;
} while (counter < 10);
console.log(counter);
var Size;
(function (Size) {
    Size[Size["S"] = 0] = "S";
    Size[Size["M"] = 1] = "M";
    Size[Size["L"] = 2] = "L";
    Size[Size["XL"] = 3] = "XL";
})(Size || (Size = {}));
let newSize = Size.L;
++newSize;
const num_1 = 5 + 1;
const str = 5 + '1';
const str2 = '5';
const num3 = +str;
const negative = -str;
const truthyString = 'Truth string';
let falseyString;
const invertedTest = !truthyString;
const truthyTest = !!truthyString;
// const falseyTest = !!falseyTest Error the string is empty
var myProperty;
if (myProperty) {
    // Reaching this location means that ...
    // myProperty is not null
    // myProperty is not undefined
    // myProperty is not boolean false
    // myProperty is not an empty string
    // myProperty is not the number 0
    // myProperty is not NaN
}
if (console) {
    console.log('he');
}
console && console.log('h');
let naming;
naming || 'lishshi';
let caravan = {
    rooms: 4
};
if (caravan && caravan.rooms > 5) {
    //..
}
const isValid = true;
let message;
if (isValid) {
    message = 'Okay';
}
else {
    message = 'Failed';
}
const message1 = isValid ? 'Okay' : 'Failed';
const triangles = [1, 3, 6, 10, 15, 21];
let [first, second] = triangles;
console.log(first);
console.log(second);
let [first1, sencond2, ...remaining] = triangles;
const highSchool = { school: 'Central High', team: 'Centaus' };
const { school: s, team: t } = highSchool;
console.log(s);
console.log(t);
function getThreeLandMarks() {
    return ['a', 'b', 'c'];
}
const [a1, a2, a3] = getThreeLandMarks();
function add(a, b, c) {
    return a + b + c;
}
const hexagons = [1, 6, 15];
// Spread operator in function call const result = add(...hexagons);
// 22
function getAverage(a, b, c) {
    const total = a + b + c;
    const avg = total / 3;
    return 'The average is ' + avg;
}
// console.log(getAverage(...[1, 2, 3]))
function getAvg(a, b, c) {
    let total = a;
    let count = 1;
    total += b;
    count++;
    if (typeof c !== 'undefined') {
        total += c;
        count++;
    }
    const average = total / count;
    return 'The average is ' + average;
}
const result = getAvg(4, 6);
function concatenate(items, sep = ',', beginAt = 0, endAt = items.length) {
    let result = '';
    for (let i = beginAt; i < endAt; i++) {
        result += items[i];
        if (i < (endAt - 1)) {
            result += sep;
        }
    }
    return result;
}
function getAverage3(...a) {
    let total = 0;
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        total += a[i];
        count++;
    }
    const average = total / count;
}
// const result = getAverage3(1, 2, 3, 4)
// console.log(result)
class RandomHandler {
}
class ReversedHandler {
}
class Handler {
}
class HandlerFactory {
    getHandler(type) {
        switch (type) {
            case 'Random':
                return new RandomHandler();
            case 'Reversed':
                return new ReversedHandler();
            default:
                return new Handler();
        }
    }
}
//# sourceMappingURL=feature.js.map