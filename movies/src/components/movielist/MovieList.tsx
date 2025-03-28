import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../container/Container";

const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    poster: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    poster: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    poster: "https://via.placeholder.com/150",
  },
];

const MovieImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const MovieCard = styled.div`
  background: #333;
  color: white;
  padding: 1rem;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
  width: 200px;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 300px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const MovieGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

interface Movie {
  movieID: string;
  Title: string;
  Year: string;
  Poster: string;
}

export const MovieList: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [search, setSearch] = useState<string>("");
  const API_KEY = "your_api_here";

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?s=batman&apikey=${API_KEY}`
        );
        const data = await response.json();
        if (data.Search) {
          setMovies(data.Search);
        }
      } catch (error) {
        console.error("Error fetching movies: ", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <Container>
      <SearchInput 
        type="text" 
        placeholder="Search for a movie..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
      <MovieGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.movieID}>
            <MovieImage src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
          </MovieCard>
        ))  
        
        
        }
      </MovieGrid>
    </Container>
  );
};
