import React, { Component } from "react";
import axios from "axios";

class Album extends Component {
  state = {
    albums: [],
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedUserId)
      axios
        .get(
          `https://jsonplaceholder.typicode.com/albums?userId=${nextProps.selectedUserId}`
        )
        .then((res) => {
          this.setState({
            albums: res.data,
          });
        })
        .catch((err) => console.log(err));
  }

  change = (event) => {
    this.props.onAlbumSelected(event.target.value);
  };

  render() {
    const albumData = this.state.albums;
    return (
      <div onClick={this.change}>
        <div>
          <h1 className="h-10 px-5 m-4 font-bold py-2 px-4 text-purple-100 transition-colors duration-150 bg-pink-600 rounded-lg focus:shadow-outline hover:bg-pink-500">Random Picture</h1>
        </div>
        {albumData.map((albumItem) => {
          return (
            <div>
              <button
                className="bg-blue-500 h-10 px-5 m-4 font-bold py-2 px-4 hover:bg-blue-700 text-white rounded"
                value={albumItem.id}
              >
                {albumItem.title}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Album;
