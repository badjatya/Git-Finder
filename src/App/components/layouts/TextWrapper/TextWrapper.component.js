import React from "react";
import styled from "styled-components";
import Colors from "../../../constants/Colors";

// Styles
export const TextContainer = styled.div`
  display: flex;
  width: 100%;

  :not(:last-child) {
    margin-bottom: -20px;
  }
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${Colors.primary};
  text-transform: capitalize;
  width: 30%;
`;

export const Text = styled.p`
  font-size: 1rem;
  /* color: ${Colors.black}; */
  color: #758283;
  font-weight: 400;
  text-transform: capitalize;
  width: 70%;
`;

const TextWrapper = (props) => {
  return (
    <TextContainer>
      <Title>{props.title}:</Title>
      <Text>{props.text}</Text>
    </TextContainer>
  );
};

export default TextWrapper;
