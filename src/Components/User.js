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
                <div
                  key={userItem.id} // you can't render two things with the same id. either pass a key to map or do like this
                  // 1) call handleClick func with the user id as parameter
                  onClick={() => this.handleClick(userItem.id)}
                  // check if the selectedUserId I passed from Home as props is the same as the userId and changes its colour
                  style={{
                    // style wants an object. backgroundcolor is a convention for react which wouldn't accept "backgroud-color"
                    backgroundColor:
                      this.props.selectedUserId === userItem.id // check if the selectedUserId is the same and the one we are looping in
                        ? "lightgreen"
                        : "white",
                  }}
                >
                  {userItem.username}
                </div>
              );
            })}
            <p className="ml-64">View More</p>
          </ul>
        )}
        <h1 className="text-3xl font-light mb-4 m-16">
          Top 10 Most Voted Users Of All the Times
        </h1>
        {!userData ? (
          <p>...Loading</p>
        ) : (
          <ul>
            {userData.map((userItem) => {
              return (
                <div
                  key={userItem.id} // you can't render two things with the same id. either pass a key to map or do like this
                  // 1) call handleClick func with the user id as parameter
                  onClick={() => this.handleClick(userItem.id)}
                  // check if the selectedUserId I passed from Home as props is the same as the userId and changes its colour
                  style={{
                    // style wants an object. backgroundcolor is a convention for react which wouldn't accept "backgroud-color"
                    backgroundColor:
                      this.props.selectedUserId === userItem.id // check if the selectedUserId is the same and the one we are looping in
                        ? "lightgreen"
                        : "white",
                  }}
                >
                  {userItem.username}
                </div>
              );
            })}
            <p className="ml-64">View More</p>
          </ul>
        )}
      </div>
    );
  }
}

export default User;
