import cloudyDay from '../images/cloudy-day.svg';
import cloudyNight from '../images/cloudy-night.svg';
import day from '../images/day.svg';
import night from '../images/night.svg';
import rainyDay from '../images/rainy-day.svg';
import rainyNight from '../images/rainy-night.svg';
import snowyDay from '../images/snowy-day.svg';
import snowyNight from '../images/snowy-night.svg';

export function processWeatherData(data) {
  const currentWeatherObject = {
    temp: `${data.properties.periods[0].temperature}`,
    wind: `${data.properties.periods[0].windSpeed}`,
    description: `${data.properties.periods[0].shortForecast}`,
    isDay: `${data.properties.periods[0].isDaytime}`,
  };
  console.log(currentWeatherObject);
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
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${town},${state},${country}&limit=1&appid=8e295eaa7e218e2a1c3e71497e4b9f7b`
  );
  return response;
}

function currentImageHandler(weatherObject) {
  const description = weatherObject.description.toLowerCase();
  const isDay = weatherObject.isDay.toLowerCase();
  const content = document.getElementById('content');

  if (description.includes('sunny')) {
    content.classList.add('bg-sunny', 'bg-cover', 'bg-center');
    return day;
  }

  if (description.includes('cloud') && isDay.includes('true')) {
    return cloudyDay;
  }

  if (description.includes('shower') && isDay.includes('true')) {
    return rainyDay;
  }

  if (description.includes('snow') && isDay.includes('true')) {
    return snowyDay;
  }

  if (description.includes('cloud') && isDay.includes('false')) {
    return cloudyNight;
  }

  if (description.includes('shower') && isDay.includes('false')) {
    return rainyNight;
  }

  if (description.includes('snow') && isDay.includes('false')) {
    return snowyNight;
  }

  if (isDay.includes('false')) {
    return night;
  }

  return day;
}

function createWeatherCard(weatherObject) {
  const content = document.getElementById('content');
  const oldWeatherCard = document.getElementById('current-weather');

  if (oldWeatherCard) {
    oldWeatherCard.parentNode.removeChild(oldWeatherCard);
  }

  const weatherCard = document.createElement('div');
  weatherCard.classList.add('grid', 'grid-cols-2', 'grid-row-2', 'gap-x-2', 'gap-y-0', 'w-fit', 'h-fit', 'rounded', 'shadow-md', 'border-2', 'border-teal-light', 'text-blue-dark', 'm-4', 'bg-white');
  weatherCard.id = 'current-weather';

  const currentTemp = document.createElement('div');
  currentTemp.classList.add('font-bold', 'text-l', 'm-1', 'col-start-2');
  currentTemp.innerText = `Temperature: ${weatherObject.temp}°F`;

  const currentWind = document.createElement('div');
  currentWind.classList.add('text-l', 'm-1', 'col-start-2');
  currentWind.innerText = `Wind: ${weatherObject.wind}`;

  const weatherImg = document.createElement('img');
  weatherImg.classList.add('justify-self-center', 'w-48', 'h-48', 'col-start-1', 'row-span-3');
  weatherImg.src = currentImageHandler(weatherObject);

  const description = document.createElement('div');
  description.classList.add('text-l', 'm-1', 'col-start-2');
  description.innerText = weatherObject.description;

  weatherCard.append(weatherImg);
  weatherCard.append(currentTemp);
  weatherCard.append(currentWind);
  weatherCard.append(description);

  content.append(weatherCard);
}

export async function getWeather(town, state, country) {
  const latLongResponse = await getLatLong(town, state, country);
  const latLongData = await latLongResponse.json();
  const lat = `${latLongData[0].lat}`;
  const lon = `${latLongData[0].lon}`;

  const response = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
  const data = await response.json();
  console.log(data);
  const forecastAPIURL = data.properties.forecast;
  const forecastResponse = await fetch(forecastAPIURL);
  const forecastData = await forecastResponse.json();
  console.log(forecastData);
  const currentWeather = processWeatherData(forecastData);
  createWeatherCard(currentWeather);
}
