import React, { useEffect, useState } from 'react';
import './Home.css';
import University from '../University/University';
import Service from '../Service/Service';

const Home = () => {
   const [services , setServices] = useState([]);

   useEffect(() =>{
       fetch('fakeData.json')
       .then(res => res.json())
       .then(data => setServices(data));
   },[]);
    return (
       <div>
       <University></University>

       <div className =" border p-3 ">
        <h3  className = "service-heading m-3" >Our Best Services</h3>
       <div className= 'service-container'>
       {
            services.map(service => <Service key= {service.id}
            service= {service}></Service>)
        }
       </div>
       </div>
      </div>
    );
};

export default Home;