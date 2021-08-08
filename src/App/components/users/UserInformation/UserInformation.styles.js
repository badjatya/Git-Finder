import styled from "styled-components";
import Colors from "../../../constants/Colors";

// Styles
export const WebsiteContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  :not(:last-child) {
    margin-bottom: -20px;
  }
`;

export const WebsiteTitle = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${Colors.primary};
  text-transform: capitalize;
  width: 30%;
`;

export const WebsiteLink = styled.a`
  font-size: 1rem;
  color: #758283;
  font-weight: 400;
  text-transform: capitalize;
  width: 70%;
  text-decoration: none;
  display: block;

  &:hover {
    color: ${Colors.primary};
  }
`;
