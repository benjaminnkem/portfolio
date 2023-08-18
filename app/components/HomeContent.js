"use client";
import { faCalendarDays, faEarth, faExpand, faRocket, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = { hidden: { opacity: 0 }, show: { opacity: 1 } };

const logosVariants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
  },
};

const HomeContent = () => {
  return (
    <>
      <section className="md:max-w-[1024px] w-11/12 flex justify-center mx-auto min-h-screen section" id="me">
        <div className="sm:flex justify-between items-center w-full sm:gap-4 gap-2">
          <div className="max-w-2xl py-10 space-y-3 text-center md:text-start md:py-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, type: "linear" }}
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.75, type: "linear" }}
            >
              <p className="sm:text-lg text-base text-shadow">
                I&apos;m A Fullstack Web <span className="text-cyan-500 font-bold">Developer</span>. I build responsive,{" "}
                <span className="text-cyan-500 font-bold">highly scalable</span> and maintainable web applications.
              </p>

              <p className="md:mt-8 mt-4">
                Ready to take your <span className="text-cyan-500 font-bold">brand/project</span> to the next level?
                I&apos;m the guy for the job<span className="text-cyan-500 font-bold">.</span> 😉
              </p>
            </motion.div>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
            >
              <Link href={"/contact"}>
                <button className="px-3 py-1 panel-c text-cyan-500 duration-200 border border-cyan-500 hover:text-cyan-50 bg-[#0f0f0fe6]">
                  Hire Me <i className="ri-rocket-line"></i>
                </button>
              </Link>
            </motion.div>
          </div>

          <div>
            <motion.ul
              variants={container}
              initial={"hidden"}
              whileInView="show"
              viewport={{ once: true }}
              className="flex sm:flex-col justify-center items-center sm:justify-start space-x-4 sm:space-x-0 sm:space-y-6 overflow-hidden"
            >
              <Link href="https://web.facebook.com/etzbenjamin.nkem" target="_blank">
                <motion.li variants={logosVariants} className="overflow-hidden">
                  <i className="ri-facebook-box-fill duration-200 hover:text-cyan-500 text-xl"></i>
                </motion.li>
              </Link>
              <Link href={"https://twitter.com/MainNkem"} target="_blank" title="Meet me on X">
                <motion.li variants={logosVariants} className="overflow-hidden">
                  <i className="duration-200 hover:text-cyan-500 ri-twitter-fill text-xl"></i>
                </motion.li>
              </Link>
              <Link href={"https://wa.me/+2348133961439"} target="_blank" title="Let's talk on WhatsApp">
                <motion.li variants={logosVariants} className="overflow-hidden">
                  <i className="duration-200 hover:text-cyan-500 ri-whatsapp-line text-xl"></i>
                </motion.li>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/benjamin-nkem-23526720b/"}
                target="_blank"
                title="Meet me on LinkedIn"
              >
                <motion.li variants={logosVariants} className="overflow-hidden">
                  <i className="duration-200 hover:text-cyan-500 ri-linkedin-box-fill text-xl"></i>
                </motion.li>
              </Link>
              <Link href={"https://github.com/benjaminnkem"} target="_blank" title="Github">
                <motion.li variants={logosVariants} className="overflow-hidden">
                  <i className="duration-200 hover:text-cyan-500 ri-github-fill text-xl"></i>
                </motion.li>
              </Link>
            </motion.ul>
          </div>
        </div>
      </section>

      <section className="min-h-screen" id="about">
        <div className="bg-[#0f0f0fe6] py-10">
          <div className="md:max-w-[1024px] w-11/12 mx-auto min-h-[32rem]">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 1.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ type: "linear" }}
                className="flex items-center justify-center"
              >
                <span className="flex-1 h-1 bg-cyan-500 rounded-md"></span>
                <h3 className="px-4 mb-5 text-4xl font-bold uppercase">
                  About Me<span className="text-cyan-500">.</span>
                </h3>
                <span className="flex-1 h-1 bg-cyan-500 rounded-md"></span>
              </motion.div>

              <div className="grid md:grid-cols-2">
                <div className="p-4 border-b border-opacity-50 md:border-r md:border-b-0 border-cyan-50">
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: "linear" }}
                    >
                      <p>
                        <span>Hi</span>, My name is <span className="font-bold text-white">Nkem Benjamin</span> and
                        I&apos;m a passionate Fullstack Web Develper, 2D Unity Game Developer residing in Nigeria.
                        I&apos;m also the Developer and Founder of{" "}
                        <Link
                          href={"https://ceelyrics.com"}
                          target="_blank"
                          className="font-bold text-cyan-500 duration-200 hover:text-cyan-400"
                        >
                          Ceelyrics
                        </Link>{" "}
                        I also enjoy exploring new technologies and frameworks to enhance my skills and deliver
                        innovative solutions to clients.
                        <br /> <br />
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: "linear" }}
                    >
                      <p>
                        I strive to create seamless user experiences by combining my strong problem-solving abilities
                        with a keen eye for design aesthetics. <br /> <br />
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: "linear" }}
                    >
                      <p>
                        Outside the coding/development space, I read books, play games, watch movies and explore
                        trending technologies.
                        <br /> <br />
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ type: "linear" }}
                    >
                      <p>
                        If you&apos;re interested in recruiting me to work on a project/company, I&apos;m open for
                        offers! Let&apos;s Connect <i className="ri-link-m"></i>
                      </p>
                    </motion.div>

                    <div className="mt-4">
                      <Link href={"/contact"}>
                        <motion.button
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="px-4 py-2 mt-4 duration-200 border border-cyan-500 rounded-md hover:bg-cyan-600 text-cyan-50"
                        >
                          Contact Me <i className="ri-link-m"></i>
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                          <h3 className="px-4 mb-2 text-2xl font-bold text-center">Frontend Skills</h3>
                          <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                        </div>

                        <div>
                          <motion.ul
                            variants={container}
                            initial={"hidden"}
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex flex-wrap"
                          >
                            <motion.li variants={item}>
                              <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer mr-1 hover:bg-white hover:text-black">
                                <i className="ri-html5-fill"></i> <span>HTML</span>
                              </div>
                            </motion.li>
                            <motion.li variants={item}>
                              <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer mr-1 hover:bg-white hover:text-black">
                                <i className="ri-css3-fill"></i> <span>CSS</span>
                              </div>
                            </motion.li>
                            <motion.li variants={item}>
                              <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer mr-1 hover:bg-white hover:text-black">
                                <i className="ri-css3-fill"></i> <span>Tailwind CSS</span>
                              </div>
                            </motion.li>
                            <motion.li variants={item}>
                              <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer mr-1 hover:bg-white hover:text-black">
                                <i className="ri-css3-fill"></i> <span>Bootstrap</span>
                              </div>
                            </motion.li>
                            <motion.li variants={item}>
                              <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer mr-1 hover:bg-white hover:text-black">
                                <i className="ri-css3-fill"></i> <span>SASS</span>
                              </div>
                            </motion.li>
                            <motion.li variants={item}>
                              <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer mr-1 hover:bg-white hover:text-black">
                                <i className="ri-javascript-fill"></i> <span>Javascript</span>
                              </div>
                            </motion.li>

                            <motion.li variants={item}>
                              <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer mr-1 hover:bg-white hover:text-black">
                                <i className="ri-reactjs-fill"></i> <span>ReactJs</span>
                              </div>
                            </motion.li>
                            <motion.li variants={item}>
                              <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer mr-1 hover:bg-white hover:text-black">
                                <i className="ri-reactjs-fill"></i> <span>NextJs</span>
                              </div>
                            </motion.li>
                          </motion.ul>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                          <h3 className="px-4 mb-2 text-2xl font-bold text-center">Backend Skills</h3>
                          <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                        </div>

                        <div>
                          <motion.ul
                            variants={container}
                            initial={"hidden"}
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex flex-wrap"
                          >
                            <motion.li variants={item}>
                              <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer mr-1 hover:bg-white hover:text-black">
                                <i className="ri-node-tree"></i> <span>NodeJS</span>
                              </div>
                            </motion.li>
                            <motion.li variants={item}>
                              <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer mr-1 hover:bg-white hover:text-black">
                                <span>MongoDB</span>
                              </div>
                            </motion.li>
                            <motion.li variants={item}>
                              <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer mr-1 hover:bg-white hover:text-black">
                                <i className="ri-database-2-line"></i> <span>MySQL</span>
                              </div>
                            </motion.li>
                            <motion.li variants={item}>
                              <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer mr-1 hover:bg-white hover:text-black">
                                <span>Rest APIs</span>
                              </div>
                            </motion.li>
                          </motion.ul>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center">
                          <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                          <h3 className="px-4 mb-2 text-2xl font-bold text-center">Other Skills</h3>
                          <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                        </div>

                        <div>
                          <motion.ul
                            variants={container}
                            initial={"hidden"}
                            whileInView="show"
                            viewport={{ once: true }}
                            className="flex flex-wrap"
                          >
                            <motion.li variants={item}>
                              <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer mr-1 hover:bg-white hover:text-black">
                                <i className="ri-gamepad-line"></i> <span>2D Unity</span>
                              </div>
                            </motion.li>
                          </motion.ul>
                        </div>
                      </div>
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
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, type: "linear" }}
            >
              <h3 className="mb-5 text-3xl font-bold text-center uppercase md:text-4xl md:text-start">
                Personal Stats<span className="text-cyan-500">.</span>
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, type: "linear" }}
              >
                <div className="p-4 border border-cyan-500 rounded-md bg-[#0f0f0f6f]">
                  <h3 className="text-3xl font-bold mb-4">
                    Languages<span className="font-semibold text-cyan-500">.</span>
                  </h3>
                  <div className="space-y-8">
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">English</p>
                      <div className="w-full h-4 overflow-hidden border border-cyan-500 rounded-md">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ type: "linear", duration: 1 }}
                          className="w-full h-2 duration-200 bg-cyan-500 rounded-r-md"
                        ></motion.div>
                      </div>
                      <p>100%</p>
                    </div>
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Igbo</p>
                      <div className="w-full h-4 overflow-hidden border border-cyan-500 rounded-md">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "60%" }}
                          transition={{ type: "linear", duration: 1 }}
                          className="h-2 duration-200 bg-cyan-500 rounded-r-md"
                        ></motion.div>
                      </div>
                      <p>60%</p>
                    </div>
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Yoruba</p>
                      <div className="w-full h-4 overflow-hidden border border-cyan-500 rounded-md">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "80%" }}
                          transition={{ type: "linear", duration: 1 }}
                          className="h-2 duration-200 bg-cyan-500 rounded-r-md"
                        ></motion.div>
                      </div>
                      <p>80%</p>
                    </div>
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Spanish</p>
                      <div className="w-full h-4 overflow-hidden border border-cyan-500 rounded-md">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "20%" }}
                          transition={{ type: "linear", duration: 1 }}
                          className="h-2 duration-200 bg-cyan-500 rounded-r-md"
                        ></motion.div>
                      </div>
                      <p>20%</p>
                    </div>
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Turkish</p>
                      <div className="w-full h-4 overflow-hidden border border-cyan-500 rounded-md">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "20%" }}
                          transition={{ type: "linear", duration: 1 }}
                          className="h-2 duration-200 bg-cyan-500 rounded-r-md"
                        ></motion.div>
                      </div>
                      <p>20%</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 0 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "linear" }}>
                <div className="p-4 border border-cyan-500 rounded-md bg-[#0f0f0f6f]">
                  <h3 className="text-3xl font-bold mb-4">
                    Hobbies<span className="font-semibold text-cyan-500">.</span>
                  </h3>
                  <div className="space-y-8">
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Coding</p>
                      <div className="w-full h-4 overflow-hidden border border-cyan-500 rounded-md">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ type: "linear", duration: 1 }}
                          className="w-full h-2 duration-200 bg-cyan-500 rounded-r-md"
                        ></motion.div>
                      </div>
                      <p>100%</p>
                    </div>
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Reading</p>
                      <div className="w-full h-4 overflow-hidden border border-cyan-500 rounded-md">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ type: "linear", duration: 1 }}
                          className="w-full h-2 duration-200 bg-cyan-500 rounded-r-md"
                        ></motion.div>
                      </div>
                      <p>100%</p>
                    </div>
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Games</p>
                      <div className="w-full h-4 overflow-hidden border border-cyan-500 rounded-md">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "60%" }}
                          transition={{ type: "linear", duration: 1 }}
                          className="w-3/5 h-2 duration-200 bg-cyan-500 rounded-r-md"
                        ></motion.div>
                      </div>
                      <p>60%</p>
                    </div>
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Traveling</p>
                      <div className="w-full h-4 overflow-hidden border border-cyan-500 rounded-md">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "80%" }}
                          transition={{ type: "linear", duration: 1 }}
                          className="w-4/5 h-2 duration-200 bg-cyan-500 rounded-r-md"
                        ></motion.div>
                      </div>
                      <p>80%</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:max-w-[1024px] w-11/12 my-20 mx-auto">
        <h3 className="mb-5 text-3xl px-6 font-bold uppercase md:text-4xl text-start">
          Education<span className="text-cyan-500">.</span>
        </h3>

        <div className="timeline relative">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="p-6 sm:w-1/2 w-full relative left-0 group"
          >
            <span className="bullet-edu sm:block hidden duration-200 bg-cyan-100 group-hover:bg-cyan-500"></span>
            <div className="p-2 rounded-md bg-[#0f0f0f6f] duration-200 opacity-90">
              <h4 className="font-bold text-xl">Computer Science</h4>
              <p className="mt-2">Federal University of Agriculture, Abeokuta.</p>

              <div className="mt-4 text-slate-300 opacity-75 flex items-center">
                <span>
                  <FontAwesomeIcon icon={faCalendarDays} />
                </span>{" "}
                <span className="ml-2">2022 - Date</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="p-6 sm:w-1/2 w-full relative sm:left-1/2 right-con group"
          >
            <span className="bullet-edu sm:block hidden duration-200 bg-cyan-100 group-hover:bg-cyan-500"></span>
            <div className="p-2 rounded-md bg-[#0f0f0f6f] duration-200 opacity-90">
              <h4 className="font-bold text-xl">Web Development</h4>
              <p className="mt-2">Udemy</p>
              <div className="mt-4 text-slate-300 opacity-75 flex items-center">
                <span>
                  <FontAwesomeIcon icon={faCalendarDays} />
                </span>{" "}
                <span className="ml-2">2019 - 2021</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1 }}
            className="p-6 sm:w-1/2 w-full relative left-0 group"
          >
            <span className="bullet-edu sm:block hidden duration-200 bg-cyan-100 group-hover:bg-cyan-500"></span>
            <div className="p-2 rounded-md bg-[#0f0f0f6f] duration-200 opacity-90">
              <h4 className="font-bold text-xl">Meta Frontend Developer</h4>
              <p className="mt-2">Coursera</p>
              <div className="mt-4 text-slate-300 opacity-75 flex items-center">
                <span>
                  <FontAwesomeIcon icon={faCalendarDays} />
                </span>{" "}
                <span className="ml-2">2022 - 2023</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="md:max-w-[1024px] w-11/12 my-20 mx-auto">
        <h3 className="mb-5 text-3xl px-6 font-bold uppercase md:text-4xl text-start">
          Projects <span className="text-cyan-500">.</span>
        </h3>

        <div className="timeline relative">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="p-6 sm:w-1/2 w-full relative left-0 group"
          >
            <span className="bullet-edu sm:block hidden duration-200 bg-cyan-100 group-hover:bg-cyan-500"></span>
            <div className="p-2 rounded-md bg-[#0f0f0f6f] duration-200 opacity-90 space-y-2">
              <div className="w-full overflow-hidden rounded-lg border border-opacity-25 border-cyan-500">
                <Image
                  src={"/images/projects/bstore/4.png"}
                  alt="BenCalc Screenshot"
                  width={500}
                  height={500}
                  className="object-cover w-full"
                  draggable="false"
                ></Image>
              </div>

              <div className="flex justify-between items-center py-2">
                <h4 className="font-bold text-2xl">BStore</h4>

                <Link href={"/projects#bstore"}>
                  <p className="border-cyan-500 border duration-200 hover:bg-cyan-500 px-2 py-1 text-sm hover:text-black rounded-md flex space-x-1 items-center">
                    <span>View</span> <FontAwesomeIcon icon={faExpand} />
                  </p>
                </Link>
              </div>

              <p className="text-sm font-light">
                BStore is an online store, where users find products and services, It comes with an administrator&apos;s
                dashboard for creating, deleting, updating posts basically it performs CRUD operations. Users can also
                sign up as a seller and sell products to other users. <br />
                <br />
                It also comes with a checkout functionality using stripe which makes it easy to pay for a purchase
                online.
              </p>

              <div className="flex flex-wrap">
                {["NextJs", "Mongoose", "MongoDB", "Stripe", "TailwindCSS"].map((tech, idx) => (
                  <p
                    key={idx}
                    className="mt-2 mr-2 border border-opacity-25 cursor-pointer duration-200 hover:bg-cyan-500 hover:text-black hover:border-transparent border-white px-2 py-1 text-sm rounded-xl"
                  >
                    {tech}
                  </p>
                ))}
              </div>

              <div className="mt-4 text-slate-300 opacity-75 flex items-center">
                <span>
                  <FontAwesomeIcon icon={faCalendarDays} />
                </span>{" "}
                <span className="ml-2">Jun 2023 - Date</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="p-6 sm:w-1/2 w-full relative sm:left-1/2 right-con group"
          >
            <span className="bullet-edu sm:block hidden duration-200 bg-cyan-100 group-hover:bg-cyan-500"></span>
            <div className="p-2 rounded-md bg-[#0f0f0f6f] duration-200 opacity-90 space-y-2">
              <div className="w-full overflow-hidden rounded-lg border border-opacity-25 border-cyan-500">
                <Image
                  src={"/images/projects/ceelyrics/cee1.png"}
                  alt="BenCalc Screenshot"
                  width={500}
                  height={500}
                  className="object-cover w-full"
                  draggable="false"
                ></Image>
              </div>

              <div className="flex justify-between items-center py-2">
                <h4 className="font-bold text-2xl">Ceelyrics</h4>

                <Link href={"/projects#ceelyrics"}>
                  <p className="border-cyan-500 border duration-200 hover:bg-cyan-500 px-2 py-1 text-sm hover:text-black rounded-md flex space-x-1 items-center">
                    <span>View</span> <FontAwesomeIcon icon={faExpand} />
                  </p>
                </Link>
              </div>

              <p className="text-sm font-light">
                Ceelyrics is a fast-growing lyrics provider website personally managed and owned by me, it&apos;s
                constantly being updated. <br /> <br /> Ceelyrics was inspired by Azlyrics.com, but Ceelyrics is Azyrics
                on steroid because It&apos;s faster, more user friendly and easy to access.
              </p>

              <div className="flex flex-wrap">
                {["Node.js", "MySQL", "Ejs", "TailwindCSS"].map((tech, idx) => (
                  <p
                    key={idx}
                    className="mt-2 mr-2 border border-opacity-25 cursor-pointer duration-200 hover:bg-cyan-500 hover:text-black hover:border-transparent border-white px-2 py-1 text-sm rounded-xl"
                  >
                    {tech}
                  </p>
                ))}
              </div>

              <div className="mt-4 text-slate-300 opacity-75 flex items-center">
                <span>
                  <FontAwesomeIcon icon={faCalendarDays} />
                </span>{" "}
                <span className="ml-2">Jun 2023 - Date</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="p-6 sm:w-1/2 w-full relative left-0 group"
          >
            <span className="bullet-edu sm:block hidden duration-200 bg-cyan-100 group-hover:bg-cyan-500"></span>
            <div className="p-2 rounded-md bg-[#0f0f0f6f] duration-200 opacity-90 space-y-2">
              <div className="w-full overflow-hidden rounded-lg border border-opacity-25 border-cyan-500">
                <Image
                  src={"/images/projects/kaygrey/kaygrey1.png"}
                  alt="BenCalc Screenshot"
                  width={500}
                  height={500}
                  className="object-cover w-full"
                  draggable="false"
                ></Image>
              </div>

              <div className="flex justify-between items-center py-2">
                <h4 className="font-bold text-2xl">KaygreyKennel</h4>

                <Link href={"/projects#kaygrey"}>
                  <p className="border-cyan-500 border duration-200 hover:bg-cyan-500 px-2 py-1 text-sm hover:text-black rounded-md flex space-x-1 items-center">
                    <span>View</span> <FontAwesomeIcon icon={faExpand} />
                  </p>
                </Link>
              </div>

              <p className="text-sm font-light">
                KaygreyKennel is a pet store (mostly dogs), KaygreyKennel was inspired by my love for dogs and pets in
                general. It also comes with an admin interface for admins to perform CRUD operations on posts data.{" "}
                <br />
                <br /> It also has search & sort functionality, which makes users to search for things easily, improving
                User Experience.
              </p>

              <div className="flex flex-wrap">
                {["NodeJs", "MySQL", "Ejs"].map((tech, idx) => (
                  <p
                    key={idx}
                    className="mt-2 mr-2 border border-opacity-25 cursor-pointer duration-200 hover:bg-cyan-500 hover:text-black hover:border-transparent border-white px-2 py-1 text-sm rounded-xl"
                  >
                    {tech}
                  </p>
                ))}
              </div>

              <div className="mt-4 text-slate-300 opacity-75 flex items-center">
                <span>
                  <FontAwesomeIcon icon={faCalendarDays} />
                </span>{" "}
                <span className="ml-2">Jun 2023 - Date</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 text-center">
          <Link href={"/projects"}>
            <button className="px-3 py-1 text-cyan-500 duration-200 border border-cyan-600 rounded-sm hover:bg-cyan-600 hover:text-black group">
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
          <p className="font-semibold text-sm text-cyan-500">What I Offer.</p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
        >
          <motion.div
            variants={item}
            className="p-4 rounded-md shadow-sm hover:border-cyan-600 border-2 border-transparent duration-200 group shadow-cyan-600 self-start bg-[#0f0f0f94]"
          >
            <div className="space-y-3 text-cyan-100">
              <FontAwesomeIcon icon={faEarth} className="text-5xl group-hover:animate-bounce" />

              <h4 className="font-semibold text-3xl">Web Development</h4>
              <p className="text-opacity-75 text-sm leading-relaxed">
                Are you ready to take your brand to the next level? I can develop fullstack web applications for you or
                your <span className="text-cyan-500">brand</span>.
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={item}
            className="p-4 rounded-md shadow-sm hover:border-cyan-600 border-2 border-transparent duration-200 group shadow-cyan-600 self-start bg-[#0f0f0f94]"
          >
            <div className="space-y-3 text-cyan-100">
              <FontAwesomeIcon icon={faServer} className="text-5xl group-hover:animate-bounce" />

              <h4 className="font-semibold text-3xl">Website Management</h4>
              <p className="text-opacity-75 text-sm leading-relaxed">
                Do you have and existing website need a <span className="text-cyan-500">website manager</span>? I&apos;m
                that guy!
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={item}
            className="p-4 rounded-md shadow-sm hover:border-cyan-600 border-2 border-transparent duration-200 group shadow-cyan-600 self-start bg-[#0f0f0f94]"
          >
            <div className="space-y-3 text-cyan-100">
              <FontAwesomeIcon icon={faRocket} className="text-5xl group-hover:animate-bounce" />

              <h4 className="font-semibold text-3xl">API</h4>
              <p className="text-opacity-75 text-sm leading-relaxed">
                I build robust, scalable, secure and easily accessible REST APIs.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Three */}
      <canvas className="bg-transparent border-none canva"></canvas>
    </>
  );
};

export default HomeContent;
