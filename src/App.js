import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home.js";
import Footer from './Components/Footer.js'
import './App.css';


class App extends Component {
  
  render() {
    return (
      <div>
      <Home/>
      <Footer/>
      </div>
    );
  }
}

export default App;
