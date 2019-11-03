import React from "react";
import Timer from "./Timer";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="home">
      <div className="home__box">
        <h3 className="home__box__title">Widzimy się już za:</h3>
        <Timer />
        <div className="border-radius-anim home__box__btn">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}>
            Jak to działa?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
