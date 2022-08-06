import React from 'react'

const MovieInfo = ({movie}) => {
  return (
    <div className="absolute inset-0 flex justify-center items-center z-10 bg-slate-500 h-[100vh]">
    <p className="text-2xl font-bold">{movie.title}</p>
  </div>
  )
}

export default MovieInfo