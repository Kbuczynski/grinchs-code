import React from "react";
import Timeline from "react-time-line";

const Program = () => {
  const events = [
    { ts: "2019-11-15T17:00:00", text: "Rozpoczęcie hackathonu, przygotowanie stanowisk komputerowych" },
    { ts: "2019-11-15T18:00:00", text: "Start kodowania" },
    { ts: "2019-11-15T22:00:00", text: "Przerwa na pizzę 🍕" },
    { ts: "2019-11-15T00:00:00", text: "Turniej w gry FIFA 20 i Tekken 7 🎮" },
    { ts: "2019-11-16T08:00:00", text: "Śniadanie 🍳" },
    { ts: "2019-11-16T15:00:00", text: "Koniec kodowania" },
    { ts: "2019-11-16T16:00:00", text: "Prezentacje projektów" },
    { ts: "2019-11-16T17:00:00", text: "Ogłoszenie wyników i rozdanie nagród 🏆" }
  ];

  return (
    <div className="program-container">
      <div className="program">
        <div className="program__title">
          <h3>Program</h3>
        </div>
        <div className="program__timeline">
          <Timeline items={events} />
        </div>
      </div>
    </div>
  );
};

export default Program;
