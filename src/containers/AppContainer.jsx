import React, { useContext } from "react";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

import { Step1 } from "../components/FormSteps/Step1";
import { Step2 } from "../components/FormSteps/Step2";
import { Step3 } from "../components/FormSteps/Step3";
import { Step4 } from "./../components/FormSteps/Step4";
import { Step5 } from "../components/FormSteps/Step5";

import { AppContext } from "./../context/AppContext";

import { Sidebar } from "../components/sidebar/Sidebar";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

import { containerVariants } from "../variants/containerVariants";
import { firstStepVariants } from "../variants/firstStepVariants";
import { confirmVariants } from "../variants/confirmVariants";

export const AppContainer = () => {
  const { activeStep, direction } = useContext(AppContext);

  return (
    <>
      <div className="lg:hidden">
        <Header activeStep={activeStep} />
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={activeStep}
            variants={
              activeStep === 1
                ? firstStepVariants
                : activeStep === 5
                ? confirmVariants
                : containerVariants
            }
            initial="hidden"
            animate="visible"
            exit="exit"
            custom={direction}
            className="step-container-box"
          >
            {activeStep === 1 && <Step1 />}

            {activeStep === 2 && <Step2 />}

            {activeStep === 3 && <Step3 />}

            {activeStep === 4 && <Step4 />}

            {activeStep === 5 && <Step5 />}
          </motion.div>
        </AnimatePresence>
        {activeStep <= 4 && <Footer />}
      </div>

      <div className=" hidden lg:flex lg:items-center lg:justify-center lg:min-h-screen">
        <div className="step-container-box-lg ">
          <Sidebar activeStep={activeStep} />
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-2 min-h-[40vh]  "
            >
              {activeStep === 1 && <Step1 />}

              {activeStep === 2 && <Step2 />}

              {activeStep === 3 && <Step3 />}

              {activeStep === 4 && <Step4 />}

              {activeStep === 5 && <Step5 />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
