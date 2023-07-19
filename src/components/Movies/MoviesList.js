import React,{useState} from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  const [movies, setMovies] = useState(props.movies);
  function deleteHandler(movieID){
    fetch(`https://e-commerce-14a74-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${movieID}.json`,
      {
        method: 'DELETE',
      }
    ).then(() => {
    setMovies((prevMovies)=> prevMovies.filter((movie) => movie.id !== movieID));
  });
}
  return (
    <ul className={classes['movies-list']}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          onDelete={()=> deleteHandler(movie.id)}
        />
      ))}
    </ul>
  );
};

export default MovieList;
