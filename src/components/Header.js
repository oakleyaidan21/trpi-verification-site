import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={s.mainContainer}>
        <a href="#/userverification/">teamRPI</a>
      </div>
    );
  }
}

const s = {
  mainContainer: {
    width: "100%",
    height: "50px",
    backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    padding: 10,
    color: "white",
  },
};

export default Header;
