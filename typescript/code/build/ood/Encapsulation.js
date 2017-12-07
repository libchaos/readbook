"use strict";
class Totalizer {
    constructor() {
        this.total = 0;
        this.taxRateFactor = 0.2;
    }
    addDonation(amount) {
        if (amount <= 0) {
            throw new Error('Donation exception');
        }
        const taxRebate = amount * this.taxRateFactor;
        const totalDonation = amount + taxRebate;
        this.total += totalDonation;
    }
    getAmountRaised() {
        return this.total;
    }
}
const totalizer = new Totalizer();
totalizer.addDonation(100.00);
const fundsRaised = totalizer.getAmountRaised();
console.log(fundsRaised);
//# sourceMappingURL=Encapsulation.js.map