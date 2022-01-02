import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="bg-white py-2 md:py-2">
          <div className="px-4 flex items-center">
            <a href="header" className="font-bold text-2xl text-blue-700">
              Simon's Gallery
            </a>
            <div className="md:flex flex-col pl-4 md:flex-row md:ml-auto ">
              <a
                href="header"
                className="p-2 lg:px-4 md:mx-2 text-white rounded-full bg-blue-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Profile
              </a>
              <a
                href="header"
                className="p-2 lg:px-4 md:mx-2 text-white rounded-full bg-blue-600 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Messages
              </a>

              <a
                href="header"
                className="p-2 lg:px-4 md:mx-2 text-blue-600 text-center border border-solid border-blue-600 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
              >
                Settings
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
