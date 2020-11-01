import { DisplayElement, Observer, WeatherMeasurements, Subject } from "./types"

export default class CurrentConditionsDisplay
  implements DisplayElement, Observer {
  #currentConditions: WeatherMeasurements
  #weatherData: Subject

  constructor(weatherData: Subject) {
    this.subscribe(weatherData)
  }

  unsubscribe() {
    this.#weatherData.removeObserver(this)
    this.#weatherData = null
    this.#currentConditions = undefined
  }

  subscribe(weatherData: Subject) {
    this.#weatherData = weatherData
    this.#weatherData.registerObserver(this)
  }

  display(): void {
    if (!this.#currentConditions) {
      console.log(`Services currently unavailable`)
    } else {
      const { temp, humidity, pressure } = this.#currentConditions
      console.log(
        `The current temp, humidity and pressure are ${temp}, ${humidity}, and ${pressure}, respectively!`
      )
    }
  }
  update(data: WeatherMeasurements): void {
    this.#currentConditions = { ...data }
  }
}
