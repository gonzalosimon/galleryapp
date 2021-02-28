import React, { Component } from "react";

class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      serverData: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/photos?_start=0&_limit=2")
      .then((res) => res.json())
      .then((data) => this.setState({ serverData: data }));
  }

  render() {
    return (
      <div>
        {this.state.serverData
          ? this.state.serverData.map((data) => <ViewData data={data} />)
          : "Loading data..."}
      </div>
    );
  }
}

class ViewData extends Component {
  render() {
    return (
      <div className="m-auto bg-white rounded shadow border p-6">
        <h3 className="text-2xl font-light mb-4 mt-0">
          {this.props.data.title}
        </h3>
        <img className="w-64" src={this.props.data.url} alt="photo_not_loaded" />
      </div>
    );
  }
}

export default Photo;
