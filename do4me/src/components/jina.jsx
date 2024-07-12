import React, { useState, useEffect, useRef } from "react";

const Dashboard = () => {
  const [isDark, setIsDark] = useState(getTheme());
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);
  const [isUserPanelOpen, setIsUserPanelOpen] = useState(
    window.innerWidth >= 1280
  );
  const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);
  const [isSearchPanelOpen, setIsSearchPanelOpen] = useState(false);

  const sidebarRef = useRef(null);
  const userPanelRef = useRef(null);
  const settingsPanelRef = useRef(null);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false);
        setIsUserPanelOpen(false);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
        setIsSidebarOpen(true);
        setIsUserPanelOpen(false);
      } else if (window.innerWidth >= 1280) {
        setIsSidebarOpen(true);
        setIsUserPanelOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getTheme() {
    if (window.localStorage.getItem("dark")) {
      return JSON.parse(window.localStorage.getItem("dark"));
    }
    return (
      !!window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  }

  function setTheme(value) {
    window.localStorage.setItem("dark", value);
  }

  function toggleTheme() {
    setIsDark(!isDark);
    setTheme(!isDark);
  }

  function setLightTheme() {
    setIsDark(false);
    setTheme(false);
  }

  function setDarkTheme() {
    setIsDark(true);
    setTheme(true);
  }

  function toggleSidebarMenu() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function openUserPanel() {
    setIsUserPanelOpen(true);
    setTimeout(() => userPanelRef.current && userPanelRef.current.focus(), 0);
  }

  function openSettingsPanel() {
    setIsSettingsPanelOpen(true);
    setTimeout(
      () => settingsPanelRef.current && settingsPanelRef.current.focus(),
      0
    );
  }

  function openSearchPanel() {
    setIsSearchPanelOpen(true);
    setTimeout(
      () => searchInputRef.current && searchInputRef.current.focus(),
      0
    );
  }

  return (
    <div
      className={`flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light ${
        isDark ? "dark" : ""
      }`}
    >
      {/* Loading screen */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center text-2xl font-semibold text-white bg-indigo-800">
          Loading.....
        </div>
      )}

      {/* Sidebar */}
      {isSidebarOpen && (
        <aside
          ref={sidebarRef}
          className="fixed inset-y-0 z-10 flex flex-shrink-0 bg-white border-r md:static dark:border-indigo-800 dark:bg-darker focus:outline-none"
        >
          {/* Sidebar content */}
        </aside>
      )}

      <div className="flex flex-1 h-screen overflow-y-scroll">
        {/* Main content */}
        <main className="flex-1">
          {/* Header */}
          <header className="flex items-center justify-between p-4">
            {/* Header content */}
          </header>

          {/* Main section content */}
          <section className="flex flex-col items-center justify-center p-4 space-y-4">
            {/* Your main content here */}
          </section>
        </main>

        {/* User panel */}
        {isUserPanelOpen && (
          <section
            ref={userPanelRef}
            className="fixed inset-y-0 top-0 right-0 z-10 flex-shrink-0 bg-white xl:z-0 xl:sticky w-80 dark:bg-darker dark:text-light xl:border-l dark:border-indigo-800 focus:outline-none"
          >
            {/* User panel content */}
          </section>
        )}
      </div>

      {/* Settings Panel */}
      {isSettingsPanelOpen && (
        <section
          ref={settingsPanelRef}
          className="fixed inset-y-0 right-0 z-20 w-full max-w-xs bg-white shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none"
        >
          {/* Settings panel content */}
        </section>
      )}

      {/* Search panel */}
      {isSearchPanelOpen && (
        <section className="fixed inset-y-0 z-20 w-full max-w-xs bg-white shadow-xl dark:bg-darker dark:text-light sm:max-w-md focus:outline-none">
          {/* Search panel content */}
          <input
            ref={searchInputRef}
            type="text"
            className="w-full py-2 pl-10 pr-4 border rounded-full dark:bg-dark dark:border-transparent dark:text-light focus:outline-none focus:ring"
            placeholder="Search..."
          />
        </section>
      )}
    </div>
  );
};

export default Dashboard;
