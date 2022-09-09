export const mobileMenuVariant = {
  hidden: { y: 5, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.2 } },
  exit: { y: 5, opacity: 0, transition: { duration: 0.2 } },
};

export const hamburgerBarVariant = {
  hidden: { x: 5, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
  exit: (i) => ({
    x: 5,
    opacity: 0,
    transition: {
      delay: i * 0.1,
    },
  }),
};

export const fadeUpVariant = {
  hidden: { y: 5, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.2,
    },
  }),
};

export const logoVariant = {
  hidden: { y: 5, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};
