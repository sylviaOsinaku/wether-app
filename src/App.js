import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import DisplayForecast from "./Components/ForeCast/DisplayForcast";
import GlobalMap from "./Components/Map/Map";
import Stats from "./Components/Stats/Stats";
import WeatherContext from "./store/WeatherContext";
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [foreCastData, setForeCastData] = useState(null);
  const successCallback = async (position) => {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    try {
      const responses = await Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b41e1d1a72cb5a071868c433f2f14a4e&units=metric`
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=68b623e09193f3eeda8fe66552aada6e&units=metric&cnt=5`
        ),
      ]);
      console.log(responses);

      if (!responses[0].ok) {
        throw new Error(`HTTP error! status: ${responses[0].status}`);
      }
      if (!responses[1].ok) {
        throw new Error(`HTTP error! status: ${responses[1].status}`);
      }
      // responses.forEach((response) => {
      //   if (!response.ok) {
      //     throw new Error(`HTTP error! status: ${response.status}`);
      //   }
      // });

      const todayWeatherData = await responses[0].json();
      const weeklyWeatherData = await responses[1].json();

      setWeatherData(todayWeatherData);
      setForeCastData(weeklyWeatherData);
      console.log(weeklyWeatherData);
    } catch (error) {
      console.log(error);
    }
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);

  const submitSearchHandler = async (city) => {
    try {
      const responses = await Promise.all([
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b41e1d1a72cb5a071868c433f2f14a4e&units=metric`
        ),
        fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=68b623e09193f3eeda8fe66552aada6e&units=metric&cnt=5`
        ),
      ]);

      if (!responses[0].ok) {
        throw new Error(`HTTP error! status: ${responses[0].status}`);
      }
      if (!responses[1].ok) {
        throw new Error(`HTTP error! status: ${responses[1].status}`);
      }
      // responses.forEach((response) => {
      //   if (!response.ok) {
      //     throw new Error(`HTTP error! status: ${response.status}`);
      //   }
      // });

      const todayWeatherData = await responses[0].json();
      const weeklyWeatherData = await responses[1].json();

      setWeatherData(todayWeatherData);
      setForeCastData(weeklyWeatherData);
      console.log(weeklyWeatherData);
    } catch (err) {
      console.log(err);
    }
  };
  // fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b41e1d1a72cb5a071868c433f2f14a4e&units=metric`
  // )
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  // fetch(
  //   `https://api.openweathermap.org/data/2.5/forecast?q=Lagos&appid=68b623e09193f3eeda8fe66552aada6e&units=metric&cnt=10`
  // )
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  return (
    <WeatherContext.Provider
      value={{
        weatherData: weatherData,
        weekyForecast: foreCastData,
        submitSearch: submitSearchHandler,
      }}
    >
      {weatherData && foreCastData && <Header />}
      <div className="container">
        <div className="wrapper">
          <div>
            {weatherData && foreCastData && <DisplayForecast />}
            <GlobalMap />
          </div>
          {weatherData && foreCastData && <Stats />}
        </div>
      </div>
    </WeatherContext.Provider>
  );
}

export default App;
