import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import styles from './style.module.css'

const PostTemplate = (props) => {
    const [post, setData] = useState(null);

    const postId = props.match.params.id;

    useEffect(() => {
        fetch(`http://localhost:3001/posts/${postId}`)
        .then( res => res.json())
        .then( result => setData(result))

    }, [postId]);
    if(!post) {
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <Container fluid>
            <Row>
                <Col className={styles.showAllPosts} sm={4}>
                    <Card bg="secondary" className={styles.cardPost}>
                        <Link to="/posts"><Button>Show all posts</Button></Link>
                    </Card>
                </Col>
                <Col sm={8} className={styles.post}>
                    <Card bg="info" className={styles.postCard}>
                        <Card.Header className={styles.cardHeaderTitle}>
                            <h2>{post.title}</h2>
                        </Card.Header>
                        <Card.Body>{post.description}</Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default PostTemplate;