import React from "react";
import { FiCalendar } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";
import { LuUserPlus2 } from "react-icons/lu";
import { TbDots } from "react-icons/tb";
import bol from "../assets/img/box.png";
import { PiGearSixBold } from "react-icons/pi";

const Trip = () => {
  return (
    <div className="w-full h-[94px] flex justify-between items-start">
      <div className="flex flex-col">
        <div className="bg-[#FEF4E6] flex justify-start items-center px-2 py-[7px] gap-2 mb-1 w-[260px] text-[13px] font-medium text-[#7A4504]">
          <FiCalendar />
          <p>21 March 2024</p>
          <IoMdArrowForward />
          <p>21 April 2024</p>
        </div>
        <h2 className="text-3xl font-semibold leading-normal">
          Bahamas Family Trip
        </h2>
        <div className="text-[#676E7E] flex justify-start items-center gap-2 font-medium">
          <h4>New York, United States of America </h4>
          <p className="h-[15px] w-[2px] bg-[#D0D5DD]"></p>
          <h4>Solo Trip</h4>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex justify-between items-center gap-2">
          <div className="w-[160px] h-[46px] bg-[#E7F0FF] rounded flex justify-center items-center">
            <LuUserPlus2 className="text-[#0D6EFD] h-5 w-5 " />
          </div>
          <TbDots className="text-[#676E7E] w-8 h-5" />
        </div>
        <div className="w-[109px] flex items-center justify-start">
          <div className="w-14 h-10">
            <img
              src={bol}
              alt="acct-img"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="w-[50px] h-[3px] bg-[#E7F0FF]"></p>
          <div className="w-14 h-10 rounded-full border border-[#E7F0FF] flex items-center justify-center">
            <PiGearSixBold />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trip;
