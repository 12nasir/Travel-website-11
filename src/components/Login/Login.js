import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../context/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const {signInUsingGoogle} = useAuth();
    const handleGoogleSignIn = () =>{
        signInUsingGoogle(location, navigate)
        
    }
    return (
        <div>
            <h4>Please login</h4>
            <Button onClick={handleGoogleSignIn} variant="success">Google login</Button>
        </div>
    );
};

export default Login;