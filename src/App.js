import React from "react";
import Header from "./Components/Header.js";
import Home from "./Components/Home.js";
import Footer from "./Components/Footer.js";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./Components/HeaderComponents/Profile";
import Messages from "./Components/HeaderComponents/Messages";
import Settings from "./Components/HeaderComponents/Settings";
import Post from "./Components/HeaderComponents/Post";

import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/post" component={Post} />
        <Route path="/profile" component={Profile} />
        <Route path="/messages" component={Messages} />
        <Route path="/settings" component={Settings} />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
