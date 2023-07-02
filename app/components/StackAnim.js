"use client";

import { useEffect } from "react";

const StackAnim = () => {
  const skills = [
    "Frontend Developer 💖",
    "UI/UX Designer 🎨🖼",
    "Backend Developer 👩‍💻",
    "2D Unity Game Developer 🎮🎯",
  ];

  const animControl = () => {
    const spanText = document.querySelector("#stack");
    let totalTimeForAnimation = 1000;
    let currentSkillsIndex = 0;

    spanText.textContent = skills[currentSkillsIndex];
    setInterval(() => {
      if (currentSkillsIndex === skills.length) {
        currentSkillsIndex = 0;
        return;
      }

      currentSkillsIndex++;
      spanText.textContent = skills[currentSkillsIndex];
    }, totalTimeForAnimation);
  };

  useEffect(() => animControl(), []);
  return null;
};

export default StackAnim;
