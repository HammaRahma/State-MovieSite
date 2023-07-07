import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'

const AddMovie = ({add}) => {
 const [show, setShow]=useState(false)

 const handleShow = () => setShow(true)
 const handleClose = () => setShow(false)
//init
 const [title, setTitle]=useState('')
 const [description, setDescription]=useState('')
 const [posterUrl, setPosterUrl]= useState('')
 const [rate, setRate]=useState(0)


 //update

const handleTilte=(e)=>{
  setTitle(e.target.value)
}
const handleDescription = (e) =>{
  setDescription(e.target.value)
}
const handlePostUrl = (e) =>{
  setPosterUrl(e.target.value)
}
const handleRate = (e) =>{
  setRate(e.target.value)
}

const handleAdd = () =>{
  const newMovie = {title, description, rate, posterUrl}
  add(newMovie)
  handleClose()
}
//console.log(title)
  return (
    <div>
    <Button variant="primary" onClick={handleShow}>
    Add new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        
        <Form>
          <Form.Label>Movie title</Form.Label>
          <Form.Control type="text" placeholder="Movie title" onChange={(e)=>handleTilte(e)}/>
          <Form.Label>Movie description</Form.Label>
          <Form.Control type="text" placeholder="Movie description" onChange={(e)=>handleDescription(e)}/>
          <Form.Label>Movie url</Form.Label>
          <Form.Control type="text" placeholder="Movie url" onChange={(e)=>handlePostUrl(e)}/>
          <Form.Label>Movie rate</Form.Label>
          <Form.Control type="number" placeholder="Movie rate" onChange={(e)=>handleRate(e)}/>
        </Form>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>handleAdd()}>
          Save Changes
        </Button>
      </Modal.Footer>
        
      </Modal>
    </div>
  )
}

export default AddMovie