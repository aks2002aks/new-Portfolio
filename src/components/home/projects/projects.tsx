"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Card from "./components/card";
import projectsData from "./projectsDetails/data.json";

const Projects = () => {
  return (
    <div className="pt-24 md:pt-32 p-5 md:p-10">
      <div className="space-y-10 flex flex-col items-center justify-center">
        <span className="text-xl md:text-3xl font-bold ">
          <span className="text-orange-500">{"</>"}</span> Projects
        </span>
        <Image src="/projects.svg" alt="What I Know" height={400} width={400} />
      </div>
      <div className="flex flex-wrap mt-10">
        {projectsData.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
