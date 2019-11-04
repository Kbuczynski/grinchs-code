import React from "react";
import Icon from "./Icon";

const WhyIsWorth = () => {
    const cards = [
        {
            ico: "fas fa-utensils",
            title: "PIZZA, ZIMNE NAPOJE, PRZEKĄSKI",
            text:
                "Na naszym hackathonie nie będziesz chodził głodny!"
        },
        {
            ico: "fas fa-gamepad",
            title: "CHILLROOM, GAMEROOM, SLEEPROOM",
            text:
                "Przygotowaliśmy dla Ciebie specjalne sale, gdzie do Twojej dyspozycji będzie konsola, VR, ping pong, piłkarzyki i o wiele więcej!"
        },
        {
            ico: "fab fa-playstation",
            title: "Turniej w FIFA 20 i Tekken 7",
            text:
                "24 godziny ciągłego kodowania to kawał czasu, dlatego właśnie w ramach odpoczynku 'dla umysłu' organizujemy turniej na konsoli PS4 :)"
        },
        {
            ico: "fas fa-user-tie",
            title: "POMOC MENTORÓW I NAUCZYCIELI",
            text:
                "Nie jesteś pewny swoich umiejętności? Nie stresuj się! Możesz liczyć na pomoc doświadczonych mentorów i nauczycieli"
        }
    ];

    const Card = (index, ico, title, text) => {
        return (
        <div className="why-worth__cards__box" key={index}>
            <div className={"why-worth__cards__box__left"}>
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
            <div className={"why-worth__cards__box__right"}>
                <i className={ico} />
            </div>
        </div>
        );
    };

    return (
        <div className="why-worth-container">
            <div className="why-worth">
                <div className="why-worth__title">
                    <h3>Dlaczego warto wziąć udział?</h3>
                </div>
                <div className={"why-worth__cards"}>
                    {cards.map((card, index) => {
                        const { ico, title, text } = card;
                        return <Card index={index} ico={ico} title={title} text={text} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default WhyIsWorth;
