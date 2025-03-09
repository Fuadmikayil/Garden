import React from "react";
import "../styles/hero.scss";
import adam from "../assets/adam.svg";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero-info">
        <h2>Keep your Plant alive</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliquav
        </p>
        <div className="btns">
          <button id="btn-primary">Grow Now</button>
          <button id="btn-secondary">Demo Video+</button>
        </div>
      </div>

      <div className="hero-social">
        <div className="colmn_div">
          <div className="div_text">
            <h1>Available</h1>
            <h2>Garden Maintainer</h2>
            <div className="star">
              <span>4.6</span>
              <i className="bx bxs-star"></i>
              <div className="star_right">
                <span>1.1 k</span>
                <i className="bx bxs-wink-smile"></i>
              </div>
            </div>
          </div>
          <div className="img_div">
            <img src={adam} alt="Garden Maintainer" />
          </div>
        </div>

        <div className="iconlar">
          <i className="bx bxl-facebook-circle"></i>
          <i className="bx bxl-twitter"></i>
          <i className="bx bxl-linkedin"></i>
          <i className="bx bxl-google-plus-circle"></i>
        </div>
      </div>
    </section>
  );
};

export default Hero;
