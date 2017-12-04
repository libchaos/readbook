// import * as ShipModule from '../namespace/namspace'
// import {Shipping} from '../namespace/namspace'
import { Shipping as Boat } from '../namespace/namspace';

export class Dock {
  private dockedShips: Boat.Ship[] = []

  arrival(ship: Boat.Ship) {
    this.dockedShips.push(ship)
  }
}



