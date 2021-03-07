import React, { Component } from "react";
import Header from "./Components/Header.js";
import Home from "./Components/Home.js"
import Footer from "./Components/Footer.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
