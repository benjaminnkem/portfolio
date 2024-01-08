import {
  TransitionFromRight,
  TransitionOpacity,
  TransitionOpacityInView,
  TransitionParent,
  TransitionParentFast,
} from "@/lib/utils/transitions";
import Link from "next/link";
import skills from "@/lib/store/skills";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Skills = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "+=200",
          scrub: 1,
        },
      });

      tl2.from("#summary_text", { xPercent: -100, opacity: 0 });
    }, ref);

    return () => cxt.revert();
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-black" id="stats">
      <section className="min-h-screen relative" id="about" ref={ref}>
        <h3
          className="absolute -top-[15rem] z-[10] -left-5 font-extrabold md:text-[9rem] text-[6rem] text-primaryBlack-200/70"
          id="summary_text"
        >
          Summary
        </h3>

        <div className="py-10">
          <div className="container min-h-[32rem]">
            <div className="grid md:grid-cols-2">
              <div className="p-4 border-b border-opacity-50 md:border-r md:border-b-0 border-cyan-50">
                <TransitionParent>
                  <TransitionFromRight>
                    <p>
                      I strive to create seamless user experiences by combining my strong problem-solving abilities with
                      a keen eye for design aesthetics. <br /> <br />
                    </p>
                  </TransitionFromRight>
                  <TransitionFromRight>
                    <p>
                      Outside the coding/development space, I read books, go for walks to find inspiration, read
                      documentaries and explore trending technologies.
                      <br /> <br />
                    </p>
                  </TransitionFromRight>

                  <TransitionFromRight>
                    <p>
                      If you&apos;re interested in recruiting me to work on a project/company, I&apos;m open for offers!
                      Let&apos;s Connect <i className="ri-link-m"></i>
                    </p>
                  </TransitionFromRight>

                  <TransitionFromRight addClass="mt-4">
                    <Link href={"/contact"}>
                      <button className="px-4 md:py-2 py-[6px] mt-4 duration-200 border rounded-xl border-primary hover:bg-primary/90">
                        Contact Me
                      </button>
                    </Link>
                  </TransitionFromRight>
                </TransitionParent>
              </div>

              <div className="p-4">
                <div className="space-y-6">
                  <div>
                    <TransitionOpacityInView addClass="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <h3 className="px-4 mb-2 text-2xl font-bold text-center">Frontend Skills</h3>
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                    </TransitionOpacityInView>

                    <TransitionParentFast addClass="flex flex-wrap items-center gap-4">
                      {skills.frontend.map((skill, idx) => (
                        <TransitionOpacity key={idx}>
                          <div className="inline-block px-2 py-2 duration-200 border-b-2 rounded-md cursor-pointer border-primary hover:bg-white hover:text-black">
                            {skill.icon} <span>{skill.label}</span>
                          </div>
                        </TransitionOpacity>
                      ))}
                    </TransitionParentFast>
                  </div>

                  <div>
                    <TransitionOpacityInView addClass="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <h3 className="px-4 mb-2 text-2xl font-bold text-center">Backend Skills</h3>
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                    </TransitionOpacityInView>

                    <TransitionParentFast addClass="flex flex-wrap items-center gap-4">
                      {skills.backend.map((skill, idx) => (
                        <TransitionOpacity key={idx}>
                          <div className="inline-block px-2 py-2 duration-200 border-b-2 rounded-md cursor-pointer border-primary hover:bg-white hover:text-black">
                            {skill.icon} <span>{skill.label}</span>
                          </div>
                        </TransitionOpacity>
                      ))}
                    </TransitionParentFast>
                  </div>

                  <div>
                    <TransitionOpacityInView addClass="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <h3 className="px-4 mb-2 text-2xl font-bold text-center">Others</h3>
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                    </TransitionOpacityInView>

                    <TransitionParentFast addClass="flex flex-wrap items-center gap-4">
                      {skills.others.map((skill, idx) => (
                        <TransitionOpacity key={idx}>
                          <div className="inline-block px-2 py-2 duration-200 border-b-2 rounded-md cursor-pointer border-primary hover:bg-white hover:text-black">
                            {skill.icon} <span>{skill.label}</span>
                          </div>
                        </TransitionOpacity>
                      ))}
                    </TransitionParentFast>
                  </div>

                  <div>
                    <TransitionOpacityInView addClass="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <h3 className="px-4 mb-2 text-2xl font-bold text-center">Databases</h3>
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                    </TransitionOpacityInView>

                    <TransitionParentFast addClass="flex flex-wrap items-center gap-4">
                      {skills.databases.map((skill, idx) => (
                        <TransitionOpacity key={idx}>
                          <div className="inline-block px-2 py-2 duration-200 border-b-2 rounded-md cursor-pointer border-primary hover:bg-white hover:text-black">
                            {skill.icon} <span>{skill.label}</span>
                          </div>
                        </TransitionOpacity>
                      ))}
                    </TransitionParentFast>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
