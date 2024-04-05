import React from "react";
import PropTypes from "prop-types";

const Card = ({
  title,
  text,
  buttonText,
  onClick,
  cardBgColor,
  textColor,
  buttonColor,
  btnTextColor,
  buttonTextStyles,
}) => {
  const cardStyle = {
    backgroundColor: cardBgColor,
    color: textColor,
  };

  const buttonStyle = {
    backgroundColor: buttonColor,
    color: btnTextColor,
  };

  return (
    <div
      className="h-[193px] w-[240px] rounded py-[18px] px-[14px]"
      style={cardStyle}
    >
      <div className="w-full">
        <h3 className="font-bold text-[18px] mb-2">{title}</h3>
        <p className="text-[13px] mb-6 font-light">{text}</p>
        <button
          onClick={onClick}
          style={buttonStyle}
          className={`w-full bg-[#0D6EFD] rounded py-3 flex justify-center items-center text-[13px] font-medium text-[#fff]`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

Card.PropTypes = {
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  textColor: PropTypes.string,
  buttonTextColor: PropTypes.string,
  cardColor: PropTypes.string,
  cardBgColor: PropTypes.string,
  btnTextColor: PropTypes.string,
};

Card.defaultProps = {
  textColor: "#fff",
  buttonColor: "#0D6EFD",
  cardBgColor: "#000031",
  btnTextColor: "#ffffff",
  buttonTextColor: "",
};

export default Card;
