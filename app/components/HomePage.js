import "./styles/HomePage.css";

const HomePage = () => {
  return (
    <>
      <main>
        <div className="flex flex-col justify-between absolute top-0 left-0 w-full h-full">
          <nav className="flex justify-between items-centers px-10 py-5">
            <h1 className="text-3xl font-bold">BenT</h1>

            <ul className="flex items-center space-x-4">
              <li>Home</li>
              <li>About</li>
              <li>Contact Me</li>
              <li>Projects</li>
              <li className="bg-orange-500 text-orange-100 px-2 py-1 rounded-md">Download Resume</li>
            </ul>
          </nav>
          <div
            className="grid gap-3 md:h-[32rem] sm:h-[28rem] h-[28rem]"
            style={{ gridTemplateColumns: "1fr 6fr 1fr" }}
          >
            <div className="border"></div>
            <div className="border grid grid-cols-2 gap-2 items-center">
              <div>
                <h2 className="text-3xl font-bold uppercase">Hi, Nkem Benjamin Here!</h2>
                <p className="font-semibold text-lg">A <span className="text-purple-600">Fullstack Web Developer</span></p>
                <p className="leading-relaxed mt-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quidem cum ex exercitationem!
                  Consectetur cumque enim natus
                </p>
                <div className="mt-4 flex space-x-2">
                  <button className="px-4 py-1 rounded-md border border-orange-500 duration-200 hover:bg-orange-500 hover:text-orange-50 shadow-md">
                    Resume 🧾📙
                  </button>
                  <button className="px-4 py-1 rounded-md border border-orange-500 duration-200 hover:bg-orange-500 hover:text-orange-50 shadow-md">
                    Projects ⚒👨‍🏭
                  </button>
                </div>
              </div>

              <div className="border-2 border-orange-600 rounded-md h-full w-3/4 mx-auto">
                
              </div>
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
