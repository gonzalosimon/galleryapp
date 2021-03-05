import React, { Component } from "react";
import Feed from "./Components/Feed.js";
import Footer from "./Components/Footer.js";
import Header from "./Components/Header.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Feed />
        <Footer />
      </div>
    );
  }
}

export default App;
