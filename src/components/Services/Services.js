import React, { useEffect, useState } from 'react';
import AllService from '../AllService/AllService';
import './Services.css';

const Services = () => {
    const [allServices , setAllServices] = useState([]);

    useEffect(() =>{
        fetch('fakedata2.JSON')
        .then(res => res.json())
        .then(data =>setAllServices(data));
    },[])
    return (
        <div className="services p-4">
            <h2>Why Choose Us </h2>
        <h3>Big in support || Small in size </h3>
        <h4> At a Galance Our All Services</h4>
        <div className= 'services-container m-4 p-4'>
            {
                allServices.map(allService => <AllService key ={allService.id}
                    allService ={allService}
                ></AllService>)
            }
        </div>
         
        </div>
    );
};

export default Services;