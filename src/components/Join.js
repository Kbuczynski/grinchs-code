import React from "react";

const siteUrl = "https://grinchscode.pl";
const Join = () => {
    return (
        <div className="join-container">
            <div className={"join"}>
                <div className={"join__title"}>DOŁĄCZ DO PIERWSZEGO HACKATHONU SCI!</div>
                <div className={"join__desc"}>Zapisy u organizatorów lub u pana Adama Czarniawskiego.</div>
                <div className={"join__buttons"}>
                    <div className={"join__buttons__btn border-radius-anim"} onClick={() => window.location.href = `${siteUrl}/regulamin.pdf`}>Regulamin
                    </div>

                    <div className={"join__buttons__btn border-radius-anim"} onClick={() => window.location.href = `${siteUrl}/formularz.pdf`}>Formularz zapisu
                    </div>

                    <div className={"join__buttons__btn border-radius-anim"} onClick={() => window.location.href = `${siteUrl}/zgoda.pdf`}>
                        Zgoda rodzica
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join;
