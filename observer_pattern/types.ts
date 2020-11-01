export interface Subject {
  registerObserver(o: Observer): void
  removeObserver(o: Observer): void
  notifyObserver(): void
}

export type WeatherMeasurements = {
  temp: number
  humidity: number
  pressure: number
}

export type ObserverMap = Map<Observer, Observer>

export interface Observer {
  update(data: WeatherMeasurements): void
}

export interface DisplayElementt {
  display(): void
}
