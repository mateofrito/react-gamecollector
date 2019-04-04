import React, { Component } from "react";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <NavBar />
      </div>
    );
  }
}

export default App;
