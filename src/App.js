import './App.css';
import { useState } from 'react';
import { moviesData } from './Data';
import MovieList from './components/MovieList/MovieList';
import SearchMovie from './components/SearchMovie/SearchMovie';
import AddMovie from './components/AddMovie/AddMovie';


function App() {
  const [movies, setMovies]= useState(moviesData)
  const [searchMovie, setSearchMovie]= useState('')
  const [newRate, setNewRate] =useState(0)

  const add=(newMovie)=>{
    setMovies([...movies,newMovie])
  }

  //console.log(movies)
  return (
    <div className="App">
    <SearchMovie searchMovie={searchMovie} setSearchMovie={setSearchMovie} newRate={newRate} setNewRate={setNewRate}/>
    <AddMovie add={add}/>
     <MovieList movies={movies}  searchMovie={searchMovie} newRate={newRate}/>
    </div>
  );
}

export default App;
