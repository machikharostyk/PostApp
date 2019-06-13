import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styles from './style.module.css';

const EditPost = (props) => {
    const [titleValue, setTitleValue] = useState(null);
    const [descriptionValue, setDescriptionValue] = useState(null);

    const handleTitleValue = (value) => setTitleValue(value);
    const handleDescriptionValue = (value) => setDescriptionValue(value);

    const editPost = () => {
        fetch(`http://localhost:3001/posts/${props.id}`, {
            method: 'PATCH',
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
        .then(res => res.json())
        .then(result => console.log(result))
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
                <div className={styles.btnGroup}>
                  <Button variant="success" type="submit" onClick={editPost} disabled={titleValue || titleValue === '' ? false : true}>
                      Save changes
                  </Button>
                  <Button onClick={props.onHide} variant="danger">Close</Button>
                </div>
            </Form>
          </Modal.Body>
        </Modal>
    )
}

export default EditPost;