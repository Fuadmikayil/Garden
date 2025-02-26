import React from "react";
import "../styles/footer.scss";
import logo from "../assets/log45.svg";

const Footer = () => {
  return (
    <footer className="container">
        
      <div className="logo-about">
        <div className="logo_head">
          <img src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="social_head">
          <h3>Social</h3>
          <div className="icons">
            <i className="bx bxl-facebook-square"></i>
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-linkedin-square"></i>
            <i className="bx bxl-telegram"></i>
          </div>
        </div>
      </div>
      <img src="./images/Line 7.svg" alt="" />
      <h1>gardena.com© all right reserve</h1>
    </footer>
  );
};

export default Footer;
