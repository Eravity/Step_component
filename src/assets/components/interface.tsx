import React, { useState } from "react";

import NavButton from "../components/navButton";
import Step from "../components/step";
import StepIndicator from "./stepIndicator";
import CloseButton from "./closeButton";

const Interface: React.FC = () => {
  let [step, setStep] = useState<number>(1);
  let [open, setIsOpen] = useState<boolean>(true);

  function handlePrevious(): void {
    if (step > 1) setStep(step - 1);
  }

  function handleNext(): void {
    if (step < 3) setStep(step + 1);
  }

  const messages: string[] = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 💷",
  ];

  return (
    <>
      <div className="container w-2/4 my-4 flex justify-end items-center">
        <CloseButton onClick={() => setIsOpen(!open)} />
      </div>

      {open && (
        <div className="w-2/4 bg-neutral-800 rounded-xl px-10 pb-10 ">
          <div className="flex justify-end my-5 mx-[-20px]"></div>
          {/* prettier-ignore */}
          <header className="container flex justify-between px-16">
          <StepIndicator stepNumber={1} condition={`${step === 1 && "bg-violet-700 animate-bounce" }`} />
          <StepIndicator stepNumber={2} condition={`${step === 2 && "bg-violet-700 animate-bounce" }`}/>
          <StepIndicator stepNumber={3} condition={`${step === 3 && "bg-violet-700 animate-bounce" }`}/>
        </header>

          <main className="container grid place-items-center my-16">
            <Step step={messages[step - 1]} />
          </main>

          <footer className="container flex justify-between px-16">
            <NavButton text="Previous Step" onClick={() => handlePrevious()} />
            <NavButton text="Next Step" onClick={() => handleNext()} />
          </footer>
        </div>
      )}
    </>
  );
};

export default Interface;
