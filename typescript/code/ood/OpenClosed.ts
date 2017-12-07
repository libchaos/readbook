namespace OCP {
  class RewardPointsCalculator {
    getPoints(transactionValue: number) {
      return Math.floor(transactionValue) * 4
    }
  }
  class DoublePointsCalculator extends RewardPointsCalculator {
    getPoints(transactionValue: number) {
      const standardPoints = super.getPoints(transactionValue)
      return standardPoints * 2
    }
  }
  export function main() {
    const pointsCalculator = new DoublePointsCalculator()
    console.log(pointsCalculator.getPoints(100.99));
  }
}

OCP.main()
// 可扩展 不修改