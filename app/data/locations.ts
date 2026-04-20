export interface Location {
    name: string;
    slug: string;
    lat: number;
    lon: number;
  }
  
  export const locations: Location[] = [
    { name: "London", slug: "london", lat: 51.5074, lon: -0.1278 },
    { name: "New York", slug: "new-york", lat: 40.7128, lon: -74.0060 },
    { name: "Berlin", slug: "berlin", lat: 52.5200, lon: 13.4050 },
    { name: "New Delhi", slug: "new-delhi", lat: 28.6139, lon: 77.2090 },
    { name: "Beijing", slug: "beijing", lat: 39.9042, lon: 116.4074 },
    { name: "Tokyo", slug: "tokyo", lat: 35.6895, lon: 139.6917 },
  ];
  
  export function getLocationBySlug(slug: string): Location | undefined {
    return locations.find((location) => location.slug === slug);
  }