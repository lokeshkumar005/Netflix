import React from "react";
import { Link } from "react-router-dom";
import logo from "../Image/netflix_official_logo_icon_168085.png";
import icon from "../Image/avatar.webp";

function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar__logo">
          <Link to="/">
            <img className="navbar__logo--1" src={logo} alt="netflix logo" />
          </Link>
        </div>
        <div className="navbar__button">
          <div>
            <select className="navbar__button--lang">
              <option className="navbar__button--lang1" value="english">
                &#127760; English
              </option>
              <option className="navbar__button--lang2" value="hindi">
                Hindi
              </option>
            </select>
          </div>
          <Link to="/profile">
            <img src={icon} alt="logo" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
