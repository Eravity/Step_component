import React from "react";
import close from "../../assets/images/close.png";

const CloseButton: React.FC = () => {
  return <img className="cursor-pointer" src={close} alt="close_icon" />;
};

export default CloseButton;
