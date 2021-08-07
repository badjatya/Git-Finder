import styled from "styled-components";

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
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 1.2rem;
  color: ${Colors.primary};
  text-transform: capitalize;
`;
