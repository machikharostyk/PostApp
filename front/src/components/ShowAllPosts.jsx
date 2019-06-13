import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ListOfPosts from './Posts';
import styles from './style.module.css';

const ShowAllPosts = () => {

    return (
        <Container fluid>
            <Row>
                <Col className={styles.showAllPosts} sm={4}>
                    <Card bg="secondary" className={styles.cardPost}>
                        <Link to="/posts"><Button>Show all posts</Button></Link>
                    </Card>
                </Col>
                <Col sm={8}>
                    <ListOfPosts />
                </Col>
            </Row>
        </Container>
    )
}

export default ShowAllPosts;