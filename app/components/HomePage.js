import StackAnim from "./StackAnim";
import "./styles/HomePage.css";

const HomePage = () => {
  return (
    <>
      <main>
        <div className="absolute top-0 left-0 flex flex-col justify-between w-full h-full">
          <nav className="flex justify-between px-10 py-5 items-centers">
            <h1 className="text-3xl font-bold">BenT</h1>

            <ul className="flex items-center space-x-4">
              <li>Home</li>
              <li>About</li>
              <li>Contact Me</li>
              <li>Projects</li>
              <li className="px-2 py-1 text-orange-100 bg-orange-500 rounded-md">Download Resume</li>
            </ul>
          </nav>
          <div
            className="grid gap-3 md:h-[32rem] sm:h-[28rem] h-[28rem]"
            style={{ gridTemplateColumns: "1fr 6fr 1fr" }}
          >
            <div className="border"></div>
            <div className="grid items-center grid-cols-2 gap-2 border">
              <div>
                <h2 className="text-3xl font-bold uppercase">Hi, Nkem Benjamin Here!</h2>
                <p className="text-lg font-semibold">
                  {/* Animation part */}A <span className="text-purple-600" id="stack">---</span>
                  <StackAnim />
                </p>
                <p className="mt-4 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quidem cum ex exercitationem!
                  Consectetur cumque enim natus
                </p>
                <div className="flex mt-4 space-x-2">
                  <button className="px-4 py-1 duration-200 border border-orange-500 rounded-md shadow-md hover:bg-orange-500 hover:text-orange-50">
                    Resume 🧾📙
                  </button>
                  <button className="px-4 py-1 duration-200 border border-orange-500 rounded-md shadow-md hover:bg-orange-500 hover:text-orange-50">
                    Projects ⚒👨‍🏭
                  </button>
                </div>
              </div>

              <div className="w-3/4 h-full mx-auto border-2 border-orange-600 rounded-md"></div>
            </div>
            <div className="border"></div>
          </div>

          <div className="h-10 border"></div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
