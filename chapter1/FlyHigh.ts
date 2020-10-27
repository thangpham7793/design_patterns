import { IFlyBehavior } from "./duck.types"

export default class FlyHigh implements IFlyBehavior {
  fly() {
    console.log("Flying high")
  }
}
