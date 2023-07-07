import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieList = ({movies, searchMovie, newRate}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
        {

            newRate>0? 
            movies.filter((movie)=> movie.rate===newRate).map((movie, id)=>(
              <MovieCard movie={movie} key={movie.id} />))
              :
            movies.filter((movie)=>
            movie.title.toUpperCase().includes(searchMovie.toUpperCase().trim()))
            .map((movie, id)=>(
                <MovieCard movie={movie} key={movie.id} />
            ))
        }
    </div>
  )
}

export default MovieList