import React, { useContext } from "react";
import { ButtonContainerLg } from "../../containers/ButtonContainers/ButtonContainerLg";
import { AppContext } from "./../../context/AppContext";

export const Step4 = () => {
  const {
    selectedPlan,
    billing,
    selectedAddOns,
    CalcTotalAmount,
    activeStep,
    setActiveStep,
    setDirection,
  } = useContext(AppContext);
  return (
    <>
      <h4>Finishing up</h4>
      <p> Double-check everything looks OK before confirming.</p>
      <div className="bg-neutral-Magnolia p-3 rounded-lg my-8">
        <div className="border-b border-neutral-Light_gray flex items-center justify-between">
          <div className="flex flex-col">
            <h3>
              {selectedPlan.name} (
              {billing === "monthly" ? "Monthly" : "Yearly"})
            </h3>
            <span
              onClick={() => {
                setActiveStep(2);
                setDirection(-1);
              }}
              className="text-neutral-Cool_gray underline text-sm pb-3 font-bold hover:text-primary-Purplish_blue transition cursor-pointer"
            >
              Change
            </span>
          </div>
          <span className="font-bold text-primary-Marine_blue text-sm">
            $
            {billing === "monthly"
              ? `${selectedPlan.monthlyPrice}/mon`
              : `${selectedPlan.yearlyPrice}/yr`}
          </span>
        </div>

        <div>
          {selectedAddOns?.map((ao, index) => (
            <div key={index} className="flex items-center justify-between my-2">
              <span className="text-sm text-neutral-Cool_gray">{ao.title}</span>
              <span className="text-primary-Marine_blue text-sm">
                +$
                {billing === "monthly"
                  ? `${ao.monthlyPrice}/mon`
                  : `${ao.yearlyPrice}/yr`}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex items-center justify-between">
        <span className="text-neutral-Cool_gray text-sm">
          Total (per {billing === "monthly" ? "month" : "year"})
        </span>
        <span className="font-bold text-primary-Purplish_blue">
          +$
          {CalcTotalAmount()}
          {billing === "monthly" ? `/mon` : `/yr`}
        </span>
      </div>
      <ButtonContainerLg
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        setDirection={setDirection}
      />
    </>
  );
};
