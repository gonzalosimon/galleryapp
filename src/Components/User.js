import React, { Component } from "react";
import axios from "axios";

class User extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users?_limit=10") //I'll work with five by now
      .then((res) => {
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  handleshow() {
    this.setState((prevState) => {
      return {
        show: !prevState.show,
      };
    });
  }

  handleClick = (userId) => {
    // checks if user is active already, sets the state to false in home and consequently the button becomes white again
    if (userId === this.props.selectedUserId) {
      this.props.onUserSelected(false);
    } else {
      this.props.onUserSelected(userId);
    } // 2) handleClick() passes the userId to onUserSelected, which has been created in Home and will uopdate the state
  };

  render() {
    const userData = this.state.users; // makes it easier to access the state
    return (
      <div>
        <h2 className="text-3xl font-light mb-4 m-16">
          What is Photo Gallery?
        </h2>
        <p>Photo Gallery is a simple website that...</p>
        <h1 className="text-3xl font-light mb-4 m-16">
          Top 10 Most Voted Users This Week
        </h1>
        {!userData ? (
          <p>...Loading</p>
        ) : (
          <ul>
            {userData.map((userItem) => {
              return (
                <form
                  onSubmit={this.handlesubmit}
                  className="h-10 px-5 m-4 font-bold py-2 px-4 text-purple-100 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-700"
                  key={userItem.id} // you can't render two things with the same id. either pass a key to map or do like this
                  // 1) call handleClick func with the user id as parameter
                  onClick={() => this.handleClick(userItem.id)}
                  // check if the selectedUserId I passed from Home as props is the same as the userId and changes its colour
                >
                  {userItem.username}
                  {this.state.show ? <button>Submit</button> : null}
                </form>
              );
            })}
            <p className="ml-64">View More</p>
          </ul>
        )}{" "}
      </div>
    );
  }
}

export default User;
