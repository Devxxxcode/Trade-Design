import React from "react";
import "./loader.css"

const Loader = ({loaderColor}) => {
  return (
    <div className={` h-screen w-screen grid place-content-center the-loader fixed top-0 ${loaderColor} z-[10000000]`}>
      <div id="container">
        <div id="ball-1" className="circle"></div>
        <div id="ball-2" className="circle"></div>
        <div id="ball-3" className="circle"></div>
      </div>
    </div>
  );
};

export default Loader;
