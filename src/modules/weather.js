function convertCelsiusToFahrenheit(tempCelsius) {
  const tempFahrenheit = ((tempCelsius * (9 / 5)) + 32).toFixed(2);
  return tempFahrenheit;
}

export function processWeatherData(data) {
  const currentWeatherObject = {
    temp: `${data.properties.periods[0].temperature}`,
    wind: `${data.properties.periods[0].windSpeed}`,
    description: `${data.properties.periods[0].shortForecast}`,
    isDay: `${data.properties.periods[0].isDaytime}`,
  };
  return currentWeatherObject;
}

//TODO: process input to return 3 parameters for more specific locations
export async function getLatLong(town, state, country) {
  if (state === undefined) {
    state = '';
  }
  if (country === undefined) {
    country = '';
  }
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${town},${state},${country}&limit=1&appid=8e295eaa7e218e2a1c3e71497e4b9f7b`);
  return response;
}

export async function getWeather(town, state, country) {
  const latLongResponse = await getLatLong(town, state, country);
  const latLongData = await latLongResponse.json();
  const lat = `${latLongData[0].lat}`;
  const lon = `${latLongData[0].lon}`;

  const response = await fetch(
    `https://api.weather.gov/points/${lat},${lon}`);
  const data = await response.json();
  console.log(data)
  const forecastAPIURL = data.properties.forecast;
  const forecastResponse = await fetch(forecastAPIURL);
  const forecastData = await forecastResponse.json();
  console.log(forecastData);
  processWeatherData(forecastData);
}
