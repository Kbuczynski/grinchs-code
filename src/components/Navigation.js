import React from "react";
import logo from "../img/logo-header.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__logo">
        <img src={logo} alt="Grinch's Code" onClick={scroll.scrollToTop} />
      </div>
      <ul className="navigation__links">
        <li className="navigation__links__link">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            O nas
          </Link>
        </li>
        <li className="navigation__links__link">
          <Link
            activeClass="active"
            to="program"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Program
          </Link>
        </li>
        <li className="navigation__links__link">
          <Link
            activeClass="active"
            to="organizers"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Organizatorzy
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
