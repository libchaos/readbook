"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const condition = true;
if (condition) {
    const ship = require('./ship');
    const myship = new ship();
}
const condition1 = true;
if (condition1) {
    System.import('./ship.ts').then((ship) => {
        const myboat = new ship();
    });
}
//# sourceMappingURL=dynamic.js.map