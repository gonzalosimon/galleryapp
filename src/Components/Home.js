import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="md:p-24 bg-fixed md:flex bg-home-background">
        <section className="flex items-center text-white flex flex-wrap p-12 pl-4 md:pl-80">
            <div className="w-full md:w-1/2">
              <div>
                <h1 className="text-4xl font-bold md:m-16">
                  Photo Gallery
                </h1>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="p-4">
                <input
                  type="search"
                  className="w-full mt-12 p-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
                  placeholder="Search free high-resolution photos"
                />
                <p className="text-white">Trending:flower, wallpapers, backgrounds, happylove"</p>
              </div>
            </div>
          </section>
      </div>
    );
  }
}

export default Home;
