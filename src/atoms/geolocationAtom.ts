import { atom } from "jotai";

// Kyiv, Ukraine <3
const DEFAULT_COORDS = {
  lat: 50.450001,
  lon: 30.523333
}

export const geolocation = atom<GeolocationPosition | null>(null)
export const getUserCoordinates = atom<{ lat: number, lon: number }>((get) => {
  const glocation = get(geolocation)
  if (glocation) {
    const { coords: { latitude, longitude } } = glocation;
    return {
      lat: latitude,
      lon: longitude
    }
  }
  return DEFAULT_COORDS;
})
export const geolocationError = atom<GeolocationPositionError | null>(null)