import Link from "next/link";
import { Sun } from "lucide-react";

interface LocationCardProps {
  slug: string;
  name: string;
  description: string;
  temperature: number;
}

export function LocationCard({
  slug,
  name,
  description,
  temperature,
}: LocationCardProps) {
  return (
    <Link
      href={`/${slug}`}
      className="block py-6 px-7 border border-border rounded-2xl bg-background hover:bg-muted"
    >
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-base font-semibold">{name}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex gap-6 items-center">
          <span className="text-4xl font-light">{temperature}°</span>
          <Sun className="size-9 text-muted-foreground/70 stroke-[1.5]" />
        </div>
      </div>
    </Link>
  );
}