import React from "react";
import logo from "../images/logo.svg";
import Navlink from "./Navlink";
import { links } from "../constants/data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="logo" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {links.map((link) => {
            return <Navlink key={link.id} {...link} />;
          })}
        </ul>

        <ul className="nav-icons">
          <li>
            <a href="#https://twitter.com" className="nav-icon" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="#https://facebook.com"
              className="nav-icon"
              target="_blank"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a
              href="#https://squarespace.com"
              className="nav-icon"
              target="_blank"
            >
              <i className="fab fa-squarespace"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
