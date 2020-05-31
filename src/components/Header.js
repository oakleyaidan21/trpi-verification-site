import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={s.mainContainer}>
        <div style={s.title}>
          <a
            style={{ color: "inherit", textDecorationLine: "none" }}
            href="https://discord.gg/vgMdEtf"
            target="_blank"
          >
            teamRPI
          </a>
        </div>
      </div>
    );
  }
}

const s = {
  mainContainer: {
    width: "100%",
    backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    padding: 10,
    color: "white",
  },
  title: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 50,
    fontWeight: "bold",
    marginLeft: 10,
  },
};

export default Header;
