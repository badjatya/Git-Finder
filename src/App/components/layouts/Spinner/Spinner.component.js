import React from "react";
import Loader from "react-loader-spinner";

// import styled from "styled-components";

// Importing Colors
import Colors from "../../../constants/Colors";

const Spinner = (props) => (
  <Loader
    type="Puff"
    color={Colors.primary}
    height={100}
    width={100}
    visible={props.visible} //3 secs
  />
);

export default Spinner;
