import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import "./Spinner.css"

const Spinner = () => {
  return <div className="loader"><MoonLoader color="#52528C" speedMultiplier={1} /></div>;
};

export default Spinner;
