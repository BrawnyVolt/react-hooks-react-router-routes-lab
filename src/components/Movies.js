import React from "react";
import { movies } from "../data";

function Movies() {

 const movieStuff = movies.map(movie => {
      return(
        <div>
          <h2>{movie.title}</h2>
          <h3>Runtime: {movie.time} Minutes</h3>
        <ul>
          {movie.genres.map((genre) => {
            return  <li key={genre}>{genre}</li>
          })}
        </ul>
      </div>
   )})
   
  return (
    <div>
    <h1>Movies Page</h1>
    {movieStuff}
    </div>
  )

  }


// 

export default Movies;
