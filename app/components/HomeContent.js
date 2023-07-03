"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const meTopVariants = {
  hidden: { opacity: 0, y: 70 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.5 } },
};

const curveVariant = {
  hidden: {
    pathLength: 0,
    fill: "#3D3D3D00",
  },
  visible: {
    pathLength: 1,
    fill: "#3D3D3D",
  },
};

const HomeContent = () => {
  return (
    <>
      <section className="md:max-w-[1024px] w-11/12 flex justify-center mx-auto min-h-[30rem] my-10 section mt-32" id="me">
        <div className="grid items-center gap-4 megrid">
          <motion.div
            variants={meTopVariants}
            initial="hidden"
            animate="visible"
            className="py-10 space-y-3 text-center md:text-start md:py-0"
          >
            <h2 className="text-5xl font-extrabold sm:text-6xl">
              Hey, I&apos;m Ben<span className="text-orange-500">.</span>
            </h2>
            <p className="text-xl">
              I&apos;m A{" "}
              <span className="relative font-extrabold text-orange-400" id="stack">
                Fullstack Web Developer
              </span>
              .
            </p>

            <p className="font-light opacity-80">
              I&apos;m A 100LVL Student in the Federal University of Agriculture, Abeokuta{" "}
              <span className="font-semibold">(FUNAAB)</span>. Ever since I was 13 I&apos;ve always wanted to
              develop games, websites and softwares, I fell for Web Development and decided to expand on it.
            </p>

            <div className="mt-4">
              <button className="px-3 py-1 text-orange-500 duration-200 border border-orange-500 hover:bg-orange-500 hover:text-black">
                Get In Touch <i className="ri-rocket-line"></i>
              </button>
            </div>
          </motion.div>
          <div
            className="grid bg-transparent border border-orange-500 rounded-3xl h-[24rem] place-content-center -z-20 grid-start-base"
            id="me1"
          ></div>
        </div>
      </section>

      <section className="my-10 section" id="about">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <motion.path
            variants={curveVariant}
            fill="#3D3D3D"
            initial="hidden"
            animate="visible"
            fillOpacity="1"
            d="M0,256L120,256C240,256,480,256,720,224C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></motion.path>
        </svg>
        <div style={{ backgroundColor: "#3D3D3D" }}>
          <div className="md:max-w-[1024px] w-11/12 mx-auto min-h-[32rem]">
            <div>
              <div className="flex items-center justify-center">
                <span className="flex-1 h-1 bg-orange-500 rounded-md"></span>
                <h3 className="px-4 mb-5 text-4xl font-bold uppercase">
                  About Me<span className="text-orange-500">.</span>
                </h3>
                <span className="flex-1 h-1 bg-orange-500 rounded-md"></span>
              </div>

              <div className="grid md:grid-cols-2">
                <div className="p-4 border-b border-opacity-50 md:border-r md:border-b-0 border-orange-50">
                  <div>
                    <p>
                      <span>Hi</span>, My name is <span className="font-bold text-white">Nkem Benjamin</span> and
                      I&apos;m a passionate Fullstack Web Develper, 2D Unity Game Developer residing in Nigeria.
                      I&apos;m also the Developer and Founder of{" "}
                      <Link
                        href={"https://ceelyrics.com"}
                        target="_blank"
                        className="font-bold text-orange-500 duration-200 hover:text-orange-400"
                      >
                        Ceelyrics
                      </Link>{" "}
                      I also enjoy exploring new technologies and frameworks to enhance my skills and deliver innovative
                      solutions to clients. <br /> <br />I strive to create seamless user experiences by combining my
                      strong problem-solving abilities with a keen eye for design aesthetics. <br />
                      <br />
                      Outside the coding/development space, I read books, play games, watch movies and explore trending
                      technologies. <br />
                      <br />
                      If you&apos;re interested in recruiting me to work on a project/company, I&apos;m open for offers!
                      Let&apos;s Connect <i className="ri-link-m"></i>
                    </p>

                    <button className="px-4 py-2 mt-4 duration-200 border border-orange-500 rounded-md hover:bg-orange-600 text-orange-50">
                      Contact Me <i className="ri-link-m"></i>
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div>
                    <div className="flex items-center md:justify-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <h3 className="px-4 mb-2 text-2xl font-bold text-center">Skills</h3>
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    </div>
                    <ul className="flex flex-wrap space-x-2 md:justify-center">
                      <li>
                        <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                          <i className="ri-html5-fill"></i> <span>HTML</span>
                        </div>
                      </li>
                      <li>
                        <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                          <i className="ri-css3-fill"></i> <span>CSS</span>
                        </div>
                      </li>
                      <li>
                        <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                          <i className="ri-css3-fill"></i> <span>Tailwind CSS</span>
                        </div>
                      </li>
                      <li>
                        <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                          <i className="ri-css3-fill"></i> <span>Bootstrap</span>
                        </div>
                      </li>
                      <li>
                        <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                          <i className="ri-javascript-fill"></i> <span>Javascript</span>
                        </div>
                      </li>
                      <li>
                        <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                          <i className="ri-node-tree"></i> <span>NodeJS</span>
                        </div>
                      </li>
                      <li>
                        <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                          <i className="ri-reactjs-fill"></i> <span>ReactJs</span>
                        </div>
                      </li>
                      <li>
                        <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                          <span>NextJs</span>
                        </div>
                      </li>
                      <li>
                        <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                          <span>VueJs</span>
                        </div>
                      </li>
                      <li>
                        <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                          <span>MongoDB</span>
                        </div>
                      </li>
                      <li>
                        <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                          <i className="ri-database-2-line"></i> <span>MySQL</span>
                        </div>
                      </li>
                      {/* <li>
                        <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                          <span>Python</span>
                        </div>
                      </li> */}
                      <li>
                        <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                          <i className="ri-gamepad-line"></i> <span>Unity 2D</span>
                        </div>
                      </li>
                      <li>
                        <div className="inline-block px-2 py-2 my-1 duration-200 border rounded-md cursor-pointer hover:bg-white hover:text-black">
                          <span>Rest APIs</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#3D3D3D"
            fillOpacity="1"
            d="M0,288L120,256C240,224,480,160,720,128C960,96,1200,96,1320,96L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </section>

      <section className="my-10 section">
        <div className="md:max-w-[1024px] w-11/12 flex justify-center mx-auto min-h-[32rem]">
          <div>
            <h3 className="mb-5 text-3xl font-bold text-center uppercase md:text-4xl md:text-start">
              Personal Statistics<span className="text-orange-500">.</span>
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <div className="p-4 border border-orange-500 rounded-md">
                  <div className="space-y-8">
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">English</p>
                      <div className="w-full h-2 overflow-hidden border border-orange-500 rounded-md">
                        <div className="w-full h-2 duration-200 bg-orange-500 rounded-r-md progress"></div>
                      </div>
                      <p>100%</p>
                    </div>
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Igbo</p>
                      <div className="w-full h-2 overflow-hidden border border-orange-500 rounded-md">
                        <div className="w-3/5 h-2 duration-200 bg-orange-500 rounded-r-md progress1"></div>
                      </div>
                      <p>60%</p>
                    </div>
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Yoruba</p>
                      <div className="w-full h-2 overflow-hidden border border-orange-500 rounded-md">
                        <div className="w-4/5 h-2 duration-200 bg-orange-500 rounded-r-md progress2"></div>
                      </div>
                      <p>80%</p>
                    </div>
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Spanish</p>
                      <div className="w-full h-2 overflow-hidden border border-orange-500 rounded-md">
                        <div className="w-1/3 h-2 duration-200 bg-orange-500 rounded-r-md progress3"></div>
                      </div>
                      <p>33%</p>
                    </div>
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Turkish</p>
                      <div className="w-full h-2 overflow-hidden border border-orange-500 rounded-md">
                        <div className="w-1/3 h-2 duration-200 bg-orange-500 rounded-r-md progress3"></div>
                      </div>
                      <p>33%</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="p-4 border border-orange-500 rounded-md">
                  <div className="space-y-8">
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Reading</p>
                      <div className="w-full h-2 overflow-hidden border border-orange-500 rounded-md">
                        <div className="w-full h-2 duration-200 bg-orange-500 rounded-r-md progress"></div>
                      </div>
                      <p>100%</p>
                    </div>
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Games</p>
                      <div className="w-full h-2 overflow-hidden border border-orange-500 rounded-md">
                        <div className="w-3/5 h-2 duration-200 bg-orange-500 rounded-r-md progress1"></div>
                      </div>
                      <p>60%</p>
                    </div>
                    <div className="grid items-center gap-4" style={{ gridTemplateColumns: "1fr 5fr 1fr" }}>
                      <p className="font-semibold">Travelling</p>
                      <div className="w-full h-2 overflow-hidden border border-orange-500 rounded-md">
                        <div className="w-4/5 h-2 duration-200 bg-orange-500 rounded-r-md progress2"></div>
                      </div>
                      <p>80%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:max-w-[1024px] w-11/12  mx-auto min-h-[32rem] my-20 section" id="projects">
        <div>
          <h3 className="mb-5 text-4xl font-bold uppercase">
            Projects<span className="text-orange-500">.</span>
          </h3>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3"
          >
            <div className="z-10 border border-orange-500 rounded-md">
              <div className="w-full h-32 bg-slate-800"></div>
              <div className="p-4 space-y-3">
                <div className="grid items-center gap-2" style={{ gridTemplateColumns: "6fr 1fr" }}>
                  <h4 className="font-bold text-orange-500">A Caculator Appp built with plain Typescript</h4>
                  <div className="flex items-center space-x-1 text-xl">
                    <i className="ri-github-fill" title="View On Github"></i>
                    <i className="ri-link-m" title="View Live"></i>
                  </div>
                </div>
                <p className="font-light">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nam laboriosam rem quidem
                  necessitatibus at quae dolore doloribus unde ratione recusandae aperiam magnam, architecto ea incidunt
                  officiis libero exercitationem sequi.
                </p>

                <button className="w-full py-2 mt-2 text-gray-900 duration-200 bg-orange-500 hover:bg-orange-600 hover:rounded-md">
                  View
                </button>
              </div>
            </div>
            <div className="z-10 border border-orange-500 rounded-md">
              <div className="w-full h-32 bg-slate-800"></div>
              <div className="p-4 space-y-3">
                <div className="grid items-center gap-2" style={{ gridTemplateColumns: "6fr 1fr" }}>
                  <h4 className="font-bold text-orange-500">A Caculator Appp built with plain Typescript</h4>
                  <div className="flex items-center space-x-1 text-xl">
                    <i className="ri-github-fill" title="View On Github"></i>
                    <i className="ri-link-m" title="View Live"></i>
                  </div>
                </div>
                <p className="font-light">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nam laboriosam rem quidem
                  necessitatibus at quae dolore doloribus unde ratione recusandae aperiam magnam, architecto ea incidunt
                  officiis libero exercitationem sequi.
                </p>

                <button className="w-full py-2 mt-2 text-gray-900 duration-200 bg-orange-500 hover:bg-orange-600 hover:rounded-md">
                  View
                </button>
              </div>
            </div>
            <div className="z-10 border border-orange-500 rounded-md">
              <div className="w-full h-32 bg-slate-800"></div>
              <div className="p-4 space-y-3">
                <div className="grid items-center gap-2" style={{ gridTemplateColumns: "6fr 1fr" }}>
                  <h4 className="font-bold text-orange-500">A Caculator Appp built with plain Typescript</h4>
                  <div className="flex items-center space-x-1 text-xl">
                    <i className="ri-github-fill" title="View On Github"></i>
                    <i className="ri-link-m" title="View Live"></i>
                  </div>
                </div>
                <p className="font-light">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nam laboriosam rem quidem
                  necessitatibus at quae dolore doloribus unde ratione recusandae aperiam magnam, architecto ea incidunt
                  officiis libero exercitationem sequi.
                </p>

                <button className="w-full py-2 mt-2 text-gray-900 duration-200 bg-orange-500 hover:bg-orange-600 hover:rounded-md">
                  View
                </button>
              </div>
            </div>
          </motion.div>

          <div className="mt-5 text-center">
            <button className="px-3 py-1 text-orange-500 duration-200 border border-orange-500 rounded-sm hover:bg-orange-500 hover:text-black group">
              View More Projects <i className="ri-arrow-right-circle-line"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContent;
