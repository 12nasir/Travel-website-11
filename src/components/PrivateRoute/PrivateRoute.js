import React from 'react';
import {Spinner} from 'react-bootstrap'
import {Navigate,  useLocation} from 'react-router-dom'
import useAuth from '../../context/useAuth';


const PrivateRoute = ({children}) => {
    const {user} = useAuth();
    const location = useLocation();

    // if(loading){
    //     return <Loading></Loading>
    // }

    if(!user.email){
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};


export default PrivateRoute;