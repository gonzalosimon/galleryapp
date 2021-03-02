import React, { Component } from "react";
import Header from "./Header.js";
import Photo from "./Photo.js";
import Album from "./Album";
import User from "./User.js";
import Post from "./Post.js";
import axios from "axios";

class Home extends Component {
  state = {
    selectedUserId: false,
    selectedAlbumId: false,
  };

  // gets the userId from the component User, to which it's passed as props
  onUserSelected = (userId) => {
    this.setState({ selectedUserId: userId, selectedAlbumId: false });
  };

  onAlbumSelected = (albumId) => {
    this.setState({ selectedAlbumId: albumId });
  };

  render() {
    return (
      <div>
        <div className="mx-auto h-full flex justify-center items-center">
          <Header />
        </div>
        <div className="mx-auto h-full flex justify-center items-center">
          <section className="flex flex-wrap p-4">
            <div className="w-full md:w-1/2 p-4">
              <User
                // Pass the func onUserSelected to User Component, this will update the state of selectedUserId here in Home.js
                onUserSelected={this.onUserSelected}
                // Pass the selectedUserId state as props to the User Component to be able to change the colour of the active user on click
                selectedUserId={this.state.selectedUserId}
              />
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="p-4">
                <Album
                  // Pass the selectedUserId state as props to Album Component, this will update Axios's url request for album
                  selectedUserId={this.state.selectedUserId}
                  // Pass the func onAlbumSelected to Album Component, this will update the state of selectedAlbumId here in Home.js
                  onAlbumSelected={this.onAlbumSelected}
                />
                <Photo selectedAlbumId={this.state.selectedAlbumId} />
                <h2 className="text-3xl font-light mb-4 m-16">
                  You might be interested
                </h2>
                <FeedPhotos />
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class FeedPhotos extends Component {
  state = {
    photos: [],
  };

  componentWillReceiveProps(nextProps) {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${getRandomInt(
          100
        )}&_limit=2`
      )
      .then((res) => {
        this.setState({
          photos: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const photoData = this.state.photos;

    return (
      <div>
        <div>
          {!photoData ? (
            <p>...Loading</p>
          ) : (
            <div>
              {photoData.map((photoItem) => {
                return (
                  <div>
                    <Post
                      link={photoItem.thumbnailUrl}
                      title={this.props.title}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
