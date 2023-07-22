"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProjectCon = ({ project, index }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  function changeImg(imgIndex) {
    setCurrentImgIndex(imgIndex);
  }

  return (
    <>
      <div className="flex items-center">
        <span className="mx-4 text-xl font-bold">{index + 1}</span>
        <span className="flex-1 bg-orange-500 h-[0.5px]"></span>
      </div>
      <div className="grid gap-1 md:gap-6" id="all-projects">
        <div className="hidden md:block space-y-2">
          <div className="space-y-2">
            <div>
              <p className="mt-4 font-semibold text-center">Screenshot(s)</p>
              <div className="flex flex-wrap items-center justify-center">
                {project.images.map((image, i) => (
                  <div
                    key={i}
                    className={`w-20 h-20 rounded overflow-hidden inline-block m-2 ${
                      i === currentImgIndex && "border-2 border-orange-500"
                    }`}
                    onClick={() => changeImg(i)}
                  >
                    <Image
                      src={image}
                      alt={project.alt_attr}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full static"
                      draggable="false"
                    />
                  </div>
                ))}
              </div>
            </div>

            {(project.github_repo.length > 0 || Object.keys(project.live_) > 0) && (
              <>
                <hr className="text-orange-500 bg-orange-500 opacity-50" />
                <div className="text-center">
                  <p className="font-bold text-xl">
                    Links <i className="ri-link"></i>
                  </p>
                  <div>
                    {project.live_.url && (
                      <p>
                        <i className="ri-link"></i>:{" "}
                        <a href={project.live_.url} className="duration-100 hover:text-orange-200" target="_blank">
                          Test Live
                        </a>
                      </p>
                    )}

                    {project.github_repo && (
                      <p>
                        <i className="ri-github-line"></i>:{" "}
                        <a href={project.github_repo} className="duration-100 hover:text-orange-200" target="_blank">
                          Source Code
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="space-y-4" id={project.id}>
          <div className={`rounded-md relative group overflow-hidden border-4 border-[#303030] max-h-[20rem] md:min-h-[15rem]`}>
            <Image
              src={project.images[currentImgIndex]}
              alt={project.alt_attr}
              width={800}
              height={800}
              className="object-cover w-full h-full aspect-video"
              draggable="false"
            />

            <div className="absolute top-0 left-0 z-10 w-full h-full duration-200 bg-black opacity-0 group-hover:opacity-50"></div>
            <Link href={`${project.images[currentImgIndex]}`} target="_blank">
              <i
                className="absolute z-20 text-lg font-semibold text-white duration-200 opacity-0 ri-external-link-line bottom-2 right-4 group-hover:opacity-100"
                title="Open Image"
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
                    i === currentImgIndex ? "border-2 border-orange-500" : ""
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
          <div className="md:hidden mt-1">
            {(project.github_repo.length > 0 || Object.keys(project.live_) > 0) && (
              <>
                <div>
                  <p className="font-bold text-xl">
                    Links <i className="ri-link"></i>
                  </p>
                  <div>
                    {project.live_.url && (
                      <p>
                        <i className="ri-link"></i>:{" "}
                        <a href={project.live_.url} className="duration-100 hover:text-orange-200" target="_blank">
                          Test Live
                        </a>
                      </p>
                    )}

                    {project.github_repo && (
                      <p>
                        <i className="ri-github-line"></i>:{" "}
                        <a href={project.github_repo} className="duration-100 hover:text-orange-200" target="_blank">
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
                  className="inline-block px-2 py-1 text-sm text-orange-500 border border-orange-500 rounded-md cursor-pointer select-none md:rounded-lg md:text-base"
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
