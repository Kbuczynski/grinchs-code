import React from "react";
import Icon from "./Icon";

const About = () => {
  const icons = [
    {
      ico: "fas fa-users",
      title: "Zbierz zespół",
      text:
        "Zbierz zespół maksymalnie 3 osobowy lub wystartuj sam! Na każdego będzie czekać gorąca pizza 🍕 Wpisowe to jedynie 10zł/os."
    },
    {
      ico: "fas fa-code",
      title: "Programuj",
      text:
        "Pokaż co potrafisz 😎 zakoduj niesamowitą aplikację, grę, a może stronę internetową? Myślisz, że nie dasz rady po to są nasi mentorzy!"
    },
    {
      ico: "fas fa-trophy",
      title: "Zwyciężaj",
      text:
        "Dla wygranej drużyny 🏆 szykujemy vouchery o wartości 100 PLN do wykorzystania w sklepie x-kom oraz podwyższenie ocen z przedmiotów zawodowych!"
    }
  ];
  return (
    <div className="about">
      <div className="about__title">
        <h3>O nas</h3>
      </div>
      <div className="about__grid">
        {icons.map((icon, index) => {
          const { ico, title, text } = icon;

          return <Icon key={index} ico={ico} title={title} text={text} />;
        })}
      </div>
    </div>
  );
};

export default About;
