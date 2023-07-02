"use client";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <>
      <nav className="py-10 text-lg font-bold">
        <ul className="flex justify-between">
          <li>Ben.t</li>
          <li>
            <div className="flex items-center space-x-4">
              <div className="group">
                <div
                  className={`flex items-center space-x-1  border border-transparent  group-hover:rounded-md group-hover:px-1 ${
                    pathName === "/" ? "text-orange-500 group-hover:border-orange-500" : "text-white group-hover:border-white"
                  }`}
                >
                  <i className="overflow-hidden text-xl duration-200 ri-home-2-line"></i>
                  <div className="flex items-center w-0 overflow-hidden duration-200 group-hover:w-[52px]">
                    <span>Home</span>
                  </div>
                </div>
              </div>
              <p>Projects</p>
              <p>Contact</p>
            </div>
          </li>
          <li className="flex space-x-2 font-light">
            <i className="ri-facebook-circle-line"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-twitter-line"></i>
            <i className="ri-github-line"></i>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
