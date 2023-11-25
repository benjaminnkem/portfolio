import socialLinks from "@/lib/store/social-links";
import { TransitionOpacity, TransitionParent } from "@/lib/utils/transitions";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Landing = () => {
  return (
    <section className="md:max-w-[1488px] w-11/12 flex justify-center mx-auto min-h-screen section" id="me">
      <div className="items-center justify-between w-full gap-2 sm:flex sm:gap-4">
        <TransitionParent addClass="max-w-2xl py-10 space-y-3 text-center md:text-start md:py-0">
          <TransitionOpacity>
            <h2 className="text-5xl font-extrabold sm:text-6xl lg:text-7xl text-shadow">
              Hi, I&apos;m <span id="ben">Ben</span>
              <span className="text-cyan-500">.</span>
            </h2>
            <p className="mt-1 text-xl select-none text-shadow md:text-3xl">
              I&apos;m a{" "}
              <span className="relative font-extrabold text-cyan-400" id="stack">
                <TypeAnimation
                  sequence={[
                    "Frontend Developer 🌎",
                    1000,
                    "Backend Developer 👷",
                    1000,
                    "2D Unity Game Developer 🎮",
                    1500,
                    // "C# Developer 💙",
                    // 1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>
          </TransitionOpacity>

          <TransitionOpacity>
            <p className="text-base sm:text-lg text-shadow">
              I&apos;m A Fullstack Web <span className="font-bold text-cyan-500">Developer</span>. I build responsive,{" "}
              <span className="font-bold text-cyan-500">highly scalable</span> and maintainable web applications.
            </p>
          </TransitionOpacity>

          <TransitionOpacity>
            <p className="mt-4 md:mt-8">
              Ready to take your <span className="font-bold text-cyan-500">brand/project</span> to the next level?
              I&apos;m the guy for the job<span className="font-bold text-cyan-500">.</span> 😉
            </p>
          </TransitionOpacity>

          <TransitionOpacity addClass="mt-4">
            <Link href={"/contact"}>
              <button className="px-3 py-1 panel-c text-cyan-500 duration-200 border border-cyan-500 hover:text-cyan-50 bg-[#0f0f0fe6]">
                Hire Me <i className="ri-rocket-line"></i>
              </button>
            </Link>
          </TransitionOpacity>
        </TransitionParent>

        <div>
          <TransitionParent addClass="flex sm:flex-col justify-center items-center sm:justify-start space-x-4 sm:space-x-0 sm:space-y-6 overflow-hidden">
            {socialLinks.map((social, idx) => (
              <TransitionOpacity key={idx}>
                <Link href={social.link} target="_blank" title={social.title}>
                  {social.icon}
                </Link>
              </TransitionOpacity>
            ))}
          </TransitionParent>
        </div>
      </div>
    </section>
  );
};

export default Landing;
