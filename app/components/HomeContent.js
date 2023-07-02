"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const HomeContent = () => {
  return (
    <>
      <section className="md:max-w-[1024px] w-11/12 flex justify-center mx-auto min-h-[32rem] my-10 section" id="me">
        <div className="items-center gap-4 md:grid" style={{ gridTemplateColumns: "2fr 1fr" }}>
          <div className="space-y-2">
            <h2 className="text-6xl font-extrabold">
              Hey, I&apos;m Ben<span className="text-orange-500">.</span>
            </h2>
            <p className="text-xl">
              I&apos;m A{" "}
              <span className="relative font-bold text-orange-400" id="stack">
                Fullstack Web Developer
              </span>
              .
            </p>

            <p className="font-light opacity-80">
              I&apos;m A 100LVL Student in the Federal University of Agriculture, Abeokuta{" "}
              <span className="font-semibold">(FUNAAB)</span>. Ever since I&apos;ve been 13 I&apos;ve always wanted to
              develop games, websites and softwares, I fell for Web Development and decided to expand on it.
            </p>

            <div className="mt-4">
              <button className="px-3 py-1 text-orange-500 duration-200 border border-orange-500 hover:bg-orange-500 hover:text-black">
                Get In Touch <i className="ri-rocket-line"></i>
              </button>
            </div>
          </div>
          <div
            className="grid bg-transparent border border-orange-500 rounded-3xl h-[24rem] place-content-center -z-20"
            id="me1"
          >
            {/* <p>Pic Coming soon...</p> */}
          </div>
        </div>
      </section>

      <section className="my-10 section" id="language">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#3D3D3D"
            fillOpacity="1"
            d="M0,256L120,256C240,256,480,256,720,224C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
        <div style={{ backgroundColor: "#3D3D3D" }}>
          <div className="md:max-w-[1024px] w-11/12 flex justify-center mx-auto min-h-[32rem]">
            <div>
              <h3 className="mb-5 text-4xl font-bold uppercase">
                Personal Statistics<span className="text-orange-500">.</span>
              </h3>
              <div className="grid gap-6" style={{ gridTemplateColumns: "1.5fr 2fr" }}>
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
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#3D3D3D"
            fillOpacity="1"
            d="M0,288L120,256C240,224,480,160,720,128C960,96,1200,96,1320,96L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          ></path>
        </svg>
      </section>

      <section className="md:max-w-[1024px] w-11/12  mx-auto min-h-[32rem] my-10 section" id="projects">
        <div>
          <h3 className="mb-5 text-4xl font-bold uppercase">
            Projects<span className="text-orange-500">.</span>
          </h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="relative self-start overflow-hidden duration-200 border border-orange-500 rounded-md hover:scale-105 group">
              <div className="absolute top-0 left-0 grid w-full h-full text-center project-cover place-content-center">
                <div className="p-4 duration-200 opacity-0 group-hover:opacity-100">
                  <p className="font-light leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam ratione accusantium praesentium
                    a
                  </p>

                  <button className="px-3 py-1 mt-2 text-orange-500 duration-200 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-black">
                    View <i className="ri-arrow-right-circle-line"></i>
                  </button>
                </div>
              </div>
              <Image
                src={"/images/others/proj1.jpg"}
                alt="Project 1"
                width={400}
                height={400}
                className="object-cover w-full aspect-square"
              />
            </div>
            <div className="relative self-start overflow-hidden duration-200 border border-orange-500 rounded-md hover:scale-105 group">
              <div className="absolute top-0 left-0 grid w-full h-full text-center project-cover place-content-center">
                <div className="p-4 duration-200 opacity-0 group-hover:opacity-100">
                  <p className="font-light leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam ratione accusantium praesentium
                    a
                  </p>

                  <button className="px-3 py-1 mt-2 text-orange-500 duration-200 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-black">
                    View <i className="ri-arrow-right-circle-line"></i>
                  </button>
                </div>
              </div>
              <Image
                src={"/images/others/proj2.png"}
                alt="Project 2"
                width={400}
                height={400}
                className="object-cover w-full aspect-square"
              />
            </div>
            <div className="relative self-start overflow-hidden duration-200 border border-orange-500 rounded-md hover:scale-105 group">
              <div className="absolute top-0 left-0 grid w-full h-full text-center project-cover place-content-center">
                <div className="p-4 duration-200 opacity-0 group-hover:opacity-100">
                  <p className="font-light leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam ratione accusantium praesentium
                    a
                  </p>

                  <button className="px-3 py-1 mt-2 text-orange-500 duration-200 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-black">
                    View <i className="ri-arrow-right-circle-line"></i>
                  </button>
                </div>
              </div>
              <Image
                src={"/images/others/proj4.jpg"}
                alt="Project 3"
                width={400}
                height={400}
                className="object-cover w-full aspect-square"
              />
            </div>
            <div className="relative self-start overflow-hidden duration-200 border border-orange-500 rounded-md hover:scale-105 group">
              <div className="absolute top-0 left-0 grid w-full h-full text-center project-cover place-content-center">
                <div className="p-4 duration-200 opacity-0 group-hover:opacity-100">
                  <p className="font-light leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam ratione accusantium praesentium
                    a
                  </p>

                  <button className="px-3 py-1 mt-2 text-orange-500 duration-200 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-black">
                    View <i className="ri-arrow-right-circle-line"></i>
                  </button>
                </div>
              </div>
              <Image
                src={"/images/others/proj1.jpg"}
                alt="Project 1"
                width={400}
                height={400}
                className="object-cover w-full aspect-square"
              />
            </div>
            <div className="relative self-start overflow-hidden duration-200 border border-orange-500 rounded-md hover:scale-105 group">
              <div className="absolute top-0 left-0 grid w-full h-full text-center project-cover place-content-center">
                <div className="p-4 duration-200 opacity-0 group-hover:opacity-100">
                  <p className="font-light leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam ratione accusantium praesentium
                    a
                  </p>

                  <button className="px-3 py-1 mt-2 text-orange-500 duration-200 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-black">
                    View <i className="ri-arrow-right-circle-line"></i>
                  </button>
                </div>
              </div>
              <Image
                src={"/images/others/proj2.png"}
                alt="Project 2"
                width={400}
                height={400}
                className="object-cover w-full aspect-square"
              />
            </div>
            <div className="relative self-start overflow-hidden duration-200 border border-orange-500 rounded-md hover:scale-105 group">
              <div className="absolute top-0 left-0 grid w-full h-full text-center project-cover place-content-center">
                <div className="p-4 duration-200 opacity-0 group-hover:opacity-100">
                  <p className="font-light leading-loose">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam ratione accusantium praesentium
                    a
                  </p>

                  <button className="px-3 py-1 mt-2 text-orange-500 duration-200 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-black">
                    View <i className="ri-arrow-right-circle-line"></i>
                  </button>
                </div>
              </div>
              <Image
                src={"/images/others/proj2.png"}
                alt="Project 2"
                width={400}
                height={400}
                className="object-cover w-full aspect-square"
              />
            </div>
          </div>

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