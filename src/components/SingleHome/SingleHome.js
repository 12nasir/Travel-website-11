import React from 'react';
import './SingleHome.css'
import {Link, useLocation} from 'react-router-dom'
import { Card, Button, Row } from 'react-bootstrap';

const SingleHome = ({home}) => {
  // console.log(home)
  const location = useLocation();
  const serviceId = Number(location.pathname.split('/')[2]);
    const {name, description, img, id} = home;
    return (
        <div className='home'>
            <Row xs={1} md={2} className="">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" height={220} width={350} src={img} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Link to={`/details/${id}`}><Button variant="primary">Buy packages</Button></Link>
              </Card.Body>
            </Card>
            </Row>
        </div>
    );
};

export default SingleHome;