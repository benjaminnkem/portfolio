"use client";
import Star from "@/components/Common/Icons/star";
import { TransitionReveal } from "@/lib/utils/transitions";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { DownloadIcon } from "lucide-react";
import Image from "next/image";

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
    }, homeRef);

    return () => cxt.revert();
  }, []);

  return (
    <>
      <div className="h-[4rem] bg-gradient-to-t pt-[15rem] from-black"></div>
      <section className="relative min-h-screen bg-black" id="about_">
        <div>
          <h3
            className="absolute -top-[15rem] z-[10] -left-5 font-extrabold md:text-[9rem] text-[6rem] text-primaryBlack-200/70"
            id="about_text"
          >
            About
          </h3>

          <div className="absolute top-0 right-20 -z-10 star_icon">
            <Star />
          </div>

          <div class="container">
            <div className="z-50 flex flex-col-reverse items-center grid-cols-2 gap-16 md:grid">
              <TransitionReveal addClass="space-y-8">
                <p className="text-lg leading-loose text-primary/80">
                  <span className="text-4xl font-semibold leading-normal">Hi</span> I&lsquo;m Benjamin Nkem, a Fullstack
                  Web Developer and Unity Game Developer born and brought up in Nigeria. I work remotely for private
                  clients and companies, by developing high quality web apps for any type of brand or business.
                </p>

                <div className="w-fit">
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

                <div className="top-0 left-0 grid w-full h-full md:absolute place-content-center">
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
          </div>
        </div>
      </section>

      <div className="reset_bg"></div>
    </>
  );
};

export default About;
// w-10 h-10 mx-auto overflow-hidden rounded-full bg-primary text-primary py-[10rem]
