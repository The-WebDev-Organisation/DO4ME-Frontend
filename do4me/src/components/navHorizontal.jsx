import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavHorizontal = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-[#FCF8F1] bg-opacity-30 h-30">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link to="/" className="flex mb-3">
                <img
                  className="w-auto h-20 mt-5"
                  src="https://i.ibb.co/Kh3Jfkm/d4me.png"
                  alt="d4me"
                  border="0"
                />
              </Link>
            </div>

            {/* Navigation for larger screens */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <NavLink to="/" title="Home" />
              <NavLink to="/services" title="Services" />
              <NavLink to="/about" title="About" />
              <NavLink to="/contact" title="Contact" />
            </div>

            <div className="flex items-center">
              <div className="hidden lg:block">
                <Link
                  to="/sign"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-[#68f0fa] rounded-full mr-5"
                  role="button"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
                  role="button"
                >
                  Join Now
                </Link>
              </div>

              {/* Menu button for smaller screens */}
              <button
                className="lg:hidden text-black focus:outline-none ml-4"
                onClick={toggleMenu}
              >
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
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Dropdown menu for smaller screens */}
          {isMenuOpen && (
            <div className="lg:hidden mt-2 space-y-2">
              <NavLink to="/" title="Home" />
              <NavLink to="/services" title="Services" />
              <NavLink to="/about" title="About" />
              <NavLink to="/contact" title="Contact" />

              <Link
                to="/sign"
                className="block px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-[#68f0fa] rounded-full"
                role="button"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="block px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
                role="button"
              >
                Join Now
              </Link>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

const NavLink = ({ to, title, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block lg:inline text-base text-black transition-all duration-200 hover:text-opacity-80"
  >
    {title}
  </Link>
);

export default NavHorizontal;
