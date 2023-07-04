"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const ProjectCon = ({ project }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  function changeImg(imgIndex) {
    setCurrentImgIndex(imgIndex);
  }

  return (
    <>
      <div className="grid gap-6" style={{ gridTemplateColumns: "2fr 4fr" }}>
        <div className="min-h-[25rem]">
          <div>
            <p className="text-center mt-4 font-semibold">Screenshots</p>
            <div className="flex flex-wrap justify-center items-center">
              {project.images.map((image, i) => (
                <div
                  key={i}
                  className={`w-20 h-20 rounded overflow-hidden inline-block m-2 ${
                    i === currentImgIndex ? "border-2 border-orange-500" : ""
                  }`}
                  onClick={() => changeImg(i)}
                >
                  <Image
                    src={image}
                    alt={project.alt_attr}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-md relative group overflow-hidden border-4 border-[#303030] min-h-[15rem] max-h-[18rem]">
            <Image
              src={project.images[currentImgIndex]}
              alt={project.alt_attr}
              width={1000}
              height={1000}
              className="h-full object-cover"
              draggable="false"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-50 z-10 duration-200"></div>
            <Link href={`${process.env.DOMAIN}${project.images[currentImgIndex]}`} target="_blank">
              <i
                className="ri-external-link-line text-white font-semibold bottom-2 right-4 absolute opacity-0 group-hover:opacity-100 duration-200 z-20 text-lg"
                title="Open In a new tab"
              ></i>
            </Link>
          </div>

          <div className="space-y-2">
            <h2 className="font-semibold tracking-wide text-3xl">{project.name}</h2>
            <p className="font-light text-lg leading-loose">{project.description}</p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold tracking-wide text-2xl">Tools</h3>
            <div className="space-x-2">
              {project.techs.map((tech, index) => (
                <div
                  key={index}
                  className="rounded-lg px-2 py-1 cursor-pointer select-none text-orange-500 border-orange-500 border inline-block"
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
