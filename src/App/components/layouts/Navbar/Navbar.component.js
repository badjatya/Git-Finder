import React, { Component } from "react";

// Importing Styles
import { NavContainer, Nav, Logo, GithubIcon } from "./Navbar.styles";

class Navbar extends Component {
  render() {
    return (
      <NavContainer>
        <Nav>
          <Logo>
            <GithubIcon /> Github Finder
          </Logo>
        </Nav>
      </NavContainer>
    );
  }
}
export default Navbar;
