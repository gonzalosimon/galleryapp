import React, { Component } from "react";
import Post from "./Post.js";
import axios from "axios";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class FeedPhotos extends Component {
  state = {
    photos: [],
    users: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users?_limit=10")
      .then((res) => {
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

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
    const photoUser = this.state.users;
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
                    <h2 className="text-3xl font-light mb-4 m-16">
                      You might be interested
                    </h2>
                    {photoUser.map((userItem) => {
                      return (
                        <div>
                          <Post
                            link={photoItem.thumbnailUrl}
                            title={this.props.title}
                            username={userItem.username}
                          />
                        </div>
                      );
                    })}
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

export default Feed;