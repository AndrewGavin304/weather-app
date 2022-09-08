import './style.css';
import { processWeatherData, getWeather } from './modules/weather';

processWeatherData(getWeather('london'));
