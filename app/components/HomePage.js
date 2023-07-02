import StackAnim from "./StackAnim";
import "./styles/HomePage.css";

const HomePage = () => {
  return (
    <>
      <main>
        <section className="md:max-w-[1024px] w-11/12 mx-auto section" id="overAllSect">
          <div className="flex items-center justify-center h-screen">
            <div className="text-center uppercase">
              <h1 className="text-5xl font-bold tracking-wider text-orange-500 toDown">Take A Look</h1>
              <a href="#me">
                <p
                  className="mt-5 text-lg tracking-wide opacity-80 text-orange-50 toDown hover:cursor-pointer"
                  style={{ transitionDelay: "0.7s" }}
                >
                  <i className="ri-arrow-down-line"></i> Scroll Down <i className="ri-arrow-down-line"></i>
                </p>
              </a>
            </div>
          </div>
        </section>

        <section className="md:max-w-[1024px] w-11/12 flex justify-center mx-auto min-h-[32rem] my-10 section" id="me">
          <div className="items-center gap-2 md:grid" style={{ gridTemplateColumns: "2fr 1fr" }}>
            <div>
              <h2 className="text-lg font-semibold text-orange-500 uppercase toTop" style={{ transitionDelay: ".2s" }}>
                Hi, Nkem Benjamin Here!
              </h2>
              <p className="text-5xl font-bold uppercase stack toTop" style={{ transitionDelay: ".4s" }}>
                {/* I&apos;m A{" "} */}~
                <span className="relative text-orange-400" id="stack">
                  Web Developer
                </span>
              </p>

              <div className="mt-4">
                <p className="font-light opacity-80 toTop" style={{ transitionDelay: ".6s" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quae alias? Tenetur consequuntur ipsa
                  sapiente quod. Temporibus porro voluptatum facilis. sapiente quod. Temporibus porro voluptatum
                  facilis.sapiente quod. Temporibus porro voluptatum facilis.
                </p>

                <div className="mt-4 toTop" style={{ transitionDelay: ".8s" }}>
                  <button className="px-3 py-1 text-orange-500 duration-200 border border-orange-500 hover:bg-orange-500 hover:text-black">
                    Get In Touch <i className="ri-rocket-line"></i>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="grid bg-transparent border border-orange-500 rounded-lg h-96 place-content-center toTop"
              id="me1"
              style={{ transitionDelay: ".5s", transition: "1s" }}
            >
              <p>Pic Coming soon...</p>
            </div>
          </div>
        </section>

        <section className="my-10 section" id="language">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#3D3D3D"
              fill-opacity="1"
              d="M0,256L120,256C240,256,480,256,720,224C960,192,1200,128,1320,96L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
          <div style={{ backgroundColor: "#3D3D3D" }}>
            <div className="md:max-w-[1024px] w-11/12 flex justify-center mx-auto min-h-[32rem]">
              <div>
                <h3 className="mb-5 text-4xl font-bold uppercase">Personal Statistics</h3>
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
              </div>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#3D3D3D"
              fill-opacity="1"
              d="M0,288L120,256C240,224,480,160,720,128C960,96,1200,96,1320,96L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
            ></path>
          </svg>
        </section>

        <section className="md:max-w-[1024px] w-11/12  mx-auto min-h-[32rem] my-10 section" id="projects">
          <div>
            <h3 className="mb-5 text-4xl font-bold uppercase">Projects</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 duration-200 border border-orange-500 rounded-md hover:scale-105">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam ratione accusantium praesentium
                architecto accusamus nihil alias sed a quia placeat cum facilis maiores eaque tenetur, cupiditate
                aperiam, ad necessitatibus explicabo soluta. Deserunt quae nulla itaque ad nihil libero natus.
              </div>
              <div className="p-4 duration-200 border border-orange-500 rounded-md hover:scale-105">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam ratione accusantium praesentium
                architecto accusamus nihil alias sed a quia placeat cum facilis maiores eaque tenetur, cupiditate
                aperiam, ad necessitatibus explicabo soluta. Deserunt quae nulla itaque ad nihil libero natus.
              </div>
              <div className="p-4 duration-200 border border-orange-500 rounded-md hover:scale-105">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nam ratione accusantium praesentium
                architecto accusamus nihil alias sed a quia placeat cum facilis maiores eaque tenetur, cupiditate
                aperiam, ad necessitatibus explicabo soluta. Deserunt quae nulla itaque ad nihil libero natus.
              </div>
            </div>

            <div className="mt-5 text-center">
              <button className="px-3 py-1 text-orange-500 duration-200 border border-orange-500 rounded-sm hover:bg-orange-500 hover:text-black group">
                View More Projects <i className="ri-arrow-right-circle-line"></i>
              </button>
            </div>
          </div>
        </section>

        {/* <StackAnim /> */}
      </main>
    </>
  );
};

export default HomePage;
