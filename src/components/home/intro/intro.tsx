"use client";

import React, { useRef } from "react";
import MyImage from "./components/myImage";
import Name from "./components/name";

interface Props {
  introRef: React.RefObject<HTMLDivElement>;
}

const Intro: React.FC<Props> = ({ introRef }) => {
  return (
    <div
      className="relative flex h-screen justify-center items-center"
      ref={introRef}
    >
      <video
        src="/bg_vid.mp4"
        autoPlay
        loop
        muted
        preload="auto"
        className="w-full h-full object-cover"
      />

      <div className=" absolute top-24 sm:top-52 flex justify-center items-center lg:p-10 p-2 w-full lg:flex-row flex-col">
        <div className="text-white  bg-transparent  lg:w-2/3  flex md:text-5xl sm:text-3xl text-xl font-bold items-center justify-center">
          <Name />
        </div>
        <div className="lg:w-1/3 flex items-center justify-center">
          <MyImage />
        </div>
      </div>
    </div>
  );
};

export default Intro;
