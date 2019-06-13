import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Link to="/posts"><Button>Show all posts</Button></Link>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

export default Main;