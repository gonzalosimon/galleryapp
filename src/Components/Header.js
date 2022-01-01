import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="bg-white py-2 md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <a href="header" className="font-bold text-xl text-green-600">
                Gallery
              </a>
              <button
                className="text-green-600 text-center border border-solid border-green-600 rounded hover:bg-green-800 hover:text-white transition-colors duration-300 border border-solid border-gray-600 px-3 py-1 ml-32 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                id="navbar-toggle"
              > Log In
              </button>
              <button
                className="border border-solid border-gray-600 mr-4 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                id="navbar-toggle"
              > ≡
              </button>
            </div>
            <div
              className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            >
              <a
                href="header"
                className="p-2 lg:px-4 md:mx-2 text-white rounded bg-green-600"
              >
                Home
              </a>
              <a
                href="header"
                className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="header"
                className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="header"
                className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Pricing
              </a>
              <a
                href="header"
                className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Contact
              </a>
              <a
                href="header"
                className="p-2 lg:px-4 md:mx-2 text-green-600 text-center border border-transparent rounded hover:bg-green-100 hover:text-green-700 transition-colors duration-300"
              >
                Login
              </a>
              <a
                href="header"
                className="p-2 lg:px-4 md:mx-2 text-green-600 text-center border border-solid border-green-600 rounded hover:bg-green-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
              >
                Signup
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
export default Header;
