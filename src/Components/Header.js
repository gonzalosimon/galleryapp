import React from "react";

const Header = () => {
  return (
    <div>
      <nav className="bg-white py-2 md:py-2">
        <div className="px-4 flex items-center">
          <a href="/" className="font-bold pr-4 text-2xl text-blue-700">
            Simon's Gallery
          </a>
          <div className="md:flex flex-col pl-4 md:flex-row md:ml-auto ">
            <a
              href="post"
              className="p-2 lg:px-4 mx-2 text-white p-0 px-3 rounded-full bg-blue-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              +
            </a>
            <a
              href="messages"
              className="p-2 p-0 px-3 lg:px-4 md:mx-2 text-white rounded-full bg-blue-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              M
            </a>
            <a
              href="profile"
              className="p-2 lg:px-4 mx-2 text-white rounded-full bg-blue-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              Profile
            </a>
            <a
              href="settings"
              className="p-2 lg:px-4 mx-2 text-blue-600 text-center border border-solid border-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
            >
              Settings
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
