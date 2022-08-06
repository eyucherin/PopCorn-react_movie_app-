import React from 'react'
import Badge from 'react-bootstrap/Badge';
import styled from "styled-components"
import { useSelector } from 'react-redux';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { useState, useRef } from 'react';
const Info = styled.div `
    opacity: 0;
    height: 100%;
    padding: 20px;
    &:hover{
        opacity: 1;
        background: rgba(43,41,35,0.9);
        cursor: pointer;
    }
`

const Card = ({item}) => {
  const ref = useRef();
  const {genreList} = useSelector((state)=> state.movie)
 
  return (

    <Flippy
      flipOnHover={false} // default false
      flipOnClick={true} // default false
      flipDirection="horizontal" // horizontal or vertical
      ref={ref} // to use toggle method like ref.curret.toggle()
      // if you pass isFlipped prop component will be controlled component.
      // and other props, which will go to div
      style={{ height: '200px' }} /// these are optional style, it is not necessary
  >

    <FrontSide >
    <div>
        <div class = " bg-cover bg-center bg-clip-content bg-origin-border " style={{ 
            backgroundImage:
            "url(" + `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${item?.poster_path}`+ ")" ,
        }}> 
        
           <Info class = "flex justify-center font-bold">
                {item?.adult ? <Badge bg="danger">For Adults Only</Badge> : <Badge bg="danger">Under 18</Badge>}
                <div class = "text-xl ">{item?.title}</div>
                <div >Genre: {genreList.find((val)=>val.id == item?.genre_ids[0]).name}</div>
                <div >Ratings: {item?.vote_average}</div>
                <div class = "flex justify-end">
                <button type="button" class="btn btn-primary">More Info</button>
                </div>
           </Info>
        </div>
    </div>
    </FrontSide>
    <BackSide>
    <div class = "overflow-y-hidden overflow-scroll bg-cover bg-center bg-clip-content bg-origin-border h-full " style={{ 
            backgroundImage:
            "url(" + `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${item?.poster_path}`+ ")" ,
        }}> 
        <div class = {`bg-[rgba(43,41,35,0.9)] p-2 overflow-y-hidden overflow-scroll h-full`}>
          <div class = "text-xl font-bold mb-2">{item?.title}</div>
          <div>{item?.overview}</div>
        </div>

    </div>

    </BackSide>

    
  </Flippy>

  )
}

export default Card