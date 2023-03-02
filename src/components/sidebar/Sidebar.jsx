import React from "react";
import { sidebar } from "../../constants/sidebar";

export const Sidebar = ({ activeStep }) => {
  return (
    <div className="h-full w-full bg-[url('../../../src/assets/images/bg-sidebar-desktop.svg')] bg-no-repeat bg-cover bg-center rounded-md p-4  ">
      <ul className="h-full  ">
        {sidebar.map((item, index) => (
          <li key={index} className="mb-5">
            <div className="flex items-center ">
              <div
                className={`transition-colors duration-300 w-8 h-8 rounded-[50%] border flex items-center justify-center mr-2 text-sm  ${
                  index + 1 === activeStep
                    ? "bg-primary-Light_blue border-primary-Light_blue text-primary-Marine_blue font-bold"
                    : "text-neutral-Magnolia bg-transparent"
                }  `}
              >
                {item.stepCounter}
              </div>
              <div>
                <span className="block text-xs text-neutral-Light_gray ">
                  step {item.stepCounter}
                </span>
                <span className="text-sm text-neutral-White ">
                  {item.stepTitle}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
