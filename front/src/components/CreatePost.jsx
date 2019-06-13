import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


const CreatePost = (props) => {
    const [titleValue, setTitleValue] = useState(null);
    const [descriptionValue, setDescriptionValue] = useState(null);

    const handleTitleValue = (value) => setTitleValue(value);
    const handleDescriptionValue = (value) => setDescriptionValue(value);

    const createNewPost = () => {
        fetch("http://localhost:3001/posts", {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify({
                title: titleValue,
                description: descriptionValue
            }), 
        })
    }

    return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Create new post</h4>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" onChange={ e => handleTitleValue(e.target.value)} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Description" onChange={ e => handleDescriptionValue(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={createNewPost}>
                    Submit
                </Button>
                <Button onClick={props.onHide}>Close</Button>
            </Form>
          </Modal.Body>
        </Modal>
      );
    }

export default CreatePost;