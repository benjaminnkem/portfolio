"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const hamburger = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
      hamburger.current.classList.toggle("active");
    } else {
      setIsMenuOpen(!isMenuOpen);
      hamburger.current.classList.toggle("active");
    }
  }

  return (
    <>
      <nav className="z-20 w-full mx-auto text-lg font-bold navbarBlur">
        <div className="md:max-w-[1024px] w-11/12 py-6 mx-auto">
          <ul className="flex items-center justify-between">
            <li>
              <Link href={"/"} className="text-2xl font-bold md:text-4xl">
                B<span className="text-orange-500">.</span>{" "}
              </Link>
            </li>
            <li className="hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="group">
                  <Link href={"/"}>
                    <div
                      className={`flex items-center space-x-1 border border-transparent  group-hover:rounded-md group-hover:px-1 ${
                        pathName === "/"
                          ? "text-orange-500 group-hover:border-orange-500"
                          : "text-white group-hover:border-white"
                      }`}
                    >
                      <i className="overflow-hidden text-xl duration-200 ri-home-2-line"></i>
                      <div className="flex items-center w-0 overflow-hidden duration-200 group-hover:w-[52px]">
                        <span>Home</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="group">
                  <Link href={"/projects"}>
                    <div
                      className={`flex items-center space-x-1 border border-transparent  group-hover:rounded-md group-hover:px-1 ${
                        pathName === "/projects"
                          ? "text-orange-500 group-hover:border-orange-500"
                          : "text-white group-hover:border-white"
                      }`}
                    >
                      <i className="overflow-hidden text-xl duration-200 ri-tools-line"></i>
                      <div className="flex items-center w-0 overflow-hidden duration-200 group-hover:w-[68px]">
                        <span>Projects</span>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="group">
                  <Link href={"/contact"}>
                    <div
                      className={`flex items-center space-x-1  border border-transparent  group-hover:rounded-md group-hover:px-1 ${
                        pathName === "/contact"
                          ? "text-orange-500 group-hover:border-orange-500"
                          : "text-white group-hover:border-white"
                      }`}
                    >
                      <i className="overflow-hidden text-xl duration-200 ri-phone-fill"></i>
                      <div className="flex items-center w-0 overflow-hidden duration-200 group-hover:w-[68px]">
                        <span>Contact</span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>

            <li className="flex space-x-4 font-light">
              <i className="ri-facebook-circle-line"></i>
              <i className="ri-instagram-line"></i>
              <i className="ri-twitter-line"></i>
              <Link href={"https://github.com/benjaminnkem"} target="_blank">
                <i className="ri-github-line"></i>
              </Link>
            </li>

            <li className="relative block w-10 md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 200 200" ref={hamburger} onClick={toggleMenu}>
                <g stroke-width="6.5" strokeLinecap="round">
                  <path d="M72 82.286h28.75" fill="#009100" fillRule="evenodd" stroke="#fff" />
                  <path
                    d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                    fill="none"
                    stroke="#fff"
                  />
                  <path d="M72 125.143h28.75" fill="#009100" fillRule="evenodd" stroke="#fff" />
                  <path
                    d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                    fill="none"
                    stroke="#fff"
                  />
                  <path d="M100.75 82.286h28.75" fill="#009100" fillRule="evenodd" stroke="#fff" />
                  <path d="M100.75 125.143h28.75" fill="#009100" fillRule="evenodd" stroke="#fff" />
                </g>
              </svg>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
