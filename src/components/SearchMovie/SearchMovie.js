import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import ReactStars from 'react-stars'

const SearchMovie = ({searchMovie,setSearchMovie, newRate, setNewRate}) => {
    console.log(searchMovie)
  return (
    <div>
    <InputGroup className="mb-3">
    <InputGroup.Text id="basic-addon1">Search movie</InputGroup.Text>
    <Form.Control
      placeholder="Movie title"
      aria-label='search movie'
      onChange={(e)=>setSearchMovie(e.target.value)}
      value={searchMovie}
    />
    <ReactStars
    half={false}
    onChange={(rate)=>setNewRate(rate)}
    value={newRate}
    size={50}
    color2={'#ffd700'} 
    />
   
  </InputGroup>
    </div>
  )
}

export default SearchMovie