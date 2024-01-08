import education from "@/lib/store/education";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const Education = () => {
  return (
    <section className="container my-20 mx-auto">
      <h3 className="px-6 mb-5 text-3xl font-bold uppercase md:text-4xl text-start">
        Education<span className="text-primary">.</span>
      </h3>

      <div className="relative timeline">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ x: (idx + 1) % 2 === 0 ? 100 : -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1, stiffness: 50 }}
            className={
              (idx + 1) % 2 === 0
                ? `relative w-full p-10 sm:w-1/2 sm:left-1/2 right-con group`
                : `relative left-0 w-full p-10 sm:w-1/2 group`
            }
          >
            <span className="hidden duration-200 bullet-edu sm:block bg-primary group-hover:bg-primary"></span>
            <div className="p-4 rounded-md bg-[#0f0f0f6f] duration-200 opacity-90">
              <h4 className="text-xl font-bold">{edu.title}</h4>
              <p className="mt-2">{edu.institution}</p>

              <div className="flex items-center mt-4 opacity-75 text-slate-300">
                <span>
                  <CalendarDays />
                </span>{" "}
                <span className="ml-2">{edu.duration}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
