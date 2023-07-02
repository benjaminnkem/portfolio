import StackAnim from "./StackAnim";
import "./styles/HomePage.css";

const HomePage = () => {
  return (
    <>
      <main>
        <section className="md:w-[1024px] w-11/12 mx-auto section" id="overAllSect">
          <div className="h-screen md:h-[28rem] xl:h-[30rem] flex justify-center items-center">
            <div className="text-center uppercase">
              <h1 className="text-5xl font-bold tracking-wider text-orange-500 toDown topDownStyle">Take A Peek</h1>
              <p
                className="mt-5 text-lg tracking-wide opacity-80 text-orange-50 toDown topDownStyle"
                style={{ transitionDelay: "0.7s" }}
              >
                <i className="ri-arrow-down-line"></i> Scroll Down <i className="ri-arrow-down-line"></i>
              </p>
            </div>
          </div>
        </section>

        <section className="md:w-[1024px] w-11/12 mx-auto my-40 section" id="meSect">
          <div className="items-center gap-2 md:grid" style={{ gridTemplateColumns: "2fr 1fr" }}>
            <div>
              <h2
                className="text-lg font-semibold text-orange-500 uppercase toTop downTopStyle"
                style={{ transitionDelay: ".2s" }}
              >
                Hi, Nkem Benjamin Here!
              </h2>
              <p className="text-5xl font-bold uppercase stack toTop downTopStyle" style={{ transitionDelay: ".4s" }}>
                I&apos;m A{" "}
                <span className="relative text-orange-400" id="stack">
                  Web Developer
                </span>
              </p>

              <div className="mt-4">
                <p className="font-light opacity-80 toTop downTopStyle" style={{ transitionDelay: ".6s" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quae alias? Tenetur consequuntur ipsa
                  sapiente quod. Temporibus porro voluptatum facilis. sapiente quod. Temporibus porro voluptatum
                  facilis.sapiente quod. Temporibus porro voluptatum facilis.
                </p>

                <div className="mt-4 toTop downTopStyle" style={{ transitionDelay: ".8s" }}>
                  <button className="px-3 py-1 text-orange-500 duration-200 border border-orange-500 hover:bg-orange-500 hover:text-black">
                    Get In Touch <i className="ri-rocket-line"></i>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="grid bg-transparent border border-orange-500 rounded-lg h-96 place-content-center toTop downTopStyle"
              id="me1"
              style={{ transitionDelay: ".5s", transition: "1s" }}
            >
              <p>Pic Coming soon...</p>
            </div>
          </div>
        </section>

        <section className="md:w-[1024px] w-11/12 mx-auto my-40 section">
          <div className="grid gap-6" style={{ gridTemplateColumns: "1.5fr 2fr" }}>
            <div className="grid bg-transparent border border-orange-500 rounded-lg h-96 place-content-center" id="me2">
              <p>Pic Coming soon...</p>
            </div>
            <div>
              <h3 className="mb-5 text-xl font-bold uppercase">Languages Strength</h3>
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
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="md:w-[1024px] w-11/12 mx-auto my-40 section">
          <div className="p-4">
            <h3 className="text-3xl font-bold text-center uppercase delay-150 blurApp blurThenAppear">Projects</h3>

            <div className="flex flex-wrap mt-10 justify-evenly">
              <div className=" toTop downTopStyle" style={{ transitionDelay: ".2s" }}>
                <div className="duration-200 border border-orange-500 rounded-md w-52 h-52 hover:scale-105"></div>
              </div>
              <div className=" toTop downTopStyle" style={{ transitionDelay: ".4s" }}>
                <div className="duration-200 border border-orange-500 rounded-md w-52 h-52 hover:scale-105"></div>
              </div>
              <div className=" toTop downTopStyle" style={{ transitionDelay: ".6s" }}>
                <div className="duration-200 border border-orange-500 rounded-md w-52 h-52 hover:scale-105"></div>
              </div>
              <div className=" toTop downTopStyle" style={{ transitionDelay: ".8s" }}>
                <div className="duration-200 border border-orange-500 rounded-md w-52 h-52 hover:scale-105"></div>
              </div>
            </div>

            <div className="my-5 text-center">
              <button className="px-3 py-1 text-orange-500 duration-200 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-black">
                View All Projects
              </button>
            </div>
          </div>
        </section>

        {/* <StackAnim /> */}
        <div className="h-96"></div>
      </main>
    </>
  );
};

export default HomePage;
