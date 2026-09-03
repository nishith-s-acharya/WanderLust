import { createContext, useContext, useState, useCallback } from 'react';

const LocationContext = createContext(null);

export function LocationProvider({ children }) {
  const [location, setLocationState] = useState(null);

  const setLocation = useCallback((lat, lng, name = '') => {
    setLocationState({ lat, lng, name });
  }, []);

  const clearLocation = useCallback(() => {
    setLocationState(null);
  }, []);

  return (
    <LocationContext.Provider value={{ location, setLocation, clearLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
}
