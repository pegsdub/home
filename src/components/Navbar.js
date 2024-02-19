import React from "react";
import { Link as Link2 } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <div className="bg-white text-black ">
      <nav
        className="bg-blackm-4 p-2 flex rounded-xl justify-between items-center h-16 bg-blacvk font-light relative shadow-inner shadow-lg "
        role="navigation"
      >
        <Link2
          to="/"
          className="p-8 hover:text-blue-500 transition duration-700 ease-in-out"
        >
          hello :)
        </Link2>
        <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>
        <div className="pr-8 md:block hidden">
          <a
            href="/#whoiam"
            className="p-4 hover:text-yellow-300 transition duration-700 ease-in-out "
            activeClass="active"
            to="whoiam"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            who i am
          </a>
          <a
            href="/#contactme"
            className="p-4 hover:text-red-600 transition duration-700 ease-in-out "
            activeClass="active"
            to="/contactme"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            contact me
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
