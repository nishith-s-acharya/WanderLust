import { Droplets, Wind, Thermometer } from 'lucide-react';

import './WeatherWidget.css';

export default function WeatherWidget({ weather, loading, error, onRetry, compact = false, cityOverride = null }) {
  if (loading) {
    return (
      <div className={`weather-widget card ${compact ? 'weather-widget--compact' : ''}`}>
        <div className="weather-widget__skeleton">
          <div className="skeleton" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
          <div style={{ flex: 1 }}>
            <div className="skeleton" style={{ width: '120px', height: '36px', marginBottom: '8px' }} />
            <div className="skeleton" style={{ width: '180px', height: '16px' }} />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`weather-widget card weather-widget--error ${compact ? 'weather-widget--compact' : ''}`}>
        <p className="weather-widget__error-text">{error}</p>
        {onRetry && (
          <button className="btn-primary weather-widget__retry" onClick={onRetry}>
            Try Again
          </button>
        )}
      </div>
    );
  }

  if (!weather) return null;

  return (
    <div className={`weather-widget card ${compact ? 'weather-widget--compact' : ''}`}>
      <div className="weather-widget__header">
        <div className="weather-widget__location">
          <span className="weather-widget__city">{cityOverride || weather.cityName}</span>
          {weather.country && !cityOverride && (
            <span className="weather-widget__country">{weather.country}</span>
          )}
        </div>
        <span className="weather-widget__condition tag">{weather.main}</span>
      </div>

      <div className="weather-widget__main">
        <img
          src={weather.iconUrl}
          alt={weather.description}
          className="weather-widget__icon"
          width={80}
          height={80}
        />
        <div className="weather-widget__temp-wrap">
          <span className="weather-widget__temp">{weather.temp}°</span>
          <span className="weather-widget__description">{weather.description}</span>
          <span className="weather-widget__feels">Feels like {weather.feelsLike}°C</span>
        </div>
      </div>

      <div className="weather-widget__details">
        <div className="weather-widget__detail">
          <Droplets size={16} />
          <span>{weather.humidity}%</span>
          <span className="weather-widget__detail-label">Humidity</span>
        </div>
        <div className="weather-widget__divider" />
        <div className="weather-widget__detail">
          <Wind size={16} />
          <span>{weather.windSpeed} km/h</span>
          <span className="weather-widget__detail-label">Wind</span>
        </div>
        <div className="weather-widget__divider" />
        <div className="weather-widget__detail">
          <Thermometer size={16} />
          <span>{weather.tempMin}° / {weather.tempMax}°</span>
          <span className="weather-widget__detail-label">Low / High</span>
        </div>
      </div>
    </div>
  );
}
