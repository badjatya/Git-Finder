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
`;

export const Details = styled.div`
  width: 50%;
`;
export const RepoDetails = styled.div`
  width: 25%;
`;
export const ButtonContainer = styled.div`
  width: 14%;
`;

export const Heading = styled.p`
  font-size: 1.2rem;
  color: ${Colors.primary};
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: ${Colors.black};
  font-weight: 400;
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
`;
