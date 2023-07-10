"use client";
import { AnimatePresence, motion } from "framer-motion";

const PageContainer = ({ children }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          variants={{
            initial: { opacity: 0, x: -200, y: 0 },
            animate: { opacity: 1, x: 0, y: 0 },
            exit: { opacity: 0, x: 0, y: -100 },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ type: 'linear' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageContainer;
