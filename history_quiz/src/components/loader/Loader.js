import React from "react";
import classes from "./loader.module.css";

const Loader = () => {
  return (
    <div className={classes["loader-container"]}>
      <div className={classes.spinner}></div>
    </div>
  );
};

export default Loader;
