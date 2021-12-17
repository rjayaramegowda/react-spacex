import React from "react";
import { VO } from "../reducer/spaceXReducer";

const Card = (props: VO) => {
  return (
    <div className="card border-0">
      <div>
        <img src={String(props.pic)} className="img-fluid p-3" alt="..." />
      </div>
      <div className="card-body">
        <p className="card-text text-center">{props.rocketName}</p>
        <p className="card-text my-0">
          {new Date(props.launchDate).toDateString()}
        </p>
        <p className="card-text my-0">
          Status: {props.launchStatus ? "Success" : "Failure"}
        </p>
        <p className="card-text my-0">
          Upcoming: {props.isUpcoming ? "Yes" : "No"}
        </p>
      </div>
    </div>
  );
};

export default Card;
