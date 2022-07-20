import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon, library } from '@fortawesome/react-fontawesome'
  import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Container, Nav, Navbar, NavLink, NavDropdown, Form, Button } from 'react-bootstrap';
import useAuth from '../../context/useAuth';

const Header = () => {
  const {user, logOut} = useAuth();
    const element = <FontAwesomeIcon icon={faShoppingBag} />
    return (
        
        <div className='header'>
            <Navbar bg="black" sticky="top" expand="lg">
  <Container fluid>
    <Navbar.Brand className='text-warning' margin={20} href="#">{element} Travel time</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       {/* className='text-warning' */}
        
      </Nav>
           
      <Form className="d-flex">
            <Link className='text-warning' to='/'>Home</Link>
            <Link className='text-warning' to="/destination">Destination</Link>
            <Link className='text-warning' to="/activities">Activities</Link>
            <Link className='text-warning' to="/tours">Tours</Link>
            <Link className='text-warning' to="/about">About</Link>
            {user?.email? 
              <Button onClick={logOut} variant="primary">Logout</Button>:
              <Link className='text-warning' to="/login">Login</Link>}
            {/* <Navbar.Text className='text-warning'>
              <a href="#login">{user.displayName}</a>
            </Navbar.Text> */}
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;