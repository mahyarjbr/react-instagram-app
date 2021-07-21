import React from "react";
import instaLogo from "../images/instagram-logo.png";
import searchIcon from "../images/searchIcon.png";
import NavbarMenu from "./NavbarMenu";
import "../style/navigation.scss";

const Navbar = () => {
  return (
    <div className="navigation">
      <div className="container">
        <div className="navigation__wrapper">
          <div className="navigation__logo">
            <img src={instaLogo} alt="instagram logo" />
          </div>

          <div className="navigation__search">
            <img src={searchIcon} alt="search icon" />
            <span>search</span>
          </div>
          <NavbarMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
