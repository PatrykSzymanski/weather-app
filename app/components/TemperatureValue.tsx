"use client";

import {
  formatTemperature,
  useTemperatureUnit,
} from "./TemperatureUnitProvider";

interface TemperatureValueProps {
  celsius: number;
  className?: string;
}

export function TemperatureValue({ celsius, className }: TemperatureValueProps) {
  const { unit } = useTemperatureUnit();
  const temperature = formatTemperature(celsius, unit);
  const unitName = unit === "C" ? "Celsius" : "Fahrenheit";

  return (
    <span className={className} aria-label={`${temperature} degrees ${unitName}`}>
      {temperature}°
    </span>
  );
}
