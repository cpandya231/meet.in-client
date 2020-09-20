import React, { Component } from "react";

import socketIOClient from "socket.io-client";

import { v4 as uuidv4 } from "uuid";
import Sidebar from "./Sidebar";
import Actionbar from "./Actionbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import LandingComponent from "./LandingComponent";

let ENDPOINT = "http://localhost:4000";
class App extends Component {
  socket = socketIOClient(ENDPOINT);

  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
      currentRoom: 0,
      currentUser: 0,
      users: [
        {
          id: 1,
          name: "Chintan",
          currentConnection: "",
          connections: [
            { name: "Jon Snow", id: 2 },
            { name: "Drashti", id: 3 },
            { name: "Charlie", id: 4 },
            { name: "Dhoni", id: 5 },
            { name: "Deadpool", id: 6 },
            { name: "Randy", id: 7 },
          ],

          chatMessages: [{}],
        },
        {
          id: 2,
          name: "Jon Snow",
          currentConnection: "",
          connections: [
            { name: "Chintan", id: 1 },
            { name: "Drashti", id: 3 },
            { name: "Charlie", id: 4 },
          ],

          chatMessages: [],
        },

        {
          id: 3,
          name: "Drashti",
          currentConnection: "",
          connections: [{ name: "Chintan", id: 1 }],
          chatMessages: [],
        },
      ],
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.selectUser = this.selectUser.bind(this);
    this.selectAccount = this.selectAccount.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    let message = event.target.chatBox.value;
    let duplicateUsers = this.state.users.slice();
    let currentUser = duplicateUsers[this.state.currentUser];

    this.socket.emit("message", {
      id: uuidv4(),
      from: currentUser.id,
      to: this.state.currentRoom,
      text: message,
    });

    currentUser.chatMessages.push({
      id: uuidv4(),
      from: currentUser.id,
      to: this.state.currentRoom,
      text: message,
    });

    duplicateUsers[this.state.currentUser] = currentUser;

    this.setState({
      users: duplicateUsers,
    });
    event.target.chatBox.value = "";
  }

  listenFromServer() {
    let duplicateUsers = this.state.users.slice();

    this.socket.on("message", (messageFromServer) => {
      let receipient = duplicateUsers.reduce((acc, user, index) => {
        if (user.id === messageFromServer.to) {
          acc.push({ index: index, user: user });
        }
        return acc;
      }, []);

      receipient[0].user.chatMessages.push(messageFromServer);

      duplicateUsers[receipient.index] = receipient[0];
      this.setState({
        users: duplicateUsers,
      });
    });
  }

  selectUser(roomId) {
    this.socket.emit("join_room", roomId);
    let duplicateUsers = this.state.users;
    let currentUser = duplicateUsers[this.state.currentUser];
    currentUser.currentConnection = currentUser.connections.filter(
      (connection) => connection.id === roomId
    )[0];
    duplicateUsers[this.state.currentUser] = currentUser;
    this.setState({
      currentRoom: roomId,
      users: duplicateUsers,
    });
  }

  selectAccount(userId) {
    this.socket.emit("join_room", userId);
    this.setState({
      currentUser: userId - 1,
    });
  }

  componentDidMount() {
    this.listenFromServer();
  }

  render() {
    return (
      <div className="appComponent">
        <Router>
          <Switch>
            <Route path="/chatBoard">
              <Actionbar
                onSubmit={this.onSubmit}
                currentUser={this.state.users[this.state.currentUser]}
              />
            </Route>
            <Route path="/sidebar">
              <Sidebar
                onClick={this.selectUser}
                connections={
                  this.state.users[this.state.currentUser].connections
                }
              />
            </Route>

            <Route path="/home">
              <HomeComponent
                selectUser={this.selectAccount}
                users={this.state.users}
              />
            </Route>

            <Route path="/">
              <LandingComponent />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
