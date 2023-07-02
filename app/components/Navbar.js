"use client";
const Navbar = () => {
  return (
    <>
      <nav className="py-10 text-xl font-bold">
        <ul className="flex justify-between">
          <li>Ben.t</li>
          <li className="text-orange-500">Overview</li>
          <li className="flex space-x-2 font-light">
            <i className="ri-facebook-circle-line"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-twitter-line"></i>
            <i className="ri-github-line"></i>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
