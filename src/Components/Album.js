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
          `https://jsonplaceholder.typicode.com/albums?userId=${nextProps.selectedUserId}&_limit=3`
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
