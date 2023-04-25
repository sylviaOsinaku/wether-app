import React from "react";
const WeatherContext = React.createContext({
  weatherData: [],
  weekyForecast: [],
  submitSearch: (city) => {},
});
export default WeatherContext;
