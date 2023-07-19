"use client";
import Link from "next/link";
import { useState } from "react";
import MsgSentSuccessfully from "./msg-sent-successfully";

const ContactContent = () => {
  const [formData, setFormData] = useState({ name: "", email: "", content: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ loading: false, success: false });

  const handleChange = (event) => {
    const targetName = event.target.name;
    setFormData({ ...formData, [targetName]: event.target.value });
  };

  const handleValidation = () => {
    const errors = {};

    if (formData.name === "") {
      errors.name = "Name is required";
    }

    if (formData.email === "") {
      errors.email = "Email is required";
    } else if (formData.email.substring(formData.email.indexOf("@") + 1, formData.email.length) < 1) {
      errors.email = "Invalid email";
    }

    if (formData.content === "") {
      errors.content = "Message content is required";
    }

    return errors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ ...status, loading: true, success: false });

    const gottenErrors = handleValidation();
    setErrors(gottenErrors);

    if (Object.keys(gottenErrors).length >= 1) setStatus({ ...status, loading: false, success: false }); //
    if (Object.keys(gottenErrors).length === 0) {
      await new Promise((resolve) => setTimeout(() => resolve(), 1000)); // To emulate a real-world scenario
      setStatus({ ...status, loading: false, success: true });
      setErrors({});
      setFormData({ name: "", email: "", content: "" });

      // The setTimeout duration is the same with the animation time
      setTimeout(() => setStatus({ ...status, loading: false, success: false }), 3000);
    }
  };

  return (
    <>
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
            <form onSubmit={(event) => handleSubmit(event)}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`block w-full bg-transparent focus:outline-none border-2 duration-200 rounded-md p-2 border-b ${
                      errors.name
                        ? "border-red-700 focus:border-red-700 active:border-red-700"
                        : "border-orange-700 focus:border-purple-700 active:border-purple-700"
                    }`}
                    autoComplete="off"
                    value={formData.name}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.name && <p className="text-red-700 font-bold text-sm">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`block w-full bg-transparent focus:outline-none border-2 duration-200 rounded-md p-2 border-b ${
                      errors.email
                        ? "border-red-700 focus:border-red-700 active:border-red-700"
                        : "border-orange-700 focus:border-purple-700 active:border-purple-700"
                    }`}
                    autoComplete="off"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.email && <p className="text-red-700 font-bold text-sm">{errors.email}</p>}
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
                    className={`block w-full bg-transparent focus:outline-none border-2 border-orange-700 focus:border-purple-700 active:border-purple-700 duration-200 rounded-md p-2 border-b resize-none ${
                      errors.content
                        ? "border-red-700 focus:border-red-700 active:border-red-700"
                        : "border-orange-700 focus:border-purple-700 active:border-purple-700"
                    }`}
                    value={formData.content}
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                  {errors.content && <p className="text-red-700 font-bold text-sm">{errors.content}</p>}
                </div>

                <input
                  type="submit"
                  value={status.loading ? `Sending... 🕑` : "Send Message 🚀"}
                  className="w-full py-2 border-2 border-orange-700 rounded-md duration-200 hover:bg-orange-700 focus:outline-none focus:border-purple-700 focus:hover:bg-purple-700"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      {status.success && <MsgSentSuccessfully />}
    </>
  );
};

export default ContactContent;
