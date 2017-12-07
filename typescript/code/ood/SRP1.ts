namespace SRP1 {
  class Gear {
    constructor(private chainring: number, private cog: number) {

    }
    get ratio(): number {
      return Number((this.chainring / this.cog).toFixed(2))
    }
  }
  class Gear1 {
    constructor(
      private chainring: number,
      private cog: number,
      private rim: number,
      private tire: number
    ) {

    }

    get ratio(): number {
      return Number((this.chainring / this.cog).toFixed(2))
    }
    get gearInches(): number { // 设计不合理 怎么 能问一个 gear gearInches
      return this.ratio * (this.rim + (this.tire*2))
    }
  }

  export function main() {
    let chainring: number = 52
    let cog: number = 11
    let ratio: number = Number((chainring / cog).toFixed(2))
    console.log(ratio);
    chainring = 30
    cog = 27
    ratio = Number((chainring / cog).toFixed(2))
    console.log(ratio);
    let r1: number = new Gear(52, 11).ratio
    let r2: number = new Gear(30, 27).ratio
    console.log(r1, r2);

    r1 = new Gear1(52, 11, 26, 1.5).gearInches
    r2 = new Gear1(52, 11, 24, 1.24).gearInches
    console.log(r1, r2);
  }

}

SRP1.main()