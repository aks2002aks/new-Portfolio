import React from "react";
import { CiCircleChevDown } from "react-icons/ci";
import { FaLaptopCode } from "react-icons/fa";

interface Props {
  isOpen: boolean;
  setLanguagesOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeDropdowns: () => void;
}

const Languages: React.FC<Props> = ({
  isOpen,
  setLanguagesOpen,
  closeDropdowns,
}) => {
  return (
    <div className="p-1 md:w-1/4 w-full sm:w-fit">
      <div className="flex rounded-lg h-full bg-[#282828] p-5 md:p-8 flex-col">
        <div
          className={`flex items-center md:mb-5 justify-between ${
            isOpen && "mb-5"
          }`}
        >
          <div className="flex">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
              <FaLaptopCode size={22} />
            </div>
            <h2 className="text-white  text-lg title-font font-medium">
              Programming Language
            </h2>
          </div>
          <button
            className={`sm:hidden ${isOpen ? "hidden" : "flex"}`}
            onClick={() => {
              closeDropdowns();
              setLanguagesOpen(true);
            }}
          >
            <CiCircleChevDown size={25} />
          </button>

          <button
            className={`sm:hidden rotate-180 ${!isOpen ? "hidden" : "flex"}`}
            onClick={() => {
              closeDropdowns();
              setLanguagesOpen(false);
            }}
          >
            <CiCircleChevDown size={25} />
          </button>
        </div>
        {isOpen && (
          <div className="flex  flex-wrap text-sm">
            <span className="bg-[#1b1b1b] mr-2 mb-2 p-2 rounded-md text-nowrap opacity-60 border-blue-500 border">
              C/C++
            </span>
            <span className="bg-[#1b1b1b] mr-2 mb-2 p-2 rounded-md text-nowrap opacity-60 border-green-500 border">
              Java
            </span>
            <span className="bg-[#1b1b1b] mr-2 mb-2 p-2 rounded-md text-nowrap opacity-60 border-yellow-500 border">
              Python
            </span>
            <span className="bg-[#1b1b1b] mr-2 mb-2 p-2 rounded-md text-nowrap opacity-60 border-red-500 border">
              Javascript
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Languages;
