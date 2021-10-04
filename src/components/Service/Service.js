import React from 'react';
import './Service.css';

const Service = (props) => {
    const {img, name , description} = props.service;
    return (
        <div className= 'service-part m-2'>
           <div className = "card-img img-fluid" >
               <img src={img} alt="" />
               </div> 
               <div className= "card-heading">
                 <h4> {name}</h4>
                 <p>{description}</p>
               </div>
        </div>
    );
};

export default Service;