import React from "react";
import "../index.css";

const Header = () => {
  return (
    <div className="kiki">
      <div className="bg-white">
        <header className="bg-[#FCF8F1] bg-opacity-30">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <a href="#" title="" className="flex">
                  <img
                    className="w-auto h-20"
                    src="https://i.ibb.co/Kh3Jfkm/d4me.png"
                    alt="d4me"
                    border="0"
                  />
                </a>
              </div>

              <div className="lg:flex lg:items-center lg:justify-center lg:space-x-10">
                <a
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Home{" "}
                </a>

                <a
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Solutions{" "}
                </a>

                <a
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  About{" "}
                </a>

                <a
                  href="#"
                  title=""
                  className="text-base text-black transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Contact{" "}
                </a>
              </div>

              <a
                title=""
                className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full"
                role="button"
              >
                {" "}
                Join Now{" "}
              </a>
            </div>
          </div>
        </header>
        <div
          className="mobiview shadow-200xl
"
        >
          <div className="-mt-20 shadow-inner">
            <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                  <div>
                    <p className=" text-2xl text-base font-semibold tracking-wider -mb-5 -ml-5 text-[#222922] uppercase">
                      <text></text> WELCOME TO
                      <text className="font-bold text-[#68f0fa] text-3xl -mt-10 ">
                        {" "}
                        DO4ME{" "}
                      </text>
                    </p>
                    <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-7xl">
                      Connect with Professionals across Ghana.
                    </h1>
                    <div className="">
                      <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
                        Grow your career fast with Us.
                      </p>
                      <p className="mt-5 -mb-10 text-gray-600">
                        Already joined us?{" "}
                      </p>
                      <a
                        title=""
                        className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-[#68f0fa] rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                        role="button"
                      >
                        Login
                      </a>
                    </div>
                  </div>

                  <div>
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
