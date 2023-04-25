import React, { useContext } from "react";
import classes from "./Weekforecast.module.css";
import WeatherContext from "../../store/WeatherContext";
const WeekForecast = () => {
  const { weekyForecast } = useContext(WeatherContext);

  const realData = weekyForecast.list;
  return (
    <div>
      <h2 className={classes["weekly-header"]}>Weekly Forecast</h2>
      <div className={classes["weekely-wrapper"]}>
        {realData.map((data) => {
          return (
            <div className={classes["week-temp-wrapper"]} key={Math.random()}>
              <h4>
                {new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
                  new Date(data.dt_txt)
                )}
              </h4>

              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt=""
              />
              <strong>{data.main.temp}°</strong>
              <strong>
                {new Intl.DateTimeFormat("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                }).format(new Date(data.dt_txt))}
              </strong>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeekForecast;
