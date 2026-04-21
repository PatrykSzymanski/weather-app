import { WeatherIconProps } from "../../../lib/types";
import { WeatherIcon } from "../WeatherIcon";
import { Cloud, Snowflake } from "../primitives";

export function Snow({ className }: WeatherIconProps) {
  return (
    <WeatherIcon className={className}>
      <Cloud />
      <Snowflake />
    </WeatherIcon>
  );
}
