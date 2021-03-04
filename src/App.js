import React, { Component } from "react";
import Website from "./Components/Website.js";
import Home from "./Components/Home.js";
import Footer from "./Components/Footer.js";
import Header from "./Components/Header.js";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="mx-auto h-full flex justify-center items-center">
          <Header />
        </div>
        <Home />
        <Website />
        <Footer />
      </div>
    );
  }
}

export default App;
