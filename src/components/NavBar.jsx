import React from "react";
import logo from "../assets/appLogo.png";
import "../styles/HomePage.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="E-Paper Hub" className="app-logo" />
      </div>
      <div className="nav-menu">
        <a href="#" className="nav-link">
          Home
        </a>
        <a href="#" className="nav-link">
          My Cart
        </a>
        <a href="#" className="nav-link">
          Profile
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
