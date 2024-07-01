import React from "react";
import NavHorizontal from "./navHorizontal";
import Footer from "./footer";

const About = () => {
  return (
    //
    <div className="">
      <div>
        <NavHorizontal />
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">OUR MISSION</h2>
            <p className="text-gray-700">
              Do4Me services has the skilled professionals across Ghana and we
              bring the best to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">ABOUT US</h2>
            <p className="text-gray-700">
              Welcome to Do 4 Me. Do 4 Me is an innovation on-demand app
              designed to connect local craftspeople with clients seeking
              qualified specialists. Our user-friendly platform provides a
              hassle-free solution for discovering trustworthy assistance,
              giving experts a broader audience and offering clients greater
              convenience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">OUR STORY</h2>
            <p className="text-gray-700">
              History: Finding skilled experts for routine jobs can often be
              frustrating. Traditional methods such as web searches or
              word-of-mouth referrals are frequently unreliable and inefficient.
              Do 4 Me addresses this challenge by offering a central platform
              featuring verified professionals, organized by service and
              location. With our website, users can schedule appointments,
              compare quotes, and browse through profiles with ease.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">OPPORTUNITY</h2>
            <p className="text-gray-700">
              Do For Me represents a significant business opportunity by meeting
              the increasing demand for on-demand services. In a world where
              people have busy schedules and crave convenience, our platform
              fills a gap with a comprehensive listing of various service
              categories and professionals. Additionally, the growing importance
              of online reviews and ratings in customer decision-making and
              advancements in secure payment processing technologies enhance the
              value of our app.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">OUR VISION AND GOAL</h2>
            <p className="text-gray-700">
              Our vision is to revolutionize how individuals find and hire
              dependable and skilled experts for everyday tasks through the Do
              For Me app. We aim to create an enjoyable experience for clients
              and local craftsmen, allowing users to request services like decor
              installation, furniture assembly, plumbing repairs, electrical
              work, and more.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
