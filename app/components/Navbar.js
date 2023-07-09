"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const parentMobileMenuVariant = {
  hidden: { opacity: 0, transition: { staggerChildren: 0.5, delay: 2 } },
  show: { opacity: 1 },
  exit: { opacity: 0, transition: { staggerChildren: 0.5, delay: 2 } },
};

const mobileLinksVariant = {
  hidden: { opacity: 0, x: 30, transition: { scale: 0.9 } },
  show: { opacity: 1, x: 0, transition: { scale: 1 } },
};

const Navbar = () => {
  const pathName = usePathname();
  const hamburger = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const controls = useAnimationControls();

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
      hamburger.current.classList.toggle("active");
    } else {
      controls.start({ opacity: 0, transition: { staggerChildren: 0.5, delay: 2, duration: 2 } });
      setIsMenuOpen(!isMenuOpen);
      hamburger.current.classList.toggle("active");
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 z-20 w-full mx-auto text-lg font-bold navbarBlur">
        <div className="md:max-w-[1024px] w-11/12 md:py-6 py-4 mx-auto">
          <ul className="grid grid-cols-3 items-center">
            <li>
              <Link href={"/"} className="text-3xl font-bold md:text-4xl">
                B<span className="text-orange-500">.</span>{" "}
              </Link>
            </li>
            <li className="hidden md:block mx-auto">
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

            <li className="flex space-x-5 text-2xl font-light ml-auto">
              <Link
                href={"https://web.facebook.com/etzbenjamin.nkem"}
                target="_blank"
                className="hover:text-blue-600 duration-200 hover:animate-pulse"
              >
                <i className="cursor-pointer ri-facebook-circle-fill"></i>
              </Link>
              <Link
                href={"https://www.instagram.com/iambenjaminnkem/"}
                target="_blank"
                className="hover:text-pink-600 duration-200 hover:animate-pulse"
              >
                <i className="cursor-pointer ri-instagram-fill"></i>
              </Link>
              <Link
                href={"https://twitter.com/MainNkem"}
                target="_blank"
                className="hover:text-cyan-600 duration-200 hover:animate-pulse"
              >
                <i className="cursor-pointer ri-twitter-fill"></i>
              </Link>
              <Link
                href={"https://github.com/benjaminnkem"}
                target="_blank"
                className="hover:text-slate-600 duration-200 hover:animate-pulse"
              >
                <i className="cursor-pointer ri-github-fill"></i>
              </Link>
            </li>

            <li className="relative z-40 block w-10 md:hidden ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 200 200"
                ref={hamburger}
                onClick={toggleMenu}
                className="cursor-pointer"
              >
                <g strokeWidth="6.5" strokeLinecap="round">
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
      <motion.div
        className={`fixed top-0 right-0 grid h-full space-y-8 text-2xl font-semibold text-center uppercase duration-200 place-content-center overflow-hidden ${
          isMenuOpen
            ? "text-orange-50 bg-black z-20 bg-opacity-75 w-full"
            : "text-transparent bg-transparent -z-50 opacity-0 w-[.025px]"
        }`}
        variants={parentMobileMenuVariant}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.div
          variants={mobileLinksVariant}
          initial="hidden"
          animate="show"
          onClick={toggleMenu}
          className={`duration-200  ${pathName === "/" ? "text-orange-500" : "text-white"}`}
        >
          <Link href={"/"}>
            <p>Home</p>
          </Link>
        </motion.div>
        <motion.div
          variants={mobileLinksVariant}
          initial="hidden"
          animate="show"
          onClick={toggleMenu}
          className={`duration-200 ${pathName === "/projects" ? "text-orange-500" : "text-white"}`}
        >
          <Link href={"/projects"}>
            <p>Projects</p>
          </Link>
        </motion.div>

        <motion.div
          variants={mobileLinksVariant}
          initial="hidden"
          animate="show"
          onClick={toggleMenu}
          className={`duration-200 ${pathName === "/contact" ? "text-orange-500" : "text-white"}`}
        >
          <Link href={"/contact"}>
            <p>Contact</p>
          </Link>
        </motion.div>

        <div className="mt-4 space-x-5 text-2xl">
          <Link href={"https://web.facebook.com/etzbenjamin.nkem"} target="_blank">
            <i className="cursor-pointer ri-facebook-circle-fill"></i>
          </Link>
          <Link href={"https://www.instagram.com/iambenjaminnkem/"} target="_blank">
            <i className="cursor-pointer ri-instagram-fill"></i>
          </Link>
          <Link href={"https://twitter.com/MainNkem"} target="_blank">
            <i className="cursor-pointer ri-twitter-fill"></i>
          </Link>
          <Link href={"https://github.com/benjaminnkem"} target="_blank">
            <i className="cursor-pointer ri-github-fill"></i>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
