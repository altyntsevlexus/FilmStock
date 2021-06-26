const BASE_URL = 'https://api.themoviedb.org/3/'
const API_KEY = 'api_key=460777d14ead5d0c081ada5f0a1674a7'

export const fetchTopMovies = (pageNum) => fetch(BASE_URL + `discover/movie/?language=en-EN&sort_by=popularity.desc&include_adult=true&include_video=false&page=${pageNum}&without_genres=16&` + API_KEY).then(response => response.json())

export const fetchMovieById = (id) => fetch(BASE_URL + `movie/${id}?` + API_KEY).then(response => response.json())

export const fetchMovieCast = (id) => fetch(BASE_URL + `movie/${id}/credits?` + API_KEY).then(response => response.json())

export const fetchMovieByQuery = (query) => fetch(BASE_URL + `search/movie/?query=${query}&` + API_KEY).then(response => response.json())

//cartoon 

export const fetchTopCartoons = (id) => fetch(BASE_URL + `discover/movie/?language=en-EN&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16&` + API_KEY).then(response => response.json())


//tv shows (serials)
export const fetchTopSerials = () => fetch(BASE_URL + 'tv/popular?language=en-EN&page=1&' + API_KEY).then(response => response.json())


