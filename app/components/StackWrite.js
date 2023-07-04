"use client";
import { useEffect, useState } from "react";

const StackWrite = () => {
  const [currentStack, setCurrentStack] = useState("");
  const [index, setIndex] = useState(0);

  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const allStack = [
      "Frontend Developer 💖",
      "Backend Developer 👩‍💻",
      "2D Unity Game Developer 🎮",
      "Graphics Designer 🎨",
      "C# Developer 💚",
    ];
    setCurrentStack(allStack[index]);

    let typingInterval;
    const interval = setInterval(() => {
      if (index === allStack.length - 1) {
        setIndex(0);
      } else {
        typingInterval = setInterval(() => {
          for (let i = 0; i < allStack[index].length; i++) {
            console.log(allStack[index]);
          }
        }, allStack[index].length / 2);

        setIndex(index + 1);
      }

      setTypingIndex(0);
      clearInterval(interval);
      clearInterval(typingInterval);
    }, allStack[index].length * 500 + 1000);
  }, [index]);

  return (
    <>
      <span className="relative font-extrabold text-orange-400" id="stack">
        {currentStack}
      </span>
    </>
  );
};

export default StackWrite;
