import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";
import * as firebase from "firebase";
import "firebase/firestore";

class UserListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCommands: false,
    };
  }

  /**
   * Removes the clicked user from the specified collection
   * from firebase
   */
  removeFromFirebase = () => {
    console.log(this.props);
    const db = firebase.firestore();
    let remove = window.confirm("Remove this user from the table?");
    if (remove === true) {
      db.collection(this.props.collection)
        .doc(this.props.userData.id)
        .delete()
        .then(() => {
          window.location.reload();
        });
    }
  };

  render() {
    const data = this.props.userData;
    const link =
      "https://cdn.discordapp.com/avatars/" +
      data.id +
      "/" +
      data.avatar +
      ".png";

    return data.username === "none_test" ? (
      <></>
    ) : (
      <div
        style={s.mainContainer}
        onMouseEx
        onMouseLeave={() => {
          this.setState({ showCommands: false });
        }}
        onMouseEnter={() => {
          this.setState({ showCommands: true });
        }}
      >
        <img
          style={s.avatar}
          src={
            data.avatar
              ? link
              : "https://discordapp.com/assets/322c936a8c8be1b803cd94861bdfa868.png"
          }
        />
        <div style={s.infoAndCommands}>
          <div style={s.userInfo}>
            <div style={s.username}>
              {data.username}
              {"#" + (data.discriminator !== null && data.discriminator)}
            </div>
          </div>
          {this.state.showCommands && !this.props.nonEditable && (
            <div style={s.commands}>
              <div
                style={s.icon}
                onClick={() => {
                  this.removeFromFirebase();
                }}
              >
                <FaTimes color="red" style={{ alignSelf: "center" }} />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const s = {
  mainContainer: {
    flex: 1,
    backgroundColor: "#2C2F33",
    margin: 5,
    padding: 10,
    display: "flex",
    borderRadius: 5,
  },
  avatar: {
    maxWidth: 50,
    maxHeight: 50,
    borderRadius: 50,
    objectFit: "contain",
  },

  userInfo: {
    display: "flex",
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "center",
  },

  username: {
    color: "white",
  },

  infoAndCommands: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    flex: 1,
  },

  commands: {
    display: "flex",
    alignSelf: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },

  icon: {
    display: "flex",
    width: 30,
    height: 30,
    borderRadius: 30,
    boxShadow: "1px 1px 1px",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
};

export default UserListItem;
