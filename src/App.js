import React, { Component } from "react";
import Home from "./Components/Home.js";
import Footer from "./Components/Footer.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
