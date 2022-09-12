import { getWeather } from './weather';

//MARK FOR REMOVAL AFTER DEV

const coffee = 'bg-coffee';
const coffeeLight = 'bg-coffee-light';
const coffeeDark = 'bg-coffee-dark';
const blue = 'bg-blue';
const blueLight = 'bg-blue-light';
const blueDark = 'bg-blue-dark';
const teal = 'bg-teal';
const tealLight = 'bg-teal-light';
const tealDark = 'bg-teal-dark';
const green = 'bg-green';
const greenLight = 'bg-green-light';
const greenDark = 'bg-green-dark';
const lime = 'bg-lime';
const limeLight = 'bg-lime-light';
const limeDark = 'bg-lime-dark';

const paletteDiv = document.createElement('div');
paletteDiv.classList = 'flex';
const content = document.getElementById('content');
content.append(paletteDiv);

export function showColorPalette(color) {
  const colorDivLight = document.createElement('div');
  const colorDivDefault = document.createElement('div');
  const colorDivDark = document.createElement('div');
  colorDivLight.classList.add(`bg-${color}-light`, 'w-12', 'h-12');
  colorDivDefault.classList.add(`bg-${color}`, 'w-12', 'h-12');
  colorDivDark.classList.add(`bg-${color}-dark`, 'w-12', 'h-12');
  paletteDiv.append(colorDivLight);
  paletteDiv.append(colorDivDefault);
  paletteDiv.append(colorDivDark);
}

//MARK FOR REMOVAL AFTER DEV

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
  weatherCard.classList.add('grid p-1 border')
}