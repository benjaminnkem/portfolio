"use client";
import education from "@/utils/store/education";
import projectPreviews from "@/utils/store/project-previews";
import services from "@/utils/store/services";
import skills from "@/utils/store/skills";
import socialLinks from "@/utils/store/social-liks";
import stats from "@/utils/store/stats";
import {
  TransitionParent,
  TransitionFromRight,
  TransitionOpacity,
  TransitionOpacityInView,
  TransitionParentFast,
  TransitionFromBottom,
} from "@/utils/transitions";
import { fromRightVariant } from "@/utils/variants";
import { faCalendarDays, faEarth, faExpand, faRocket, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const item = { hidden: { opacity: 0 }, show: { opacity: 1 } };

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const HomeContent = () => {
  return (
    <>
      <section className="md:max-w-[1024px] w-11/12 flex justify-center mx-auto min-h-screen section" id="me">
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
                      1000,
                      "C# Developer 💙",
                      1000,
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

      <section className="min-h-screen" id="about">
        <div className="bg-[#0f0f0fe6] py-10">
          <div className="md:max-w-[1024px] w-11/12 mx-auto min-h-[32rem]">
            <div>
              <TransitionOpacityInView addClass="flex items-center justify-center">
                <span className="flex-1 h-1 rounded-md bg-cyan-500"></span>
                <h3 className="px-4 mb-5 text-4xl font-bold uppercase">
                  About Me<span className="text-cyan-500">.</span>
                </h3>
                <span className="flex-1 h-1 rounded-md bg-cyan-500"></span>
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
                        <button className="px-4 py-2 mt-4 duration-200 border rounded-md border-cyan-500 hover:bg-cyan-600 text-cyan-50">
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
                        <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                        <h3 className="px-4 mb-2 text-2xl font-bold text-center">Frontend Skills</h3>
                        <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                      </TransitionOpacityInView>

                      <TransitionParentFast addClass="flex flex-wrap items-center gap-2">
                        {skills.frontend.map((skill, idx) => (
                          <TransitionOpacity key={idx}>
                            <div className="inline-block px-2 py-2 duration-200 border-b-2 rounded-md cursor-pointer border-cyan-500 hover:bg-white hover:text-black">
                              {skill.icon} <span>{skill.label}</span>
                            </div>
                          </TransitionOpacity>
                        ))}
                      </TransitionParentFast>
                    </div>

                    <div>
                      <TransitionOpacityInView addClass="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                        <h3 className="px-4 mb-2 text-2xl font-bold text-center">Backend Skills</h3>
                        <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                      </TransitionOpacityInView>

                      <TransitionParentFast addClass="flex flex-wrap items-center gap-2">
                        {skills.backend.map((skill, idx) => (
                          <TransitionOpacity key={idx}>
                            <div className="inline-block px-2 py-2 duration-200 border-b-2 rounded-md cursor-pointer border-cyan-500 hover:bg-white hover:text-black">
                              {skill.icon} <span>{skill.label}</span>
                            </div>
                          </TransitionOpacity>
                        ))}
                      </TransitionParentFast>
                    </div>

                    <div>
                      <TransitionOpacityInView addClass="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                        <h3 className="px-4 mb-2 text-2xl font-bold text-center">Databases</h3>
                        <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                      </TransitionOpacityInView>

                      <TransitionParentFast addClass="flex flex-wrap items-center gap-2">
                        {skills.databases.map((skill, idx) => (
                          <TransitionOpacity key={idx}>
                            <div className="inline-block px-2 py-2 duration-200 border-b-2 rounded-md cursor-pointer border-cyan-500 hover:bg-white hover:text-black">
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

      {/* Statistics */}
      <section className="my-10 section" id="stats__">
        <div className="md:max-w-[1024px] w-11/12 flex justify-center mx-auto min-h-[32rem]">
          <div>
            <TransitionOpacityInView>
              <h3 className="mb-5 text-3xl font-bold text-center uppercase md:text-4xl md:text-start">
                Personal Stats<span className="text-cyan-500">.</span>
              </h3>
            </TransitionOpacityInView>

            <TransitionParent addClass="grid grid-cols-1 gap-6 md:grid-cols-2">
              <TransitionFromBottom addClass="p-4 border border-cyan-500 rounded-md bg-[#0f0f0f6f]">
                <h3 className="mb-4 text-3xl font-bold">
                  Languages<span className="font-semibold text-cyan-500">.</span>
                </h3>
                <TransitionParent addClass="space-y-8">
                  {stats.languages.map((stat, idx) => (
                    <TransitionOpacity key={idx} addClass="grid items-center gap-10 grid-cols-7">
                      <p className="col-span-1 font-semibold">{stat.label}</p>
                      <div className="h-4 col-span-5 overflow-hidden border rounded-md border-cyan-500">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: stat.percentage }}
                          transition={{ type: "linear", duration: 1 }}
                          className="w-full h-2 duration-200 bg-cyan-500 rounded-r-md"
                        ></motion.div>
                      </div>
                      <p className="col-span-1">{stat.percentage}</p>
                    </TransitionOpacity>
                  ))}
                </TransitionParent>
              </TransitionFromBottom>

              <TransitionFromBottom addClass="p-4 border border-cyan-500 rounded-md bg-[#0f0f0f6f]">
                <h3 className="mb-4 text-3xl font-bold">
                  Hobbies<span className="font-semibold text-cyan-500">.</span>
                </h3>
                <TransitionParent addClass="space-y-8">
                  {stats.hobbies.map((stat, idx) => (
                    <TransitionOpacity key={idx} addClass="grid items-center gap-10 grid-cols-7">
                      <p className="col-span-1 font-semibold">{stat.label}</p>
                      <div className="h-4 col-span-5 overflow-hidden border rounded-md border-cyan-500">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: stat.percentage }}
                          transition={{ type: "linear", duration: 1 }}
                          className="w-full h-2 duration-200 bg-cyan-500 rounded-r-md"
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

      <section className="md:max-w-[1024px] w-11/12 my-20 mx-auto">
        <h3 className="px-6 mb-5 text-3xl font-bold uppercase md:text-4xl text-start">
          Education<span className="text-cyan-500">.</span>
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
              <span className="hidden duration-200 bullet-edu sm:block bg-cyan-100 group-hover:bg-cyan-500"></span>
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
      <section className="md:max-w-[1024px] w-11/12 my-20 mx-auto">
        <TransitionOpacityInView>
          <h3 className="px-6 mb-5 text-3xl font-bold uppercase md:text-4xl text-start">
            Projects <span className="text-cyan-500">.</span>
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
              <span className="hidden duration-200 bullet-edu sm:block bg-cyan-100 group-hover:bg-cyan-500"></span>
              <div className="p-2 rounded-md bg-[#0f0f0f6f] duration-200 opacity-90 space-y-2">
                <div className="w-full overflow-hidden border border-opacity-25 rounded-lg border-cyan-500">
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
                    <p className="flex items-center px-2 py-1 space-x-1 text-sm duration-200 border rounded-md border-cyan-500 hover:bg-cyan-500 hover:text-black">
                      <span>View</span> <FontAwesomeIcon icon={faExpand} />
                    </p>
                  </Link>
                </div>

                <>{project.descriptionContent}</>

                <div className="flex flex-wrap">
                  {project.techStack.map((tech, idx) => (
                    <p
                      key={idx}
                      className="px-2 py-1 mt-2 mr-2 text-sm duration-200 border border-white border-opacity-25 cursor-pointer hover:bg-cyan-500 hover:text-black hover:border-transparent rounded-xl"
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
            <button className="px-3 py-1 duration-200 border rounded-sm text-cyan-500 border-cyan-600 hover:bg-cyan-600 hover:text-black group">
              View More Projects <i className="ri-arrow-right-circle-line"></i>
            </button>
          </Link>
        </motion.div>
      </section>

      <section className="md:max-w-[1024px] w-11/12 my-20 mx-auto">
        <div className="mb-5">
          <h3 className="text-3xl font-bold uppercase md:text-4xl text-start">
            Services<span className="text-cyan-500">.</span>
          </h3>
          <p className="text-sm font-semibold text-cyan-500">What I Offer.</p>
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
    </>
  );
};

export default HomeContent;
