import { IItem } from "./interfaces"
import { Chance } from 'chance'

export default class DataSource {

  private chance = new Chance()

  availableItems: Array<IItem> = []

  constructor() {
    for (let step = 1; step < 10; step++) {
      this.availableItems.push(
        {
          id: this.chance.guid(),
          name: this.chance.name(),
          price: this.chance.dollar(),
          image: `https://lorempixel.com/1000/500/food/${step}`,
          detail: this.chance.paragraph()
        }
      )
    }
  }
} 