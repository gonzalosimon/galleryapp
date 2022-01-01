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
        <form onSubmit={this.onFormSubmit}>
          <input
            className="w-4/5 rounded-md text-black p-4 border-transparent focus:outline-none focus:ring-green-900"
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
