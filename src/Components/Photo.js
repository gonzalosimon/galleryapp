import React, { Component } from "react";

class Photo extends Component {
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
        <div className="container my-14 m-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4">
              {this.state.serverData
                ? this.state.serverData.map((data) => <ViewData data={data} />)
                : "Loading data..."}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class ViewData extends Component {
  render() {
    return (
      <div>
        <article className="overflow-hidden m-4 rounded-lg shadow-lg">
          <a href="#">
            <img
              alt="photo_not_loaded"
              className="w-full"
              src={this.props.data.url}
            />
          </a>

          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <a className="no-underline hover:underline text-black" href="#">
                {this.props.data.title}
              </a>
            </h1>
            <p className="text-grey-darker text-sm">Date</p>
          </header>

          <div className="flex items-center justify-between leading-none p-2 md:p-4">
            <a
              className="flex items-center no-underline hover:underline text-black"
              href="#"
            >
              <img
                alt="Placeholder"
                className="block rounded-full"
                src="https://picsum.photos/32/32/?random"
              />
              <p className="ml-2 text-sm">Author Name</p>
            </a>
            <a
              className="no-underline text-grey-darker hover:text-red-dark"
              href="#"
            >
              <div className="mt-4">
                <i className="fa fa-heart">
                  <span className="ml-2">2389 Up</span>
                </i>
                <i className="fa fa-comment">
                  {" "}
                  <span className="ml-2">937 Comments</span>{" "}
                </i>
                <span className="ml-2">Share</span>
              </div>
            </a>
          </div>
        </article>
      </div>
    );
  }
}

export default Photo;
