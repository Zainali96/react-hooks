## Installation

```bash
npx expo install expo-location
```
## Usage

```tsx
import { useCurrentLocation } from '@/hooks/location';

const YourComponent = () => {
  const { location, errorMsg } = useCurrentLocation();

  return (
    <View>
      {errorMsg && <Text>Error: {errorMsg}</Text>}
      {location ? (
        <Text>
          Your location: Latitude {location.latitude}, Longitude {location.longitude}
        </Text>
      ) : (
        <p>Getting your location...</p>
      )}
    </View>
  );
};
