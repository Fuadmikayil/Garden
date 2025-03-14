import React from "react";
import logo from "../assets/logo.svg";
import menuIcon from "../assets/menu.svg";
import "../styles/header.scss";
const Header = () => {
  return (
    <header className="container">
      <div className="header-logo">
        <img src={logo} alt="Logo" />
        <h1>Gardena</h1>
      </div>
      <div className="header-action">
        <input type="text" className="input-search" placeholder="Search..." />
        <a href="#">Menu</a>
        <img src={menuIcon} alt="Menu Icon" />
      </div>
    </header>
  );
};

export default Header;
