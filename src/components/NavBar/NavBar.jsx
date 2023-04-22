import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar-root">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="nav-items">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/projects" className="nav-item">
          Projects
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
        <Link to="/about" className="nav-item">
          About
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
