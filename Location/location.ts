// useCurrentLocation.ts
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export function useCurrentLocation() {
  const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    async function getCurrentLocation() {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        const loc = await Location.getCurrentPositionAsync({});
        console.log('Location obtained:', loc.coords); 
        setLocation(loc.coords);
      } catch (error) {
        console.error('Error getting location:', error);
        setErrorMsg('Failed to get location');
      }
    }

    getCurrentLocation();
  }, []);

  return { location, errorMsg };
}
