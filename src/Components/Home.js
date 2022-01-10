import React, { useState, useEffect } from "react";
import axios from "axios";
/* import Search from "./Feed/SearchBar.js";
 */ import "../App.css";
import Post from "./Feed/Post.js";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";

const BASE_URL = `https://api.unsplash.com/search/photos`;
const __API_KEY__ = process.env.REACT_APP_API_KEY;

// var CONFIG = {
//   BASE_URL: 'https://api.unsplash.com/photos'
//   // __APP_ID__: '22b7b54287910389edfae878f576488bbc5b540a46daa0d2833ba858ce03b143',
// }

const Home = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("blue");
  const [page, setPage] = useState(1);

  const fetchUrl = `${BASE_URL}?client_id=${__API_KEY__}&query=${query}&page=${page}`;

  const fetchImages = () => {
    axios
      .get(fetchUrl, {
        headers: {},
      })
      .then((response) => {
        setData([...data, ...response.data.results]);
      })
      .catch((error) => {
        console.log(error);
      });
    setPage(page + 1);
  };
  const searchImages = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      setQuery(e.target.value);
      setData([]);
    }
  };

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <div className="font-Montserrat">
      <section className="md:pt-12 md:pl-44 md:pr-44 md:pb-12 p-12">
        <h1 className="text-5xl font-bold">Simon's Gallery</h1>
        <div className="text-lg	mt-5">
          <h3>
            The internet's source of{" "}
            <a className="underline" href="https://unsplash.com/license">
              freely-usable images.
            </a>
          </h3>
          <h3> Powered by creators everywhere.</h3>
        </div>
        <div className="mt-4">
          <input
            className="w-4/5 rounded-md text-black p-4 border-transparent focus:outline-none focus:ring-green-900"
            type="text"
            placeholder="Search free high-resolution photos"
            onKeyDown={(e) => searchImages(e)}
          />
          {/*    <button onClick={searchImages} className="ml-4" type="submit">
              Send
            </button> */}
          <p className="mt-4">Try out with colors! Red, Blue, Green, Gray</p>
          <p>Trending: flower, wallpapers, backgrounds, coffee</p>
        </div>
      </section>{" "}
      <InfiniteScroll
        dataLength={data.length}
        next={fetchImages}
        hasMore={true}
        loader={
          <div className="md:pl-44 ">
            <p>Loading</p>
            <p>I'm working on this to be faster, I swear...</p>
          </div>
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Accidents will happen, but this time I can't get up</b>
          </p>
        }
      >
        <ResponsiveMasonry
          className="p-6 md:py-6 md:px-6 grid-sizer"
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry columnsCount={3} gutter="20px">
            {data.map((data, key) => (
              <Post key={key} photoData={data} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
