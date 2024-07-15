import React, { useState } from "react";
import "../Styles/sign.css";

const User = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const navItems = [
    {
      icon: "https://img.icons8.com/?size=100&id=Yj5svDsC4jQA&format=png&color=000000",
      name: "Dashboard",
      className: "bg-[#68f0fa]",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=2969&format=png&color=000000",
      name: "Settings",
      className: "bg-red-500",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=26217&format=png&color=000000",
      name: "Log Out",
      className: "bg-gray-500",
    },
  ];

  // Mock user data
  const user = {
    name: "Jonathan",
    image: "https://example.com/path-to-user-image.jpg", // Replace with actual image URL
    email: "jonathan@example.com",
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <nav
        className={`bg-white shadow-lg transition-all duration-300 ${
          sidebarExpanded ? "w-64" : "w-16"
        }`}
        onMouseEnter={() => setSidebarExpanded(true)}
        onMouseLeave={() => setSidebarExpanded(false)}
      >
        <div className="p-4 mb-20">
          <img
            src="https://i.ibb.co/Kh3Jfkm/d4me.png"
            alt="Do4Me Logo"
            className="w-10 h-10"
          />
        </div>
        {navItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center p-4 hover:bg-gray-200 cursor-pointer"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${item.className}`}
            >
              <img
                src={item.icon}
                alt={`${item.name} icon`}
                className="w-5 h-5 filter brightness-0 invert"
              />
            </div>
            {sidebarExpanded && (
              <span className="ml-4 text-gray-600">{item.name}</span>
            )}
          </div>
        ))}
      </nav>

      {/* Main Content Area */}
      <div className="flex-grow p-8">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Total Bookings
            </h2>
            <p className="text-3xl font-bold text-indigo-600">28,345</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Pending Approval
            </h2>
            <p className="text-3xl font-bold text-red-500">120</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              New Clients this month
            </h2>
            <p className="text-3xl font-bold text-green-500">89</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Returning Clients
            </h2>
            <p className="text-3xl font-bold text-blue-500">46%</p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-80 bg-white shadow-lg p-6">
        <div className="flex items-center mb-6">
          <img
            src={user.image}
            alt={user.name}
            className="w-16 h-16 rounded-full mr-4 border-2 border-indigo-500"
          />
          <div>
            <p className="font-sans text-sm text-gray-600 mb-1">
              Welcome back,
            </p>
            <p className="font-serif text-2xl font-bold text-indigo-700">
              {user.name}!
            </p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-4">{user.email}</p>
        <button className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-300 mb-6">
          Edit Profile
        </button>
        <div className="mt-6">
          <h3 className="font-sans font-semibold mb-3 text-lg">Reminders</h3>
          <ul className="space-y-3">
            <li className="bg-red-100 p-3 rounded-lg text-sm text-red-700 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Booking Reminder
            </li>
            <li className="bg-yellow-100 p-3 rounded-lg text-sm text-yellow-700 flex items-center">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              New Message
            </li>
            <li className="bg-green-100 p-3 rounded-lg text-sm text-green-700 flex items-center">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Upcoming Booking
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default User;
