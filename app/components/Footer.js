const Footer = () => {
  return (
    <>
      <footer className="py-10 border-t border-orange-500">
        <div className="md:max-w-[1024px] w-11/12 mx-auto">
          <div className="grid items-center grid-cols-2 gap-10">
            <div className="text-white ">
              <div className="space-y-5">
                <div>
                  <h4 className="text-2xl font-semibold">
                    Address <i className="ri-home-8-line "></i>
                  </h4>
                  <p className="text-lg font-light">FISDES Hostel Palmview, FUNAAB Abeokuta, Ogun State, Nigeria.</p>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold">Quotes</h4>
                  <p className="text-lg font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum iure deleniti voluptates quidem
                    ipsam. Ducimus totam odit accusamus esse libero beatae unde quam consectetur quibusdam, corporis
                    praesentium perferendis expedita mollitia.
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold">Dedication</h4>
                  <p className="text-lg font-light">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum iure deleniti voluptates quidem
                    ipsam. Ducimus totam odit accusamus esse
                  </p>
                </div>
              </div>
            </div>
            <div className="text-white ">
              <div className="space-y-4">
                <div>
                  <h4 className="text-2xl font-semibold">
                    Links <i className="ri-link-m"></i>
                  </h4>
                  <ul className="space-y-2">
                    <li>
                      <p className="text-lg font-light">Home</p>
                    </li>
                    <li>
                      <p className="text-lg font-light">Contact</p>
                    </li>
                    <li>
                      <p className="text-lg font-light">Projects</p>
                    </li>
                    <li>
                      <p className="text-lg font-light">About</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold">Follow Me</h4>
                  <div className="flex space-x-4 text-2xl">
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
