import React from "react";

interface IndicatorProps {
  stepNumber: number;
  condition: string; 
}

const StepIndicator: React.FC<IndicatorProps> = ({ stepNumber, condition }) => {
  return (
    <h1 className={`flex items-center justify-center rounded-full w-12 h-12 ${condition} bg-neutral-700 text-white font-semibold`}>
      {stepNumber}
    </h1>
  );
};

export default StepIndicator;
