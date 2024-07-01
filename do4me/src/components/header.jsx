import React from "react";
import "../index.css";
import NavHorizontal from "./navHorizontal";

const Header = () => {
  return (
    <div className="kiki">
      <div className="bg-white">
        <div>
          <NavHorizontal />
        </div>
        <div className="mobiview shadow-200xl">
          <div className="-mt-20 shadow-inner">
            <section className="bg-[#FCF8F1] bg-opacity-30 py-5 sm:py-10 lg:py-24">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-12">
                  <div className="w-full sm:w-1/2 text-center sm:text-left">
                    <p className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wider text-[#222922] uppercase">
                      WELCOME TO
                      <span className="font-bold text-[#68f0fa] text-2xl sm:text-3xl lg:text-4xl block sm:inline">
                        {" "}
                        DO4ME{" "}
                      </span>
                    </p>
                    <h1 className="mt-2 lg:mt-4 text-2xl sm:text-3xl lg:text-5xl font-bold text-black">
                      Connect with Professionals across Ghana.
                    </h1>
                    <div className="hidden sm:block">
                      <p className="mt-2 lg:mt-4 text-sm lg:text-base text-black">
                        Grow your career fast with Us.
                      </p>
                      <p className="mt-2 lg:mt-5 text-xs lg:text-sm text-gray-600">
                        Already joined us?{" "}
                      </p>
                      <a
                        title=""
                        className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-4 mt-4 lg:mt-8 text-sm lg:text-base font-semibold text-black transition-all duration-200 bg-[#68f0fa] rounded-full hover:bg-yellow-400 focus:bg-yellow-400"
                        role="button"
                      >
                        Login
                      </a>
                    </div>
                  </div>
                  <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                    <img
                      className="w-full rounded-md"
                      src="https://photo-cdn2.icons8.com/GkHfwEDoKHr2f_A2GPCLetzIKtJOq0y-g7fv-6Sh8nw/rs:fit:1606:1072/czM6Ly9pY29uczgu/bW9vc2UtcHJvZC5h/c3NldHMvYXNzZXRz/L3NhdGEvb3JpZ2lu/YWwvOTg3LzExYmMx/NDcxLWUxOGQtNDhj/My05ZDljLTIyZmZi/Mzk3MDBjZC5qcGc.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
