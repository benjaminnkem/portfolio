import Link from "next/link";
import PageContainer from "../page-container";
import "./contact.css";

const ContactPage = () => {
  return (
    <>
      <main>
        <PageContainer>
          <div className="md:max-w-[1024px] w-11/12 mx-auto my-10 section mt-28 md:mt-32">
            <h1 className="mb-8 text-4xl font-bold text-center md:text-start">
              Contact Me 📌<span className="text-orange-500">.</span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mt-10">
              <div className="space-y-6">
                <div className="border rounded-md p-4 border-orange-700">
                  <h2 className="font-semibold text-2xl">Social Handle</h2>
                  <ul className="mt-1 space-y-2">
                    <li className="text-lg font-light">
                      <span>Facebook</span> (<i className="ri-facebook-circle-fill"></i>):{" "}
                      <Link target="_blank" href={"https://web.facebook.com/etzbenjamin.nkem"}>
                        <span className="font-bold text-orange-600">Benjamin Nkem</span>
                      </Link>
                    </li>
                    <li className="text-lg font-light">
                      <span>Instagram</span> (<i className="ri-instagram-fill"></i>):{" "}
                      <Link target="_blank" href={"https://www.instagram.com/iambenjaminnkem/"}>
                        <span className="font-bold text-orange-600">@iambenjaminnkem</span>
                      </Link>
                    </li>
                    <li className="text-lg font-light">
                      <span>Twitter</span> (<i className="ri-twitter-fill"></i>):{" "}
                      <Link target="_blank" href={"https://twitter.com/MainNkem"}>
                        <span className="font-bold text-orange-600">@MainNkem</span>
                      </Link>
                    </li>
                    <li className="text-lg font-light">
                      <span>WhatsApp</span> (<i className="ri-whatsapp-fill"></i>):{" "}
                      <Link target="_blank" href={"https://wa.me/+2348133961439"}>
                        <span className="font-bold text-orange-600">+234 (81) 3396 1439</span>
                      </Link>
                    </li>
                    <li className="text-lg font-light">
                      <span>Threads</span>:{" "}
                      <Link target="_blank" href={"https://threads.net/@iambenjaminnkem"}>
                        <span className="font-bold text-orange-600">@iambenjaminnkem</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="border rounded-md p-4 border-orange-700">
                  <h2 className="font-semibold text-2xl">Dev Handle</h2>
                  <ul className="mt-1 space-y-2">
                    <li className="text-lg font-light">
                      <span>Github</span> (<i className="ri-github-fill"></i>):{" "}
                      <Link target="_blank" href={"https://github.com/benjaminnkem"}>
                        <span className="font-bold text-orange-600">benjaminnkem</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="py-3 sm:hidden block font-semibold text-xl">Send Me A Message</h3>
                <form>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="font-semibold">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="block w-full bg-transparent focus:outline-none border-2 border-orange-700 focus:border-purple-700 active:border-purple-700 duration-200 rounded-md p-2 border-b"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="font-semibold">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="block w-full bg-transparent focus:outline-none border-2 border-orange-700 focus:border-purple-700 active:border-purple-700 duration-200 rounded-md p-2 border-b"
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="content" className="font-semibold">
                        Message Content
                      </label>
                      <textarea
                        name="content"
                        id="content"
                        cols="30"
                        rows="10"
                        className="block w-full bg-transparent focus:outline-none border-2 border-orange-700 focus:border-purple-700 active:border-purple-700 duration-200 rounded-md p-2 border-b resize-none"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <input
                        type="submit"
                        value={"Send Message 🚀"}
                        className="w-full py-2 border-2 border-orange-700 rounded-md duration-200 hover:bg-orange-700 focus:outline-none focus:border-purple-700 focus:hover:bg-purple-700"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </PageContainer>
      </main>
    </>
  );
};

export default ContactPage;
