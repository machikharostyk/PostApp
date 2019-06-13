import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeletePost = (props) => {
    const deletePost = () => {
        fetch(`http://localhost:3001/posts/${props.id}`, {
            method: 'DELETE',
            mode: 'cors',
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrer: 'no-referrer'
        })
        .then(
            window.location.reload()
        )
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
              Are you sure to delete this post ?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button onClick={deletePost}>Yes</Button>
            <Button onClick={props.onHide}>No</Button>
          </Modal.Body>
        </Modal>
    )

}

export default DeletePost;