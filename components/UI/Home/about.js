"use client";
import Star from "@/components/Common/Icons/star";
import WidthClamp from "@/components/Common/Shared/width-clamp";
import {
  TransitionFromRight,
  TransitionOpacity,
  TransitionOpacityInView,
  TransitionParent,
  TransitionParentFast,
  TransitionReveal,
} from "@/lib/utils/transitions";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import skills from "@/lib/store/skills";
import { useStore } from "@/lib/utils/providers";

const About = () => {
  const { homeRef } = useStore();

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#about_",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: "#about_",
          start: "top bottom",
          end: "+=300",
          scrub: 1,
        },
      });

      tl.to(".star_icon", { rotate: 360 });
      tl2.from("#about_text", { xPercent: -100, opacity: 0 });

      const statTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#stats",
          start: "top center",
          end: "+=500",
          scrub: 1,
        },
      });

      statTl.to("#stats", { width: "100%", height: "100%", color: "black", borderRadius: 0 }).to(
        "#home_bg",
        {
          backgroundColor: "#E9DFCE",
        },
        0
      );
    }, homeRef);

    return () => cxt.revert();
  });

  return (
    <>
      <section className="relative min-h-screen pt-[15rem]" id="about_">
        <div>
          <h3
            className="absolute top-0 -left-5 -z-10 font-extrabold text-[9rem] text-primaryBlack-200/70"
            id="about_text"
          >
            About
          </h3>

          <div className="absolute top-0 right-20 -z-10 star_icon">
            <Star />
          </div>

          <WidthClamp>
            <div className="z-50 grid items-center grid-cols-2 gap-16">
              <TransitionReveal addClass="space-y-8">
                <p className="text-lg leading-loose text-primary/80">
                  <span className="text-4xl font-semibold leading-normal">Hi</span> I&lsquo;m Benjamin Nkem, a Fullstack
                  Web Developer and Unity Game Developer born and brought up in Nigeria. I work remotely for private
                  clients and companies, by developing high quality web apps for any type of brand or business.
                </p>

                <div>
                  <a download={true} href={"/docs/Nkem_Benjamin_Resume.pdf"}>
                    <button className="flex items-center gap-2 px-4 py-2 transition-colors duration-300 bg-transparent border rounded-md hover:bg-primary hover:text-primaryBlack-100 border-primary text-primary">
                      <span>Download CV</span> <DownloadIcon />
                    </button>
                  </a>
                </div>
              </TransitionReveal>
              <TransitionReveal addClass="grid p-4 place-content-center relative" delay={0.2}>
                <div className="absolute top-0 left-4 -z-10 star_icon">
                  <Star />
                </div>

                <div className="absolute top-0 left-0 grid w-full h-full place-content-center">
                  <div className="w-[300px] h-[300px] rounded-full flex items-center overflow-hidden border-8 border-primary/20">
                    <Image
                      src={"/images/bg/me.jpg"}
                      alt="benjamin nkem"
                      width={300}
                      height={300}
                      className="w-full h-[150%] object-cover"
                      draggable={false}
                    />
                  </div>
                </div>
              </TransitionReveal>
            </div>
          </WidthClamp>
        </div>
      </section>

      <div className="w-10 h-10 mx-auto overflow-hidden rounded-full bg-primary text-primary py-[10rem]" id="stats">
        <section className="h-screen" id="about">
          <div className="py-10">
            <div className="md:max-w-[1488px] w-11/12 mx-auto min-h-[32rem]">
              <div>
                <TransitionOpacityInView addClass="flex items-center justify-center">
                  <span className="flex-1 h-1 rounded-md bg-primary"></span>
                  <h3 className="px-4 mb-5 text-4xl font-bold uppercase">
                    About Me<span className="text-primary">.</span>
                  </h3>
                  <span className="flex-1 h-1 rounded-md bg-primary"></span>
                </TransitionOpacityInView>

                <div className="grid md:grid-cols-2">
                  <div className="p-4 border-b border-opacity-50 md:border-r md:border-b-0 border-cyan-50">
                    <TransitionParent>
                      <TransitionFromRight>
                        <p>
                          I strive to create seamless user experiences by combining my strong problem-solving abilities
                          with a keen eye for design aesthetics. <br /> <br />
                        </p>
                      </TransitionFromRight>
                      <TransitionFromRight>
                        <p>
                          Outside the coding/development space, I read books, play games, watch movies and explore
                          trending technologies.
                          <br /> <br />
                        </p>
                      </TransitionFromRight>

                      <TransitionFromRight>
                        <p>
                          If you&apos;re interested in recruiting me to work on a project/company, I&apos;m open for
                          offers! Let&apos;s Connect <i className="ri-link-m"></i>
                        </p>
                      </TransitionFromRight>

                      <TransitionFromRight addClass="mt-4">
                        <Link href={"/contact"}>
                          <button className="px-4 py-2 mt-4 duration-200 border rounded-md border-primary hover:bg-cyan-600 text-cyan-50">
                            Contact Me <i className="ri-link-m"></i>
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

                        <TransitionParentFast addClass="flex flex-wrap items-center gap-2">
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

                        <TransitionParentFast addClass="flex flex-wrap items-center gap-2">
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
                          <h3 className="px-4 mb-2 text-2xl font-bold text-center">Databases</h3>
                          <span className="w-2 h-2 rounded-full bg-primary"></span>
                        </TransitionOpacityInView>

                        <TransitionParentFast addClass="flex flex-wrap items-center gap-2">
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
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
