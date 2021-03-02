import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
          <section className="flex flex-wrap p-4">
            <div className="w-full md:w-1/2 p-4">
              <div>
                <h1 className="text-4xl font-light mb-4 m-16 ">
                  Photo Gallery
                </h1>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="p-4">
                <input
                  type="search"
                  name="input2"
                  className="w-80 mt-12 p-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Look for a user o a title!"
                />
              </div>
            </div>
          </section>
      </div>
    );
  }
}
export default Header;
