export const firstStepVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },

  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, delay: 0.2 },
  },
  exit: {
    scale: 1.2,
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};
