import React, { Component } from "react";
import axios from "axios";
import Search from "./Feed/SearchBar.js";
import Post from "./Feed/Post.js";
const API_KEY = process.env.REACT_APP_API_KEY;

const LOAD_STATE = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  LOADING: "LOADING",
};

class Home extends Component {
  state = { photos: [], loadState: LOAD_STATE.LOADING };

  onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { count: 30, query: term },
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
    });

    this.setState({ photos: response.data.results });
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
                  Trending: flower, wallpapers, backgrounds, coffee"
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="p-6 flex flex-wrap md:-mx-1 lg:-mx-4">
          {this.state.loadState === false ? (
            <div>Loading...</div>
          ) : (
            <List data={this.state.photos} />
          )}
        </div>
      </div>
    );
  }
}

const List = ({ data }) => {
  const items = data.map((photo) => {
    return (
      <div className="container my-12 mx-auto md:px-12">
        <Post key={photo.id} photo={photo} />
      </div>
    );
  });

  return (
    <div className="container my-12 mx-auto md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3"> {items} </div>
    </div>
  );
};

export default Home;
