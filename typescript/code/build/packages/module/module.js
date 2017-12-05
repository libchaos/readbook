"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dock {
    constructor() {
        this.dockedShips = [];
    }
    arrival(ship) {
        this.dockedShips.push(ship);
    }
}
exports.Dock = Dock;
//# sourceMappingURL=module.js.map