import React from 'react'
import Banner from '../components/Banner';
import MovieSlide from '../components/MovieSlide';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/action/movieAction';
import ClipLoader from "react-spinners/ClipLoader";
import { useState } from 'react';


export const Home = () => {

  const [showInfo,setShowInfo] = useState(false)
  const [movie,setMovie] = useState("")

  const dispatch = useDispatch();
  const {
    popularMovies,
    topRatedMovies,
    upcommingMovies, 
    loading,
  }  = useSelector(state => state.movie)
  useEffect (()=>{
    console.log(showInfo)
    console.log(movie?.title)
  },[showInfo,movie])

  useEffect (()=>{
    dispatch(movieAction.getMovies())
  },[])
  return (    
    <div class = "bg-black text-white h-[100vh] w-[100vw]">
      <div class = "flex justify-center">
         <ClipLoader class = {`border w-[100vw] ${loading ? "h-[100%]" : "h-[]"}`} color="#FFFF" loading={loading} size={250} />
      </div>
     <div class = "bg-black text-white h-[100vh]">
      {popularMovies?.results && <Banner movie={popularMovies?.results[0]}/> }
     
     
      {popularMovies?.results &&  
      <div class = "bg-black text-white h-[300px]">
        <div class = "mx-14 ">
          <h1>Popular Movies</h1>
          <MovieSlide movies = {popularMovies} setShowInfo = {setShowInfo} seMovie = {setMovie}/>
        </div>
       </div>
       }

      {topRatedMovies?.results && 
          <div class = "bg-black text-white h-[300px]">
            <div class = "mx-14">
              <h1>Top Rated Movies</h1>
              <MovieSlide movies = {topRatedMovies} seMovie = {setMovie}/>
            </div>
          </div>      
      }
      
     { upcommingMovies?.results &&
      <div class = "bg-black text-white pb-10 h-[300px]">
         <div class = "mx-14">
          <h1>Upcoming Movies</h1>
          <MovieSlide movies = {upcommingMovies} seMovie = {setMovie}/>
        </div>
      </div>

      
     }

   
     
     </div>
     
    </div>
  )
}
