import React, { Component } from "react";

class Post extends Component {
  render() {
    return (
      <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article className="overflow-hidden rounded-lg shadow-lg">
          <a href="#">
            <img
              src={this.props.image.urls.regular}
              alt={this.props.image.alt_description}
              className="block h-auto w-full"
              ref={this.imageRef}
            />
          </a>

          <header className="flex items-center justify-between leading-tight p-2 md:p-4">
            <h1 className="text-lg">
              <a className="no-underline hover:underline text-black" href="#">
                Title {/* {this.props.title} */}
              </a>
            </h1>
            <p className="text-grey-darker text-sm">11/1/19</p>
          </header>

          <footer className="flex items-center justify-between leading-none p-2 md:p-4">
            <a
              className="flex items-center no-underline hover:underline text-black"
              href="#"
            >
              <img
                alt="Placeholder"
                className="block rounded-full"
                src="https://picsum.photos/32/32/?random"
              />
              <p className="ml-2 text-sm">Author Name {/* {this.props.username}*/}</p>
            </a>
            <a
              className="no-underline text-grey-darker hover:text-red-dark"
              href="#"
            >
              <span className="hidden">Like</span>
            </a>
          </footer>
        </article>
      </div>
    );
  }
}

export default Post;
