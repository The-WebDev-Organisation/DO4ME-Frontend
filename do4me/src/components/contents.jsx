import React from "react";

const Contents = () => {
  return (
    <div>
      <div className="howitworks">
        <section class="py-10 bg-white sm:py-16 lg:py-24">
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="max-w-2xl mx-auto text-center">
              <h2 class="text-3xl font-bold leading-tight text-[#68f0fa]  sm:text-4xl lg:text-5xl">
                How does it work?
              </h2>
              <p class="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                After Creating a free DO4ME account.Follow these steps :
              </p>
            </div>

            <div class="relative mt-12 lg:mt-20">
              <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <img
                  class="w-full"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                  alt=""
                />
              </div>

              <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                <div>
                  <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                    <span class="text-xl font-semibold text-gray-700"> 1 </span>
                  </div>
                  <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                    Choose a Professional by price range , skills, and reviews.
                  </h3>
                  <p class="mt-4 text-base text-gray-600">
                    Choose a professional for your job that fits your needs!
                  </p>
                </div>

                <div>
                  <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                    <span class="text-xl font-semibold text-gray-700"> 2 </span>
                  </div>
                  <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                    Schedule a Professional survey as early as today.
                  </h3>
                  <p class="mt-4 text-base text-gray-600">
                    Schedule a survey for a professional to physically examine
                    the job.
                  </p>
                </div>

                <div>
                  <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                    <span class="text-xl font-semibold text-gray-700"> 3 </span>
                  </div>
                  <h3 class="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                    Chat, pay, tip, and review all in one place.
                  </h3>
                  <p class="mt-4 text-base text-gray-600">
                    Easily communicate with your service provider, make payments
                    and make reviews all in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <div className="mb-7 ml-9 inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-[#68f0fa] rounded-full lg:mt-16">
          <p className="font-bold  text-xl text-gray-900 dark:text-black">
            {" "}
            Popular Services
          </p>
        </div>

        <div>
          <div className="firstlane">
            <div className="flex justify-evenly ">
              <div className="notmine  ml-10 h-10">
                <div className="  w-64  bg-white  border-[#68f0fa] rounded-lg shadow dark:bg-[#68f0fa]  dark:border-gray-700">
                  <a c>
                    <img
                      className="rounded-t-lg w-full h-60 object-cover"
                      src="https://i.ibb.co/1fG5dPQ/Plumbing-Help.webp"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-1xl font-bold tracking-tight bg-[#68f0fa]  dark:text-black">
                        Plumbing
                      </h5>
                    </a>
                  </div>
                </div>
              </div>

              <div className="notmine  ">
                <div className="  w-64 h-auto bg-white  border-[#68f0fa] rounded-lg shadow dark:bg-[#68f0fa]  dark:border-gray-700">
                  <a c>
                    <img
                      className="rounded-t-lg w-full h-60 object-cover"
                      src="https://www.bls.gov/ooh/images/2880.jpg"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-1xl font-bold tracking-tight bg-[#68f0fa]  dark:text-black">
                        Carpentry
                      </h5>
                    </a>
                  </div>
                </div>
              </div>

              <div className="notmine  ml-">
                <div className="  w-64 h-auto bg-white  border-[#68f0fa] rounded-lg shadow dark:bg-[#68f0fa]  dark:border-gray-700">
                  <a c>
                    <img
                      className="rounded-t-lg w-full h-60 object-cover"
                      src="https://vivahr.com/wp-content/uploads/2023/05/event-planner-job-description-template.jpg"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-1xl font-bold tracking-tight bg-[#68f0fa]  dark:text-black">
                        Events Planning
                      </h5>
                    </a>
                  </div>
                </div>
              </div>

              <div className="  ">
                <div className="  w-64 h-auto bg-white  border-[#68f0fa] rounded-lg shadow dark:bg-[#68f0fa]  dark:border-gray-700">
                  <a c>
                    <img
                      className="rounded-t-lg w-full h-60 object-cover"
                      src="https://s7d1.scene7.com/is/image/wbcollab/1140x500_worker_power_line_maintenance?qlt=90&fmt=webp&resMode=sharp2"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-1xl font-bold tracking-tight bg-[#68f0fa]  dark:text-black">
                        Electrical Help
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="secondlane mt-10">
            <div className="flex justify-evenly ">
              <div className="notmine  ml-10 h-10">
                <div className="  w-64  bg-white  border-[#68f0fa] rounded-lg shadow dark:bg-[#68f0fa]  dark:border-gray-700">
                  <a c>
                    <img
                      className="rounded-t-lg w-full h-60 object-cover"
                      src="https://media.istockphoto.com/id/1394055791/photo/portrait-of-confident-black-female-chef-at-restaurant-kitchen-looking-at-camera.jpg?s=612x612&w=0&k=20&c=vmDoulcE99YonSh-W70ZulSn6OV0MXSP_mO1PpYN5kM="
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-1xl font-bold tracking-tight bg-[#68f0fa]  dark:text-black">
                        Catering Services.
                      </h5>
                    </a>
                  </div>
                </div>
              </div>

              <div className="notmine  ">
                <div className="  w-64 h-auto bg-white  border-[#68f0fa] rounded-lg shadow dark:bg-[#68f0fa]  dark:border-gray-700">
                  <a c>
                    <img
                      className="rounded-t-lg w-full h-60 object-cover"
                      src="https://media.istockphoto.com/id/1393767125/photo/contemporary-young-black-man-in-workwear-cleaning-floor-in-openspace-office.jpg?s=612x612&w=0&k=20&c=7r6BTpJULWErpdoetO42sAbWvx6ugz5uLQGw4SDf5nY="
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-1xl font-bold tracking-tight bg-[#68f0fa]  dark:text-black">
                        Cleaning Services.
                      </h5>
                    </a>
                  </div>
                </div>
              </div>

              <div className="notmine  ml-">
                <div className="  w-64 h-auto bg-white  border-[#68f0fa] rounded-lg shadow dark:bg-[#68f0fa]  dark:border-gray-700">
                  <a c>
                    <img
                      className="rounded-t-lg w-full h-60 object-cover"
                      src="https://www.zarla.com/images/Zarla-gardening-logos-4531x3327-2021105.jpeg?crop=2:1,smart&width=730&dpr=2"
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-1xl font-bold tracking-tight bg-[#68f0fa]  dark:text-black">
                        Gardening
                      </h5>
                    </a>
                  </div>
                </div>
              </div>

              <div className="  ">
                <div className="  w-64 h-auto bg-white  border-[#68f0fa] rounded-lg shadow dark:bg-[#68f0fa]  dark:border-gray-700">
                  <a c>
                    <img
                      className="rounded-t-lg w-full h-60 object-cover"
                      src="https://media.istockphoto.com/id/1337259218/photo/electrician-working-home-client.jpg?s=612x612&w=0&k=20&c=NE7by1yWWBH5-vxaswwTZZ-hDcxJFja7HQOpWYGn1DY="
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-1xl font-bold tracking-tight bg-[#68f0fa]  dark:text-black">
                        Mounting and Installation.
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
