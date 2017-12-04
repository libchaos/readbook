declare function require(moduleName: string): any

import {Ship} from './ship'

const condition = true

if (condition) {
  const ship: typeof Ship = require('./ship')
  const myship = new ship()
}


declare const System: {import(module: string): Promise<any>}


import {Ship as Boat} from './ship'

const condition1 = true

if (condition1) {
  System.import('./ship.ts').then((ship: typeof Boat) => {
    const myboat = new ship()
  })
}