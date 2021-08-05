import { createGlobalStyle } from "styled-components";

// Importing Colors
import Colors from "./App/constants/Colors";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

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

export default GlobalStyles;
