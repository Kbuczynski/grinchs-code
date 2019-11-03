import React from "react";
import logo from "../img/logo-header.png";
import {Link, animateScroll as scroll} from "react-scroll";

const Navigation = () => {
    return (
        <div className={"navigation-container"}>
        <nav className="navigation">
            <div className="navigation__logo">
                <img src={logo} alt="Grinch's Code" onClick={scroll.scrollToTop}/>
            </div>
            <div className="navigation__links">
                <div className="navigation__links__link">
                    <Link className={'effect-underline'}
                          activeClass="active"
                          to="about"
                          spy={true}
                          smooth={true}
                          offset={-150}
                          duration={500}>
                        Jak to działa?
                    </Link>
                </div>
                <div className="navigation__links__link">
                    <Link className={'effect-underline'}
                          activeClass="active"
                          to="program"
                          spy={true}
                          smooth={true}
                          offset={-150}
                          duration={500}>
                        Program
                    </Link>
                </div>
                <div className="navigation__links__link">
                    <Link className={'effect-underline'}
                          activeClass="active"
                          to="organizers"
                          spy={true}
                          smooth={true}
                          offset={-150}
                          duration={500}>
                        Organizatorzy
                    </Link>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Navigation;
