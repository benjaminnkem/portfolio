// --------------------------------------------------PARENTS--------------------------------------------------
export const parentVariant = {
  hidden: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const parentFastVariant = {
  hidden: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const parentSlowVariant = {
  hidden: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const parentSlowerVariant = {
  hidden: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// --------------------------------------------------CHILDREN--------------------------------------------------
// Under parents
export const opacityVariant = { hidden: { opacity: 0 }, animate: { opacity: 1, duration: 0.4 } };
export const fromBottomVariant = { hidden: { opacity: 0, y: "5%" }, animate: { opacity: 1, y: 0 } };
export const fromRightVariant = { hidden: { opacity: 0, x: "5%" }, animate: { opacity: 1, x: 0 } };

// others
export const baseParentObj = {
  animate: "animate",
  hidden: "hidden",
};
