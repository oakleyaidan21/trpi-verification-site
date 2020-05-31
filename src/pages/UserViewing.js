import React, { Component } from "react";
import * as firebase from "firebase";
import "firebase/firestore";
import UserListItem from "../components/UserListItem";
import Header from "../components/Header";
import { Spinner } from "react-activity";
import "react-activity/dist/react-activity.css";

class UserViewing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcomedUsers: null,
      unverifiedUsers: null,
      verifiedUsers: null,
    };
  }

  /**
   * Retrieves users from firebase and sets the state
   */
  retrieveUsers = async () => {
    const firestore = firebase.firestore();

    //welcomed users
    let welcomeRef = await firestore.collection("welcomedUsers").get();
    let welcomedUsers = welcomeRef.docs.map((doc) => doc.data());

    //unverified users
    let unverifiedRef = await firestore.collection("unverifiedUsers").get();
    let unverifiedUsers = unverifiedRef.docs.map((doc) => doc.data());

    //verfied users
    let verifiedRef = await firestore.collection("verifiedUsers").get();
    let verifiedUsers = verifiedRef.docs.map((doc) => doc.data());

    this.setState({ welcomedUsers, unverifiedUsers, verifiedUsers });
  };

  componentDidMount = () => {
    this.retrieveUsers();
  };
  render() {
    return (
      <div style={s.mainContainer}>
        <Header />
        <div style={s.listsContainer}>
          <div style={s.userListContainer}>
            {this.state.welcomedUsers ? (
              <>
                <div style={s.userListHeader}>
                  Welcomed Users
                  {" - " + (this.state.welcomedUsers.length - 1)}
                </div>
                <div>
                  Users who have been welcomed but have not sent any commands
                </div>
                {this.state.welcomedUsers.map((user) => {
                  return (
                    <UserListItem
                      userData={user}
                      collection={"welcomedUsers"}
                    />
                  );
                })}
              </>
            ) : (
              <div style={s.icon}>
                <Spinner />
              </div>
            )}
          </div>
          <div style={s.userListContainer}>
            {this.state.unverifiedUsers ? (
              <>
                <div style={s.userListHeader}>
                  Unverified Users
                  {" - " + (this.state.unverifiedUsers.length - 1)}
                </div>
                <div>
                  Users who have typed <b style={s.md}>!register</b> but have
                  not continued in the process
                </div>
                {this.state.unverifiedUsers.map((user) => {
                  return (
                    <UserListItem
                      userData={user}
                      collection={"welcomedUsers"}
                    />
                  );
                })}
              </>
            ) : (
              <div style={s.icon}>
                <Spinner />
              </div>
            )}
          </div>
          <div style={s.userListContainer}>
            {this.state.verifiedUsers ? (
              <>
                <div style={s.userListHeader}>
                  Verified Users
                  {" - " + (this.state.verifiedUsers.length - 1)}
                </div>
                <div>
                  Verfied users with the <b style={s.md}>Student</b> tag in the
                  discord
                </div>
                {this.state.verifiedUsers.map((user) => {
                  return (
                    <UserListItem
                      userData={user}
                      collection={"welcomedUsers"}
                    />
                  );
                })}
              </>
            ) : (
              <div style={s.icon}>
                <Spinner />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

// STYLING
const s = {
  mainContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  listsContainer: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    flexDirection: "column",
    display: "flex",
  },

  userListContainer: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
    padding: 10,
    borderRadius: 5,
    border: "1px solid lightgrey",
    backgroundColor: "white",
    boxShadow: "1px 1px 2px",
  },

  userListHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  icon: {
    alignSelf: "center",
    margin: 20,
  },

  md: {
    backgroundColor: "lightgrey",
    fontFamily: "Courier",
  },
};

export default UserViewing;
