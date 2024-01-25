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
      const body = { name: formData.name, email: formData.email, content: formData.content };

      const res = await fetch("/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        setStatus({ ...status, loading: false, success: false });
        console.log("There is a problem...");
        return;
      }

      setStatus({ ...status, loading: false, success: true });
      setErrors({});
      setFormData({ name: "", email: "", content: "" });
      setTimeout(() => setStatus({ ...status, loading: false, success: false }), 3000);
    }
  };

  return (
    <>
      <div className="container my-10 section mt-28 md:mt-32">
        <h1 className="mb-8 text-4xl font-bold text-center md:text-start">
          Contact Me 📞🤙<span className="text-primary">.</span>
        </h1>

        <div className="grid grid-cols-1 gap-4 mt-10 sm:grid-cols-2 sm:gap-6 md:gap-8">
          <div className="mt-6 space-y-6">
            <div className="p-4 border rounded-md border-primary">
              <h2 className="text-2xl font-semibold">Dev Handle</h2>
              <ul className="mt-1 space-y-2">
                <li className="text-lg font-light">
                  <span>Github</span> (<i className="ri-github-fill"></i>):{" "}
                  <Link target="_blank" href={"https://github.com/benjaminnkem"}>
                    <span className="font-bold text-primary">benjaminnkem</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="p-4 border rounded-md border-primary">
              <h2 className="text-2xl font-semibold">Social Handle</h2>
              <ul className="mt-1 space-y-2">
                <li className="text-lg font-light">
                  <span>Facebook</span> (<i className="ri-facebook-circle-fill"></i>):{" "}
                  <Link target="_blank" href={"https://web.facebook.com/etzbenjamin.nkem"}>
                    <span className="font-bold text-primary">Benjamin Nkem</span>
                  </Link>
                </li>
                <li className="text-lg font-light">
                  <span>Instagram</span> (<i className="ri-instagram-fill"></i>):{" "}
                  <Link target="_blank" href={"https://www.instagram.com/iambenjaminnkem/"}>
                    <span className="font-bold text-primary">@iambenjaminnkem</span>
                  </Link>
                </li>
                <li className="text-lg font-light">
                  <span>Twitter</span> (<i className="ri-twitter-fill"></i>):{" "}
                  <Link target="_blank" href={"https://twitter.com/MainNkem"}>
                    <span className="font-bold text-primary">@MainNkem</span>
                  </Link>
                </li>
                <li className="text-lg font-light">
                  <span>WhatsApp</span> (<i className="ri-whatsapp-fill"></i>):{" "}
                  <Link target="_blank" href={"https://wa.me/+2348133961439"}>
                    <span className="font-bold text-primary">+234 (81) 3396 1439</span>
                  </Link>
                </li>
                <li className="text-lg font-light">
                  <span>Threads</span>:{" "}
                  <Link target="_blank" href={"https://threads.net/@iambenjaminnkem"}>
                    <span className="font-bold text-primary">@iambenjaminnkem</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="block py-3 text-xl font-semibold sm:hidden">Send Me A Message</h3>
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
                    className={`block w-full bg-transparent outline-none border-2 duration-200 rounded-md p-2 border-b ${
                      errors.name
                        ? "border-red-700 focus:border-red-700 active:border-red-700"
                        : "border-primary focus:border-primary/50 active:border-primary/80"
                    }`}
                    autoComplete="off"
                    value={formData.name}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.name && <p className="text-sm font-bold text-red-700">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`block w-full bg-transparent outline-none border-2 duration-200 rounded-md p-2 border-b ${
                      errors.email
                        ? "border-red-700 focus:border-red-700 active:border-red-700"
                        : "border-primary focus:border-primary/50 active:border-primary/80"
                    }`}
                    autoComplete="off"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.email && <p className="text-sm font-bold text-red-700">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="content" className="font-semibold">
                    Message Content
                  </label>
                  <textarea
                    name="content"
                    id="content"
                    rows="5"
                    className={`block w-full bg-transparent outline-none border-2 border-primary focus:border-primary/50 active:border-primary/80 duration-200 rounded-md p-2 border-b resize-none ${
                      errors.content
                        ? "border-red-700 focus:border-red-700 active:border-red-700"
                        : "border-primary focus:border-primary/50 active:border-primary/80"
                    }`}
                    value={formData.content}
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                  {errors.content && <p className="text-sm font-bold text-red-700">{errors.content}</p>}
                </div>

                <input
                  type="submit"
                  value={status.loading ? `Sending... 🕑` : "Send Message 🚀"}
                  className={`w-full py-2 border-2 border-primary cursor-pointer rounded-md duration-200 hover:bg-primary hover:text-black outline-none focus:border-primary/50 focus:hover:bg-primary-30 disabled:bg-primary`}
                  disabled={status.loading}
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
