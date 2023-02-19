import React from "react";

import Logo from "../../assets/logo.svg";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar-root">
      <img src={Logo} alt="Logo" className="logo" />
      <div className="nav-items">
        <div>Projects</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default NavBar;
