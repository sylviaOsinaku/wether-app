import React, { useContext, useState } from "react";
import classes from "./Input.module.css";
import WeatherContext from "../../store/WeatherContext";
const Input = () => {
  const ctx = useContext(WeatherContext);
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState(false);
  const getCityHandler = (e) => {
    setCityName(e.target.value);
    setError(false);
  };
  const submitFormHander = (e) => {
    e.preventDefault();
    if (cityName.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    ctx.submitSearch(cityName);
    setCityName("");
    console.log(cityName);
  };

  return (
    <form
      action=""
      onSubmit={submitFormHander}
      className={classes["form-wrapper"]}
    >
      <div>
        <input
          type="search"
          name=""
          id=""
          placeholder="search"
          onChange={getCityHandler}
          value={cityName}
        />
      </div>
      {error && (
        <p className={classes["error-message"]}>Please enter a valid input</p>
      )}
    </form>
  );
};

export default Input;
