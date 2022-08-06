import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { useState } from 'react';

const MovieCard = ({movie}) => {
  return (
    <div class = "text-white  w-[60vw] mt-10 p-2">
        <div class = "flex">    
                <img width = {380}src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${movie?.poster_path}`}/> 
         
            <div class = "ml-10">
                <h1>{movie.title}</h1>
                <hr></hr>
                <div class = "font-bold">Overview</div>
                <div>{movie.overview}</div>
                <hr></hr>
                <div class = "flex mt-2">
                    <Badge pill bg="danger">Original Language</Badge>
                    <div class = "text-white ml-1">
                        English
                    </div>
                </div>
                <div class = "flex mt-2">
                    <Badge pill bg="danger">Popularity</Badge>
                    <div class = "text-white ml-1">{movie.popularity}</div>
                </div>
                <div class = "flex mt-2">
                    <Badge pill bg="danger">Release Date</Badge>
                    <div class = "text-white ml-1">{movie.release_date}</div>
                </div>
                <div class = "mt-2 flex">
                    {movie.adult ? <Badge pill bg="danger">Child Friendly</Badge>:  <Badge pill bg="danger">Under 18</Badge>}
                </div>

            </div>
        </div>
      
       
    </div>
  )
}

export default MovieCard