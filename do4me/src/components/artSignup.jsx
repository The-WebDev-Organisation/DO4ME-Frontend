import React, { useState } from "react";
import "../Styles/sign.css";

const DashboardPage = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const navItems = [
    {
      icon: "https://img.icons8.com/?size=100&id=Yj5svDsC4jQA&format=png&color=000000",
      name: "Dashboard",
      bgColor: "bg-blue-500",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=hO8FWC0uqKZ1&format=png&color=000000",
      name: "Bookings",
      bgColor: "bg-green-500",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=ZTBkyXdflAGu&format=png&color=000000",
      name: "Payments",
      bgColor: "bg-yellow-500",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=61852&format=png&color=000000",
      name: "Completed",
      bgColor: "bg-purple-500",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=2969&format=png&color=000000",
      name: "Settings",
      bgColor: "bg-red-500",
    },
    {
      icon: " https://img.icons8.com/?size=100&id=26217&format=png&color=000000",
      name: "Log Out",
      bgColor: "bg-gray-500",
    },
  ];

  const quickStats = [
    { title: "Pending Bookings", value: "28,345" },
    { title: "completed", value: "120", highlight: true },
    { title: "Payments", value: "89" },
  ];

  const pendingBookings = [
    {
      client: "Amanda Chavez",
      service: "Physiotherapy",
      date: "25 Jul 2020",
      time: "11:00 - 12:00",
    },
    {
      client: "Fionna Wade",
      service: "Physiotherapy",
      date: "25 Jul 2020",
      time: "11:00 - 12:00",
    },
    {
      client: "Beatrice Carrol",
      service: "Physiotherapy",
      date: "25 Jul 2020",
      time: "11:00 - 12:00",
    },
    {
      client: "Jasmine Palmer",
      service: "Physiotherapy",
      date: "25 Jul 2020",
      time: "11:00 - 12:00",
    },
    {
      client: "Randy Elliot",
      service: "Physiotherapy",
      date: "25 Jul 2020",
      time: "11:00 - 12:00",
    },
    {
      client: "Christine Powell",
      service: "Physiotherapy",
      date: "25 Jul 2020",
      time: "11:00 - 12:00",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100 ">
      {/* Left Sidebar */}
      <nav
        className={`bg-white shadow-lg transition-all duration-300 ${
          sidebarExpanded ? "w-64" : "w-16"
        }`}
        onMouseEnter={() => setSidebarExpanded(true)}
        onMouseLeave={() => setSidebarExpanded(false)}
      >
        <div className="p-4">
          <img
            src="https://i.ibb.co/Kh3Jfkm/d4me.png"
            alt="Do4Me Logo"
            className="w-10 h-10"
          />
        </div>
        {navItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-4 hover:bg-gray-100 cursor-pointer"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${item.bgColor}`}
            >
              <img
                src={item.icon}
                alt={`${item.name} icon`}
                className="w-5 h-5 filter brightness-0 invert"
              />
            </div>
            {sidebarExpanded && (
              <span className="ml-4 text-gray-700">{item.name}</span>
            )}
          </div>
        ))}
      </nav>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-8 ">
        <div className="flex justify-items-center items-center mb-8 ">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        {/* Quick Stats */}
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-4 mb-8">
            {quickStats.map((stat, index) => (
              <div
                key={index}
                className="kuku bg-white p-4 rounded-l-lg shadow"
              >
                <h2 className="text-sm text-gray-500">{stat.title}</h2>
                <p
                  className={`text-xl font-bold ${
                    stat.highlight ? "text-red-500" : ""
                  }`}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Bookings */}
        <div className="grid grid-cols-3 gap-4">
          {pendingBookings.map((booking, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold">{booking.client}</h3>
              <p className="text-sm text-gray-500">{booking.service}</p>
              <p className="text-sm">{booking.date}</p>
              <p className="text-sm">{booking.time}</p>
              <div className="mt-2 flex justify-between">
                <button className="text-blue-500">Accept Booking</button>
                <button className="text-gray-500">Decline</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Right Panel */}
      <div className="w-1/4 bg-white p-6 overflow-y-auto">
        <div className=" mb-10 flex items-center justify-between">
          <form className="flex-grow max-w-md">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full h-10 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search "
                required
              />
            </div>
          </form>
          <div className="">
            <div className="rounded-full w-10 h-10 bg-black-300 ml-4 flex items-center justify-center">
              <img
                className="w-8 h-8"
                src="https://img.icons8.com/?size=100&id=82754&format=png&color=000000"
                alt="Notification Icon"
              />
            </div>
          </div>
          <div>
            <div className="">
              <div className="ml-5">
                <h2 className="font">Hello,</h2>
                <h3 className="text-xl font-bold">Jonathan!</h3>
                <p className="text-sm text-gray-500">schrodercarporation</p>
              </div>
            </div>
            <div>
              <img
                className="w-20 h-20 ml-20"
                src="https://ouch-cdn2.icons8.com/IwTm-fMSmoymMi8EtBciFCbmHF9SRIbgtnxgmfTbvJM/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNTgz/L2FkMmVhMGI5LTBj/YzctNDQ4Mi1iNDIz/LWIyZmYzNzg5NDcz/MS5zdmc.png"
              />
            </div>
          </div>
          {/* User Profile */}
          {/* <div className="flex items-center mb-6 mt-40 flex-row-reverse">
            <img
              className="w-20 h-20 ml-20"
              src="https://ouch-cdn2.icons8.com/IwTm-fMSmoymMi8EtBciFCbmHF9SRIbgtnxgmfTbvJM/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNTgz/L2FkMmVhMGI5LTBj/YzctNDQ4Mi1iNDIz/LWIyZmYzNzg5NDcz/MS5zdmc.png"
            />
            <div className="ml-5">
              <h2 className="font">Hello,</h2>
              <h3 className="text-xl font-bold">Jonathan!</h3>
              <p className="text-sm text-gray-500">schrodercarporation</p>
            </div>
          </div> */}
        </div>

        {/* Upgrade Card */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg mb-6">
          <h3 className="font-bold mb-2">Upgrade to PRO</h3>
          <p className="text-sm mb-2">For more profile control</p>
          <button className="bg-white text-blue-500 px-4 py-2 rounded">
            Upgrade
          </button>
        </div>

        {/* Reminders */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Reminders</h3>
            <a href="#" className="text-sm text-blue-500">
              View All
            </a>
          </div>
          <div className="space-y-2">
            <div className="bg-red-100 p-2 rounded">
              <p className="text-sm">Booking Reminder</p>
            </div>
            <div className="bg-yellow-100 p-2 rounded">
              <p className="text-sm">New Message</p>
            </div>
            <div className="bg-red-100 p-2 rounded">
              <p className="text-sm">Upcoming Booking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
