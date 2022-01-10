import React from "react";
import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import { BrowserRouter, Route } from "react-router-dom";
import About from "./Components/About";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </BrowserRouter>
    </div>
  );
};

export default App;
