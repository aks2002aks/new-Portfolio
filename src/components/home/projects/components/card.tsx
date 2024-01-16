import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { LuArrowRightCircle } from "react-icons/lu";

interface Props {
  project: any;
}

const Card: React.FC<Props> = ({ project }) => {
  return (
    <div className="xl:w-1/4 md:w-1/3 sm:w-1/2  w-full p-4 flex relative">
      <div className="bg-[#282828] rounded-lg overflow-hidden w-full">
        <Image
          className="h-44 rounded w-full object-cover object-center mb-6 border-b-2 border-black"
          src={project.image}
          alt="content"
          width={300}
          height={300}
        />
        <div className="p-5 pt-0  flex flex-col h-full">
          <div className="text-white opacity-80">
            <h2 className="text-md font-medium title-font mb-1">
              {project.name}
            </h2>
            <p className="leading-relaxed text-sm flex-grow">
              {project.tech_stack}
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition-opacity duration-300 m-4 rounded-md cursor-pointer">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
            {project.website && (
              <Link
                href={project.website}
                target="_blank"
                className=" p-2 rounded-md  hover:opacity-100 text-white hover:text-orange-500 transition duration-300 flex space-x-4 items-center justify-center"
              >
                <span>Website </span>
                <LuArrowRightCircle size={25} />
              </Link>
            )}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className=" p-2 rounded-md hover:opacity-100 text-white hover:text-orange-500 transition duration-300 flex space-x-4 items-center justify-center"
              >
                <span>GitHub Repository </span>
                <LuArrowRightCircle size={37} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
