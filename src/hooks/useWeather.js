import { useState, useEffect } from 'react';
import { fetchWeather } from '../services/weatherApi';

export function useWeather(lat, lng) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    if (lat == null || lng == null) return;

    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchWeather(lat, lng)
      .then(data => {
        if (!cancelled) {
          setWeather(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [lat, lng]);

  const retry = () => {
    if (lat != null && lng != null) {
      setLoading(true);
      setError(null);
      fetchWeather(lat, lng)
        .then(setWeather)
        .catch(err => setError(err.message))
        .finally(() => setLoading(false));
    }
  };

  return { weather, loading, error, retry };
}
