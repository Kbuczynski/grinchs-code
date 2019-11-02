import React from "react";
import av1 from "../img/avatar1.png";
import av2 from "../img/avatar2.png";
import av3 from "../img/avatar3.png";
import av4 from "../img/avatar4.png";

const Organizers = () => {
  const organizers = [
    { img: av1, msg: "kamil.buczynski.00" },
    { img: av2, msg: "tomek.borowski.75" },
    { img: av3, msg: "angela.iskra.9" },
    { img: av4, msg: "Vergilek" }
  ];
  return (
    <div className="organizers">
      <div className="organizers__title">
        <h3>Organizatorzy</h3>
      </div>
      <div className="organizers__grid">
        {organizers.map((organizer, index) => {
          const { img, msg } = organizer;
          return <Circle key={index} img={img} msg={msg} />;
        })}
      </div>
    </div>
  );
};

const Circle = props => {
  const { img, msg } = props;

  const link = `https://www.facebook.com/messages/t/${msg}`;

  return (
    <div className="organizers__grid__box">
      <img src={img} alt="organizator" />
      <a href={link}>
        <i class="fab fa-facebook-messenger" />
      </a>
    </div>
  );
};

export default Organizers;
