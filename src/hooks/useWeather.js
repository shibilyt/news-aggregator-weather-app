import { useQuery } from "react-query";
import axios from "axios";

export default function useWeather(lat, lon) {
  async function fetchWeather(key, { lat, lon }) {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_MAP_API_KEY}`
    );
    return res.data;
  }

  return useQuery(["weather", { lat, lon }], fetchWeather, {
    enabled: !!lat || !!lon,
  });
}
