import React, {Fragment} from "react";
import logo from "../img/logo-header.png";
import {Link, animateScroll as scroll} from "react-scroll";
import {slide as Menu} from 'react-burger-menu'
import {useState, useEffect} from 'react';

const getWindowDimensions = () => {
    const {innerWidth: width, innerHeight: height} = window;
    return {width, height};
};

const Navigation = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const renderLink = (className, to, title, offset = -150) => {
        return (
            <Link className={className}
                  activeClass="active"
                  to={to}
                  spy={true}
                  smooth={true}
                  offset={offset}
                  duration={500}>
                {title}
            </Link>
        )
    };

    const renderBurger = () => {
        return (
            <Menu id={"menu"} pageWrapId={'app'} outerContainerId={'navigation-container-burger'}>
                {renderLink("menu-item", "about", "Jak to działa?")}
                {renderLink("menu-item", "why-worth", "Dlaczego warto?")}
                {renderLink("menu-item", "program", "Program")}
                {renderLink("menu-item", "join-container", "Dołącz")}
                {renderLink("menu-item", "organizers", "Organizatorzy")}
            </Menu>
        )
    };


    if (windowDimensions.width > 1000) {
        return (
            <div className={"navigation-container"}>
                <nav className="navigation">
                    <div className="navigation__logo">
                        <img src={logo} alt="Grinch's Code" onClick={scroll.scrollToTop}/>
                    </div>
                    <div className="navigation__links">
                        <div className="navigation__links__link">
                            {renderLink("menu-item", "about", "Jak to działa?")}
                        </div>
                        <div className="navigation__links__link">
                            {renderLink("menu-item", "why-worth", "Dlaczego warto?")}
                        </div>
                        <div className="navigation__links__link">
                            {renderLink("menu-item", "program", "Program")}
                        </div>
                        <div className="navigation__links__link">
                            {renderLink("menu-item", "join", "Dołącz")}
                        </div>
                        <div className="navigation__links__link">
                            {renderLink("menu-item", "organizers", "Organizatorzy")}
                        </div>
                    </div>
                </nav>
            </div>
        )
    } else {
        return (
            <div className={"navigation-container-burger"}>
                {renderBurger()}
            </div>
        )
    }
};

export default Navigation;
