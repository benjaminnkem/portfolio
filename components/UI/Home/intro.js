"use client";
import WidthClamp from "@/components/Common/Shared/width-clamp";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { cormorant } from "@/lib/utils/fonts";

const Intro = () => {
  const meRef = useRef(null);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      gsap
        .timeline()
        .set(meRef.current, { visibility: "visible", delay: 0.3 })
        .from(".land_t", { xPercent: 100, opacity: 0, ease: "power1.inOut", duration: 1 })
        .from(
          ".land_modern",
          {
            xPercent: -100,
            opacity: 0,
            ease: "power1.inOut",
            duration: 1,
          },
          0.1
        )
        .from("#dev_text", { yPercent: -100, opacity: 0, ease: "power1.inOut" })
        .from(".land_likkle span", {
          y: 100,
          ease: "power4.out",
          skewY: 7,
          duration: 1,
          stagger: {
            amount: 0.3,
          },
        });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: meRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      tl.to("#dev_text", { yPercent: -100, opacity: 0 })
        .to(".land_t", { xPercent: -100, opacity: 0 }, 0)
        .to(".land_modern", { xPercent: 100, opacity: 0 }, 0)
        .to(".land_likkle", { opacity: 0, yPercent: 100, duration: 0.1 }, 0);
    }, meRef);

    return () => cxt.revert();
  }, []);

  return (
    <div className="container">
      <section className="flex items-center justify-center min-h-screen p-4 section invisible" id="me" ref={meRef}>
        <div>
          <h1 className={`${cormorant.className} text-center font-semibold`} id="dev_text">
            FullStack Web Developer
          </h1>
          <div
            className={`space-y-1 font-extrabold text-primary lg:text-[10rem] md:text-[7rem] sm:text-[6rem] text-[15vw] tracking-wider leading-tight text-center`}
          >
            <p className={`land_t`}>CRAFTING</p>
            <p className="land_modern">MODERNIZED</p>
          </div>
          <div className="flex justify-center gap-2 overflow-hidden text-center land_likkle">
            <span className={`${cormorant.className} font-bold md:text-7xl text-4xl`}>Websites</span>
            <span>
              For your <span className="font-bold">business/brand</span>.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
