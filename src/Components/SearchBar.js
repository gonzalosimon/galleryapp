import React, { Component } from "react";

class Search extends Component {
  state = { val: "" };

  onInputChange = (event) => {
    this.setState({ val: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.userSubmit(this.state.val);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="flexContainer">
          <label>
            <h2>Image Search: </h2>
          </label>
          <input
            className="w-full text-black mt-12 p-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent"
            type="search"
            placeholder="Search free high-resolution photos"
            value={this.state.val}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default Search;
