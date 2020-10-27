import BaseDuck from "./BaseDuck"
import FlyHigh from "./FlyHigh"
import FlyOnRocket from "./FlyOnRocket"

export default class MallardDuck extends BaseDuck {} //code reuse!

const mallardDuck = new MallardDuck(new FlyHigh())

mallardDuck.performFly() //command pattern (delegate implementation details to just a class)

const startFlying = setInterval(() => {
  function makeRecorder() {
    let count = 0
    return function record() {
      console.log(`Have been flying for ${++count} seconds`)
    }
  }
  makeRecorder()()
}, 1000)

setTimeout(() => {
  mallardDuck.tired = true //how to make it into an event?
  mallardDuck.switchGear(new FlyOnRocket())
  clearInterval(startFlying)
}, 5000)
