import React, { Component } from "react";

// Importing Styles
import { Nav, Logo, GithubIcon } from "./Navbar.styles";

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <Logo>
          <GithubIcon /> Github Finder
        </Logo>
      </Nav>
    );
  }
}
export default Navbar;
