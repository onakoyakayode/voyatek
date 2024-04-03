import React from "react";
import styles from "../../assets/styles.module.css";
import backArrow from "../../assets/icon/bckArrow.svg";
import Trip from "../Trip";
import Card from "../Reusables/Card";
import TripItenary from "../Trip/TripItenary";
import Hotels from "../Hotels/Hotels";
import Activities from "../Activities/Activities";

const MainContent = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  const buttonTextStyles = {
    color: "#0D6EFD",
  };
  return (
    <div className="p-8 bg-white min-h-dvh rounded overflow-y-auto">
      <div className={`${styles.hero} h-[150px] w-full`}>
        <div className="absolute top-3 left-3 w-10 h-10 z-30">
          <img
            src={backArrow}
            alt="backArrow"
            className="w-full h-full object-cover cursor-pointer"
          />
        </div>
      </div>
      <Trip />
      <div className="mt-7 flex justify-start gap-1 mb-[90px]">
        <Card
          title="Activities"
          text="Build, personalize, and optimize your itineraries with our trip planner."
          buttonText="Add Activities"
          onClick={handleClick}
          textColor="#fff"
          buttonColor="#0D6EFD"
          cardColor="#000031"
        />
        <Card
          title="Hotels"
          text="Build, personalize, and optimize your itineraries with our trip planner."
          buttonText="Add Hotels"
          onClick={handleClick}
          textColor="#000000"
          buttonColor="#0D6EFD"
          //   cardColor="#E7F0FF"
          btnTextColor="#fff"
          cardBgColor="#E7F0FF"
          buttonTextColor="#fff"
          buttonTextStyles="#fff"
        />
        <Card
          title="Flights"
          text="Build, personalize, and optimize your itineraries with our trip planner."
          buttonText="Add Hotels"
          onClick={handleClick}
          textColor="#fff"
          buttonColor="#fff"
          cardColor="#E7F0FF"
          btnTextColor="#0D6EFD"
          cardBgColor="#0D6EFD"
          //   buttonTextColor="#0D6EFD"
          //   buttonTextStyles="#0D6EFD"
        />
      </div>
      <TripItenary />
      <Hotels />
      <Activities />
    </div>
  );
};

export default MainContent;
