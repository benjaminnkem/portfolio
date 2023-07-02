import Navbar from "./Navbar";
import StackAnim from "./StackAnim";
import "./styles/HomePage.css";

const HomePage = () => {
  return (
    <>
      <main>
        <section className="mx-auto w-11/12 md:w-[1024px] section">
          <Navbar />
          <div className="h-screen md:h-[28rem] xl:h-[30rem]  flex justify-center items-center">
            <div className="text-center uppercase">
              <h1 className="text-5xl font-bold tracking-wider text-orange-500">Take A Peek</h1>
              <p className="mt-5 text-lg tracking-wide opacity-80 text-orange-50">
                <i className="ri-arrow-down-line"></i> Scroll Down <i className="ri-arrow-down-line"></i>
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-11/12 md:w-[1024px] section my-40">
          <div className="grid items-center gap-2" style={{ gridTemplateColumns: "2fr 1fr" }}>
            <div>
              <h2 className="text-lg font-semibold text-orange-500 uppercase">Hi, Nkem Benjamin Here!</h2>
              <p className="text-5xl font-bold uppercase stack">
                I&apos;m A{" "}
                <span className="text-orange-400" id="stack">
                  Web Developer
                </span>
              </p>

              <div className="mt-4">
                <p className="font-light opacity-80">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quae alias? Tenetur consequuntur ipsa
                  sapiente quod. Temporibus porro voluptatum facilis. sapiente quod. Temporibus porro voluptatum
                  facilis.sapiente quod. Temporibus porro voluptatum facilis.
                </p>

                <div className="mt-4">
                  <button className="px-3 py-1 text-orange-500 duration-200 border border-orange-500 hover:bg-orange-500 hover:text-black">
                    Hire Me <i className="ri-rocket-line"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid bg-transparent border border-orange-500 rounded-lg h-96 place-content-center">
              <p>Pic Coming soon...</p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-11/12 md:w-[1024px] section my-40">
          <div className="grid gap-6" style={{ gridTemplateColumns: "1.5fr 2fr" }}>
            <div className="grid bg-transparent border border-orange-500 rounded-lg h-96 place-content-center">
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

        <section className="mx-auto w-11/12 md:w-[1024px] section my-40">
          <div className="p-4">
            <h3 className="text-3xl font-bold text-center uppercase">Projects</h3>

            <div className="flex mt-10 justify-evenly">
              <div className="border border-orange-500 rounded-md w-52 h-52"></div>
              <div className="border border-orange-500 rounded-md w-52 h-52"></div>
              <div className="border border-orange-500 rounded-md w-52 h-52"></div>
              <div className="border border-orange-500 rounded-md w-52 h-52"></div>
            </div>

            <div className="py-5 text-center">
              <button className="px-3 py-1 text-orange-500 duration-200 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-black">
                View All Projects
              </button>
            </div>
          </div>
        </section>

        <StackAnim />
        <div className="h-96"></div>
      </main>
    </>
  );
};

export default HomePage;
