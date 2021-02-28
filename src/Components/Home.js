import React, { Component } from "react";
import Photo from "./Photo.js";
import User from "./User.js";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="ml-36">
          <h1 className="text-4xl font-light mb-4 m-16 ">Photo Gallery</h1>
          <div className="grid grid-flow-col grid-cols-2 grid-rows-1 gap-4">
            <User />
            <Photo />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
