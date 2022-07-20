import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'

const HomeDetails = () => {
    
    const {serviceId} = useParams();
    console.log(serviceId)
    const [home, setHome] = useState({});
    const [homes, setHomes] = useState([]);

    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/12nasir/mockjson/main/db.json')
        .then(res => res.json())
        .then(data => {
            setHomes(data)
        })
    }, [serviceId])
    useEffect(() =>{
        const home = homes && homes.filter(place => place.id == serviceId)
            setHome(home)
            console.log(home)
    }, [homes])
    
    console.log( homes)
    
    // const [service] = useState(services[Number(serviceId) - 1]);

    const {name, img, description} = home;
    return (
        <div>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
        </div>
    );
};

export default HomeDetails;