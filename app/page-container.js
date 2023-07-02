"use client"
import { AnimatePresence, motion } from "framer-motion";

const PageContainer = ({ children }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          variants={{
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 15 },
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ delay: 0.25 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageContainer;
