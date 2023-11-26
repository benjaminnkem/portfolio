"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const parentVariant = {
  hide: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const childVariant = {
  hide: { opacity: 0 },
  show: { opacity: 1 },
};

const ProjectCon = ({ project, index }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState("");

  const setFullImg = (imgUrl) => setSelectedImage(imgUrl);
  const closePrev = () => setSelectedImage("");

  const changeImg = (imgIndex) => {
    setCurrentImgIndex(imgIndex);
  };

  return (
    <>
      {/* Global Image Prev */}
      <div className="z-[100] -z-[100]"></div>
      <div
        className={`fixed left-0 h-full -top-10 bg-black bg-opacity-70 grid place-content-center duration-150 overflow-hidden z-[100] ${
          selectedImage ? "opacity-100 z-[100] img-prev-con w-full" : "opacity-0 -z-[100] w-0"
        }`}
        onClick={closePrev}
      >
        {selectedImage && (
          <Image src={selectedImage ? selectedImage : null} alt="Image Preview" width={800} height={800} />
        )}

        <i className="absolute text-4xl cursor-pointer ri-close-line top-2 right-2" onClick={closePrev}></i>
      </div>

      <div className="flex items-center">
        <span className="mx-4 text-xl font-bold">{index + 1}</span>
        <span className="flex-1 bg-primary h-[0.5px]"></span>
      </div>
      <div className="grid gap-1 md:gap-6" id="all-projects">
        <div className="hidden space-y-2 md:block">
          <div className="space-y-2">
            <div>
              <p className="mt-4 font-semibold text-center">Screenshot(s)</p>
              <motion.div
                variants={parentVariant}
                initial="hide"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap items-center"
              >
                {project.images.map((image, i) => (
                  <motion.div
                    variants={childVariant}
                    key={i}
                    className={`w-20 h-20 rounded overflow-hidden inline-block m-2 ${
                      i === currentImgIndex && "border-2 border-primary"
                    }`}
                    onClick={() => changeImg(i)}
                  >
                    <Image
                      src={image}
                      alt={project.alt_attr}
                      width={200}
                      height={200}
                      className="static object-cover w-full h-full"
                      draggable="false"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <hr className="opacity-50 text-primary bg-primary" />
            <div className="text-center">
              <p className="text-xl font-bold">
                Links <i className="ri-link"></i>
              </p>
              <div>
                {project.live_.url && (
                  <p>
                    <i className="ri-link"></i>:{" "}
                    <a href={project.live_.url} className="duration-100 hover:text-primary" target="_blank">
                      Test Live
                    </a>
                  </p>
                )}

                {project.github_repo && (
                  <p>
                    <i className="ri-github-line"></i>:{" "}
                    <a href={project.github_repo} className="duration-100 hover:text-primary" target="_blank">
                      Source Code
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4" id={project.id}>
          <div
            className={`rounded-md relative group overflow-hidden border-4 border-[#303030] max-h-[20rem] md:min-h-[15rem]`}
          >
            <Image
              src={project.images[currentImgIndex]}
              alt={project.alt_attr}
              width={800}
              height={800}
              className="object-cover w-full h-full duration-200 aspect-video img-prev group-hover:blur-sm"
              draggable="false"
            />

            <div className="absolute top-0 left-0 z-10 grid w-full h-full duration-200 bg-black bg-opacity-0 group-hover:bg-opacity-40 place-content-center">
              <p
                className="text-base font-extrabold opacity-0 cursor-pointer md:text-lg group-hover:opacity-100"
                onClick={() => setFullImg(project.images[currentImgIndex])}
              >
                View Image Preview <i className="ri-image-2-line"></i>
              </p>
            </div>
            <Link href={`${project.images[currentImgIndex]}`} target="_blank">
              <i
                className="absolute z-20 text-lg font-semibold text-white duration-[400ms] opacity-0 ri-external-link-line bottom-2 right-4 group-hover:opacity-100"
                title="Open In a new tab"
              ></i>
            </Link>
          </div>

          <div className="md:hidden">
            <p className="mt-4 font-semibold">Screenshot(s)</p>
            <div className="flex flex-wrap">
              {project.images.map((image, i) => (
                <div
                  key={i}
                  className={`sm:w-16 w-12 md:w-20 sm:h-16 h-12 md:h-20 duration-100 rounded overflow-hidden inline-block m-2 ${
                    i === currentImgIndex ? "border-2 border-primary" : ""
                  }`}
                  onClick={() => changeImg(i)}
                >
                  <Image
                    src={image}
                    alt={project.alt_attr}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{project.name}</h2>
            <p className="text-base whitespace-pre-line">{project.description}</p>
          </div>

          {/* In - infos */}
          <div className="mt-1 md:hidden">
            {(project.github_repo.length > 0 || Object.keys(project.live_) > 0) && (
              <>
                <div>
                  <p className="text-xl font-bold">
                    Links <i className="ri-link"></i>
                  </p>
                  <div>
                    {project.live_.url && (
                      <p>
                        <i className="ri-link"></i>:{" "}
                        <a href={project.live_.url} className="duration-100 hover:text-primary" target="_blank">
                          Test Live
                        </a>
                      </p>
                    )}

                    {project.github_repo && (
                      <p>
                        <i className="ri-github-line"></i>:{" "}
                        <a href={project.github_repo} className="duration-100 hover:text-primary" target="_blank">
                          Source Code
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-semibold tracking-wide">Tools</h3>
            <div className="md:space-x-2">
              {project.techs.map((tech, index) => (
                <div
                  key={index}
                  className="inline-block px-2 py-1 text-sm font-semibold duration-200 border rounded-md cursor-pointer select-none text-primary border-primary hover:bg-primary hover:text-black md:rounded-lg md:text-base"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCon;
