import React, { Component } from "react";

// Importing Components
import Navbar from "./App/components/layouts/Navbar/Navbar.component";
import UserItem from "./App/components/users/UserItem/UserItem.component";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <UserItem />
      </div>
    );
  }
}

export default App;
