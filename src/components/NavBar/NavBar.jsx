import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Logo from "../../assets/logo.svg";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar-root">
      <div className="nav-items">
        <HashLink to="/#top" className="nav-item">
          Home
        </HashLink>
        <HashLink to="/#projects" className="nav-item">
          Projects
        </HashLink>
        <img src={Logo} alt="Logo" className="logo" />
        <Link to="/about" className="nav-item">
          About
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
