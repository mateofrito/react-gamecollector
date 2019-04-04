import React, { Component } from "react";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    consoles: []
  };

  //retrieve console and game date for first page
  componentDidMount() {
    axios.get("/consoles").then(res => this.setState({ consoles: res.data }));
  }
  //add company

  //add game console

  //add game

  //delete game

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
