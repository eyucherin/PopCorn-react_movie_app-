let initialState = {
    popularMovies:{},
    topRatedMovies:{},
    upcommingMovies:{}, 
    loading:true,
}

function movieReducer(state,action) {
    let{type,payload} = action 
    switch(type){
        case "GET_MOVIE_SUCCESS":
            return {...state,
                popularMovies:payload.popularMovies,
                topRatedMovies:payload.topRatedMovies, 
                upcommingMovies:payload.upcommingMovies,
                genreList:payload.genres,
                loading:false
            };
            case "GET_MOVIE_FAILURE":
                return {...state,loading:true}
            case "GET_MOVIE_SUCCESS":
                return {...state,loading:true}
            default:
                return {...state}
    };
}

export default movieReducer