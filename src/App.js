import React, { useState } from "react";
import "./App.css";
import Search from "./Components/Search";
import Rating from "./Components/Rating";
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";

const MovieInfos = [
  {
    title: "Interstellar",
    rate: 8.6,
    description:
      " British-American epic science fiction film directed and produced by Christopher Nolan",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    video: `zSWdZVtXT7E&ab`,
  },
  {
    title: "The Platform",
    rate: 4,
    description:
    "A spanish science fiction-horror film directed by Galder Gaztelu-Urrutia",
    posterUrl:
      "https://m.media-amazon.com/images/M/MV5BOTMyYTIyM2MtNjQ2ZC00MWFkLThhYjQtMjhjMGZiMjgwYjM2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    video: `RlfooqeZcdY&ab`,
  },
  {
    title: "The Martian",
    rate: 3,
    description:
      "A science fiction film directed by Ridley Scott and starring Matt Damon",
    posterUrl:
    "https://lumiere-a.akamaihd.net/v1/images/image_a119dd78.jpeg",
    video: `ej3ioOneTy8&ab`,
  },  

  
];

const App = () => {
  // searching movies by title
  const [input, setInput] = useState("");
  //searching movies by Rating
  const [rating, setRating] = useState("");
  //movie list
  const [movies, setMovies] = useState(MovieInfos);

  return (
    <div className="App">
      <div className="searchAdd">
        <Search setInput={setInput} />
      <AddMovie setMovies={setMovies} movies={movies} />
      </div>
      
      <Rating setRating={setRating} />
      
      <MovieList className="ml"
        movies={movies.filter(
          (searchMovie) =>
            searchMovie.title
              .toLowerCase()
              .includes(input.toLowerCase().trim()) &&
            searchMovie.rate >= rating
        )}
      />
      
    </div>
  );
};

export default App;