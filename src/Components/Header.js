import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="pt-4 font-sans">
          <div className="wrapper max-w-xl pb-4 mx-auto ">
            <header className="header h-12 md:h-16 flex items-center text-sm md:text-base">
              <a
                href="#"
                className="flex items-center text-grey-light hover:text-gray h-full px-4 md:px-5 no-underline"
              >
                <div className="logo-symbol text-orange">
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                  </svg>
                </div>
                <div className="logo-type ml-2 tracking-wide">Gallery</div>
              </a>
              <div className="nav-menu hidden sm:flex h-full">
                <ul className="list-reset h-full flex">
                  <li className="h-full">
                    <a
                      href="#"
                      className="no-underline h-full flex items-center px-4 md:px-5 text-grey hover:text-black"
                    >
                      Wallpapers
                    </a>
                  </li>
                  <li className="h-full">
                    <a
                      href="#"
                      className="no-underline h-full flex items-center px-4 md:px-5 text-grey hover:text-black"
                    >
                      Nature
                    </a>
                  </li>
                  <li className="h-full">
                    <a
                      href="#"
                      className="no-underline h-full flex items-center px-4 md:px-5 text-grey hover:text-black"
                    >
                      People
                    </a>
                  </li>
                </ul>
              </div>
              <div className="nav-login hidden sm:flex ml-auto h-full">
                <a
                  href="#"
                  className="no-underline h-full flex items-center px-4 md:px-5 text-grey hover:text-black"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="no-underline h-full flex items-center px-4 md:px-5 text-grey hover:text-black"
                >
                  Register
                </a>
              </div>
              <a
                href="#"
                className="hamburger ml-auto flex sm:hidden no-underline h-full flex items-center px-4 md:px-5 text-grey hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather ml-48 feather-menu"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </a>
            </header>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
