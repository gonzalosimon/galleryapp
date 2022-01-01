import React from "react";
import "./../../App.css"

const Post = ({ photo }) => {
  return (
    <section className="overflow-hidden shadow-lg rounded-md">
      <img
        src={photo.urls.small}
        alt={photo.alt_description}
        className="block h-auto w-full"
        ref={photo.imageRef}
      />
      <footer className="p-2 md:p-4">
        <a
          className="flex items-center no-underline hover:underline text-black"
          href={photo.user.portfolio_url}
        >
          <img
            alt="Placeholder"
            className="block rounded-full"
            src={photo.user.profile_image.small}
          />
          <p className="ml-2 text-sm">{photo.user.name}</p>
        </a>
        <a
          className="no-underline text-grey-darker hover:text-red-dark"
          href="Author"
        >
          <span>{photo.total_likes}</span>
        </a>
      </footer>
    </section>
  );
};

export default Post;
