import { motion } from "framer-motion";
import {
  fromBottomVariant,
  fromRightVariant,
  opacityVariant,
  parentFastVariant,
  parentSlowVariant,
  parentVariant,
} from "./variants";

// --------------------------------------------------PARENTS--------------------------------------------------
export const TransitionParent = ({ children, addClass }) => {
  return (
    <motion.div
      variants={parentVariant}
      whileInView="animate"
      initial="hidden"
      viewport={{ once: true }}
      className={addClass && addClass}
    >
      {children}
    </motion.div>
  );
};

export const TransitionParentFast = ({ children, addClass }) => {
  return (
    <motion.div
      variants={parentFastVariant}
      whileInView="animate"
      initial="hidden"
      viewport={{ once: true }}
      className={addClass && addClass}
    >
      {children}
    </motion.div>
  );
};

export const TransitionParentSlow = ({ children, addClass }) => {
  return (
    <motion.div
      variants={parentSlowVariant}
      whileInView="animate"
      initial="hidden"
      viewport={{ once: true }}
      className={addClass && addClass}
    >
      {children}
    </motion.div>
  );
};

// --------------------------------------------------CHILDREN--------------------------------------------------
// Under Parents
export const TransitionOpacity = ({ children, addClass }) => {
  return (
    <motion.div variants={opacityVariant} className={addClass && addClass}>
      {children}
    </motion.div>
  );
};

export const TransitionFromRight = ({ children, addClass }) => {
  return (
    <motion.div variants={fromRightVariant} className={addClass && addClass}>
      {children}
    </motion.div>
  );
};

export const TransitionFromBottom = ({ children, addClass }) => {
  return (
    <motion.div variants={fromBottomVariant} className={addClass && addClass}>
      {children}
    </motion.div>
  );
};

// --------------------------------------------------STANDALONE--------------------------------------------------

export const TransitionOpacityInView = ({ children, addClass }) => {
  return (
    <motion.div
      variants={opacityVariant}
      whileInView="animate"
      initial="hidden"
      viewport={{ once: true }}
      className={addClass && addClass}
    >
      {children}
    </motion.div>
  );
};
