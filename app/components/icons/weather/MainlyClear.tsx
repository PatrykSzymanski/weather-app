import { WeatherIconProps } from "../../../lib/types";
import { WeatherIcon } from "../WeatherIcon";
import { Cloud, Moon, Sun } from "../primitives";

export function MainlyClear({ isNight, className }: WeatherIconProps) {
  return (
    <WeatherIcon className={className}>
      {isNight ? <Moon x={20} y={-10} /> : <Sun x={20} y={-10} />}
      <g className="icon-hover animate-hover">
        <Cloud x={-84} y={76} scale={0.58} />
      </g>
      <g className="icon-hover animate-hover">
        <Cloud x={80} y={-36} scale={0.5} />
      </g>
    </WeatherIcon>
  );
}
