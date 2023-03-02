import React from "react";
import thankyouIcon from "../../assets/images/icon-thank-you.svg";

import { motion } from "framer-motion";

const childVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};
export const Step5 = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <motion.img
        src={thankyouIcon}
        alt="thank-you"
        className="w-16 h-16  lg:w-20 lg:h-20 mb-5"
        variants={childVariants}
      />
      <motion.h4 variants={childVariants}>Thank you!</motion.h4>
      <motion.p variants={childVariants} className="text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </motion.p>
    </div>
  );
};
