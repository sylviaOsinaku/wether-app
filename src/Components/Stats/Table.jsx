import React, { useContext } from "react";
import WeatherContext from "../../store/WeatherContext";
import classes from "./Table.module.css";
const Table = () => {
  const { weekyForecast } = useContext(WeatherContext);

  const realData = weekyForecast.list;
  console.log("realData:", realData);
  return (
    <table className={classes["graph"]}>
      <caption>Temperaature Forecast</caption>
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Percent</th>
        </tr>
      </thead>
      <tbody>
        {realData.map((data) => {
          return (
            <tr
              style={{ height: `${(data.wind.deg / 360) * 100}%` }}
              key={Math.random()}
            >
              <th scope="row">
                {new Intl.DateTimeFormat("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                }).format(new Date(data.dt_txt))}
              </th>
              <td>
                <span>{`${Math.round((data.wind.deg / 360) * 100)}%`}</span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
