import React, { useState } from "react";
import logo from "../assets/icon/logo.svg";
import { Link } from "react-router-dom";
import searchIcon from "../assets/icon/MagnifyingGlass.svg";
import navlinksData from "../json/navlinks.json";
import line213 from "../assets/icon/Line213.svg";
import Ell from "../assets/icon/Ell.png";
import arrowDown from "../assets/icon/CaretDown.svg";

const NavlinkItem = ({ icon, text }) => (
  <div className="flex flex-col items-center pt-2">
    <img src={icon} alt={text} className="w-6 h-6 object-cover" />
    <span className="text-[12px]">{text}</span>
  </div>
);

const NavlinksList = ({ navlinks }) => (
  <nav>
    <ul className="flex items-center justify-normal gap-6 ml-auto">
      {navlinks.map((navlink) => (
        <Link
          to={""}
          key={navlink.id}
          className={`flex flex-col justify-center items-center hover:text-[#232a34] ${
            navlink.text === "Plan a trip" ? "text-[#232a34] font-semibold" : ""
          }`}
        >
          <NavlinkItem {...navlink} />
        </Link>
      ))}
    </ul>
  </nav>
);

const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [navlinks] = useState(navlinksData);

  const firstFiveNavlinks = navlinks.slice(0, 5);
  const remainingNavlinks = navlinks.slice(5);

  return (
    <nav className="h-[138px] flex items-center justify-between p-10 bg-[#ffffff] text-[#647995] fixed top-0 left-0 w-full z-20">
      <div className="flex items-center justify-normal gap-7">
        <Link to="/">
          <img src={logo} alt="travel-logo" />
        </Link>
        <div className="relative">
          <input
            type="text"
            name="search"
            id=""
            placeholder="Search..."
            className="h-[58px] w-[300px] bg-[#f0f2f5] font-light text-[#647995] pla placeholder:pl-[30px]
            rounded px-3 py-4 border border-gray-300 focus:outline-none focus:border-blue-500"
            onFocus={() => setIsFocused(false)}
            onBlur={() => setIsFocused(true)}
          />
          {isFocused && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <img src={searchIcon} alt="search" className="text-gray-400" />
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center justify-normal">
        <NavlinksList navlinks={firstFiveNavlinks} />
        <div className="flex items-center justify-normal">
          <img src={line213} alt="line" className="px-[32px]" />
          <button className="bg-[#0D6EFD] text-white rounded h-10 py-[8px] px-4 text-[12px] mr-[31.5px]">
            Subscribe
          </button>
        </div>
        <NavlinksList navlinks={remainingNavlinks} />
        <div className="ml-[24px] flex">
          <img
            src={Ell}
            alt="account-icon"
            className="h-[52px] w-[52px] object-cover rounded-full mr-[15px]"
          />
          <img src={arrowDown} alt="arrow-down" className="cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
