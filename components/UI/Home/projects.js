import { TransitionOpacityInView } from "@/lib/utils/transitions";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Expand, CalendarDays } from "lucide-react";
import projectPreviews from "@/lib/store/project-previews";

const Projects = () => {
  return (
    <section className="container my-32">
      <TransitionOpacityInView>
        <h3 className="md:px-6 mb-5 text-3xl font-bold uppercase md:text-4xl text-start">
          Projects <span className="text-primary">.</span>
        </h3>
      </TransitionOpacityInView>

      <div className="relative timeline space-y-6 md:space-y-0">
        {projectPreviews.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ x: (idx + 1) % 2 === 0 ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.5, stiffness: 50 }}
            className={
              (idx + 1) % 2 === 0
                ? `relative w-full md:p-6 sm:w-1/2 sm:left-1/2 right-con group`
                : `relative left-0 w-full md:p-6 sm:w-1/2 group`
            }
          >
            <span className="hidden duration-200 bullet-edu sm:block bg-primary group-hover:bg-primary"></span>
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
                    <span>View</span> <Expand size={20} />
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
                  <CalendarDays />
                </span>{" "}
                <span className="ml-2">{project.duration}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 text-center">
        <Link href={"/projects"}>
          <button className="px-3 py-1 duration-200 border rounded-sm text-primary border-primary hover:bg-primary hover:text-black group">
            View All Projects <i className="ri-arrow-right-circle-line"></i>
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Projects;
