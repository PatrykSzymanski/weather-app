import Link from "next/link";
import { getCurrentTimeInTimezone } from "../lib/utils";
import { WeatherIcon } from "../lib/types";

interface LocationCardProps {
  slug: string;
  name: string;
  description: string;
  temperature: number;
  timezone: string;
  Icon: WeatherIcon;
  isNight?: boolean;
}

export function LocationCard({
  slug,
  name,
  description,
  temperature,
  timezone,
  Icon,
  isNight,
}: LocationCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className="block py-6 px-7 border border-border rounded-2xl bg-background hover:bg-muted"
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-base font-semibold">{name}</h2>
          <p className="text-sm text-muted-foreground">
            {getCurrentTimeInTimezone(timezone)} · {description}
          </p>
        </div>
        <div className="flex gap-6 items-center">
          <span className="text-4xl font-light">{temperature}°</span>
          <Icon className="size-12" isNight={isNight} />
        </div>
      </div>
    </Link>
  );
}