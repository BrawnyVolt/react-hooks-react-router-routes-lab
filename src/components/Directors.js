import React from "react";
import { directors } from "../data";

function Directors() {

  const direction = directors.map(director => {
    return(
      <div key={directors.name}>
        <h2>{director.name}</h2>
      <ul>
        {director.movies.map((movie) => {
          return  <li key={movie}>{movie}</li>
        })}
      </ul>
    </div>
 )})
 
  return (
    <div>
      <h1>Director's Page</h1>
      {direction}
    </div>
  )
}

export default Directors;
