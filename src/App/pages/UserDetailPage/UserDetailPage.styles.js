import styled from "styled-components";

// Importing Colors
import Colors from "./../../constants/Colors";

export const UserDetail = styled.div`
  margin: 5% auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Breakpoint 768px  */
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  width: 30%;
  height: 450px;
  background-color: ${Colors.gray};
  border-radius: 15px;
  box-shadow: 5px 5px 15px 0px rgba(17, 45, 78, 0.57);

  /* Breakpoint 1024px  */
  @media screen and (max-width: 1024px) {
    height: 500px;
  }

  /* Breakpoint 768px  */
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 350px;
    margin-bottom: 40px;
  }
`;

export const RightColumn = styled.div`
  width: 65%;
  height: 450px;

  /* Breakpoint 1024px  */
  @media screen and (max-width: 1024px) {
    margin-top: -40px;
    width: 66%;
  }

  /* Breakpoint 768px  */
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 350px;
    margin-bottom: 90px;
    margin-top: -20px;
  }
`;

export const ImgContainer = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;

  /* Breakpoint 1024px  */
  @media screen and (max-width: 1024px) {
    height: 350px;
  }

  /* Breakpoint 768px  */
  @media screen and (max-width: 768px) {
    height: 224px;
  }
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
  margin-bottom: 15px;

  /* Breakpoint 1024px  */
  @media screen and (max-width: 1024px) {
    margin-top: 25px;
    margin-bottom: 20px;
  }

  /* Breakpoint 768px  */
  @media screen and (max-width: 768px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const ButtonContainer = styled.div`
  width: 50%;
  margin: 0 auto;

  /* Breakpoint 1024px  */
  @media screen and (max-width: 1024px) {
    width: 60%;
    margin: 10px auto;
  }
`;

export const Button = styled.a`
  text-decoration: none;
  color: ${Colors.primary};
  border: 2px solid ${Colors.primary};
  padding: 10px 15px;
  display: block;
  text-align: center;
  border-radius: 15px;
  font-weight: 600;

  &:hover {
    background-color: ${Colors.primary};
    color: ${Colors.white};
  }
`;

export const RepoContainer = styled.div`
  width: 1024px;
  max-width: 1024px;
  margin: 0 auto;

  /* Breakpoint 1024px  */
  @media screen and (max-width: 1024px) {
    width: 768px;
    max-width: 768px;
  }

  /* Breakpoint 768px  */
  @media screen and (max-width: 768px) {
    width: 650px;
    max-width: 650px;
  }
`;
