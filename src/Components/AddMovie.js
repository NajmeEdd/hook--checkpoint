import React, { useState } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';




const AddMovie = ({setMovies,movies})=>{

    const [show, setShow] = useState(false)
    const [addMovie, setAddMovie] = useState ({title: '', rate:'' ,  description:'', posterUrl: '' })
   

    const handleChange = e => {
      const { name, value } = e.target
      setAddMovie(prevState => ({
          ...prevState,
          [name]: value
      }))
      }

    return (
        <>
        <Button variant="outline-primary" onClick={() => setShow(true)}>
          ADD
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Search by filter
                </Modal.Title>
          </Modal.Header>
          <Modal.Body >
          <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                  <Form.Label column >
                    Title :
                  </Form.Label>
                  <Col md="8">
                    <Form.Control type="text" placeholder="Movie title" name="title" onChange={handleChange} />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column md="4">
                  Rating :
                  </Form.Label>
                  <Col md="8">
                    <Form.Control type="text" placeholder="Movie rating" name="rate" onChange={handleChange} />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formPlaintextPassword">
                  <Form.Label column md="4">
                  Description :
                  </Form.Label>
                  <Col md="8">
                    <Form.Control type="text" placeholder="Movie description" name="description" onChange={handleChange} />
                  </Col>
                </Form.Group>

                <Button variant="outline-primary" type="submit" onClick ={(e) => {
                  e.preventDefault()
                  setShow(false)
                  setMovies([...movies, addMovie])}} > Submit </Button>
              </Form>
          </Modal.Body>
        </Modal>
      </>
    )
}

export default AddMovie