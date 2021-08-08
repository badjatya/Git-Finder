import styled from "styled-components";
import Colors from "../../constants/Colors";

export const AboutContainer = styled.div`
  margin: 7% auto 5% auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* Breakpoint 1440px  */
  @media screen and (max-width: 1440px) {
    margin: 18% auto 5% auto;
  }

  /* Breakpoint 1024px  */
  @media screen and (max-width: 1024px) {
    margin: 6% auto 2% auto;
  }
`;

export const LeftColumn = styled.div`
  width: 40%;
  height: 450px;
`;

export const RightColumn = styled.div`
  width: 50%;
  height: 450px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Heading = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${Colors.primary};
  text-transform: uppercase;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  color: #758283;
  font-weight: 400;
`;
