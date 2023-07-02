import Navbar from "./Navbar";
import StackAnim from "./StackAnim";
import "./styles/HomePage.css";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="mx-auto w-11/12 md:w-[1024px]">
          <div className="h-screen md:h-[28rem] xl:h-[30rem]  flex justify-center items-center">
            <div className="text-center uppercase">
              <h1 className="text-5xl font-bold tracking-wider text-orange-500">Take A Peek</h1>
              <p className="mt-5 text-lg tracking-wide opacity-80 text-orange-50">Scroll Down</p>
            </div>
          </div>
        </section>

        <section className="mx-auto w-11/12 md:w-[1024px]">
          <div className="grid grid-cols-2">
            
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
