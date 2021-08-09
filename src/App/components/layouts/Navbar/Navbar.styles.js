import styled from "styled-components";
import { Link } from "react-router-dom";

// Importing Colors
import Colors from "../../../constants/Colors";

// Importing Icons
import { FaGithub } from "react-icons/fa";
import { MdMenu, MdClear } from "react-icons/md";

export const NavContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${Colors.primary};
`;

export const Nav = styled.nav`
  width: 1024px;
  max-width: 1024px;
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 768px;
    max-width: 768px;
  }

  /* Breakpoint 768px  */
  @media screen and (max-width: 768px) {
    width: 650px;
    max-width: 650px;
  }

  /* Breakpoint 425px  */
  @media screen and (max-width: 426px) {
    width: 425px;
    max-width: 425px;
    padding: 25px;
  }

  /* Breakpoint 375px  */
  @media screen and (max-width: 376px) {
    width: 375px;
    max-width: 375px;
  }

  /* Breakpoint 320px  */
  @media screen and (max-width: 321px) {
    width: 320px;
    max-width: 320px;
  }
`;

export const LogoContainer = styled(Link)`
  text-decoration: none;
  display: block;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  color: ${Colors.white};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
`;

export const GithubIcon = styled(FaGithub)`
  margin-right: 10px;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;

  /* Breakpoint 425px  */
  @media screen and (max-width: 426px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${Colors.white};
  text-transform: uppercase;
  cursor: pointer;
  display: block;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover {
    color: ${Colors.secondary};
  }
`;

export const HamburgerContainer = styled.div`
  display: none;

  /* Breakpoint 425px  */
  @media screen and (max-width: 426px) {
    display: block;
  }
`;

export const HamburgerMenuOpen = styled(MdMenu)`
  font-size: 2rem;
  color: ${Colors.white};
  cursor: pointer;
`;

export const HamburgerMenuClose = styled(MdClear)`
  font-size: 2rem;
  color: ${Colors.white};
  cursor: pointer;
`;

export const MobileMenuContainer = styled.div`
  background-color: ${Colors.primary};
  width: 100%;
  padding: 5px;
  z-index: 10;
  text-align: center;
  margin-top: -10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const MobileLink = styled(Link)`
  text-decoration: none;
  color: ${Colors.white};
  text-transform: uppercase;
  cursor: pointer;
  display: block;
  z-index: 10;
  text-align: center;
  font-weight: 600;

  margin-bottom: 5px;
`;
