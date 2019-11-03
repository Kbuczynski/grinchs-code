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
        "Pokaż co potrafisz 😎 stwórz niesamowitą aplikację, grę, albo stronę internetową. Myślisz, że nie dasz rady? Nasi mentorzy Ci pomogą!"
    },
    {
      ico: "fas fa-trophy",
      title: "Zwyciężaj",
      text:
        "Dla wygranej drużyny 🏆 szykujemy wyjątkową nagrodę rzeczową, a dla wszystkich - podwyższenie ocen z przedmiotów zawodowych!"
    }
  ];
  return (
      <div className="about-container">
    <div className="about">
      <div className="about__title">
        <h3>Jak to działa?</h3>
      </div>
      <div className={"about__desc"}>
        <span>Hackathon to 24-godzinny maraton kodowania. W tym czasie całą drużyną tworzycie program na temat,
              który zostanie podany dopiero przy rozpoczęciu wydarzenia :)</span>
      </div>
      <div className="about__grid">
        {icons.map((icon, index) => {
          const { ico, title, text } = icon;

          return <Icon key={index} ico={ico} title={title} text={text} />;
        })}
      </div>
    </div>
      </div>
  );
};

export default About;
