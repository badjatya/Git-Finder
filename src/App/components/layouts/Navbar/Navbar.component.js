import React, { useState } from "react";

// Importing Styles
import {
  NavContainer,
  Nav,
  LogoContainer,
  Logo,
  GithubIcon,
  NavLinks,
  NavLink,
  HamburgerContainer,
  HamburgerMenuOpen,
  HamburgerMenuClose,
  MobileMenuContainer,
  MobileLink,
} from "./Navbar.styles";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

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

        <HamburgerContainer>
          {menuVisible ? (
            <HamburgerMenuClose onClick={() => setMenuVisible(!menuVisible)} />
          ) : (
            <HamburgerMenuOpen onClick={() => setMenuVisible(!menuVisible)} />
          )}
        </HamburgerContainer>
      </Nav>

      {menuVisible && (
        <MobileMenuContainer>
          <MobileLink to="/">Home</MobileLink>
          <MobileLink to="/about">About</MobileLink>
        </MobileMenuContainer>
      )}
    </NavContainer>
  );
};

export default Navbar;
