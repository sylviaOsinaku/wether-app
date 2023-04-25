import CountrieForecast from "./CountriesForecast";
import classes from "./Stats.module.css";
import Table from "./Table";
const Stats = () => {
  return (
    <div className={classes["stats-container"]}>
      <div className={classes["stats-wrapper"]}>
        <Table />
        <CountrieForecast />
      </div>
    </div>
  );
};

export default Stats;
