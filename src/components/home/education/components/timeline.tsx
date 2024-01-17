import React from "react";
import "./timeline.css";
import Data from "../educationDetails/data.json";

type Props = {};

const Timeline = (props: Props) => {
  return (
    <div>
      <ul className="timeline">
        {Data.map((data, index) => (
          <li key={index}>
            <div
              className={`${index % 2 == 0 ? "direction-r" : "direction-l"}`}
            >
              <div className="flag-wrapper">
                <span className="flag">{data.school_name}</span>
                <span className="time-wrapper">
                  <span className="time">{data.time}</span>
                </span>
              </div>
              <div className="desc">{data.Location}</div>
              <div className="desc">{data.score}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
