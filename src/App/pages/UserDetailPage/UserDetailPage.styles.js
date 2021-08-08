import styled from "styled-components";

// Importing Colors
import Colors from "./../../constants/Colors";

export const UserDetail = styled.div`
  width: 1024px;
  max-width: 1024px;
  margin: 5% auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LeftColumn = styled.div`
  width: 30%;
  height: 450px;
  background-color: #8080802e;
  border-radius: 15px;
`;

export const RightColumn = styled.div`
  width: 65%;
  height: 450px;
`;

export const ImgContainer = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const Name = styled.p`
  font-size: 1.5rem;
  color: ${Colors.primary};
  font-weight: 600;
  text-align: center;
  margin-top: 10px;
`;
