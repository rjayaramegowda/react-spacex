import React from "react";
import { VO } from "../reducer/spaceXReducer";

const Card = (props: VO) => {
  return (
    <div className="card border-0">
      <div>
        <a href={props.url} rel="noreferrer" target="_blank">
          <img
            src={String(props.pic)}
            className="img-fluid p-3"
            alt="..."
            style={{ minHeight: 105, minWidth: 105 }}
          />
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-text text-center">{props.rocketName}</h5>
        <p className={"card-text text-secondary my-0"}>
          {new Date(props.launchDate).toDateString()}
        </p>

        <div className="d-flex justify-content-between">
          <p
            className={
              props.launchStatus
                ? "card-text text-success my-0"
                : "card-text text-danger my-0"
            }
          >
            {props.launchStatus ? "Success" : "Failure"}
          </p>
          <p
            className={
              props.isUpcoming
                ? "card-text text-success my-0"
                : "card-text text-secondary my-0"
            }
          >
            Upcoming: {props.isUpcoming ? "Yes" : "No"}
          </p>
        </div>
        <div className="d-flex justify-content-between pt-2 pb-4">
          <a
            href={props.youtube}
            rel="noreferrer"
            target="_blank"
            className="btn btn-outline-danger btn-sm"
          >
            Youtube
          </a>
          <a
            href={props.url}
            rel="noreferrer"
            target="_blank"
            className="btn btn-outline-secondary btn-sm"
          >
            Readmore
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
