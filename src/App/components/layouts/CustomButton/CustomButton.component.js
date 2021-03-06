import React from "react";

import styled from "styled-components";

// Importing Colors
import Colors from "../../../constants/Colors";

export const Button = styled.a`
  color: ${Colors.white};
  background-color: ${Colors.primary};
  padding: 11px 30px;
  cursor: pointer;
  text-align: center;
  border: none;
  outline: none;
  display: block;
  text-decoration: none;
  /* font-weight: 600; */

  &:hover {
    background-color: ${Colors.secondary};
  }
`;

const CustomButton = (props) => {
  return <Button {...props}>{props.title}</Button>;
};

export default CustomButton;
