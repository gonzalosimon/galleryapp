import React, { useState } from "react";

const Search = () => {
  const [value, setValue] = useState("green");
  const [results, setResults] = useState([]);

  const onFormSubmit = (event) => {
    event.preventDefault();
    this.props.userSubmit(value);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          className="w-4/5 rounded-md text-black p-4 border-transparent focus:outline-none focus:ring-green-900"
          type="search"
          placeholder="Search free high-resolution photos"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
