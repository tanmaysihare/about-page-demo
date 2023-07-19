import React, { useState,useEffect,useCallback } from "react";

import MoviesList from "../Movies/MoviesList";
import "./Home.css";
import AddMovieForm from "../Movies/AddMovieForm";

function HomePage(){
    const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  let retry = true;
  

  const  fetchMoviesHandler = useCallback(async() => {
    setIsLoading(true);
    setError(null);
    let retry = true;
    while (retry) {
    try {
        const response = await fetch("http://swapi.dev/api/films/")
        if (!response.ok){
            throw new Error('something went wrong!');
           }
        const data = await response.json();
  
       
         const transformedMovies = data.results.map(moviesData => {
           return {
             id: moviesData.episode_id,
             title:moviesData.title,
             openingText:moviesData.opening_crawl,
             releaseDate: moviesData.release_date
           };
         });
         setMovies(transformedMovies);
       retry = false;
    } catch (error){
        setError("something went wrong...Retrying");
        await new Promise((resolve) => setTimeout(resolve,5000));
        setIsLoading(false);
    }
}
    setIsLoading(false);
},[]);
useEffect(()=>{
    fetchMoviesHandler();
 },[fetchMoviesHandler]);
  
  function cancelHandler () {
    retry = false;
    setError("Stop Retrying");
  }

let content = <p>Found no movies.</p>;
if(movies.length > 0){
    content = <MoviesList movies={movies} />;
}
if(error) {
    content = <p>{error}<button onClick={cancelHandler}>Cancel Retrying</button></p>;
}
if(isLoading){
    content = <p>Loading...</p>;
}
    return <div id="body">
        <section><AddMovieForm/></section>
           <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
      {content}
      </section>  
        
    </div>;
}
export default HomePage;