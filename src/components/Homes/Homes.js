import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Destination from '../Destination/Destination';
import SingleHome from '../SingleHome/SingleHome';
import './Homes.css';

const Homes = () => {
    const [homes, setHomes] = useState([]);

    useEffect(() =>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setHomes(data))
    }, [])
    return (
        <>
        <div>
            <Banner></Banner>
        </div>
        <h3>------CHOOSE YOUR PLACE------</h3>
        <div className='homes-container'>
            
            {
               homes && homes.map(home =>
                <SingleHome home={home}
                key={home.id}
                ></SingleHome>)
            }
        </div>
        <div>
            <Destination></Destination>
        </div>
        </>
    );
};

export default Homes;