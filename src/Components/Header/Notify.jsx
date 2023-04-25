import React, { useContext } from "react";
import classes from "./Notify.module.css";
import WeatherContext from "../../store/WeatherContext";
const Notify = () => {
  const { weatherData } = useContext(WeatherContext);
  console.log("ctx:", weatherData);
  return (
    <div className={classes["notify-wrapper"]}>
      <div className={classes["svg-wrapper"]}>
        <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
          <path d="M22 13c0 1.11-.89 2-2 2H4a2 2 0 110-4h9l2.5 2 2.5-2h2a2 2 0 012 2M12 3C3 3 3 9 3 9h18s0-6-9-6M3 18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3v-1H3v1z" />
        </svg>
      </div>
      <div className={classes["svg-wrapper"]}>
        <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
          <path d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 01-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 01-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 00-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 00-4.61-37.66zM256 480a80.06 80.06 0 0070.44-42.13 4 4 0 00-3.54-5.87H189.12a4 4 0 00-3.55 5.87A80.06 80.06 0 00256 480z" />
        </svg>
      </div>
      <div className={classes["location-wrapper"]}>
        <svg
          viewBox="0 0 512 512"
          fill="currentColor"
          height="1.2em"
          width="1.2em"
        >
          <path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1164-64 64.07 64.07 0 01-64 64z" />
        </svg>
        <span className={classes["location"]}>
          {weatherData.name},{weatherData.sys.country}
        </span>
      </div>
    </div>
  );
};
export default Notify;
