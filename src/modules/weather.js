function convertCelsiusToFahrenheit(tempCelsius) {
  const tempFahrenheit = ((tempCelsius * (9 / 5)) + 32).toFixed(2);
  return tempFahrenheit;
}

export function processWeatherData(data) {
  const weatherObject = {
    tempCelsius: `${data.main.temp}`,
    tempFahrenheit: convertCelsiusToFahrenheit(`${data.main.temp}`).toString(),
    tempFeelsLike: `${data.main.feels_like}`,
    humidity: `${data.main.humidity}`,
    wind: `${data.wind.speed}`,
    clouds: `${data.clouds.all}`,
    description: `${data.weather[0].description}`,
  };

  return weatherObject;
}

export async function getWeather(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=8e295eaa7e218e2a1c3e71497e4b9f7b&units=metric`);
  const data = await response.json();
  console.log(data);
  const weatherObject = processWeatherData(data);
  console.log(weatherObject);
}
