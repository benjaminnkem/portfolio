import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="py-10 border-t border-orange-500">
        <div className="md:max-w-[1024px] w-11/12 mx-auto">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="text-white ">
              <div className="space-y-5 text-center md:text-start">
                <div>
                  <h4 className="text-2xl font-semibold">
                    Address <i className="ri-home-8-line "></i>
                  </h4>
                  <p className="text-lg font-light">FISDES Hostel Palmview, FUNAAB Abeokuta, Ogun State, Nigeria.</p>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold">Fav. Quote</h4>
                  <p className="text-lg font-light">
                    <span className="italic">
                      &quot;Web development is the art of transforming ideas into engaging and functional online
                      experiences, where creativity meets technology to create a digital masterpiece.&quot;
                    </span>
                  </p>
                </div>
                {/* <div>
                  <h4 className="text-2xl font-semibold">Dedication</h4>
                  <p className="text-lg italic font-light">
                    &quot;To my remarkable mother, whose unwavering dedication and support have shaped my journey. This
                    portfolio is a heartfelt tribute to your tireless hard work, love, and guidance. Thank you for
                    believing in me and inspiring me to reach new heights. I am forever grateful for everything you do.
                    With boundless love and appreciation, this portfolio is dedicated to you, my incredible mum.&quot;
                  </p>
                </div>*/}
              </div>
            </div>
            <div className="text-center text-white md:text-start">
              <div className="space-y-4">
                <div>
                  <h4 className="text-2xl font-semibold">
                    Links <i className="ri-link-m"></i>
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href={"/"}>
                        <p className="text-lg font-light duration-200 hover:text-orange-500">Home</p>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/contact"}>
                        <p className="text-lg font-light duration-200 hover:text-orange-500">Contact</p>
                      </Link>
                    </li>
                    <li>
                      <Link href={"/projects"}>
                        {" "}
                        <p className="text-lg font-light duration-200 hover:text-orange-500">Projects</p>
                      </Link>
                    </li>
                    <li>
                      <a href="#about">
                        <p className="text-lg font-light duration-200 hover:text-orange-500">About</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold">Follow Me</h4>
                  <div className="flex justify-center space-x-4 text-2xl md:justify-start">
                    <i className="duration-200 hover:text-blue-700 ri-facebook-circle-fill"></i>
                    <i className="duration-200 hover:text-red-600 ri-instagram-fill"></i>
                    <i className="duration-200 hover:text-green-500 ri-whatsapp-fill"></i>
                    <i className="duration-200 ri-twitter-fill hover:text-cyan-600"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 text-center text-white">
            <p className="font-light text-center opacity-80">@2023 - Benjamin Nkem</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
