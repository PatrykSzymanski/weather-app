"use client";

import { useTemperatureUnit } from "./TemperatureUnitProvider";

export function TemperatureToggle() {
  const { unit, setUnit } = useTemperatureUnit();
  const isFahrenheit = unit === "F";
  const nextUnit = isFahrenheit ? "C" : "F";

  return (
    <button
      type="button"
      aria-pressed={isFahrenheit}
      aria-label={`Temperature unit ${unit}. Switch to ${nextUnit}.`}
      onClick={() => setUnit(nextUnit)}
      className="relative inline-grid h-12 w-[104px] shrink-0 grid-cols-2 items-center rounded-full border border-border bg-white/10 p-1 shadow-lg shadow-black/20 inset-shadow-xs inset-shadow-white/20 transition-colors duration-200 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80"
    >
      <span
        className={`z-10 flex h-10 w-12 items-center justify-center text-sm font-semibold leading-none text-shadow-sm transition-colors duration-200 ${
          isFahrenheit ? "text-muted-foreground" : "text-slate-900"
        }`}
      >
        °C
      </span>
      <span
        className={`z-10 flex h-10 w-12 items-center justify-center text-sm font-semibold leading-none text-shadow-sm transition-colors duration-200 ${
          isFahrenheit ? "text-slate-900" : "text-muted-foreground"
        }`}
      >
        °F
      </span>
      <span
        aria-hidden="true"
        className={`absolute left-1 top-1 h-10 w-12 rounded-full bg-white/90 shadow-md shadow-black/25 transition-transform duration-200 ease-out ${
          isFahrenheit ? "translate-x-12" : "translate-x-0"
        }`}
      />
    </button>
  );
}
