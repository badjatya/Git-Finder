import React, { Component } from "react";

// Importing Components
import Navbar from "./App/components/layouts/Navbar/Navbar.component";
import Users from "./App/components/users/Users/Users.component";

// Importing Pages
import Homepage from "./App/pages/Homepage/Homepage";

export class App extends Component {
  state = {
    users: [],
  };

  setUsers = (usersArray) => {
    this.setState({ users: usersArray });
  };

  render() {
    return (
      <div>
        <Navbar />
        <Homepage setUsers={this.setUsers} />
        <Users users={this.state.users} />
      </div>
    );
  }
}

export default App;
