import { WeatherIconProps } from "../../../lib/types";
import { WeatherIcon } from "../WeatherIcon";
import { Cloud, Rain } from "../primitives";

export function Rainy({ className }: WeatherIconProps) {
  return (
    <WeatherIcon className={className}>
      <Cloud />
      <Rain />
    </WeatherIcon>
  );
}
