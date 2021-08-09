import styled from "styled-components";

// Importing Colors
import Colors from "../../constants/Colors";

export const Home = styled.main`
  margin: 10% auto 0 auto;
  display: flex;
  align-items: center;
  overflow: hidden;

  /* Breakpoint 1440px  */
  @media screen and (max-width: 1440px) {
    margin: 21% auto 0 auto;
  }

  /* Breakpoint 1024px  */
  @media screen and (max-width: 1024px) {
    margin: 15% auto 2% auto;
  }

  /* Breakpoint 768px  */
  @media screen and (max-width: 768px) {
    margin: 20% auto 10% auto;
  }

  /* Breakpoint 425px  */
  @media screen and (max-width: 426px) {
    flex-direction: column-reverse;
    margin: 40px auto 0 auto;
    z-index: 1;
  }
`;

export const TextContainer = styled.div`
  width: 45%;
  margin-right: 80px;

  /* Breakpoint 425px  */
  @media screen and (max-width: 426px) {
    width: 78%;
    margin: 0 auto;
  }

  /* Breakpoint 320px  */
  @media screen and (max-width: 321px) {
    width: 90%;
    margin: 0 auto;
  }
`;
export const ImgContainer = styled.div`
  width: 45%;
  height: 80%;
  z-index: 1;

  /* Breakpoint 425px  */
  @media screen and (max-width: 426px) {
    width: 90%;
    height: 300px;
    margin-bottom: 40px;
    z-index: 1;
  }

  /* Breakpoint 375px  */
  @media screen and (max-width: 376px) {
    margin-bottom: 10px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const H1 = styled.h1`
  font-size: 4rem;
  font-weight: 600;
  color: ${Colors.primary};

  /* Breakpoint 1024px  */
  @media screen and (max-width: 1024px) {
    font-size: 3rem;
  }

  /* Breakpoint 768px  */
  @media screen and (max-width: 768px) {
    font-size: 2.7rem;
  }

  /* Breakpoint 425px  */
  @media screen and (max-width: 426px) {
    font-size: 2rem;
  }

  /* Breakpoint 375px  */
  @media screen and (max-width: 376px) {
    font-size: 1.5rem;
    text-align: center;
  }
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

  /* Breakpoint 375px  */
  @media screen and (max-width: 376px) {
    padding: 10px 15px;
  }
`;
