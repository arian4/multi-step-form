import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { FirstStepValidationSchema } from "../../validations/FirstStepValidation";

export const ButtonContainerLg = ({
  activeStep,
  setActiveStep,
  setDirection,
  firstStepData,
}) => {
  const { setFirstStepErrors } = useContext(AppContext);
  return (
    <div
      className={`w-full hidden mt-3   bg-neutral-White lg:flex items-center ${
        activeStep > 1 ? "justify-between" : "justify-end"
      }  p-3`}
    >
      {activeStep > 1 && (
        <button
          onClick={() => {
            setActiveStep((prev) => prev - 1);
            setDirection(-1);
          }}
          className="bg-transparent text-neutral-Cool_gray rounded p-2  font-medium hover:opacity-80 transition"
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
        } text-neutral-Light_gray rounded px-5 py-2  font-medium hover:opacity-80 transition`}
      >
        {activeStep === 4 || activeStep === 5 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};
