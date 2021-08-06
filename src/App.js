import React, { Component } from "react";

// Importing Components
import Navbar from "./App/components/layouts/Navbar/Navbar.component";
import Users from "./App/components/users/Users/Users.component";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Users />
      </div>
    );
  }
}

export default App;
