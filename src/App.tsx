import { useAtom } from "jotai";
import { useEffect } from "react";
import "@fontsource/josefin-sans/200.css";
import "@fontsource/josefin-sans/300.css";
import "@fontsource/josefin-sans/400.css";
import "@fontsource/josefin-sans/500.css";
import "@fontsource/josefin-sans/600.css";
import "@fontsource/josefin-sans/700.css";
import styled from "styled-components";
import { geolocation, geolocationError } from "./atoms/geolocationAtom";
import { loadableWeather } from "./atoms/weatherAtom";
import Layout from "./layout";
import { kelvinToCelsius } from "./utils";
import Heading from "./components/Heading";
import { WiDirectionDown, WiHumidity } from "react-icons/wi";
import ThemedIcon from "./components/ThemedIcon";

const BottomCurrentWeather = styled.div`
  padding: 2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CelsiusBigHeading = styled(Heading)`
  font-size: 20vw;
  @media screen and (max-width: 768px) {
    font-size: 32vw;
    width: 100%;
    text-align: center;
  }
`;

function App() {
  const [, setGeo] = useAtom(geolocation);
  const [, setGeoError] = useAtom(geolocationError);
  const [weather] = useAtom(loadableWeather);

  // ask user for geolocation
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(setGeo, setGeoError);
  }, []);

  if (weather.state === "hasError")
    return (
      <Layout>
        <Heading>Error</Heading>
      </Layout>
    );
  if (weather.state === "loading")
    return (
      <Layout>
        <Heading>Loading</Heading>
      </Layout>
    );

  return (
    <Layout>
      <Heading size="md">{weather.data.name}</Heading>
      <CelsiusBigHeading>
        {kelvinToCelsius(weather.data.main.temp).toFixed(1)}°C
      </CelsiusBigHeading>

      <Heading>
        <ThemedIcon icon={<WiHumidity size={40} />} />
        {weather.data.main.humidity} %
      </Heading>
      <Heading>
        <ThemedIcon icon={<WiDirectionDown size={40} />} />
        {weather.data.main.pressure} hPa
      </Heading>

      <BottomCurrentWeather>
        <Heading size="sm">
          MIN <b>{kelvinToCelsius(weather.data.main.temp_min).toFixed(1)}</b>°C
        </Heading>
        <Heading size="sm">
          MAX <b>{kelvinToCelsius(weather.data.main.temp_max).toFixed(1)}</b>°C
        </Heading>
        <Heading size="sm">
          FEELS LIKE{" "}
          <b>{kelvinToCelsius(weather.data.main.feels_like).toFixed(1)}</b>°C
        </Heading>
      </BottomCurrentWeather>
    </Layout>
  );
}

export default App;
