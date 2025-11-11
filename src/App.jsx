import React, { useState, useEffect } from 'react';
import Search from './components/search.jsx'
import heroImage from './assets/hero1.png'
import Spinner from './components/Spinner.jsx'
import MovieCard from './components/MovieCard.jsx'
import{ useDebounce} from 'react-use'
import{ updateSearchCount } from './appwrite.js'
import {getTrendingMovies } from './appwrite.js';


//API - Application Programming Interface - a set of rules that allows one software application to talk to another

const API_BASE_URL ='https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_OPTIONS ={
  method: 'GET',
  headers:{
    accept:'application/json',
    Authorization:`Bearer ${API_KEY}`
  }
}
const App = () => {

  const[debouncedSearchTerm, setdebouncedSearchTerm] = useState('')
  const[searchTerm, setSearchTerm] = useState('')

  const[movieList,setMovieList] = useState([])
  const[trendingMovies, setTrendingMovies] = useState([])

  const[errorMessage, setErrorMessage ] = useState('')
  const[isLoading, setIsLoading] = useState(false)
  
// Debounce the search term to prevent making too many API requests
// by waiting for the user to stop typing for 500ms

useDebounce(() => {
    setdebouncedSearchTerm(searchTerm);
  }, 500, [searchTerm]);

  const fetchMovies = async (query = '') => {

    setIsLoading(true);
    setErrorMessage('');

    try{
      const endpoint =  query
      ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      :`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if(!response.ok){
        throw new Error('Failed to fetch movies')
      }

      const data = await response.json();

      if(data.response == 'False'){
        setErrorMessage(data.error || 'Failed to fetch movies')
        setMovieList([])
        return;
      }

      setMovieList(data.results || [] )
      if(query && data.results.length > 0){
        await updateSearchCount(query, data.results[0])
      }

    }catch(error){
      console.log(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. Please try again later.')
    }finally{
      setIsLoading(false);
    }
  }

  const loadTrendingMovies = async () => {
  try{
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    }catch(error){
    console.error(`Error fetching trending movies : ${error}`)
  }
}

  useEffect(() => {  //only load at the start
    fetchMovies(debouncedSearchTerm);
  },[debouncedSearchTerm])

  useEffect( () => {
    loadTrendingMovies();
  }, [])

  
  return(
    <main>
      <div className="pattern"></div>

      <div className="wrapper"></div>

      <header>
        <img src={heroImage} alt="Hero Banner"/>
        <h1>Find <span className="text-gradient"> Movies </span> You'll Enjoy Without the Hassle</h1>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </header>
      
      {trendingMovies.length > 0 && (
        <section className ="trending">
          <h2 className="trending">Trending Movies</h2>

          <ul>
            {trendingMovies.map((movie, index) => (
              <li key={movie.$id}>
                <p>{index + 1}</p>
                <img src = {movie.poster_url} alt={movie.title} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="all-movies mt-10 px-5">
  <h2>All Movies</h2>

  {isLoading ? (
    <Spinner />
  ) : errorMessage ? (
    <p className="text-red-500">{errorMessage}</p>
  ) : (
    <ul>
      {movieList.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie} />
        </li>
      ))}
    </ul>
  )}
</section>

  </main>
)}

export default App;