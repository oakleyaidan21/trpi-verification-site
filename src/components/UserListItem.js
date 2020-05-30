import React, { Component } from "react";

class UserListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const data = this.props.userData;
    return (
      <div style={styles.mainContainer}>
        <div style={styles.username}>{data.username}</div>
      </div>
    );
  }
}

const styles = {
  mainContainer: {
    flex: 1,
    backgroundColor: "#2C2F33",
    margin: 5,
    padding: 5,
    display: "flex",
    borderRadius: 5,
  },

  username: {
    color: "white",
  },
};

export default UserListItem;
