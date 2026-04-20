import { locations } from "./data/locations";
import { LocationCard } from "./components/LocationCard";

export default function Home() {
  return (
    <ul className="flex flex-col gap-4">
      {locations.map((location) => (
        <li key={location.slug}>
          <LocationCard
            slug={location.slug}
            name={location.name}
            description="Sunny"
            temperature={20}
          />
        </li>
      ))}
    </ul>
  );
}