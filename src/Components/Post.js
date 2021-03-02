import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div>
        <article className="overflow-hidden m-4 rounded-lg shadow-lg">
          <a href="www.google.com">
            <img
              alt="photo_not_loaded"
              className="w-full"
              src={this.props.link}
            />
          </a>

          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <a
                className="no-underline hover:underline text-black"
                href="www.google.com"
              >
                {this.props.title}
              </a>
            </h1>
            <p className="text-grey-darker text-sm">Date</p>
          </header>

          <div className="flex items-center justify-between leading-none p-2 md:p-4">
            <a
              className="flex items-center no-underline hover:underline text-black"
              href="www.google.com"
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
              href="www.google.com"
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

export default Post;
