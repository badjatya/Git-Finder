import React from "react";
import styled from "styled-components";

// Importing Styles
import Colors from "./../../../constants/Colors";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${Colors.primary};
`;

const P = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: ${Colors.white};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <P>Designed by Badjatya</P>
    </FooterContainer>
  );
};

export default Footer;
