"use client";
import { useEffect, useState } from "react";

const StackWrite = () => {
  const [currentStack, setCurrentStack] = useState("");
  const [index, setIndex] = useState(0);

  const [typingIndex, setTypingIndex] = useState(0);
  const [test, setTest] = useState([]);

  useEffect(() => {
    const allStack = [
      "Frontend Developer 💖",
      "Backend Developer 👩‍💻",
      "2D Unity Game Developer 🎮",
      "Graphics Designer 🎨",
      "C# Developer 💚",
    ];
    setCurrentStack(allStack[index]);

    const interval = setInterval(() => {
      if (index === allStack.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }

      setTypingIndex(0);
      clearInterval(interval);
    // }, allStack[index].length * 500 - 5000);
    }, 2000);

    // function typingEffect() {

    // }
  }, [index, test]);

  return (
    <>
      <span className="relative font-extrabold text-orange-400" id="stack">
        {currentStack}
      </span>
    </>
  );
};

export default StackWrite;
