import { WeatherIconProps } from "../../../lib/types";
import { WeatherIcon } from "../WeatherIcon";
import { Cloud, Thunderbolt } from "../primitives";

export function Thunderstorm({ className }: WeatherIconProps) {
  return (
    <WeatherIcon className={className}>
      <Cloud />
      <Thunderbolt />
    </WeatherIcon>
  );
}
