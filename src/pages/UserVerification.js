import React, { Component } from "react";
import Header from "../components/Header";

class UserVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={s.mainContainer}>
        <Header />
        <div style={s.pageContainer}>hi</div>
      </div>
    );
  }
}

const s = {
  mainContainer: {
    flex: 1,
    display: "flex",
    backgroundColor: "blue",
    flexDirection: "column",
  },

  pageContainer: {
    flex: 1,
    backgroundColor: "green",
  },
};

export default UserVerification;
