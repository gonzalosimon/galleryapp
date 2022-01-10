import React from "react";
import { Link } from "react-router-dom" 
const Header = () => {
  return (
    <div>
      <nav className="bg-white py-6">
        <div className="px-4 flex items-center">
          <div className="md:flex flex-col pl-4 md:flex-row md:ml-auto ">
            <Link
              to="about"
              className="p-2 lg:px-4 mx-2 hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
            >
              About Me
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
