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

class Homepage extends React.Component {
  state = {
    search: "",
  };

  onChangeText = (e) => {
    this.setState({ search: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.search);
  };

  render() {
    return (
      <Home>
        <TextContainer>
          <H1>Search Github Users</H1>
          <Form onSubmit={this.onSubmit}>
            <Input
              type="search"
              placeholder="Search Users..."
              value={this.state.search}
              onChange={this.onChangeText}
            />
            <CustomButton as="button" title="Search" />
          </Form>
        </TextContainer>

        <ImgContainer>
          <Img src={HeroImage} />
        </ImgContainer>
      </Home>
    );
  }
}

export default Homepage;
