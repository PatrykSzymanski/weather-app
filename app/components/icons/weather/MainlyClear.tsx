import { WeatherIconProps } from "../../../lib/types";
import { WeatherIcon } from "../WeatherIcon";
import { Cloud, Moon, Sun } from "../primitives";

export function MainlyClear({ isNight, className }: WeatherIconProps) {
  return (
    <WeatherIcon className={className}>
      {isNight ? <Moon x={20} y={-10} /> : <Sun x={20} y={-10} />}
      <Cloud x={75} y={5} scale={0.5} />
      <Cloud x={-65} y={65} scale={0.6} />
    </WeatherIcon>
  );
}
