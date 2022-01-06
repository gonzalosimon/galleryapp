import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Search from "./Feed/SearchBar.js";
import "../App.css";
import Post from "./Feed/Post.js";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { API_KEY } from "./Api";

// var CONFIG = {

//   BASE_URL: 'https://api.unsplash.com/photos'
//   // __APP_ID__: '22b7b54287910389edfae878f576488bbc5b540a46daa0d2833ba858ce03b143',
// }

const LOAD_STATE = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  LOADING: "LOADING",
};

const Home = () => {
  const [value, setValue] = useState("green");
  const [results, setResults] = useState({
    photos: [],
    page: 1,
    perPage: 50,
    isLoading: false,
  });

  const fetchPhotos = useCallback((page, perPage) => {
    API_KEY.photos.list({ page: page, perPage: perPage }).then((data) => {
      if (data) {
        let paginatedData = data.response.results;
        setResults((prev) => ({
          ...prev,
          photos:
            page === 1
              ? [...paginatedData]
              : prev.photos.concat([...paginatedData]),
          isLoading: false,
        }));
      }
    });
  }, []);

  useEffect(() => {
    fetchPhotos(1, 50);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchPhotos]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
      !results.isLoading
    ) {
      setResults((prev) => ({
        ...prev,
        page: prev.page + 1,
        isLoading: true,
      }));
      fetchPhotos(results.page + 1, 50);
    }
  };
  const { photos, isLoading } = results;
  let loader;
  if (photos.length < 0 || isLoading) {
    loader = <h1>Something</h1>;
  }
  return (
    <div className="font-Montserrat text-white">
      <section className="md:p-44 p-16 bg-home-background">
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
          <Search />
          <p className="mt-4">
            Trending: flower, wallpapers, backgrounds, coffee
          </p>
        </div>
      </section>
      <ResponsiveMasonry className="p-6 md:py-6 md:px-6 grid-sizer" columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry columnsCount={3} gutter="20px">
          {photos.length &&
            photos.map((photo, i) => <img key={i} src={photo.urls.small} />)}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Home;
