import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar-root">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/photobook">Photobook</Link>
        <div>Projects</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default NavBar;
