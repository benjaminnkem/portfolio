"use client";
const Navbar = () => {
  return (
    <>
      <div className="mx-auto w-11/12 md:w-[1024px] py-10 font-bold">
        <nav className="text-xl">
          <ul className="flex justify-between">
            <li>Ben.t</li>
            <li className="text-orange-500">Overview</li>
            <li>Projects</li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
