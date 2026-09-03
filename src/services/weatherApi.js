const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const weatherCache = new Map();
const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

export async function fetchWeather(lat, lng) {
  const cacheKey = `${lat.toFixed(2)},${lng.toFixed(2)}`;
  const cached = weatherCache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  if (!API_KEY || API_KEY === 'your_openweathermap_api_key_here') {
    throw new Error('OpenWeatherMap API key not configured. Add VITE_OPENWEATHER_API_KEY to your .env file.');
  }

  const url = `${BASE_URL}?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('Invalid OpenWeatherMap API key. Check your .env file.');
    }
    if (response.status === 429) {
      throw new Error('Weather API rate limit exceeded. Please try again later.');
    }
    throw new Error(`Weather API error: ${response.status}`);
  }

  const data = await response.json();

  const normalized = {
    temp: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    tempMin: Math.round(data.main.temp_min),
    tempMax: Math.round(data.main.temp_max),
    humidity: data.main.humidity,
    windSpeed: Math.round(data.wind.speed * 3.6), // m/s to km/h
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    main: data.weather[0].main,
    cityName: data.name,
    country: data.sys.country,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  };

  weatherCache.set(cacheKey, { data: normalized, timestamp: Date.now() });
  return normalized;
}

export async function fetchWeatherByCity(cityName) {
  if (!API_KEY || API_KEY === 'your_openweathermap_api_key_here') {
    throw new Error('OpenWeatherMap API key not configured.');
  }

  const url = `${BASE_URL}?q=${encodeURIComponent(cityName)}&units=metric&appid=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`City "${cityName}" not found.`);
    }
    throw new Error(`Weather API error: ${response.status}`);
  }

  const data = await response.json();

  return {
    temp: Math.round(data.main.temp),
    feelsLike: Math.round(data.main.feels_like),
    tempMin: Math.round(data.main.temp_min),
    tempMax: Math.round(data.main.temp_max),
    humidity: data.main.humidity,
    windSpeed: Math.round(data.wind.speed * 3.6),
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    main: data.weather[0].main,
    cityName: data.name,
    country: data.sys.country,
    sunrise: data.sys.sunrise,
    sunset: data.sys.sunset,
    iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  };
}
