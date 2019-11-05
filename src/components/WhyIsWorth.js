import React from "react";

const WhyIsWorth = () => {
    const cards = [
        {
            ico: "fas fa-utensils",
            title: "PIZZA, ZIMNE NAPOJE, PRZEKĄSKI",
            text:
                "Na naszym hackathonie nie będziesz chodził głodny! Zapewniamy kolację, pyszne śniadanie i stały dostęp do zimnych napoi i przekąsek."
        },
        {
            ico: "fas fa-gamepad",
            title: "CHILLROOM, GAMEROOM, SLEEPROOM",
            text:
                "Przygotowaliśmy dla Ciebie specjalne sale, gdzie do Twojej dyspozycji będzie konsola, VR, ping pong, piłkarzyki i o wiele więcej!"
        },
        {
            ico: "fab fa-playstation",
            title: "TURNIEJ W FIFA 20 I TEKKEN 7",
            text:
                "24 godziny ciągłego kodowania to kawał czasu, dlatego w ramach odpoczynku 'dla umysłu' organizujemy turniej na konsoli PS4 :)"
        },
        {
            ico: "fas fa-user-tie",
            title: "POMOC MENTORÓW I NAUCZYCIELI",
            text:
                "Nie jesteś pewny swoich umiejętności? Nie stresuj się! Możesz liczyć na pomoc doświadczonych mentorów i nauczycieli."
        }
    ];

    const Card = (props) => {
        const {ico, title, text} = props;
        return (
        <div className={`why-worth__cards__box`}>
            <div className={"why-worth__cards__box__left"}>
                <div className={"why-worth__cards__box__left__title"}>{title}</div>
                <p className={"why-worth__cards__box__left__text"}>{text}</p>
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
                    <span>Dlaczego warto wziąć udział?</span>
                </div>
                <div className={"why-worth__cards"}>
                    {cards.map((card, index) => {
                        const { ico, title, text } = card;
                        return <Card key={index} ico={ico} title={title} text={text} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default WhyIsWorth;
