import api from "../api"

const API_KEY = process.env.REACT_APP_API_KEY;
// Middleware 
function getMovies(){
    return async(dispatch) => {
        try{
            dispatch({type :"GET_MOVIES_REQUEST"})
            const genres = api.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
            const popularMovie = api.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            const topRated = api.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            const upcoming = api.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
           
            let [popularMovieAPI,topRatedAPI,upcomingAPI,genreAPI] = await Promise.all([popularMovie,topRated,upcoming,genres])

            dispatch({
                type: "GET_MOVIE_SUCCESS",
                payload: {popularMovies:popularMovieAPI.data,
                          topRatedMovies :topRatedAPI.data,
                          upcommingMovies:upcomingAPI.data,
                          genres:genreAPI.data.genres
                        },
                    })
                }catch{
                    dispatch({type :"GET_MOVIES_FAILURE"})
                }
                
                // console.log("popularMovieAPI",popularMovieAPI)
                // console.log("topRatedAPI",topRatedAPI)
                // console.log("upcomingAPI",upcomingAPI)
            }
        }

export const movieAction = {
    getMovies,
}