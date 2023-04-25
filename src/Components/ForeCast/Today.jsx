import React, { useContext } from "react";
import classes from "./Today.module.css";
import IconCloudLightningRainFill from "../UI/Cloud";
import WeatherContext from "../../store/WeatherContext";
import IconWiHumidity from "../UI/Humidity";
import IconCarBrakeLowPressure from "../UI/Pressure";
import IconWind from "../UI/Wind";
import IconSunrise from "../UI/Sunrise";
import IconSunset from "../UI/Sunset";
const Today = () => {
  const { weatherData } = useContext(WeatherContext);
  const optionsForDay = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const optionsForTIme = {
    hour: "numeric",
    minute: "numeric",
  };
  const time = new Intl.DateTimeFormat("en-US", optionsForTIme).format(
    new Date(weatherData.dt * 1000)
  );

  const todaysDate = new Intl.DateTimeFormat("en-US", optionsForDay).format(
    new Date(weatherData.dt * 1000)
  );
  const sunset =
    weatherData.weather &&
    new Intl.DateTimeFormat("en-US", optionsForTIme).format(
      new Date(weatherData?.sys?.sunset * 1000)
    );
  const sunrise =
    weatherData.weather &&
    new Intl.DateTimeFormat("en-US", optionsForTIme).format(
      new Date(weatherData?.sys?.sunrise * 1000)
    );
  console.log(sunrise, sunset);
  return (
    <>
      <div className={classes["date-wrapper"]}>
        <h2>{todaysDate}</h2>
        <span>{time}</span>
      </div>
      <div
        className={`${classes["head-temp-wrapper"]} ${classes["temp-wrapper"]}`}
      >
        <div>
          <h1>{weatherData && weatherData?.main?.temp}°c</h1>
          <p>{weatherData.weather && weatherData?.weather[0]?.main}</p>
          <small>
            {weatherData.weather && weatherData?.weather[0]?.description}
          </small>
        </div>
        <img
          src={
            weatherData.weather &&
            `https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`
          }
          alt=""
        />
      </div>
      <div className={classes["today-wrapper"]}>
        <div className={classes["temp-wrapper"]}>
          <IconCloudLightningRainFill />
          <div>
            <p>Real Feel</p>
            <p>{weatherData?.main?.feels_like}°c</p>
          </div>
        </div>

        <div className={classes["temp-wrapper"]}>
          <IconWind />
          <div>
            <p> Wind</p>
            <p>{weatherData.wind.deg}°c</p>
          </div>
        </div>

        <div className={classes["temp-wrapper"]}>
          <IconCarBrakeLowPressure />
          <div>
            <p>Pressure</p> <p>{weatherData?.main?.pressure} hPa</p>
          </div>
        </div>

        <div className={classes["temp-wrapper"]}>
          <IconWiHumidity />
          <div>
            <p> Humidity </p>
            <p>{weatherData?.main?.humidity}%</p>
          </div>
        </div>

        <div className={classes["temp-wrapper"]}>
          <div>
            <IconSunrise />
          </div>
          <div>
            <p>{weatherData?.weather && sunrise}</p>
          </div>
        </div>

        <div className={classes["temp-wrapper"]}>
          <div>
            <IconSunset />
            <h4>Sunset</h4>
          </div>
          <div>
            <p>{weatherData?.weather && sunset}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Today;
