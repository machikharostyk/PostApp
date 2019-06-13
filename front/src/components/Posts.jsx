import React, { useState, useEffect} from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, ListGroup, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import styles from './style.module.css';
import CreatePost from './CreatePost';
import DeletePost from './DeletePost';
import EditPost from './EditPost';

const ListOfPosts = () => {
    const [listOfPost, updateList] = useState(null);
    const [openCreatePostModal, setCreatePostModal] = useState(false);
    const [openDeletePostModal, setDeletePostModal] = useState(false);
    const [openEditPostModal, setEditPostModal] = useState(false);
    const [postId, setPostId] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/posts")
        .then(
            res => res.json()
        )
        .then(
            result => updateList(result)
        )

    }, []);

    const showModal = (id, createPost, editPost, deletePost) => {
        if(createPost){
            setCreatePostModal(true);
        }
        if(editPost){
            setEditPostModal(true);
            setPostId(id);
        }
        if(deletePost){
            setDeletePostModal(true);
            setPostId(id);
        }
    };
    const closeModal = (id, createPost, editPost, deletePost) => {
        if(createPost){
            setCreatePostModal(false);
        }
        if(editPost){
            setEditPostModal(false);
            setPostId(id);
        }
        if(deletePost){
            setDeletePostModal(false);
            setPostId(id);
        }
    };

    if(!listOfPost) return <h1> Loading ....</h1>
    return (
        <Container>
            <Row>
                <Col className={styles.title}>
                    <h1>All posts</h1>
                </Col>
            </Row>
            <Row>
                <Col className={styles.createNewPost}>
                    <Button variant="success" onClick={() => showModal(null, true)}>Create new post</Button>
                </Col>
            </Row>
            <ListGroup className={styles.listGroup}>
            {listOfPost && listOfPost.map( currentPost => (
                <ListGroup.Item key={currentPost.id} className={styles.listItem}>
                    <Row >
                        <Col className={styles.postTitle}>
                            <h3>{currentPost.title}</h3>
                        </Col>
                        <Col>
                            <div className={styles.postActions}>
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip>
                                        View Post
                                    </Tooltip>
                                }
                            >
                            <div>
                            <Link to={`/posts/${currentPost.id}`} className={styles.postAction}>
                                <FaEye />
                                <p>View</p>
                            </Link>
                        </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip>
                                Edit Post
                            </Tooltip>
                        }>
                        <div onClick={() => showModal(currentPost.id, false, true, false)} className={styles.postAction}>
                            <FaEdit />
                            <p>Edit</p>
                        </div>
                        </OverlayTrigger>
                        <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip>
                                Delete Post
                            </Tooltip>
                        }>
                        <div onClick={() => showModal(currentPost.id, false, false, true)} className={styles.postAction}>
                            <FaTrash />
                            <p>Delete</p>
                        </div>
                        </OverlayTrigger>
                            </div>
                            
                        </Col>
                        </Row>
                        {currentPost.description === '' || currentPost.description ? <Row>
                            <Col>
                            
                            <Card>
                                <Card.Body className={styles.descriptionText}>{currentPost.description}</Card.Body>
                            </Card>
                            </Col>
                        </Row> : null}
                        
                </ListGroup.Item>
            ))}
             </ListGroup>
            <CreatePost 
                show={openCreatePostModal}
                onHide={() => closeModal(null, true)}
            />
            <DeletePost 
                show={openDeletePostModal}
                onHide={() => closeModal(null, false, false, true)}
                id={postId}
            />
            <EditPost 
                show={openEditPostModal}
                onHide={() => closeModal(null, false, true, false)}
                id={postId}
            />
        </Container>
    )
}

export default ListOfPosts;