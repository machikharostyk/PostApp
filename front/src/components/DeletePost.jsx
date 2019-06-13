import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './style.module.css';

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
            <div className={styles.btnGroup}>
              <Button onClick={deletePost} variant="success">Yes</Button>
              <Button onClick={props.onHide} variant="danger">No</Button>
            </div>
          </Modal.Body>
        </Modal>
    )

}

export default DeletePost;