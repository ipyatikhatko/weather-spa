import axios from "axios";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import "@fontsource/josefin-sans/200.css";
import "@fontsource/josefin-sans/700.css";
import { geolocation, geolocationError } from "./atoms/geolocationAtom";
import { themeAtom } from "./atoms/themeAtom";
import { loadableWeather } from "./atoms/weatherAtom";
import Layout from "./layout";

function App() {
  const [, setGeo] = useAtom(geolocation);
  const [, setGeoError] = useAtom(geolocationError);
  const [weather] = useAtom(loadableWeather);
  const [theme, setTheme] = useAtom(themeAtom);

  // ask user for geolocation
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(setGeo, setGeoError);
  }, []);

  if (weather.state === "hasError") return <p>Error</p>;
  if (weather.state === "loading") return <p>Loading...</p>;

  return (
    <Layout>
      <pre>{JSON.stringify(weather.data, null, 2)}</pre>
    </Layout>
  );
}

export default App;
