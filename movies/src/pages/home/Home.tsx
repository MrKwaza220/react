import React from "react";
import styled from "styled-components";
import { Container } from "../../components/container/Container";
import { MovieList } from "../../components/movielist/MovieList";

const Title = styled.h1`
  font-size: 2.5em;
  text-align: start;
  align-items: center;
  color: white;
`;

const Description = styled.p`
  font-size: 1.5em;
  text-align: start;
  align-items: center;
  color: white;
`;

const Home = () => {
  return (
    <Container>
      <Title>Welcome to Reel Film</Title>
      <Description>
        Search any movie with Real Film and view details about them.
      </Description>
      <MovieList />
    </Container>
  );
};

export default Home;
