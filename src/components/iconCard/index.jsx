import React from "react";
import "./style.scss";

const IconCard = (props) => {
  return (
    <div className={`card-box ${props.className}`}>
      <div className="icon">{props.children}</div>
      {console.log(props)}
      <h6>{props.title}</h6>
      <p>{props.text}</p>
    </div>
  );
};

export default IconCard;
