import React, { Component } from "react";
import Header from "./Header.js";
import Photo from "./Photo.js";
import User from "./User.js";

class Home extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <div className="mx-auto h-full flex justify-center items-center">
          <section className="flex flex-wrap p-4">
            <div className="w-full md:w-1/2 p-4">
              <User />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="p-4">
                <Photo />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Home;
