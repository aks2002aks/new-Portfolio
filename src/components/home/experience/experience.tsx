import React from "react";
import Image from "next/image";
import Timeline from "./components/timeline";

const Experience = () => {
  return (
    <div className="pt-24 md:pt-32 p-5 md:p-10">
      <div className="space-y-10 flex flex-col items-center justify-center">
        <span className="text-xl md:text-3xl font-bold ">
          <span className="text-orange-500">{"</>"}</span> Experience
        </span>
        <Image
          src="/experience.svg"
          alt="What I Know"
          height={400}
          width={400}
        />
      </div>
      <div className="flex justify-center items-center  mt-10">
        <Timeline/>
      </div>
    </div>
  );
};

export default Experience;
