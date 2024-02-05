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
      <section className="relative min-h-screen" id="about" ref={ref}>
        <h3
          className="absolute md:-top-[15rem] top-8 z-[10] -left-5 font-extrabold md:text-[9rem] text-[6rem] text-primaryBlack-200/70"
          id="summary_text"
        >
          Summary
        </h3>

        <div className="pb-10 pt-[12rem]">
          <div className="container min-h-[32rem] space-y-28">
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
            </div>

            <div>
              <TransitionOpacityInView addClass="text-4xl mb-2 font-bold">
                <p>Skills</p>
              </TransitionOpacityInView>

              <TransitionParentFast addClass="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-3 grid-cols-2 select-none text-center gap-4">
                {skills.frontend.map((skill, idx) => (
                  <TransitionOpacity key={idx}>
                    <div className="py-5 space-y-1 duration-200 border rounded-md cursor-pointer border-primary/10 hover:bg-primary/10">
                      <div className="grid place-content-center">{skill.icon}</div> <p>{skill.label}</p>
                    </div>
                  </TransitionOpacity>
                ))}
              </TransitionParentFast>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
