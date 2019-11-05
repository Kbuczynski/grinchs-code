import React from "react";

const siteUrl = "https://grinchscode.pl";
const Join = () => {
  return (
    <div className="join-container">
      <div className={"join"}>
        <div className={"join__title"}>
          DOŁĄCZ DO PIERWSZEGO HACKATHONU SCI!
        </div>
        <div className={"join__desc"}>
          Zapisy u organizatorów lub u pana Adama Czarniawskiego.
        </div>
        <div className={"join__buttons"}>
          <div
            className={"join__buttons__btn border-radius-anim"}
            onClick={() => window.open(`${siteUrl}/regulamin.pdf`, "_blank")}
          >
            Regulamin
          </div>

          <div
            className={"join__buttons__btn border-radius-anim"}
            onClick={() => window.open(`${siteUrl}/formularz.pdf`, "_blank")}
          >
            Zapisy
          </div>

          <div
            className={"join__buttons__btn border-radius-anim"}
            onClick={() => window.open(`${siteUrl}/zgoda.pdf`, "_blank")}
          >
            Zgoda rodzica
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
