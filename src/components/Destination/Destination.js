import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Destination = () => {

    const navigate = useNavigate();
    return (
        <div>
            <h3>this destination</h3>
            <Button onClick={() => {
                navigate('/')
            }}>Go home page</Button>
        </div>
    );
};

export default Destination;