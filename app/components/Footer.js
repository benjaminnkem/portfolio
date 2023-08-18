import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="py-10 border-t border-cyan-500 bg-[#0f0f0f6f]">
        <div className="md:max-w-[1024px] w-11/12 mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="mr-auto">
              <p className="md:text-5xl text-4xl font-extrabold">
                Ben<span className="text-cyan-500">.</span>
              </p>
            </div>

            <div className="text-center text-white md:text-start ml-auto">
              <div>
                <ul className="space-x-4 flex">
                  <li>
                    <Link href={"/"}>
                      <p className="duration-200 inline-block hover:text-cyan-500">Home</p>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/contact"}>
                      <p className="duration-200 inline-block hover:text-cyan-500">Contact</p>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/projects"}>
                      <p className="duration-200 inline-block hover:text-cyan-500">Projects</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-center space-x-4 text-2xl md:justify-start">
                  <Link href={"https://www.linkedin.com/in/benjamin-nkem-23526720b/"} target="_blank">
                    <i className="cursor-pointer ri-linkedin-line"></i>
                  </Link>
                  <Link href={"https://twitter.com/MainNkem"} target="_blank">
                    <i className="cursor-pointer ri-twitter-fill hover:text-cyan-600"></i>
                  </Link>
                  <Link href={"https://github.com/benjaminnkem"} target="_blank">
                    <i className="cursor-pointer ri-github-fill"></i>
                  </Link>
                  <Link href={"https://wa.me/+2348133961439"} target="_blank">
                  <i className="duration-200 hover:text-green-500 ri-whatsapp-fill"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 text-center">
            <p className="text-white text-sm font-semibold">@Benjamin Nkem - All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
