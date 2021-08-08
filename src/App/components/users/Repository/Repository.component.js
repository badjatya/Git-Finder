import React from "react";

// importing Styles
import {
  Container,
  Details,
  RepoDetails,
  ButtonContainer,
  Button,
  Heading,
  Text,
} from "./Repository.styles";

const Repository = ({ repo }) => {
  return (
    <Container>
      <Details>
        <Heading>{repo.name}</Heading>
        <Text>Language: {repo.language ? repo.language : "Not Specified"}</Text>
      </Details>

      <RepoDetails>
        <Text>Stars: {repo.watchers}</Text>
        <Text>Forks: {repo.forks_count}</Text>
      </RepoDetails>

      <ButtonContainer>
        <Button href={repo.svn_url}>View More</Button>
      </ButtonContainer>
    </Container>
  );
};

export default Repository;
