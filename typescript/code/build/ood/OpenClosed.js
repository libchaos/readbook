"use strict";
var OCP;
(function (OCP) {
    class RewardPointsCalculator {
        getPoints(transactionValue) {
            return Math.floor(transactionValue) * 4;
        }
    }
    class DoublePointsCalculator extends RewardPointsCalculator {
        getPoints(transactionValue) {
            const standardPoints = super.getPoints(transactionValue);
            return standardPoints * 2;
        }
    }
    function main() {
        const pointsCalculator = new DoublePointsCalculator();
        console.log(pointsCalculator.getPoints(100.99));
    }
    OCP.main = main;
})(OCP || (OCP = {}));
OCP.main();
// 可扩展 不修改 
//# sourceMappingURL=OpenClosed.js.map