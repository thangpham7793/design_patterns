import { Observer, Subject, WeatherMeasurements, ObserverMap } from "./types"

export default class WeatherData implements Subject {
  private observerMap: ObserverMap
  private weatherMeasurements: WeatherMeasurements

  constructor() {
    this.observerMap = new Map()
  }

  registerObserver(o: Observer): void {
    this.observerMap.set(o, o)
  }

  removeObserver(o: Observer): void {
    this.observerMap.delete(o)
  }

  notifyObserver(): void {
    //send the newest data to each observer
    ;[...this.observerMap.values()].forEach((v: Observer) =>
      v.update(this.weatherMeasurements)
    )
  }

  measurementsChanged(): void {
    this.notifyObserver()
  }

  setMeasurements(newMeasurements: WeatherMeasurements) {
    this.weatherMeasurements = { ...newMeasurements }
    this.measurementsChanged()
  }
}
