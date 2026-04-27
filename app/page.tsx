import { locations } from "./data/locations";
import { getWeather } from "./actions/actions";
import { getWeatherIcon } from "./lib/weatherIcons";
import { getWeatherDescription } from "./lib/weatherDescriptions";
import { isNightTime } from "./lib/utils";
import { LocationCard } from "./components/LocationCard";
import { TemperatureToggle } from "./components/TemperatureToggle";
import {
  ClearSky,
  MainlyClear,
  PartlyCloudy,
  Rainy,
  Snow,
  Thunderstorm,
} from "./components/icons";
import { WeatherIcon } from "./lib/types";

interface IconPreviewState {
  label: string;
  Icon: WeatherIcon;
  isNight?: boolean;
}

const iconPreviewStates: IconPreviewState[] = [
  { label: "Bezchmurnie / dzień", Icon: ClearSky },
  { label: "Bezchmurnie / noc", Icon: ClearSky, isNight: true },
  { label: "Przeważnie pogodnie / dzień", Icon: MainlyClear },
  { label: "Przeważnie pogodnie / noc", Icon: MainlyClear, isNight: true },
  { label: "Zachmurzenie / dzień", Icon: PartlyCloudy },
  { label: "Zachmurzenie / noc", Icon: PartlyCloudy, isNight: true },
  { label: "Deszcz", Icon: Rainy },
  { label: "Śnieg", Icon: Snow },
  { label: "Burza", Icon: Thunderstorm },
];

export default async function Home() {
  const weatherData = await Promise.all(
    locations.map(async (location) => {
      const weather = await getWeather(location.lat, location.lon);
      return { location, weather };
    })
  );

  return (
    <div className="max-w-xl mx-auto py-24 px-6">
      <div className="mb-6 flex justify-end">
        <TemperatureToggle />
      </div>
      <ul className="flex flex-col gap-4">
        {weatherData.map(({ location, weather }) => {
          const Icon = getWeatherIcon(weather.current.weatherCode);
          const description = getWeatherDescription(weather.current.weatherCode);
          const isNight = isNightTime(
            weather.current.timezone,
            weather.current.sunrise,
            weather.current.sunset
          );

          return (
            <li key={location.slug}>
              <LocationCard
                slug={location.slug}
                name={location.name}
                description={description}
                temperature={weather.current.temperature}
                timezone={weather.current.timezone}
                Icon={Icon}
                isNight={isNight}
                weatherCode={weather.current.weatherCode}
              />
            </li>
          );
        })}
      </ul>

      <section className="mt-16 border-t border-border pt-10">
        <h2 className="mb-5 text-base font-semibold text-shadow-md">
          Podgląd ikon
        </h2>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {iconPreviewStates.map(({ label, Icon, isNight }) => (
            <li
              key={label}
              className="flex min-h-36 flex-col items-center justify-between rounded-lg border border-border bg-white/10 px-3 py-4 shadow-lg shadow-black/20 inset-shadow-xs inset-shadow-white/20"
            >
              <Icon className="size-20 shrink-0" isNight={isNight} />
              <span className="text-center text-xs font-medium leading-snug text-muted-foreground text-shadow-sm">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
