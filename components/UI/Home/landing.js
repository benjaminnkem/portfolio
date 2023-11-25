"use client";
import WidthClamp from "@/components/Common/Shared/width-clamp";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Landing = () => {
  const meRef = useRef(null);

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".land_t", { yPercent: 100, opacity: 0, stagger: { amount: 0.5 } });
    }, meRef);

    return () => cxt.revert();
  }, []);

  return (
    <WidthClamp>
      <section className="flex justify-center min-h-screen mt-[4rem] section p-4" id="me" ref={meRef}>
        <div>
          <div
            className={`space-y-1 font-extrabold text-primary text-[10rem] tracking-wider leading-tight text-center`}
          >
            <div className="overflow-hidden">
              <p className={`land_t`}>CRAFTING</p>
            </div>
            <div className="overflow-hidden">
              <p>MODERNIZED</p>
            </div>
          </div>
          <div className="text-center flex gap-2 justify-center">
            <span className="text-4xl">Websites</span>
            <span>For your brand.</span>
          </div>
        </div>
      </section>
    </WidthClamp>
  );
};

export default Landing;
