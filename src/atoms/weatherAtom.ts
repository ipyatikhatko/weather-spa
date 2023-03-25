import axios from "axios";
import { atom } from "jotai";
import { loadable } from "jotai/utils";
import { Weather } from "../models/Weather";
import { apiUrlBuilder } from "../utils/apiUrlBuilder";
import { getUserCoordinates } from "./geolocationAtom";

const weatherAsync = atom<Promise<Weather>>(async (get) => {
  const { lat, lon } = get(getUserCoordinates);
  const { data, status } = await axios.get<Weather>(
    //send request with user location, or with DEFAULT_COORDS
    apiUrlBuilder("/weather", {
      lat,
      lon,
    })
  );
  return data;
});

export const loadableWeather = loadable(weatherAsync)