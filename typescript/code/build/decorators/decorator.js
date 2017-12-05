"use strict";
// function log(target: any, key: string, descriptor: any) {
//   console.log(key)
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logAttr(title) {
    return (target, key, descriptor) => {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            const result = original.apply(this, args);
            console.log(`${title}.${key}
        with args ${JSON.stringify(args)}
        returned ${JSON.stringify(result)}
      `);
            return result;
        };
        return descriptor;
    };
}
function logClass(target) {
    const original = target;
    const constr = (...args) => {
        console.log(`creating new ${original.name}`);
        const c = () => {
            return original.apply(null, args);
        };
        c.prototype = original.prototype;
        return new c();
    };
}
let Calculator = class Calculator {
    square(n) {
        return n * n;
    }
};
__decorate([
    logAttr('the title is ')
], Calculator.prototype, "square", null);
Calculator = __decorate([
    logClass
], Calculator);
function logattr(target, key) {
    let value = target[key];
    const getter = function () {
        console.log(`Getter for ${key} return ${value}`);
        return value;
    };
    const setter = function (newVal) {
        console.log(`Set ${key} to ${newVal}`);
        value = newVal;
    };
    if (delete target[key]) {
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
class Calcu {
    square() {
        return Math.pow(this.num, 2);
    }
}
__decorate([
    logattr
], Calcu.prototype, "num", void 0);
//# sourceMappingURL=decorator.js.map