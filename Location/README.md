# useCurrentLocation Hook (with Expo Location)

A custom React hook built with [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/) to retrieve the user's current geographic location in React Native apps.

## Requirements

- **Expo SDK** (React Native with Expo)
- **expo-location** installed

## Installation

Install the required package:

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
        <Text>Getting your location...</Text>
      )}
    </View>
  );
};
