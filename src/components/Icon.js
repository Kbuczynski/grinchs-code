import React from "react";

const Icon = props => {
  const { ico, title, text } = props;
  return (
    <div className="about__grid__box">
      <i className={ico} />
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Icon;
