import React, { useContext } from "react";
import { ButtonContainerLg } from "../../containers/ButtonContainers/ButtonContainerLg";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { AppContext } from "./../../context/AppContext";

export const Step1 = () => {
  const {
    activeStep,
    setActiveStep,
    setDirection,
    firstStepData,
    setFirstStepData,
    firstStepErrors,
  } = useContext(AppContext);

  const IsAnyError = (path) => firstStepErrors.some((err) => err.path === path);

  return (
    <>
      <h4 onClick={() => console.log(firstStepErrors)}>Personal info</h4>
      <p>Please provide your name, email address, and phone number.</p>
      <div>
        <div className="flex flex-col mb-5">
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <label htmlFor="name">Name</label>
            {firstStepErrors?.map((err, index) =>
              err.path === "name" ? (
                <ErrorMessage key={index} errMessage={err.message} />
              ) : null
            )}
          </div>

          <input
            value={firstStepData.name}
            onChange={(e) =>
              setFirstStepData({
                ...firstStepData,
                name: e.target.value,
              })
            }
            className={`border ${
              IsAnyError("name")
                ? "border-primary-Strawberry_red"
                : "border-neutral-Light_gray"
            }  p-2 rounded outline-none mt-1 focus:ring-1 focus:ring-primary-Marine_blue`}
            type="text"
            placeholder="e.g. Stephen King"
            id="name"
          />
        </div>
        <div className="flex flex-col mb-5">
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <label htmlFor="email">Email Address</label>
            {firstStepErrors?.map((err, index) =>
              err.path === "email" ? (
                <ErrorMessage key={index} errMessage={err.message} />
              ) : null
            )}
          </div>

          <input
            value={firstStepData.email}
            onChange={(e) =>
              setFirstStepData({
                ...firstStepData,
                email: e.target.value,
              })
            }
            className={`border ${
              IsAnyError("email")
                ? "border-primary-Strawberry_red"
                : "border-neutral-Light_gray"
            }  p-2 rounded outline-none mt-1 focus:ring-1 focus:ring-primary-Marine_blue`}
            type="text"
            placeholder="e.g. stephenking@lorem.com"
            id="email"
          />
        </div>
        <div className="flex flex-col mb-5">
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <label htmlFor="phone">Phone Number</label>
            {firstStepErrors?.map((err, index) =>
              err.path === "phoneNumber" ? (
                <ErrorMessage key={index} errMessage={err.message} />
              ) : null
            )}
          </div>

          <input
            value={firstStepData.phoneNumber}
            onChange={(e) =>
              setFirstStepData({
                ...firstStepData,
                phoneNumber: e.target.value,
              })
            }
            className={`border ${
              IsAnyError("phoneNumber")
                ? "border-primary-Strawberry_red"
                : "border-neutral-Light_gray"
            }  p-2 rounded outline-none mt-1 focus:ring-1 focus:ring-primary-Marine_blue`}
            type="number"
            placeholder="e.g. +1 234 567 890"
            id="phone"
          />
        </div>
        <ButtonContainerLg
          firstStepData={firstStepData}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          setDirection={setDirection}
        />
      </div>

      {/* <div className="hidden w-full lg:flex lg:ite"></div> */}
    </>
  );
};
