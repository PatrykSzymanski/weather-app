export interface CurrentWeather {
    temperature: number;
    weatherCode: number;
    timezone: string;
  }
  
  export interface DailyForecast {
    date: string;
    maxTemp: number;
    minTemp: number;
    weatherCode: number;
  }
  
  export interface WeatherData {
    current: CurrentWeather;
    daily: DailyForecast[];
  }