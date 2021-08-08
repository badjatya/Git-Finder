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
`;
