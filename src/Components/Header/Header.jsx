import classes from "./Header.module.css";
import React from "react";
import Notify from "./Notify";
import Input from "../Input/Input";
import ToggleButton from "../Toggle/ToggleButton";

const Header = (props) => {
  return (
    <>
      <nav className={classes["nav"]}>
        <div className={classes["nav-wrapper"]}>
          <Notify />
          <Input />
          <ToggleButton />
        </div>
      </nav>
    </>
  );
};

export default Header;
