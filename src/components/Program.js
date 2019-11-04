import React from "react";
import Timeline from "./TimeLine/Timeline";

const Program = () => {
  const events = [
    { ts: "2019-11-15T17:00:00", text: "Inauguracja" },
    { ts: "2019-11-15T18:00:00", text: "Rozpoczęcie kodowania" },
    { ts: "2019-11-15T22:00:00", text: "Przerwa na pizze 🍕" },
    { ts: "2019-11-15T00:00:00", text: "Turniej wybranej przez was gry 🎮" },
    { ts: "2019-11-16T08:00:00", text: "Śniadanie 🍳" },
    { ts: "2019-11-16T15:00:00", text: "Koniec kodowania" },
    { ts: "2019-11-16T16:00:00", text: "Prezentacje" },
    { ts: "2019-11-16T17:00:00", text: "Ogłoszenie wyników 🏆" }
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
