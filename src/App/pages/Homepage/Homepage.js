import React from "react";

// Importing axios
import axios from "axios";

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
    users: [],
    loading: false,
  };

  onChangeText = (e) => {
    this.setState({ search: e.target.value });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${this.state.search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: response.data.items, loading: false, search: "" });
    this.props.setUsers(this.state.users);
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
