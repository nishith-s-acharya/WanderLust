import { useState } from 'react';
import { MapPin, Search, Loader, Navigation } from 'lucide-react';
import { useGeolocation } from '../hooks/useGeolocation';
import { useLocation } from '../context/LocationContext';
import { fetchWeatherByCity } from '../services/weatherApi';
import './LocationPicker.css';

export default function LocationPicker() {
  const { position, loading: geoLoading, error: geoError, requestLocation } = useGeolocation();
  const { location, setLocation } = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [searchError, setSearchError] = useState(null);

  const handleGeolocate = () => {
    requestLocation();
  };

  // When geolocation succeeds, update context
  if (position && (!location || location.lat !== position.lat)) {
    setLocation(position.lat, position.lng, 'Your Location');
  }

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    setSearching(true);
    setSearchError(null);

    try {
      const weather = await fetchWeatherByCity(searchQuery.trim());
      // Use the coordinates from the weather response
      setLocation(
        weather.temp !== undefined ? 0 : 0, // We'll use city name
        0,
        `${weather.cityName}, ${weather.country}`
      );
      // Actually, let's get coordinates from a geocoding trick:
      // OpenWeather returns the city data, we need to re-fetch with geocoding
      // For simplicity, use the weather endpoint which also returns coord
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(searchQuery.trim())}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`
      );
      if (response.ok) {
        const data = await response.json();
        setLocation(data.coord.lat, data.coord.lon, `${data.name}, ${data.sys.country}`);
      }
      setSearchQuery('');
    } catch (err) {
      setSearchError(err.message);
    } finally {
      setSearching(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="location-picker card" id="weather">
      <div className="location-picker__header">
        <MapPin size={20} className="location-picker__icon" />
        <div>
          <h4 className="location-picker__title">Your Location</h4>
          <p className="location-picker__subtitle">
            {location
              ? `Showing weather for ${location.name || 'your area'}`
              : 'Set your location to see local weather'
            }
          </p>
        </div>
      </div>

      <div className="location-picker__actions">
        <button
          className="btn-primary location-picker__geo-btn"
          onClick={handleGeolocate}
          disabled={geoLoading}
        >
          {geoLoading ? (
            <Loader size={16} className="location-picker__loader" />
          ) : (
            <Navigation size={16} />
          )}
          {geoLoading ? 'Locating...' : 'Use My Location'}
        </button>

        <div className="location-picker__search">
          <input
            type="text"
            className="input-pill location-picker__input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search a city..."
            aria-label="Search for a city"
          />
          <button
            className="location-picker__search-btn"
            onClick={handleSearch}
            disabled={searching || !searchQuery.trim()}
            aria-label="Search"
          >
            {searching ? <Loader size={16} className="location-picker__loader" /> : <Search size={16} />}
          </button>
        </div>
      </div>

      {(geoError || searchError) && (
        <p className="location-picker__error">
          {geoError || searchError}
        </p>
      )}
    </div>
  );
}
