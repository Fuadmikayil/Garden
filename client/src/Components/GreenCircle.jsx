import React from 'react';
import hiroimg from "../assets/hiro-img.svg";

import "../styles/greenCircle.scss";
const GreenCircle = () => {
  return (
    <>
      <img id="header-absolute" src={hiroimg} alt="" />
      <div className="green_circle"></div>
      <div className="green_circle g2"></div>
    </>
  );
};

export default GreenCircle;
