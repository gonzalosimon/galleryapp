import React, { Component } from "react";
import axios from "axios";

class User extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users?_limit=5") //I'll work with five by now
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
          Most Voted Users This Week
        </h1>
        {!userData ? (
          <p>...Loading</p>
        ) : (
          <ul>
            {userData.map((userItem) => {
              return (
                <section
                  className="cursor-pointer m-4"
                  key={userItem.id} // you can't render two things with the same id. either pass a key to map or do like this
                  // 1) call handleClick func with the user id as parameter
                  onClick={() => this.handleClick(userItem.id)}
                >
                  <div class="sm:flex sm:items-center px-6 py-4">
                    <img
                      class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
                      src="https://picsum.photos/32/32/?random"
                      alt="photo_not_loaded"
                    />
                    <div class="text-center sm:text-left sm:flex-grow">
                      <div class="mb-4">
                        <p class="text-xl leading-tight">
                          {" "}
                          {userItem.username}
                        </p>
                        <p class="text-sm leading-tight text-grey-dark">
                          {userItem.address.city}
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
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
