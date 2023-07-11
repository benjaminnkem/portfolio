"use client";
import { useScroll, motion, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%", zIndex: 200 }}
      className="fixed top-0 left-0 right-0 h-2 bg-orange-600"
    ></motion.div>
  );
};

export default ScrollProgress;
