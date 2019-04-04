import React from "react";

function NavBar() {
  return (
    <div style={navButtons}>
      <span style={consoleTrigger}>Add Console</span>
      <span style={gameTrigger}>Add Game</span>
      <span style={companyTrigger}>Add Publisher/Manufacture</span>
      <span style={removeGame}>Delete Games</span>
    </div>
  );
}
const navButtons = {
  fontFamily: "Oswald",
  marginTop: "79px",
  backgroundColor: "black",
  color: "white"
};
const consoleTrigger = {
  fontSize: "2.5vh",
  paddingLeft: "10px",
  paddingRight: "10px",
  cursor: "pointer"
};

const gameTrigger = {
  fontSize: "2.5vh",
  paddingLeft: "10px",
  paddingRight: "10px",
  cursor: "pointer"
};
const companyTrigger = {
  fontSize: "2.5vh",
  paddingLeft: "10px",
  paddingRight: "10px",
  cursor: "pointer"
};

const removeGame = {
  fontSize: "2.5vh",
  paddingLeft: "10px",
  paddingRight: "10px",
  cursor: "pointer"
};

export default NavBar;
