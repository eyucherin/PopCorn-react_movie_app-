import React from 'react'
import styled from "styled-components"

const Image = styled.div`
    height: 65vh;
    display: flex;
    align-items: center;
    background-position: bottom;
    background-size: cover;
    &::before{
        position: absolute;
        left: 0%;
        width: 100%;
        height: 65vh;
        content: "";
        background: linear-gradient(to top, #000, transparent);
    }   
`
const Banner = ({movie}) => {
  console.log(movie)
  return (
      <div>
        <Image style={{ 
            backgroundImage:
            "url(" + `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}`+ ")" ,
        }}>
            <div class = "ml-7 w-[37%] z-10 ">
                <div class = "text-white text-[3vw] font-semibold">{movie.title}</div>
                <p class = "text-white">{movie.overview}</p>
            </div>
        </Image>
    </div>
  )
}

export default Banner