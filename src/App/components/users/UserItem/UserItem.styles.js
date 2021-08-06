import styled from "styled-components";

// Importing Colors
import Colors from "../../../constants/Colors";

export const UserItemContainer = styled.div`
  background-color: ${Colors.white};
  padding: 15px;
  border: 1px solid ${Colors.primary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
`;
