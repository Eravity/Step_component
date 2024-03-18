import React from "react";

interface IndicatorProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const NavButton: React.FC<IndicatorProps> = ({ text, onClick }) => {
  return (
    <button
      className={`flex items-center justify-center rounded-xl px-6 py-4 bg-violet-700 text-white font-semibold hover:bg-violet-800 duration-200`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default NavButton;
