import React from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const Main = () => {
    return (
        <Container fluid>
            <Row>
                <Col className={styles.showAllPosts} sm={4}>
                    <Card bg="secondary" className={styles.cardPost}>
                        <Link to="/posts"><Button>Show all posts</Button></Link>
                    </Card>
                </Col>
                <Col sm={8}></Col>
            </Row>
        </Container>
    )
}

export default Main;