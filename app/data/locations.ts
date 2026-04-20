export interface Location {
    name: string;
    slug: string;
  }
  
  export const locations: Location[] = [
    { name: "London", slug: "london" },
    { name: "New York", slug: "new-york" },
    { name: "Berlin", slug: "berlin" },
    { name: "New Delhi", slug: "new-delhi" },
    { name: "Beijing", slug: "beijing" },
    { name: "Tokyo", slug: "tokyo" },
  ];
  
  export function getLocationBySlug(slug: string): Location | undefined {
    return locations.find((location) => location.slug === slug);
  }