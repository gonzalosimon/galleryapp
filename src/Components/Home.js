import React, { Component } from "react";
import Header from "./Header.js";
import Photo from "./Photo.js";
import Album from "./Album";
import User from "./User.js";

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
        <div className='mx-auto h-full flex justify-center items-center'>
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
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Home;
