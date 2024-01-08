"use client";
import Intro from "./intro";
import About from "./about";
import Skills from "./skills";
import PersonalStats from "./personal-stats";
import Education from "./education";
import Projects from "./projects";
import Offer from "./offer";

import "./styles/HomePage.css";
import Services from "./services";

const HomeContent = () => {
  return (
    <main className="relative">
      <div id="home_bg" className="fixed top-0 left-0 w-full h-full bg-[#1e2125] -z-[10]"></div>

      <Intro />
      <About />
      <Skills />
      <PersonalStats />
      <Education />
      <Projects />
      {/* <Services /> */}
      {/* <Offer /> */}
    </main>
  );
};

export default HomeContent;
