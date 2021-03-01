import React, { Component } from "react";
import axios from "axios";

class Photo extends Component {
  state = {
    photos: [], // this is the only thing whose state gets updated in this component
  };

  // photos were not loading up until I used componentWillReceiveProps(nextProps). Src: http://busypeoples.github.io/post/react-component-lifecycle/
  componentWillReceiveProps(nextProps) {
    axios
      .get(
        // using the query in the url it takes less to load up because it doesn't have to load up all the items
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
    const photoData = this.state.photos; // makes it easier to access the state
    return (
      <div>
        {!photoData ? (
          <p>...Loading</p>
        ) : (
          <div>
            {photoData.map((photoItem) => {
              // if (parseInt(this.state.selectedAlbumId) === parseInt(u.albumId)) // this condition is no longer needed because I am updating the axios api url
              return (
                <div>
                  <article className="overflow-hidden m-4 rounded-lg shadow-lg">
                    <a href="www.google.com">
                      <img
                        alt="photo_not_loaded"
                        className="w-full"
                        src={photoItem.thumbnailUrl}
                      />
                    </a>

                    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                      <h1 className="text-lg">
                        <a
                          className="no-underline hover:underline text-black"
                          href="www.google.com"
                        >
                          {photoItem.title}
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
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Photo;
