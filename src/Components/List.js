import React from 'react'
import Post from "./Post.js";

const List = (props) => {
    const imgs = props.foundImages.map((img) => {
      return <Post key={img.id} image={img} />;
    });
  
    return <span>{imgs}</span>;
  };
  
  export default List;
  
  {
    /* <div class="container my-12 mx-auto px-4 md:px-12">
  <div class="flex flex-wrap -mx-1 lg:-mx-4">
    {this.state.serverData
      ? this.state.serverData.map((data) => (
          <Post
            username={data.username}
            link={data.url}
            title={data.title}
          />
        ))
      : "Loading data..."}
  </div>
  </div>  */
  }