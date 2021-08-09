import styled from "styled-components";

// Importing Colors
import Colors from "../../../constants/Colors";

export const Container = styled.div`
  background-color: ${Colors.gray};
  border-radius: 15px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  margin-bottom: 20px;

  &:hover {
    box-shadow: 5px 5px 15px 0px rgba(17, 45, 78, 0.57);
  }

  /* Breakpoint 425px  */
  @media screen and (max-width: 426px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  width: 50%;

  /* Breakpoint 425px  */
  @media screen and (max-width: 426px) {
    width: 90%;
  }
`;
export const RepoDetails = styled.div`
  width: 25%;

  /* Breakpoint 1024px  */
  @media screen and (max-width: 1024px) {
    width: 14%;
  }

  /* Breakpoint 425px  */
  @media screen and (max-width: 426px) {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const ButtonContainer = styled.div`
  width: 20%;

  /* Breakpoint 425px  */
  @media screen and (max-width: 426px) {
    width: 90%;
  }
`;

export const Heading = styled.p`
  font-size: 1.2rem;
  color: ${Colors.primary};
  font-weight: 600;

  /* Breakpoint 425px  */
  @media screen and (max-width: 426px) {
    margin-bottom: -10px;
    margin-top: 5px;
  }

  /* Breakpoint 320px  */
  @media screen and (max-width: 321px) {
    font-size: 1rem;
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${Colors.black};
  font-weight: 400;

  /* Breakpoint 425px  */
  @media screen and (max-width: 426px) {
    margin-bottom: -10px;
  }

  /* Breakpoint 320px  */
  @media screen and (max-width: 321px) {
    font-size: 0.9rem;
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

  /* Breakpoint 425px  */
  @media screen and (max-width: 426px) {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  /* Breakpoint 320px  */
  @media screen and (max-width: 321px) {
    font-size: 0.9rem;
  }
`;
