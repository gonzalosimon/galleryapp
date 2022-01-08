import React, { useState } from "react";

const Search = () => {
  const [value, setValue] = useState("green");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Form submitted`);
    setValue.userSubmit(handleSubmit);
  };
  console.log(value);
  
  return (
    <div>
     
    </div>
  );
};

export default Search;
