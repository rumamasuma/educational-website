import React from 'react';
import { useHistory } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {

    let history = useHistory();
    const handleClick =() =>{
        history.push('/home');
    }

    return (
        <div >
       <div className = "not-found">

       </div>
       <div >
     <button className="btn-primary rounded m-3 p-3 "  onClick= {handleClick}>Go Back to Home</button>
       </div>
      </div>
        
    );
};

export default NotFound;