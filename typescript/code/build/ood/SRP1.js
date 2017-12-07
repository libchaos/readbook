"use strict";
var SRP1;
(function (SRP1) {
    class Gear {
        constructor(chainring, cog) {
            this.chainring = chainring;
            this.cog = cog;
        }
        get ratio() {
            return Number((this.chainring / this.cog).toFixed(2));
        }
    }
    class Gear1 {
        constructor(chainring, cog, rim, tire) {
            this.chainring = chainring;
            this.cog = cog;
            this.rim = rim;
            this.tire = tire;
        }
        get ratio() {
            return Number((this.chainring / this.cog).toFixed(2));
        }
        get gearInches() {
            return this.ratio * (this.rim + (this.tire * 2));
        }
    }
    function main() {
        let chainring = 52;
        let cog = 11;
        let ratio = Number((chainring / cog).toFixed(2));
        console.log(ratio);
        chainring = 30;
        cog = 27;
        ratio = Number((chainring / cog).toFixed(2));
        console.log(ratio);
        let r1 = new Gear(52, 11).ratio;
        let r2 = new Gear(30, 27).ratio;
        console.log(r1, r2);
        r1 = new Gear1(52, 11, 26, 1.5).gearInches;
        r2 = new Gear1(52, 11, 24, 1.24).gearInches;
        console.log(r1, r2);
    }
    SRP1.main = main;
})(SRP1 || (SRP1 = {}));
SRP1.main();
//# sourceMappingURL=SRP1.js.map