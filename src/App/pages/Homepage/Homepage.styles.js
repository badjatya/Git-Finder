import styled from "styled-components";

// Importing Colors
import Colors from "../../constants/Colors";

export const Home = styled.main`
  width: 1024px;
  max-width: 1024px;
  margin: 8% auto 30px auto;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export const TextContainer = styled.div`
  width: 45%;
  margin-right: 20px;
`;
export const ImgContainer = styled.div`
  width: 45%;
  height: 80%;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
export const H1 = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  color: ${Colors.primary};
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
`;
export const Input = styled.input`
  display: block;
  padding: 10px 30px;
  outline: none;
  border: 1px solid ${Colors.primary};
`;
