import React from "react";
import "./timeline.css";
import Data from "../experienceDetails/data.json";

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
                <span className="flag">{data.company_name}</span>
                <span className="time-wrapper">
                  <span className="time">{data.time}</span>
                </span>
              </div>

              <div
                className={`desc flex items-end ${
                  index % 2 == 0 ? "justify-start" : "justify-end"
                }`}
              >
                <span className="text-white text-[12px] bg-[#282828]  p-1 px-2 rounded ">
                  {data.title}
                </span>
              </div>
              <div className="desc">{data.desc}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
