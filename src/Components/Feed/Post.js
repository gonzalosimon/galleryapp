import React from "react";

const Post = ({ photo }) => {
  return (
    <div>
      <section className="overflow-hidden rounded-full shadow-lg">
        <a href="Image">
          <img
            src={photo.urls.small}
            alt={photo.alt_description}
            className="block h-auto w-full"
            ref={photo.imageRef}
          />
        </a>

        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="Title">
              {photo.alt_description}
            </a>
          </h1>
          <p className="text-grey-darker text-sm">{photo.updated_at}</p>
        </header>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
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
    </div>
  );
};



export default Post;
