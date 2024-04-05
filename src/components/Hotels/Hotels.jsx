import React from "react";
import { PiWarehouseBold } from "react-icons/pi";
import { CgClose } from "react-icons/cg";
import hotelImg from "../../assets/img/hotel.png";
import { CiLocationOn } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa6";
import { TbBedFilled } from "react-icons/tb";
import {
  PiSwimmingPoolBold,
  PiWineLight,
  PiCaretCircleRightFill,
  PiCaretCircleLeftFill,
} from "react-icons/pi";
import { FiCalendar } from "react-icons/fi";

const Hotels = () => {
  return (
    <div className="bg-[#344054] p-6 mt-10 rounded">
      <div className="flex justify-between items-center mb-6">
        <div className="text-white flex items-center gap-[10px] font-semibold">
          <PiWarehouseBold />
          <h3>Hotels</h3>
        </div>
        <h3 className="w-[153px] h-[46px] bg-white cursor-pointer  transition duration-300 ease-in-out rounded flex justify-center items-center text-[13px] font-semibold">
          Add Hotels
        </h3>
      </div>
      <ul className="mb-6">
        <div className="w-full h-[274px] flex items-start mb-7">
          <div className="w-[95%] bg-white h-full rounded-l p-6 flex items-start justify-normal">
            <div className="w-[30%] h-full relative">
              <img src={hotelImg} alt="hotelImage" />
              <PiCaretCircleLeftFill className="absolute top-[45%] cursor-pointer z-20 w-8 h-8 text-[#fff]" />
              <PiCaretCircleRightFill className="absolute top-[45%] cursor-pointer right-0 z-20 w-8 h-8 text-[#fff]" />
            </div>
            <div className="w-[70%">
              <div className=" pb-[18px] border-b border-[#E4E7EC] w-auto flex justify-between items-center">
                <div className="ml-4">
                  <h2 className="font-bold text-[20px] leading-snug">
                    Riviera Resort, Lekki
                  </h2>
                  <h5 className="text-[#1D2433] w-[80%] text-[13px] mb-2">
                    18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way,
                    Lekki Phase1
                  </h5>
                  <div className="flex justify-normal items-center gap-[14px] text-[#676E7E]">
                    <div className="flex items-center justify-normal text-[#0D6EFD] font-medium gap-1 text-[14px]">
                      <CiLocationOn className="w-4 h-4 object-cover" />
                      <p>Show in map</p>
                    </div>
                    <div className="flex justify-normal items-center gap-1 text-[14px]">
                      <FaRegStar className="text-[#F4B93E] " />
                      <p>8.5 (436)</p>
                    </div>
                    <div className="flex justify-normal items-center gap-1 text-[14px]">
                      <TbBedFilled />
                      <p>King size room</p>
                    </div>
                  </div>
                </div>
                <div className="text-[#1D2433] w-[25%]">
                  <h3 className="text-[#1D2433] font-bold text-[20px] flex items-center gap-1 mb-1">
                    <span className="text-[#344054] font-medium">₦ </span>
                    123,450.00
                  </h3>
                  <h5 className="text-[10px] font-semibold mb-1">
                    Total Price: NGN560,000
                  </h5>
                  <p className="text-[11px]">1 room x 10 nights incl. taxes</p>
                </div>
              </div>
              <div className="py-[14px] border-b border-[#E4E7EC] flex justify-between items-center">
                <div className="ml-4 text-[#647995] flex items-center gap-3 text-[14px]">
                  <h5>Facilities:</h5>
                  <div className="flex items-center gap-1">
                    <PiSwimmingPoolBold />
                    <p>Pool</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <PiWineLight />
                    <p>Bar</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#647995] text-[13px]">
                  <div className="flex items-center gap-1">
                    <FiCalendar />
                    <p>Check In: 20-04-2024</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiCalendar />
                    <p>Check Out: 29-04-2024</p>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between items-center py-4 text-[14px] pl-4">
                <div className="flex justify-start items-center gap-6">
                  <h4 className="text-[#0D6EFD] font-medium">Flight details</h4>
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
              <img src={hotelImg} alt="hotelImage" />
              <PiCaretCircleLeftFill className="absolute top-[45%] cursor-pointer z-20 w-8 h-8 text-[#fff]" />
              <PiCaretCircleRightFill className="absolute top-[45%] cursor-pointer right-0 z-20 w-8 h-8 text-[#fff]" />
            </div>
            <div className="w-[70%">
              <div className=" pb-[18px] border-b border-[#E4E7EC] w-auto flex justify-between items-center">
                <div className="ml-4">
                  <h2 className="font-bold text-[20px] leading-snug">
                    Riviera Resort, Lekki
                  </h2>
                  <h5 className="text-[#1D2433] w-[80%] text-[13px] mb-2">
                    18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way,
                    Lekki Phase1
                  </h5>
                  <div className="flex justify-normal items-center gap-[14px] text-[#676E7E]">
                    <div className="flex items-center justify-normal text-[#0D6EFD] font-medium gap-1 text-[14px]">
                      <CiLocationOn className="w-4 h-4 object-cover" />
                      <p>Show in map</p>
                    </div>
                    <div className="flex justify-normal items-center gap-1 text-[14px]">
                      <FaRegStar className="text-[#F4B93E] " />
                      <p>8.5 (436)</p>
                    </div>
                    <div className="flex justify-normal items-center gap-1 text-[14px]">
                      <TbBedFilled />
                      <p>King size room</p>
                    </div>
                  </div>
                </div>
                <div className="text-[#1D2433] w-[25%]">
                  <h3 className="text-[#1D2433] font-bold text-[20px] flex items-center gap-1 mb-1">
                    <span className="text-[#344054] font-medium">₦ </span>
                    123,450.00
                  </h3>
                  <h5 className="text-[10px] font-semibold mb-1">
                    Total Price: NGN560,000
                  </h5>
                  <p className="text-[11px]">1 room x 10 nights incl. taxes</p>
                </div>
              </div>
              <div className="py-[14px] border-b border-[#E4E7EC] flex justify-between items-center">
                <div className="ml-4 text-[#647995] flex items-center gap-3 text-[14px]">
                  <h5>Facilities:</h5>
                  <div className="flex items-center gap-1">
                    <PiSwimmingPoolBold />
                    <p>Pool</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <PiWineLight />
                    <p>Bar</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[#647995] text-[13px]">
                  <div className="flex items-center gap-1">
                    <FiCalendar />
                    <p>Check In: 20-04-2024</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiCalendar />
                    <p>Check Out: 29-04-2024</p>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between items-center py-4 text-[14px] pl-4">
                <div className="flex justify-start items-center gap-6">
                  <h4 className="text-[#0D6EFD] font-medium">Flight details</h4>
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

export default Hotels;
