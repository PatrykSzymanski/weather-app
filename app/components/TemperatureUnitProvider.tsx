"use client";

import {
  createContext,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type TemperatureUnit = "C" | "F";

interface TemperatureUnitContextValue {
  unit: TemperatureUnit;
  setUnit: (unit: TemperatureUnit) => void;
}

const TemperatureUnitContext =
  createContext<TemperatureUnitContextValue | null>(null);

const storageKey = "weather-temperature-unit";
const listeners = new Set<() => void>();

function isTemperatureUnit(value: string | null): value is TemperatureUnit {
  return value === "C" || value === "F";
}

export function TemperatureUnitProvider({
  children,
}: {
  children: ReactNode;
}) {
  const unit = useSyncExternalStore(
    subscribeToTemperatureUnit,
    getStoredTemperatureUnit,
    getServerTemperatureUnit
  );

  const value = useMemo(
    () => ({ unit, setUnit: setStoredTemperatureUnit }),
    [unit]
  );

  return (
    <TemperatureUnitContext value={value}>{children}</TemperatureUnitContext>
  );
}

function subscribeToTemperatureUnit(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function getStoredTemperatureUnit(): TemperatureUnit {
  const storedUnit = window.localStorage.getItem(storageKey);

  if (isTemperatureUnit(storedUnit)) {
    return storedUnit;
  }

  return "C";
}

function getServerTemperatureUnit(): TemperatureUnit {
  return "C";
}

function setStoredTemperatureUnit(unit: TemperatureUnit) {
  window.localStorage.setItem(storageKey, unit);
  listeners.forEach((listener) => listener());
}

export function useTemperatureUnit() {
  const context = useContext(TemperatureUnitContext);

  if (!context) {
    throw new Error(
      "useTemperatureUnit must be used within TemperatureUnitProvider"
    );
  }

  return context;
}

export function formatTemperature(celsius: number, unit: TemperatureUnit) {
  if (unit === "F") {
    return Math.round((celsius * 9) / 5 + 32);
  }

  return Math.round(celsius);
}
