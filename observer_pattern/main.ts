import CurrentConditionsDisplay from "./CurrentConditionsDisplay"
import WeatherData from "./WeatherData"

function Main(): void {
  const weatherData = new WeatherData()
  const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData)
  currentConditionsDisplay.display()
  weatherData.setMeasurements({ temp: 120, humidity: 70, pressure: 30 })
  currentConditionsDisplay.display()
  currentConditionsDisplay.unsubscribe()
  weatherData.setMeasurements({ temp: 100, humidity: 65, pressure: 50 })
  currentConditionsDisplay.display()
  currentConditionsDisplay.subscribe(weatherData) //should be able to subscribe to anything, not just this one particular service though as long as the service implements the Subject interface and sends out the WeatherMeasurements data type
  weatherData.setMeasurements({ temp: 110, humidity: 65, pressure: 50 })
  currentConditionsDisplay.display()
}

Main()
