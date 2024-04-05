import React from "react";
import { CgClose } from "react-icons/cg";
import activityImg from "../../assets/img/activity.png";
import { CiLocationOn } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa6";
import {
  IoStar,
  IoCaretUpCircleOutline,
  IoCaretDownCircleOutline,
} from "react-icons/io5";

import {
  PiCaretCircleLeftFill,
  PiCaretCircleRightFill,
  PiRoadHorizonBold,
} from "react-icons/pi";
import { FiCalendar } from "react-icons/fi";

const Activities = () => {
  return (
    <div className="bg-[#0054E4] p-6 mt-10 rounded">
      <div className="flex justify-between items-center mb-6">
        <div className="text-white flex items-center gap-[10px] font-semibold">
          <PiRoadHorizonBold />
          <h3>Activities</h3>
        </div>
        <h3 className="w-[153px] h-[46px] bg-white rounded flex justify-center items-center text-[13px] font-semibold">
          Add Activities
        </h3>
      </div>
      <ul className="mb-6">
        <div className="w-full h-[274px] flex items-start mb-7">
          <div className="w-[95%] bg-white h-full rounded-l p-6 flex items-start justify-normal">
            <div className="w-[30%] h-full relative">
              <img
                src={activityImg}
                alt="hotelImage"
                className="w-full h-full"
              />
              <PiCaretCircleLeftFill className="absolute top-[45%] cursor-pointer z-20 w-8 h-8 text-[#fff]" />
              <PiCaretCircleRightFill className="absolute top-[45%] cursor-pointer right-0 z-20 w-8 h-8 text-[#fff]" />
            </div>
            <div className="w-[70%]">
              <div className=" pb-[18px] border-b border-[#E4E7EC] w-auto flex justify-between items-start">
                <div className="ml-4">
                  <h2 className="font-bold text-[20px] leading-snug">
                    The Museum of Modern Art
                  </h2>
                  <h5 className="text-[#1D2433] w-[80%] text-[13px] mb-2">
                    Works from Van Gogh to Warhol & beyond plus a sculpture
                    garden, 2 cafes & The modern restaurant
                  </h5>
                  <div className="flex justify-normal items-center gap-[14px] text-[#676E7E]">
                    <div className="flex items-center justify-normal text-[#0D6EFD] font-medium gap-1 text-[14px]">
                      <CiLocationOn className="w-4 h-4 object-cover" />
                      <p>Directions</p>
                    </div>
                    <div className="flex justify-normal items-center gap-1 text-[14px]">
                      <IoStar className="text-[#F4B93E] " />
                      <p>4.5 (436)</p>
                    </div>
                    <div className="flex justify-normal items-center gap-1 text-[14px]">
                      <FaRegClock />
                      <p>1 Hour</p>
                    </div>
                  </div>
                </div>
                <div className="text-[#1D2433] w-[25%] flex flex-col items-end">
                  <h3 className="text-[#1D2433] font-bold text-[20px] flex items-center gap-1 mb-1">
                    <span className="text-[#344054] font-medium">₦ </span>
                    123,450.00
                  </h3>
                  <h5 className="text-[10px] font-semibold mb-1">
                    10:30 AM on Mar 19
                  </h5>
                  {/* <p className="text-[11px]">1 room x 10 nights incl. taxes</p> */}
                </div>
              </div>
              <div className="py-[14px] border-b border-[#E4E7EC] flex justify-between items-center w-full">
                <div className="pl-4 text-[#647995] flex items-center gap-2 text-[13px] w-[75%]">
                  <h5>What's Included:</h5>
                  <div className="flex items-center">
                    <p>Admission to the Empire State Building</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="text-[#0D6EFD] cursor-pointer">See more</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#647995] text-[13px] w-auto ml-auto">
                  <div className="flex items-center gap-1">
                    <button className="bg-[#0A369D] py-1 px-2 rounded text-white flex justify-center items-center">
                      Day 1
                    </button>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-[#98A2B3]">
                    <IoCaretUpCircleOutline className="w-5 h-5 object-cover cursor-pointer" />
                    <IoCaretDownCircleOutline className="w-5 h-5 object-cover cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between items-center py-4 text-[14px] pl-4">
                <div className="flex justify-start items-center gap-6">
                  <h4 className="text-[#0D6EFD] font-medium">
                    Activity details
                  </h4>
                  <h4 className="text-[#0D6EFD] font-medium">Price details</h4>
                </div>
                <h4 className="text-[#0D6EFD] font-medium">Edit details</h4>
              </div>
            </div>
          </div>
          <div className="w-[5%] bg-[#FBEAE9] h-full flex justify-center items-center font-medium">
            <CgClose className="text-[#9E0A05] font-semibold cursor-pointer rounded-r" />
          </div>
        </div>
      </ul>
      <ul className="mb-6">
        <div className="w-full h-[274px] flex items-start mb-7">
          <div className="w-[95%] bg-white h-full rounded-l p-6 flex items-start justify-normal">
            <div className="w-[30%] h-full relative">
              <img
                src={activityImg}
                alt="hotelImage"
                className="w-full h-full"
              />
              <PiCaretCircleLeftFill className="absolute top-[45%] cursor-pointer z-20 w-8 h-8 text-[#fff]" />
              <PiCaretCircleRightFill className="absolute top-[45%] cursor-pointer right-0 z-20 w-8 h-8 text-[#fff]" />
            </div>
            <div className="w-[70%]">
              <div className=" pb-[18px] border-b border-[#E4E7EC] w-auto flex justify-between items-start">
                <div className="ml-4">
                  <h2 className="font-bold text-[20px] leading-snug">
                    The Museum of Modern Art
                  </h2>
                  <h5 className="text-[#1D2433] w-[80%] text-[13px] mb-2">
                    Works from Van Gogh to Warhol & beyond plus a sculpture
                    garden, 2 cafes & The modern restaurant
                  </h5>
                  <div className="flex justify-normal items-center gap-[14px] text-[#676E7E]">
                    <div className="flex items-center justify-normal text-[#0D6EFD] font-medium gap-1 text-[14px]">
                      <CiLocationOn className="w-4 h-4 object-cover" />
                      <p>Directions</p>
                    </div>
                    <div className="flex justify-normal items-center gap-1 text-[14px]">
                      <IoStar className="text-[#F4B93E] " />
                      <p>4.5 (436)</p>
                    </div>
                    <div className="flex justify-normal items-center gap-1 text-[14px]">
                      <FaRegClock />
                      <p>1 Hour</p>
                    </div>
                  </div>
                </div>
                <div className="text-[#1D2433] w-[25%] flex flex-col items-end">
                  <h3 className="text-[#1D2433] font-bold text-[20px] flex items-center gap-1 mb-1">
                    <span className="text-[#344054] font-medium">₦ </span>
                    123,450.00
                  </h3>
                  <h5 className="text-[10px] font-semibold mb-1">
                    10:30 AM on Mar 19
                  </h5>
                  {/* <p className="text-[11px]">1 room x 10 nights incl. taxes</p> */}
                </div>
              </div>
              <div className="py-[14px] border-b border-[#E4E7EC] flex justify-between items-center w-full">
                <div className="pl-4 text-[#647995] flex items-center gap-2 text-[13px] w-[75%]">
                  <h5>What's Included:</h5>
                  <div className="flex items-center">
                    <p>Admission to the Empire State Building</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="text-[#0D6EFD] cursor-pointer">See more</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#647995] text-[13px] w-auto ml-auto">
                  <div className="flex items-center gap-1">
                    <button className="bg-[#0A369D] py-1 px-2 rounded text-white flex justify-center items-center">
                      Day 1
                    </button>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-[#98A2B3]">
                    <IoCaretUpCircleOutline className="w-5 h-5 object-cover cursor-pointer" />
                    <IoCaretDownCircleOutline className="w-5 h-5 object-cover cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between items-center py-4 text-[14px] pl-4">
                <div className="flex justify-start items-center gap-6">
                  <h4 className="text-[#0D6EFD] font-medium">
                    Activity details
                  </h4>
                  <h4 className="text-[#0D6EFD] font-medium">Price details</h4>
                </div>
                <h4 className="text-[#0D6EFD] font-medium">Edit details</h4>
              </div>
            </div>
          </div>
          <div className="w-[5%] bg-[#FBEAE9] h-full flex justify-center items-center font-medium">
            <CgClose className="text-[#9E0A05] font-semibold cursor-pointer rounded-r" />
          </div>
        </div>
      </ul>
      <ul className="mb-6">
        <div className="w-full h-[274px] flex items-start mb-7">
          <div className="w-[95%] bg-white h-full rounded-l p-6 flex items-start justify-normal">
            <div className="w-[30%] h-full relative">
              <img
                src={activityImg}
                alt="hotelImage"
                className="w-full h-full"
              />
              <PiCaretCircleLeftFill className="absolute top-[45%] cursor-pointer z-20 w-8 h-8 text-[#fff]" />
              <PiCaretCircleRightFill className="absolute top-[45%] cursor-pointer right-0 z-20 w-8 h-8 text-[#fff]" />
            </div>
            <div className="w-[70%]">
              <div className=" pb-[18px] border-b border-[#E4E7EC] w-auto flex justify-between items-start">
                <div className="ml-4">
                  <h2 className="font-bold text-[20px] leading-snug">
                    The Museum of Modern Art
                  </h2>
                  <h5 className="text-[#1D2433] w-[80%] text-[13px] mb-2">
                    Works from Van Gogh to Warhol & beyond plus a sculpture
                    garden, 2 cafes & The modern restaurant
                  </h5>
                  <div className="flex justify-normal items-center gap-[14px] text-[#676E7E]">
                    <div className="flex items-center justify-normal text-[#0D6EFD] font-medium gap-1 text-[14px]">
                      <CiLocationOn className="w-4 h-4 object-cover" />
                      <p>Directions</p>
                    </div>
                    <div className="flex justify-normal items-center gap-1 text-[14px]">
                      <IoStar className="text-[#F4B93E] " />
                      <p>4.5 (436)</p>
                    </div>
                    <div className="flex justify-normal items-center gap-1 text-[14px]">
                      <FaRegClock />
                      <p>1 Hour</p>
                    </div>
                  </div>
                </div>
                <div className="text-[#1D2433] w-[25%] flex flex-col items-end">
                  <h3 className="text-[#1D2433] font-bold text-[20px] flex items-center gap-1 mb-1">
                    <span className="text-[#344054] font-medium">₦ </span>
                    123,450.00
                  </h3>
                  <h5 className="text-[10px] font-semibold mb-1">
                    10:30 AM on Mar 19
                  </h5>
                  {/* <p className="text-[11px]">1 room x 10 nights incl. taxes</p> */}
                </div>
              </div>
              <div className="py-[14px] border-b border-[#E4E7EC] flex justify-between items-center w-full">
                <div className="pl-4 text-[#647995] flex items-center gap-2 text-[13px] w-[75%]">
                  <h5>What's Included:</h5>
                  <div className="flex items-center">
                    <p>Admission to the Empire State Building</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <p className="text-[#0D6EFD] cursor-pointer">See more</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#647995] text-[13px] w-auto ml-auto">
                  <div className="flex items-center gap-1">
                    <button className="bg-[#0A369D] py-1 px-2 rounded text-white flex justify-center items-center">
                      Day 1
                    </button>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-[#98A2B3]">
                    <IoCaretUpCircleOutline className="w-5 h-5 object-cover cursor-pointer" />
                    <IoCaretDownCircleOutline className="w-5 h-5 object-cover cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between items-center py-4 text-[14px] pl-4">
                <div className="flex justify-start items-center gap-6">
                  <h4 className="text-[#0D6EFD] font-medium">
                    Activity details
                  </h4>
                  <h4 className="text-[#0D6EFD] font-medium">Price details</h4>
                </div>
                <h4 className="text-[#0D6EFD] font-medium">Edit details</h4>
              </div>
            </div>
          </div>
          <div className="w-[5%] bg-[#FBEAE9] h-full flex justify-center items-center font-medium">
            <CgClose className="text-[#9E0A05] font-semibold cursor-pointer rounded-r" />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Activities;
