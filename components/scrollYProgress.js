"use client";
import { useScroll, motion } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress, transformOrigin: "0%", zIndex: 200 }}
      className="fixed top-0 left-0 right-0 h-2 bg-orange-600"
    ></motion.div>
  );
};

export default ScrollProgress;
