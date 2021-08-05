import styled from "styled-components";

// Importing Colors
import Colors from "../../../constants/Colors";

// Importing Icons
import { FaGithub } from "react-icons/fa";

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  background-color: ${Colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const Logo = styled.p`
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
