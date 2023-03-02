import React, { useState } from "react";
import { plansData } from "../constants/plansData";

export const AppContext = React.createContext();

export function AppContextProvider({ children }) {
  const [firstStepData, setFirstStepData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [firstStepErrors, setFirstStepErrors] = useState([]);

  const [selectedPlan, setSelectedPlan] = useState(plansData[0]);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const [billing, setBilling] = useState("monthly");

  const [activeStep, setActiveStep] = useState(1);
  const [direction, setDirection] = useState(0);

  const CalcTotalAmount = () => {
    let totalAmount =
      billing === "monthly"
        ? selectedPlan.monthlyPrice
        : selectedPlan.yearlyPrice;
    if (selectedAddOns.length > 0) {
      selectedAddOns.map((ao) =>
        billing === "monthly"
          ? (totalAmount += ao.monthlyPrice)
          : (totalAmount += ao.yearlyPrice)
      );
    }
    return totalAmount;
  };

  return (
    <AppContext.Provider
      value={{
        firstStepData,
        setFirstStepData,
        firstStepErrors,
        setFirstStepErrors,
        selectedPlan,
        setSelectedPlan,
        selectedAddOns,
        setSelectedAddOns,
        billing,
        setBilling,
        activeStep,
        setActiveStep,
        CalcTotalAmount,
        direction,
        setDirection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
