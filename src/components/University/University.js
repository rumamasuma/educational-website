import React from 'react';
import img from '../../images/logo.jpg';
import "./University.css";

const University = () => {
    return (
        <div className="university-part border p-4">
      <div className= "container d-flex align-items-center">
         <div> 
              <img src={img} alt="" />
         </div>
           <div className="heading">
           <h2>Dream University of   Science & Technology </h2>
           <h4>Knowledge without action is meaningless</h4>
           </div>
        </div>
        <h3 className ="text-primary">Your future || Your DUST</h3>
        <p>Gain a hands-on education from day one, create entrepreneurial opportunities while you study, and experience a technology-led university environment to accelerate your learning</p>
        <h5>Welcome to the  Dream University of Science & Technology , Bangladesh's #1 ranked young university and one of the leaders in future-focused degrees.</h5>
        </div>
    );
};

export default University;