import React from "react";

interface StepProps {
  step: string;
}

const Step: React.FC<StepProps> = ({step}) => {
  return <h1 className="text-white font-bold text-3xl">{step}</h1>;
};

export default Step;
