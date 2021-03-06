import styled, { createGlobalStyle } from "styled-components";

// Importing Colors
import Colors from "./App/constants/Colors";

export const GlobalStyles = createGlobalStyle`
    body {
    padding: 0;
    margin: 0;
    background-color: ${Colors.offWhite};
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 16px;
    }

    *{
        box-sizing: border-box;
    }

`;

export const Container = styled.main`
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

  /* Breakpoint 425px  */
  @media screen and (max-width: 426px) {
    width: 425px;
    max-width: 425px;
  }

  /* Breakpoint 413px  */
  @media screen and (max-width: 413px) {
    width: 412px;
    max-width: 412px;
  }

  /* Breakpoint 393px  */
  @media screen and (max-width: 394px) {
    width: 393px;
    max-width: 393px;
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
