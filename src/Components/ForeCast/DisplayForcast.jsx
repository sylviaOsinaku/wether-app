import React from "react";
import Today from "./Today";
import classes from "./DisplayForcast.module.css";
import WeekForecast from "./WeekForecast";
const DisplayForecast = () => {
  return (
    <main className={classes["main-wrapper"]}>
      <div className={classes["stats-wrapper"]}>
        <div>
          <span>Today</span>
          <span>Tommorrow</span>
          <span>Next five Days</span>
        </div>
        <span className={classes["forecast"]}>Forecast</span>
      </div>

      <Today />

      <WeekForecast />
    </main>
  );
};

export default DisplayForecast;
