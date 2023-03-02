import React, { useContext } from "react";
import { FirstStepValidationSchema } from "../../validations/FirstStepValidation";
import { AppContext } from "./../../context/AppContext";

export const Footer = () => {
  const {
    activeStep,
    setActiveStep,
    setDirection,
    setFirstStepErrors,
    firstStepData,
  } = useContext(AppContext);
  return (
    <footer
      className={`w-full  bg-neutral-White flex items-start ${
        activeStep > 1 ? "justify-between" : "justify-end"
      } fixed bottom-0 left-0 right-0 h-24 p-4`}
    >
      {activeStep > 1 && (
        <button
          onClick={() => {
            setActiveStep((prev) => prev - 1);
            setDirection(-1);
          }}
          className="bg-transparent text-neutral-Cool_gray rounded p-2 text-sm font-medium"
        >
          Go Back
        </button>
      )}

      <button
        onClick={() => {
          if (activeStep === 1) {
            FirstStepValidationSchema.validate(firstStepData, {
              abortEarly: false,
            })
              .then(function (value) {
                console.log(value);
                setFirstStepErrors([]);

                setActiveStep((prev) => prev + 1);
                setDirection(1);
              })
              .catch(function (err) {
                setFirstStepErrors(err.inner);
                console.log(err.inner);
              });
          } else {
            setActiveStep((prev) => prev + 1);
            setDirection(1);
          }
        }}
        className={`${
          activeStep === 4
            ? "bg-primary-Purplish_blue"
            : "bg-primary-Marine_blue"
        } text-neutral-Light_gray rounded px-5 py-2 text-sm font-medium`}
      >
        {activeStep === 4 ? "Confirm" : "Next Step"}
      </button>
    </footer>
  );
};
