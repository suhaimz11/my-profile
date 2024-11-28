// src/app/layout.tsx

import React from "react";
import "./globals.css"; // Include global CSS here

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="dark">
      <body className="scroll-smooth bg-gray-900 text-white">
        <div className="min-h-screen bg-gray-800">
          {/* Sticky Navigation Bar */}
          <header className="sticky top-0 z-10 bg-gray-900 shadow-md transition-all ease-in-out duration-300">
            <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
              <div className="font-bold text-lg text-white">Suhaim's Profile-Page</div>
              <ul className="flex space-x-6">
                <li><a href="#section1" className="text-white hover:text-blue-400">Profile</a></li>
                <li><a href="#section2" className="text-white hover:text-blue-400">Skills</a></li>
                <li><a href="#section3" className="text-white hover:text-blue-400">Internships</a></li>
              </ul>
            </nav>
          </header>

          {/* Main Content Area */}
          <main className="px-6 py-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
