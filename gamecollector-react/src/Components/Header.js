import React from "react";
import "../App.css";
//import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <img style={mario} alt={"mario"} src={"./images/mario8bit.jpg"} />
      <h1 style={header__title}>Super Game Collector</h1>
    </header>
  );
}

const headerStyle = {
  color: "white",
  backgroundColor: "black",
  float: "left",
  width: "100%",
  position: "fixed",
  top: "0",
  maxHeight: "75px"
};

const mario = {
  maxWidth: "45px",
  float: "left",
  width: "100%",
  paddingTop: "10px",
  paddingRight: "10px",
  paddingLeft: "10px",
  paddingBottom: "20px",
  marginRight: "10px"
};

const header__title = {
  fontFamily: "Press Start 2P",
  paddingLeft: "10px",
  fontSize: "32px",
  paddingBottom: "15px"
};

export default Header;
