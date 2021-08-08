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

  /* Breakpoint 320px 
  @media screen and (max-width: 320px) {
    justify-content: space-between;
  } */
`;

export const WebsiteTitle = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${Colors.primary};
  text-transform: capitalize;
  width: 30%;

  /* Breakpoint 320px  */
  @media screen and (max-width: 320px) {
    font-size: 1rem;
    width: 25%;
    margin-right: 30px;
  }
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

  /* Breakpoint 320px  */
  @media screen and (max-width: 320px) {
    font-size: 0.9rem;
    width: 65%;
  }
`;
