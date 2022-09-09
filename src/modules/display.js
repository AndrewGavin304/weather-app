import { getWeather } from './weather';

function createSearchForm() {
  const form = document.createElement('form');
  const input = document.createElement('input');
  form.id = 'search-form';
  input.id = 'location-search';
  input.type = 'search';
  input.value = 'location';
  form.append(input);
  return form;
}

export function searchListener() {
  const searchForm = document.getElementById('search-form');
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = document.getElementById('location-search');
    getWeather(searchValue.value);
  });
}

export function generateLayout() {
  const content = document.getElementById('content');
  content.append(createSearchForm());
}

export function showWeatherToday(weatherObject) {
  const content = document.getElementById('content');
  let weatherCard = document.createElement('div');
  weatherCard.classList.add('grid p-1 ')
}
