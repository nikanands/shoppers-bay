import React from "react";

import Logo from "../assets/logo.svg";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header__wrapper">
      <NavLink to="/" className="logo">
        <img src={Logo} alt="Logo" className="logo__img" />
        <p className="logo__title">Shoppers</p>
      </NavLink>
      <Navigation />
    </div>
  );
};

export default Header;
