import { useNavbar } from "@/components/Layout/Navbar";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

const Services = () => {
  const ref = useRef(null);
  const { toggleColor } = useNavbar();

  useLayoutEffect(() => {
    const cxt = gsap.context(() => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "+=300",
          scrub: 1,
        },
      });

      t1.from("#reveal_circle", {
        opacity: 1,
        onComplete: () => toggleColor(),
        onReverseComplete: () => toggleColor(),
      });
    }, ref);

    return () => cxt.revert();
  }, []);

  return (
    <section ref={ref} className="my-24">
      <div
        className="w-screen h-screen xl:h-[20rem] bg-gradient-to-t from-primary via-[#f0eade7a]"
        id="reveal_circle"
      ></div>
      <div className="h-screen w-full bg-primary"></div>
    </section>
  );
};

export default Services;
