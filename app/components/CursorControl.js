"use client";
import { useEffect } from "react";

const CursorControl = () => {
  const cursorEffect = (e) => {
    const cursor1 = document.querySelector(".cursor1");
    const cursor2 = document.querySelector(".cursor2");

    cursor1.style.left = cursor2.style.left = `${e.clientX}px`;
    cursor1.style.top = cursor2.style.top = `${e.clientY}px`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", (e) => cursorEffect(e));

    return () => {
      document.removeEventListener("mousemove", (e) => cursorEffect(e));
    };
  }, []);
};

export default CursorControl;
