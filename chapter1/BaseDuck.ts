import { IDuck, IFlyBehavior } from "./duck.types"

export default class BaseDuck implements IDuck {
  constructor(private flyBehavior: IFlyBehavior) {
    this.flyBehavior = flyBehavior
  }

  tired = false

  display() {
    console.log("I'm a duck!")
  }

  performFly() {
    this.flyBehavior.fly()
  }

  private setFlyBehavior(newFlyBehavior: IFlyBehavior) {
    this.flyBehavior = newFlyBehavior
  }

  switchGear(newFlyBehavior: IFlyBehavior) {
    if (this.tired) {
      console.log("Tired, time to switch gear!")
      this.setFlyBehavior(newFlyBehavior)
      return this.performFly()
    }

    console.log("Still flying high!")
  }
}
