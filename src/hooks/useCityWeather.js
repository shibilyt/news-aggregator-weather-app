import { useQuery } from "react-query";
import axios from "axios";

export default function useCityWeather(city) {
  async function fetchWeather(key, { city }) {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_MAP_API_KEY}`
    );
    return res.data;
  }

  return useQuery(["cityWeather", { city }], fetchWeather, {
    enabled: false
  });
}
