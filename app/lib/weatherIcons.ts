import { WeatherIcon } from "./types";
import {
  ClearSky,
  MainlyClear,
  PartlyCloudy,
  Rainy,
  Snow,
  Thunderstorm,
} from "../components/icons";

export function getWeatherIcon(code: number): WeatherIcon {
  if (code === 0) return ClearSky;
  if (code === 1) return MainlyClear;
  if (code === 2) return PartlyCloudy;
  if (code === 3) return PartlyCloudy;
  if (code >= 45 && code <= 48) return PartlyCloudy;
  if (code >= 51 && code <= 57) return Rainy;
  if (code >= 61 && code <= 67) return Rainy;
  if (code >= 71 && code <= 77) return Snow;
  if (code >= 80 && code <= 82) return Rainy;
  if (code >= 85 && code <= 86) return Snow;
  if (code >= 95) return Thunderstorm;

  return PartlyCloudy;
}