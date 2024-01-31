import stats from "@/lib/store/stats";
import {
  TransitionParent,
  TransitionOpacity,
  TransitionOpacityInView,
  TransitionFromBottom,
} from "@/lib/utils/transitions";
import { motion } from "framer-motion";

const PersonalStats = () => {
  return (
    <section className="mb-20 mt-[8rem] section" id="stats__">
      <div className="container flex justify-center mx-auto min-h-[32rem]">
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
  );
};

export default PersonalStats;
