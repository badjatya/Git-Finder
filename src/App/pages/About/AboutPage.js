import React from "react";

// Importing Img
import AboutImage from "../../assets/img/About.svg";

//Importing Styles
import {
  AboutContainer,
  LeftColumn,
  RightColumn,
  Img,
  Heading,
  Paragraph,
} from "./Aboutpage.styles";

const AboutPage = () => {
  return (
    <AboutContainer>
      <LeftColumn>
        <Img src={AboutImage} alt="About Page Image" />
      </LeftColumn>
      <RightColumn>
        <Heading>About</Heading>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, ullam
          saepe eius nostrum facere dolorem aperiam qui beatae ea ab odio. Amet
          eos, molestiae quo mollitia velit enim ipsa ipsum.
        </Paragraph>
        <Paragraph>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, ullam
          saepe eius nostrum facere dolorem aperiam qui beatae ea ab odio. Amet
          eos, molestiae quo mollitia velit enim ipsa ipsum.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero autem
          vitae nobis. Debitis, amet dolore.
        </Paragraph>
      </RightColumn>
    </AboutContainer>
  );
};

export default AboutPage;
