import React from "react";
import logo from "../img/logo.png";
// import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <img src={logo} alt="Grinch's Code" />
      </div>
      <ul className="navigation__links">
        <li className="navigation__links__link">Program</li>
        <li className="navigation__links__link">Patroni</li>
        <li className="navigation__links__link">Zapisz się</li>
      </ul>
    </nav>
  );
};

export default Navigation;
