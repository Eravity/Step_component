import React from "react";

interface CloseProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const CloseButton: React.FC<CloseProps> = ({ onClick }) => {
  return (
    <h1
      className="text-neutral-700 hover:text-neutral-600 cursor-pointer w-5 h-5 flex justify-center items-center text-4xl font-extrabold"
      onClick={onClick}
    >
      &times;
    </h1>
  );
};

export default CloseButton;
