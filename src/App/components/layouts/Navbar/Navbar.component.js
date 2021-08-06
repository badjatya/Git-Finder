import React from "react";

// Importing Styles
import {
  NavContainer,
  Nav,
  Logo,
  GithubIcon,
  NavLinks,
  NavLink,
} from "./Navbar.styles";

const Navbar = () => {
  return (
    <NavContainer>
      <Nav>
        <Logo>
          <GithubIcon /> Github Finder
        </Logo>

        <NavLinks>
          <NavLink>Home</NavLink>
          <NavLink>About</NavLink>
        </NavLinks>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
