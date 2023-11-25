"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { useAnimationControls } from "framer-motion";
import { gsap } from "gsap";
import { create } from "zustand";

const parentMobileMenuVariant = {
  hidden: { opacity: 0, transition: { staggerChildren: 0.5, delay: 2 } },
  show: { opacity: 1 },
  exit: { opacity: 0, transition: { staggerChildren: 0.5, delay: 2 } },
};

export const useNavbar = create((set) => ({
  dark: true,
  toggleDark: () => set((state) => ({ ...state, dark: !state.dark })),
}));

const Navbar = () => {
  const pathName = usePathname();
  const hamburger = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { dark } = useNavbar();

  // Refs
  const navRef = useRef();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Games", href: "/games" },
  ];

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
      <nav className="fixed top-0 left-0 z-20 w-full mx-auto text-lg font-bold" ref={navRef}>
        <div className="md:max-w-[1488px] w-11/12 md:py-4 py-3 mx-auto">
          <div className="flex items-center justify-between" id="navContainer">
            <div id="logo">
              <Link href={"/"} className="text-3xl font-bold md:text-4xl">
                B<span className="text-primary">.</span>{" "}
              </Link>
            </div>

            <ul className="hidden ml-auto space-x-4 text-sm font-semibold sm:flex">
              {navLinks.map((item, idx) => (
                <Link href={item.href} key={idx}>
                  <li className="navLink">
                    <p
                      className={`duration-200 ${dark ? "text-primary" : "text-primaryBlack-100"} ${
                        pathName === item.href && "font-medium"
                      }`}
                    >
                      {item.label}
                    </p>
                  </li>
                </Link>
              ))}
            </ul>

            <div className="relative z-40 block w-10 ml-auto sm:hidden">
              <div className="flex items-center pr-4">
                <div>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 grid h-full space-y-8 text-2xl font-semibold text-center uppercase duration-300 ease-in place-content-center overflow-hidden ${
          isMenuOpen
            ? "text-primary bg-black z-20 bg-opacity-90 w-full"
            : "text-transparent bg-transparent -z-50 opacity-0 w-[.025px]"
        }`}
        variants={parentMobileMenuVariant}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {navLinks.map((item, idx) => (
          <div
            onClick={toggleMenu}
            key={idx}
            className={`duration-200  ${pathName === item.href ? "text-primary" : "text-white"}`}
          >
            <Link href={item.href}>
              <p>{item.label}</p>
            </Link>
          </div>
        ))}

        <div className="mt-4 space-x-5 text-2xl">
          <Link href={"https://web.facebook.com/etzbenjamin.nkem"} target="_blank">
            <i className="cursor-pointer ri-facebook-circle-fill"></i>
          </Link>
          <Link href={"https://www.linkedin.com/in/benjamin-nkem-23526720b/"} target="_blank">
            <i className="cursor-pointer ri-linkedin-line"></i>
          </Link>
          <Link href={"https://twitter.com/MainNkem"} target="_blank">
            <i className="cursor-pointer ri-twitter-fill"></i>
          </Link>
          <Link href={"https://github.com/benjaminnkem"} target="_blank">
            <i className="cursor-pointer ri-github-fill"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
