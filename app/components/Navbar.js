"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const navBar = useRef(null);

  // const scrollFunction = () => {
  //   const scrollY = window.scrollY;

  //   if (scrollY > 250) {
  //     navBar.current.classList.add("fixed", "navbarBlur");
  //   } else {
  //     navBar.current.classList.remove("fixed", "navbarBlur");
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("scroll", scrollFunction);
  //   return () => {
  //     document.removeEventListener("scroll", scrollFunction);
  //   };
  // }, []);

  return (
    <>
      <nav className="z-20 w-full mx-auto text-lg font-bold navbarBlur">
        <div className="md:max-w-[1024px] w-11/12 py-6 mx-auto">
          <ul className="flex justify-between">
            <li>
              <Link href={"/"} className="font-bold">
                B<span className="text-orange-500">.</span>{" "}
              </Link>
            </li>
            <li>
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
            <li className="flex space-x-2 font-light">
              <i className="ri-facebook-circle-line"></i>
              <i className="ri-instagram-line"></i>
              <i className="ri-twitter-line"></i>
              <Link href={"https://github.com/benjaminnkem"} target="_blank">
                <i className="ri-github-line"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
