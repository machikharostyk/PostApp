import React, { useState, useEffect} from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
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

    // const showDeleteModal = (id) => {
    //     setDeletePostModal(true);
    //     setPostId(id);
    // }
    // const closeDeleteModal = () => setDeletePostModal(false);


    if(!listOfPost) return <h1> Loading ....</h1>
    return (
        <Container>
            <Row>
                <Col>
                    <h1>All posts</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="success" onClick={() => showModal(null, true)}>Create new post</Button>
                </Col>
            </Row>
            {listOfPost && listOfPost.map( currentPost => (
                <Row key={currentPost.id}>
                    <Col>
                        <p>{currentPost.title}</p>
                        <p>{currentPost.description}</p>
                    </Col>
                    <Col className={styles.postActions}>
                    <div>
                        <Link to={`/posts/${currentPost.id}`}>
                            <FaEye />
                            <p>View</p>
                        </Link>
                    </div>
                    <div onClick={() => showModal(currentPost.id, false, true, false)}>
                        <FaEdit />
                        <p>Edit</p>
                    </div>
                    <div onClick={() => showModal(currentPost.id, false, false, true)}>
                        <FaTrash />
                        <p>Delete</p>
                    </div>
                    </Col>
                </Row>
            ))}
            <CreatePost 
                show={openCreatePostModal}
                onHide={() => closeModal(null, false)}
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