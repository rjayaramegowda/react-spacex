import React from "react";
import { VO } from "../reducer/spaceXReducer";

const Card = (props: VO) => {
  return (
    <div className="card border-0">
      <div>
        <img src={String(props.pic)} className="img-fluid p-3" alt="..." />
      </div>
      <div className="card-body">
        <p className="card-text">{props.rocketName}</p>
      </div>
    </div>
  );
};

export default Card;
