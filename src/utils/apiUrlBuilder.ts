export const apiUrlBuilder = (endpoint: string, params?: Record<string, string | number>) => {
  const API_URL = import.meta.env.VITE_WEATHER_API_URL as string;
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY as string;
  const urlParams = new URLSearchParams()
  urlParams.set('appid', API_KEY);

  if (params) {
    Object.entries(params).forEach(
      (([paramName, paramValue]) => urlParams.set(paramName, paramValue.toString()))
    )
  }
  return API_URL.concat(endpoint) + '?' + urlParams.toString();
}