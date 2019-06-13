import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

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
        <Container>
            <Row>
                <Col>
                    <Link to="/posts"><Button>Show all posts</Button></Link>
                </Col>
                <Col>
                    <p>
                        {post.title}
                    </p>
                    <p>
                        {post.description}
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default PostTemplate;