import React from "react";
import loader from "../assets/icons/loader.svg";
import "./loader.scss";

function Loader() {
  return (
    <div className="content-loader">
      <img className="loader" src={loader} alt="" />
    </div>
  );
}

export default Loader;
