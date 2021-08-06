import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Importing Components
import Navbar from "./App/components/layouts/Navbar/Navbar.component";

// Importing Pages
import Homepage from "./App/pages/Homepage/Homepage";
import AboutPage from "./App/pages/About/AboutPage";
import GithubPage from "./App/pages/GithubPage/GithubPage";
import UserDetailPage from "./App/pages/UserDetailPage/UserDetailPage";

export class App extends Component {
  state = {
    users: [],
  };

  setUsers = (usersArray) => {
    this.setState({ users: usersArray });
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/github" component={GithubPage} />
            <Route exact path="/about:login" component={UserDetailPage} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
