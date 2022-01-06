import React from "react";
import "./../../App.css"

const Post = ({ photoData }) => {
  return (
    <section className="overflow-hidden shadow-lg rounded-md">
      <img
        src={photoData.urls.small}
        alt={photoData.alt_description}
        className="block h-auto w-full"
        ref={photoData.imageRef}
      />
      <footer className="p-2 md:p-4">
        <a
          className="flex items-center no-underline hover:underline text-black"
          href={photoData.user.portfolio_url}
        >
          <img
            alt="Placeholder"
            className="block rounded-full"
            src={photoData.user.profile_image.small}
          />
          <p className="ml-2 text-sm">{photoData.user.name}</p>
        </a>
        <a
          className="no-underline text-grey-darker hover:text-red-dark"
          href="Author"
        >
          <span>{photoData.total_likes}</span>
        </a>
      </footer>
    </section>
  );
};

export default Post;
