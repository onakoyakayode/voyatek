import React from "react";
import asideLinks from "../../json/asideNavs.json";
import { Link } from "react-router-dom";
import caretUpDown from "../../assets/icon/CaretUpDown.svg";

const Aside = () => {
  return (
    <div className="bg-white w-[20%] h-screen rounded p-6 text-[#647995]">
      <ul className="mb-[64px]">
        {asideLinks.map((aside) => (
          <Link to={""}>
            <li
              key={aside.id}
              className="h-[58px] flex justify-start items-center gap-2 rounded px-[14px] py-3 mb-3 hover:bg-[#64799594] hover:text-white transition-all"
            >
              <img
                src={aside.icon}
                alt={aside.text}
                className="w-7 h-7 object-cover transition-all"
              />
              <span className="font-medium">{aside.text}</span>
            </li>
          </Link>
        ))}
      </ul>
      <div className="bg-[#F0F2F5] w-full h-[86px] rounded py-[18px] px-[10px] flex justify-between items-center cursor-pointer">
        <div className="flex justify-center items-center gap-2">
          <section className="bg-[#0D6EFD] w-[50px] h-[50px] text-white flex justify-center items-center rounded">
            Go
          </section>
          <h4 className="text-[13px] font-semibold">Personal Account</h4>
        </div>
        <img src={caretUpDown} alt="caret" />
      </div>
    </div>
  );
};

export default Aside;
