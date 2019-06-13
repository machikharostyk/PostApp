import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Posts = () => {
    return (
        <div>
            <h2>This is Posts</h2>
            <Link to="/posts/1">
                <Button> Show One Post</Button>
            </Link>
        </div>
    )
}

export default Posts;