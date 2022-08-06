import React from 'react'
import image from '../imgs/icon.png'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieAction } from '../redux/action/movieAction';
import MovieCard from '../components/MovieCard';

const Random = () => {
    const [first,setFirst] = useState(true)
    const [movie,setMovie]= useState("")

    const dispatch = useDispatch();
    const {
        popularMovies,
    }  = useSelector(state => state.movie)

    useEffect (()=>{
        dispatch(movieAction.getMovies())
    },[])

    const clickButton = (()=>{
        setMovie(popularMovies.results[Math.floor(Math.random() * 20)])
        setFirst(false)
    })
  return (
    <div class = " bg-black flex items-center  justify-center h-screen">
        <div>
            <div>
                <div class = "w-[100%] flex justify-center bg-black">
                    {first ?  <img class = "mt-20" width = {330} src ={image}></img> : <MovieCard movie = {movie}/>}
                </div>
            </div>
            <div>
            <div class = "text-white text-2xl flex items-center  bg-black justify-center mt-4">
                <div>
                Tired of choosing a movie to watch? Pick a Random Movie!
                <div onClick={clickButton} class = "text-white bg-red-700 mb-20 cursor-pointer py-4  flex justify-center text-3xl px-40 rounded-lg hover:scale-[1.1]">
                    Pick A Random Movie!
                </div>
                </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Random