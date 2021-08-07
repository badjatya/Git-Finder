import React from "react";

// Importing Styles
import {
  NavContainer,
  Nav,
  LogoContainer,
  Logo,
  GithubIcon,
  NavLinks,
  NavLink,
} from "./Navbar.styles";

const Navbar = () => {
  return (
    <NavContainer>
      <Nav>
        <LogoContainer to="/">
          <Logo>
            <GithubIcon /> Github Finder
          </Logo>
        </LogoContainer>

        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </NavLinks>
      </Nav>
    </NavContainer>
  );
};

export default Navbar;
