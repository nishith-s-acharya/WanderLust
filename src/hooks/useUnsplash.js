import { useState, useEffect } from 'react';
import { searchPhotos } from '../services/unsplashApi';
import { useDebounce } from './useDebounce';

export function useUnsplash(query, perPage = 6) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (!debouncedQuery) {
      setImages([]);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    searchPhotos(debouncedQuery, perPage)
      .then(photos => {
        if (!cancelled) {
          setImages(photos);
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
  }, [debouncedQuery, perPage]);

  return { images, loading, error };
}
