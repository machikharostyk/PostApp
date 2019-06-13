import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ListOfPosts from './Posts';

const ShowAllPosts = () => {

    return (
        <Container>
            <Row>
                <Col>
                    <Link to="/posts"><Button>Show all posts</Button></Link>
                </Col>
                <Col>
                    <ListOfPosts />
                </Col>
            </Row>
        </Container>
    )
}

export default ShowAllPosts;