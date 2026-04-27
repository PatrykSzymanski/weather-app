import {
  ClearSky,
  MainlyClear,
  PartlyCloudy,
  Rainy,
  Snow,
  Thunderstorm,
} from "./icons";
import { WeatherIconProps } from "../lib/types";

interface WeatherIconByCodeProps extends WeatherIconProps {
  code: number;
}

export function WeatherIconByCode({
  code,
  ...props
}: WeatherIconByCodeProps) {
  if (code === 0) return <ClearSky {...props} />;
  if (code === 1) return <MainlyClear {...props} />;
  if (code === 2 || code === 3) return <PartlyCloudy {...props} />;
  if (code >= 45 && code <= 48) return <PartlyCloudy {...props} />;
  if (code >= 51 && code <= 67) return <Rainy {...props} />;
  if (code >= 71 && code <= 77) return <Snow {...props} />;
  if (code >= 80 && code <= 82) return <Rainy {...props} />;
  if (code >= 85 && code <= 86) return <Snow {...props} />;
  if (code >= 95) return <Thunderstorm {...props} />;

  return <PartlyCloudy {...props} />;
}
