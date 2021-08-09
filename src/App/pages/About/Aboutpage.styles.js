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

  /* Breakpoint 768px  */
  @media screen and (max-width: 768px) {
    margin: 10% auto 4% auto;
  }

  /* Breakpoint 425px  */
  @media screen and (max-width: 426px) {
    flex-direction: column;
    margin: 10% auto 50px auto;
  }

  /* Breakpoint 375px  */
  @media screen and (max-width: 376px) {
    margin: 0 auto 2% auto;
  }
`;

export const LeftColumn = styled.div`
  width: 40%;
  height: 450px;

  /* Breakpoint 768px  */
  @media screen and (max-width: 768px) {
    width: 47%;
  }

  /* Breakpoint 425px  */
  @media screen and (max-width: 426px) {
    width: 90%;
    height: 250px;
  }
`;

export const RightColumn = styled.div`
  width: 50%;
  height: 450px;

  /* Breakpoint 768px  */
  @media screen and (max-width: 768px) {
    width: 47%;
  }

  /* Breakpoint 425px  */
  @media screen and (max-width: 426px) {
    width: 90%;
    height: 250px;
  }
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

  /* Breakpoint 768px  */
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  color: #758283;
  font-weight: 400;

  /* Breakpoint 768px  */
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
`;
