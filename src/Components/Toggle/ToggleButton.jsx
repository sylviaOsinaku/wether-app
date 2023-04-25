import { useState, useContext } from "react";
import classes from "./ToggleButton.module.css";
//import profilePic from "../../images/image-avatar.png";
const ToggleButton = () => {
  const [lightMode, setLightMode] = useState(true);

  return (
    <div className={classes["toggle-wrapper"]}>
      <label className={classes.switch}>
        <input type="checkbox" className={classes.input} />
        <span className={`${classes.round} ${classes.slider} `} />
      </label>

      <svg viewBox="0 0 820 1000" fill="currentColor" height="1em" width="1em">
        <path d="M524 612c70.667-70.667 112.333-154.667 125-252 12.667-97.333-5-187.333-53-270 34.667 17.333 66.667 41.333 96 72 85.333 85.333 128 188.333 128 309s-42.667 223.667-128 309-188.667 128-310 128-224.667-42.667-310-128c-26.667-26.667-50.667-58-72-94 82.667 46.667 173 63.667 271 51 98-12.667 182.333-54.333 253-125" />
      </svg>
      <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
          clipRule="evenodd"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default ToggleButton;
