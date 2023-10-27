"use client";

import { useEffect } from "react";

const StackAnim = () => {
  const skills = ["Frontend Developer 💖", "UI/UX Designer 🎨", "Backend Developer 👩‍💻", "2D Unity Game Developer 🎮"];

  const animControl = () => {
    const spanText = document.querySelector("#stack");
    let totalTimeForAnimation = 100;
    let currentSkillsIndex = 0;

    setInterval(() => {
      spanText.textContent = skills[currentSkillsIndex];

      // if (currentSkillsIndex < skills.length - 1) {
      //   currentSkillsIndex++;
      //   spanText.textContent = skills[currentSkillsIndex];
      // } else {
      //   currentSkillsIndex = 0;
      //   spanText.textContent = skills[currentSkillsIndex];
      // }
    }, totalTimeForAnimation);
  };

  useEffect(() => {
    animControl();
    return undefined;
  });
};

export default StackAnim;
