"use client";
import education from "@/lib/store/education";
import projectPreviews from "@/lib/store/project-previews";
import services from "@/lib/store/services";
import stats from "@/lib/store/stats";
import {
  TransitionParent,
  TransitionOpacity,
  TransitionOpacityInView,
  TransitionFromBottom,
} from "@/lib/utils/transitions";
import { faCalendarDays, faExpand } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Intro from "./intro";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import About from "./about";

gsap.registerPlugin(ScrollTrigger);

const HomeContent = () => {
  return (
    <main className="relative">
      {/* Background */}
      <div id="home_bg" className="fixed top-0 left-0 w-full h-full bg-primaryBlack -z-[10]"></div>

      <Intro />
      <About />

      {/* Statistics */}
      <section className="my-10 section" id="stats__">
        <div className="md:max-w-[1488px] w-11/12 flex justify-center mx-auto min-h-[32rem]">
          <div>
            <TransitionOpacityInView>
              <h3 className="mb-5 text-3xl font-bold text-center uppercase md:text-4xl md:text-start">
                Personal Stats<span className="text-primary">.</span>
              </h3>
            </TransitionOpacityInView>

            <TransitionParent addClass="grid grid-cols-1 gap-6 md:grid-cols-2">
              <TransitionFromBottom addClass="p-4 border border-primary rounded-md bg-[#0f0f0f6f]">
                <h3 className="mb-4 text-3xl font-bold">
                  Languages<span className="font-semibold text-primary">.</span>
                </h3>
                <TransitionParent addClass="space-y-8">
                  {stats.languages.map((stat, idx) => (
                    <TransitionOpacity key={idx} addClass="grid items-center gap-10 grid-cols-7">
                      <p className="col-span-1 font-semibold">{stat.label}</p>
                      <div className="h-4 col-span-5 overflow-hidden border rounded-md border-primary">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: stat.percentage }}
                          transition={{ type: "linear", duration: 1 }}
                          className="w-full h-2 duration-200 bg-primary rounded-r-md"
                        ></motion.div>
                      </div>
                      <p className="col-span-1">{stat.percentage}</p>
                    </TransitionOpacity>
                  ))}
                </TransitionParent>
              </TransitionFromBottom>

              <TransitionFromBottom addClass="p-4 border border-primary rounded-md bg-[#0f0f0f6f]">
                <h3 className="mb-4 text-3xl font-bold">
                  Hobbies<span className="font-semibold text-primary">.</span>
                </h3>
                <TransitionParent addClass="space-y-8">
                  {stats.hobbies.map((stat, idx) => (
                    <TransitionOpacity key={idx} addClass="grid items-center gap-10 grid-cols-7">
                      <p className="col-span-1 font-semibold">{stat.label}</p>
                      <div className="h-4 col-span-5 overflow-hidden border rounded-md border-primary">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: stat.percentage }}
                          transition={{ type: "linear", duration: 1 }}
                          className="w-full h-2 duration-200 bg-primary rounded-r-md"
                        ></motion.div>
                      </div>
                      <p className="col-span-1">{stat.percentage}</p>
                    </TransitionOpacity>
                  ))}
                </TransitionParent>
              </TransitionFromBottom>
            </TransitionParent>
          </div>
        </div>
      </section>

      <section className="md:max-w-[1488px] w-11/12 my-20 mx-auto">
        <h3 className="px-6 mb-5 text-3xl font-bold uppercase md:text-4xl text-start">
          Education<span className="text-primary">.</span>
        </h3>

        <div className="relative timeline">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ x: (idx + 1) % 2 === 0 ? 100 : -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className={
                (idx + 1) % 2 === 0
                  ? `relative w-full p-6 sm:w-1/2 sm:left-1/2 right-con group`
                  : `relative left-0 w-full p-6 sm:w-1/2 group`
              }
            >
              <span className="hidden duration-200 bullet-edu sm:block bg-cyan-100 group-hover:bg-primary"></span>
              <div className="p-2 rounded-md bg-[#0f0f0f6f] duration-200 opacity-90">
                <h4 className="text-xl font-bold">{edu.title}</h4>
                <p className="mt-2">{edu.institution}</p>

                <div className="flex items-center mt-4 opacity-75 text-slate-300">
                  <span>
                    <FontAwesomeIcon icon={faCalendarDays} />
                  </span>{" "}
                  <span className="ml-2">{edu.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="md:max-w-[1488px] w-11/12 my-20 mx-auto">
        <TransitionOpacityInView>
          <h3 className="px-6 mb-5 text-3xl font-bold uppercase md:text-4xl text-start">
            Projects <span className="text-primary">.</span>
          </h3>
        </TransitionOpacityInView>

        <div className="relative timeline">
          {projectPreviews.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ x: (idx + 1) % 2 === 0 ? 100 : -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.5, damping: 6 }}
              className={
                (idx + 1) % 2 === 0
                  ? `relative w-full p-6 sm:w-1/2 sm:left-1/2 right-con group`
                  : `relative left-0 w-full p-6 sm:w-1/2 group`
              }
            >
              <span className="hidden duration-200 bullet-edu sm:block bg-cyan-100 group-hover:bg-primary"></span>
              <div className="p-2 rounded-md bg-[#0f0f0f6f] duration-200 opacity-90 space-y-2">
                <div className="w-full overflow-hidden border border-opacity-25 rounded-lg border-primary">
                  <Image
                    src={project.imageSrc}
                    alt={project.imageText}
                    width={500}
                    height={500}
                    className="object-cover w-full"
                    draggable="false"
                  ></Image>
                </div>

                <div className="flex items-center justify-between py-2">
                  <h4 className="text-2xl font-bold">{project.name}</h4>

                  <Link href={project.viewLink}>
                    <p className="flex items-center px-2 py-1 space-x-1 text-sm duration-200 border rounded-md border-primary hover:bg-primary hover:text-black">
                      <span>View</span> <FontAwesomeIcon icon={faExpand} />
                    </p>
                  </Link>
                </div>

                <>{project.descriptionContent}</>

                <div className="flex flex-wrap">
                  {project.techStack.map((tech, idx) => (
                    <p
                      key={idx}
                      className="px-2 py-1 mt-2 mr-2 text-sm duration-200 border border-white border-opacity-25 cursor-pointer hover:bg-primary hover:text-black hover:border-transparent rounded-xl"
                    >
                      {tech}
                    </p>
                  ))}
                </div>

                <div className="flex items-center mt-4 opacity-75 text-slate-300">
                  <span>
                    <FontAwesomeIcon icon={faCalendarDays} />
                  </span>{" "}
                  <span className="ml-2">{project.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 text-center">
          <Link href={"/projects"}>
            <button className="px-3 py-1 duration-200 border rounded-sm text-primary border-cyan-600 hover:bg-cyan-600 hover:text-black group">
              View More Projects <i className="ri-arrow-right-circle-line"></i>
            </button>
          </Link>
        </motion.div>
      </section>

      <section className="md:max-w-[1488px] w-11/12 my-20 mx-auto">
        <div className="mb-5">
          <h3 className="text-3xl font-bold uppercase md:text-4xl text-start">
            Services<span className="text-primary">.</span>
          </h3>
          <p className="text-sm font-semibold text-primary">What I Offer.</p>
        </div>

        <TransitionParent addClass="grid grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2">
          {services.map((service, idx) => (
            <TransitionFromBottom
              key={idx}
              addClass="p-6 rounded-md shadow-sm hover:border-cyan-600 border-2 border-transparent duration-200 group shadow-cyan-600 self-start bg-[#0f0f0f94]"
            >
              <div className="space-y-5 text-cyan-100">
                <>{service.icon}</>

                <h4 className="text-3xl font-semibold">{service.type}</h4>
                <>{service.description}</>
              </div>
            </TransitionFromBottom>
          ))}
        </TransitionParent>
      </section>

      {/* Three */}
      <canvas className="bg-transparent border-none canva"></canvas>
    </main>
  );
};

export default HomeContent;
