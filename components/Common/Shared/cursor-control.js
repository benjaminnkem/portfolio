"use client";
import { useEffect, useRef } from "react";

import { gsap } from "gsap";

const CursorControl = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  const mouseMove = (e) => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.4,
    });
    gsap.to(followerRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.6,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", (e) => mouseMove(e));

    return () => {
      document.removeEventListener("mousemove", (e) => mouseMove(e));
    };
  }, []);

  return (
    <>
      <div className="cursor1" ref={cursorRef}></div>
      <div className="cursor2" ref={followerRef}></div>
    </>
  );
};

export default CursorControl;
