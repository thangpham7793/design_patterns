import { IFlyBehavior } from "./duck.types"

export default class FlyOnRocket implements IFlyBehavior {
  fly() {
    console.log("Flying on Rockets!")
  }
}
