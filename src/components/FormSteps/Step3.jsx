import React, { useContext } from "react";
import { add_ons_Data } from "../../constants/add_onsData";
import { ButtonContainerLg } from "../../containers/ButtonContainers/ButtonContainerLg";
import { AppContext } from "./../../context/AppContext";

export const Step3 = () => {
  const {
    selectedAddOns,
    setSelectedAddOns,
    billing,
    activeStep,
    setActiveStep,
    setDirection,
  } = useContext(AppContext);

  const handleCheck = (event, selectedCheckbox) => {
    var updatedList = [...selectedAddOns];
    if (event.target.checked) {
      updatedList = [...selectedAddOns, selectedCheckbox];
    } else {
      updatedList.splice(selectedAddOns.indexOf(selectedCheckbox), 1);
    }
    setSelectedAddOns(updatedList);
  };

  const isChecked = (item) => selectedAddOns.includes(item);

  return (
    <>
      <h4>Pick add-ons</h4>
      <p> Add-ons help enhance your gaming experience.</p>

      <div>
        {add_ons_Data.map((ao, index) => (
          <div
            key={index}
            className={`${
              isChecked(ao) ? "active-checkbox" : "not-checked-item"
            }  p-2 rounded flex items-center justify-between mb-4 cursor-pointer hover:ring-1 hover:ring-primary-Marine_blue `}
          >
            <input
              type="checkbox"
              value={ao}
              className="h-4 w-4 rounded-sm  shadow bg-primary-Purplish_blue checked:ring-1 checked:ring-primary-Purplish_blue cursor-pointer "
              onChange={(event) => handleCheck(event, ao)}
              checked={isChecked(ao)}
            />

            <div>
              <h3>{ao.title}</h3>
              <span className="text-neutral-Cool_gray text-sm font-normal">
                {ao.desc}
              </span>
            </div>
            <span className="text-primary-Purplish_blue text-sm font-normal">
              {billing === "monthly"
                ? `+$${ao.monthlyPrice}/mon`
                : `+$${ao.yearlyPrice}/yr`}
            </span>
          </div>
        ))}
      </div>
      <ButtonContainerLg
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        setDirection={setDirection}
      />
    </>
  );
};
