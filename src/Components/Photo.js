import React, { Component } from "react";
import Post from "./Post.js";
import axios from "axios";

class Photo extends Component {
  state = {
    photos: [],
  };

  componentWillReceiveProps(nextProps) {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/photos?albumId=${nextProps.selectedAlbumId}&_limit=2`
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
    );
  }
}

export default Photo;
