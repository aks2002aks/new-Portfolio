import React from "react";
import { CiCircleChevDown } from "react-icons/ci";
import { IoIosStarOutline } from "react-icons/io";

interface Props {
  isOpen: boolean;
  setOthersOpen:  React.Dispatch<React.SetStateAction<boolean>>;
  closeDropdowns: () => void;
}

const Others: React.FC<Props> = ({
  isOpen,
  setOthersOpen,
  closeDropdowns,
}) => {
  return (
    <div className="p-1 md:w-1/4 w-full sm:w-fit">
      <div className="flex rounded-lg h-full bg-[#282828] p-5 md:p-8 flex-col">
      <div className={`flex items-center md:mb-5 justify-between ${isOpen && "mb-5"}`}>
          <div className="flex">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-orange-500 text-white flex-shrink-0">
              <IoIosStarOutline size={22} />
            </div>
            <h2 className="text-white  text-lg title-font font-medium">
              Other
            </h2>
          </div>
          <button
            className={`sm:hidden ${isOpen ? "hidden" :"flex"}`}
            onClick={() => {
              closeDropdowns();
              setOthersOpen(true);
            }}
          >
            <CiCircleChevDown size={25} />
          </button>

          <button
            className={`sm:hidden rotate-180 ${!isOpen ? "hidden" :"flex"}`}
            onClick={() => {
              closeDropdowns();
              setOthersOpen(false);
            }}
          >
            <CiCircleChevDown size={25} />
          </button>
        </div>
        {isOpen && <div className="flex  flex-wrap text-sm">
          <span className="bg-[#1b1b1b] mr-2 mb-2 p-2 rounded-md text-nowrap opacity-60 border-blue-500 border">
            Oops
          </span>
          <span className="bg-[#1b1b1b] mr-2 mb-2 p-2 rounded-md text-nowrap opacity-60 border-blue-500 border">
            Material UI
          </span>
          <span className="bg-[#1b1b1b] mr-2 mb-2 p-2 rounded-md text-nowrap opacity-60 border-blue-500 border">
            Tailwind CSS
          </span>
        </div>}
      </div>
    </div>
  );
};

export default Others;
