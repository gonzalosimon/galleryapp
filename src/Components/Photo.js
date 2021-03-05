import React, { Component } from "react";
import axios from "axios";
import Search from "./SearchBar.js";
const API_KEY = process.env.REACT_APP_API_KEY;

class Home extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div>
        <div className="md:p-24 bg-fixed md:flex bg-home-background">
          <section className="flex items-center text-white flex flex-wrap p-12 pl-4 md:pl-80">
            <div className="w-full md:w-1/2">
              <div>
                <h1 className="text-4xl font-bold md:m-16">Photo Gallery</h1>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="p-4">
                <Search userSubmit={this.onSearchSubmit} />
                <p className="text-white mt-4">
                  Trending: flower, wallpapers, backgrounds, happylove"
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <span>Found: {this.state.images.length} images</span>
            <ImageList foundImages={this.state.images} />
          </div>  
        </div>
      </div>
    );
  }
}

export default Home;
