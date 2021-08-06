import React from "react";

// Importing Img
import HeroImage from "../../assets/img/Hero.svg";

// Importing Styles
import {
  Home,
  TextContainer,
  ImgContainer,
  Img,
  H1,
  Input,
  Form,
} from "./Homepage.styles";

// Importing CustomButton
import CustomButton from "../../components/layouts/CustomButton/CustomButton.component";

const Homepage = () => {
  return (
    <Home>
      <TextContainer>
        <H1>Search Github Users</H1>
        <Form>
          <Input type="search" placeholder="Search Users..." />
          <CustomButton title="Search" />
        </Form>
      </TextContainer>

      <ImgContainer>
        <Img src={HeroImage} />
      </ImgContainer>
    </Home>
  );
};

export default Homepage;
