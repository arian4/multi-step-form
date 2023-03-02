import { Transition } from "@headlessui/react";
import React from "react";

export const ErrorMessage = ({ errMessage }) => {
  return (
    <Transition
      show={errMessage ? true : false}
      enter="transition-opacity duration-150"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <span className="text-primary-Strawberry_red text-sm lg:text-base">
        {errMessage}
      </span>
    </Transition>
  );
};
