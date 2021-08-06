import React, { Component } from "react";

// Importing axios
import axios from "axios";

// Importing Components
import Navbar from "./App/components/layouts/Navbar/Navbar.component";
import Users from "./App/components/users/Users/Users.component";

export class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: response.data, loading: false });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Users users={this.state.users} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;
