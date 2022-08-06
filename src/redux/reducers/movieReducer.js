let initialState = {
    popularMovies:{},
    topRatedMovies:{},
    upcommingMovies:{}
}

function movieReducer(state,action) {
    let{type,payload} = action 
    switch(type){
        case "GET_MOVIE_SUCCESS":
            return {...state,
                popularMovies:payload.popularMovies,
                topRatedMovies:payload.topRatedMovies, 
                upcommingMovies:payload.upcommingMovies };
            default:
                return {...state}
    };
}

export default movieReducer