import styled from "styled-components";
import { Link } from "react-router-dom";

// Importing Colors
import Colors from "../../../constants/Colors";

// Importing Icons
import { FaGithub } from "react-icons/fa";

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
