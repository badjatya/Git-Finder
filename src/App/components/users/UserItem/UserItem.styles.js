import styled from "styled-components";
// import { Link } from "react-router-dom";

// Importing Colors
import Colors from "../../../constants/Colors";

export const UserItemContainer = styled.div`
  background-color: ${Colors.white};
  width: 30%;
  padding: 15px;
  margin-bottom: 50px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.57); */
  box-shadow: 5px 5px 15px 0px rgba(17, 45, 78, 0.57);
`;

export const ImgContainer = styled.div`
  width: 80px;
  height: 80px;

  border-radius: 50%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border: 2px solid ${Colors.primary};
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 1.2rem;
  color: ${Colors.primary};
  text-transform: capitalize;
`;

export const Button = styled.a`
  text-decoration: none;
  border: 2px solid ${Colors.primary};
  padding: 5px 20px;
  border-radius: 10px;
  color: ${Colors.primary};
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.primary};
    color: ${Colors.white};
  }
`;
