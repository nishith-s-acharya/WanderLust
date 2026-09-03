import { useState, useCallback } from 'react';

export function useGeolocation() {
  const [position, setPosition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude
        });
        setLoading(false);
      },
      (err) => {
        let message;
        switch (err.code) {
          case err.PERMISSION_DENIED:
            message = 'Location access denied. You can search for a city instead.';
            break;
          case err.POSITION_UNAVAILABLE:
            message = 'Location information unavailable. Try searching for a city.';
            break;
          case err.TIMEOUT:
            message = 'Location request timed out. Please try again.';
            break;
          default:
            message = 'Unable to get your location. Try searching for a city.';
        }
        setError(message);
        setLoading(false);
      },
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 600000 // 10 minutes
      }
    );
  }, []);

  return { position, loading, error, requestLocation };
}
