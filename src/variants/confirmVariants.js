export const confirmVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.2,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};
