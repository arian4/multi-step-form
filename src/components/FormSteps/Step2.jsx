import { Fragment, useContext, useState } from "react";

import { Switch } from "@headlessui/react";
import { RadioGroup } from "@headlessui/react";
import { Transition } from "@headlessui/react";

import { AppContext } from "./../../context/AppContext";
import { plansData } from "../../constants/plansData";
import { ButtonContainerLg } from "../../containers/ButtonContainers/ButtonContainerLg";

export const Step2 = () => {
  const [isShowing, setIsShowing] = useState(false);

  const {
    selectedPlan,
    setSelectedPlan,
    billing,
    setBilling,
    activeStep,
    setActiveStep,
    setDirection,
  } = useContext(AppContext);

  return (
    <>
      <h4 onClick={() => console.log(selectedPlan)}>Select your plan</h4>
      <p>You have the option of monthly or yearly billing.</p>
      <div>
        <RadioGroup value={selectedPlan} onChange={setSelectedPlan}>
          {plansData.map((p, index) => (
            <RadioGroup.Option key={index} value={p} as={Fragment}>
              {({ active, checked }) => (
                <div
                  className={`transition border border-neutral-Light_gray hover:ring-primary-Marine_blue hover:ring-1 p-2 rounded flex items-center justify-start mb-4   cursor-pointer ${
                    active
                      ? "ring-primary-Marine_blue bg-neutral-Magnolia ring-1"
                      : null
                  } ${
                    checked
                      ? "ring-primary-Marine_blue bg-neutral-Magnolia ring-1"
                      : null
                  }`}
                >
                  <img src={p.icon} alt={`${p.icon}-alt`} />
                  <div className="flex flex-col ml-4">
                    <h3>{p.name}</h3>
                    <span className="text-neutral-Cool_gray text-sm font-normal ">
                      $
                      {billing === "monthly"
                        ? `${p.monthlyPrice}/mon`
                        : `${p.yearlyPrice}/yr`}
                    </span>
                    <Transition
                      show={isShowing}
                      enter="transition-opacity duration-150"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition-opacity duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <span className="text-sm text-primary-Marine_blue font-light">
                        2 months free
                      </span>
                    </Transition>
                  </div>
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </RadioGroup>
      </div>

      <div className="bg-neutral-Magnolia w-full flex items-center justify-center p-2 rounded">
        <span
          className={`text-sm font-medium transition-colors duration-300 ${
            billing === "monthly"
              ? "text-primary-Marine_blue"
              : "text-neutral-Cool_gray"
          } `}
        >
          Monthly
        </span>

        <Switch
          checked={billing === "monthly" ? false : true}
          onChange={
            () => {
              if (billing === "monthly") {
                setBilling("yearly");
                setIsShowing(true);
              }
              if (billing === "yearly") {
                setBilling("monthly");
                setIsShowing(false);
              }
            }
            // billing === "monthly" ? setBilling("yearly") : setBilling("monthly")
          }
          className={`relative inline-flex w-9 h-5 items-center rounded-full bg-primary-Marine_blue mx-5`}
        >
          <span className="sr-only">Enable notifications</span>
          <span
            className={`${
              billing === "yearly" ? "translate-x-5" : "translate-x-1"
            } inline-block h-3 w-3 transform rounded-full bg-neutral-White transition`}
          />
        </Switch>
        <span
          className={`text-sm font-medium transition-colors duration-300 ${
            billing === "yearly"
              ? "text-primary-Marine_blue"
              : "text-neutral-Cool_gray"
          }`}
        >
          Yearly
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
