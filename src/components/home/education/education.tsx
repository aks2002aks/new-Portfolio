import React from "react";
import Image from "next/image";
import Timeline from "./components/timeline";

interface Props {
  educationRef: React.RefObject<HTMLDivElement>;
}

const Education: React.FC<Props> = ({ educationRef }) => {
  return (
    <div className="pt-24 md:pt-32 p-5 md:p-10" ref={educationRef}>
      <div className="space-y-10 flex flex-col items-center justify-center">
        <span className="text-xl md:text-3xl font-bold ">
          <span className="text-orange-500">{"</>"}</span> Education
        </span>
        <Image
          src="/education.svg"
          alt="What I Know"
          height={400}
          width={400}
        />
      </div>
      <div className="flex justify-center items-center  mt-10">
        <Timeline />
      </div>
    </div>
  );
};

export default Education;
