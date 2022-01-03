import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-24 bg-white relative pt-1 border-b-2 border-green-700">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-80 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mb-2">
                Sites
              </span>
              <span className="my-2">
                <a
                  href="https://gbsimon.com/"
                  className="text-green-700  text-md hover:text-green-500"
                >
                  My Site
                </a>
              </span>
              <span className="my-2">
                <a
                  href="https://gonzalosimon.hashnode.dev/"
                  className="text-green-700  text-md hover:text-green-500"
                >
                  Blog
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mb-2">
                Contact
              </span>
              <span className="my-2">
                <a
                  href="https://github.com/gb-simon"
                  className="text-green-700  text-md hover:text-green-500"
                >
                  GitHub
                </a>
              </span>
              <span className="my-2">
                <a
                  href="https://www.linkedin.com/in/gonzalo-simon-aguilar/"
                  className="text-green-700  text-md hover:text-green-500"
                >
                  LinkedIn
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-green-700 font-bold mb-2">
              Gonzalo Simon <br />
              <p>aguilarsimon01@gmail.com</p>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
