import React from 'react';
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
            <h3>This page is not found</h3>
            <Link to='/home'><Button>Go back</Button></Link>
        </div>
    );
};

export default NotFound;