import BaseDuck from "./BaseDuck"
import FlyHigh from "./FlyHigh"
import FlyOnRocket from "./FlyOnRocket"

export default class MallardDuck extends BaseDuck {}

const mallardDuck = new MallardDuck(new FlyHigh())

mallardDuck.performFly()

let count = 0
function record() {
  console.log(`Have been flying for ${++count} seconds`)
}

const startFlying = setInterval(() => {
  record()
}, 1000)

setTimeout(() => {
  mallardDuck.tired = true //how to make it into an event?
  mallardDuck.switchGear(new FlyOnRocket())
  clearInterval(startFlying)
}, 5000)
