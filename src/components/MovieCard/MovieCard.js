//import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from 'react-stars'

const MovieCard = ({movie}) => {

    console.log({movie})
 
    
     

  return (

    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" alt='ig' src={movie.posterUrl} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>{movie.description}</Card.Text><br/>
      <Card.Text>{movie.rate}</Card.Text><br/>
      <ReactStars count={5} size={24} value={movie.rate} />
    </Card.Body>
  </Card>
    </div>
  )
}

export default MovieCard