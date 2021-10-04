import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
           <div className="footer-container ">
        <div className= "d-flex align-items-center jusify-content-center p-4 m-5">
             <div >
               <FontAwesomeIcon icon={faBookOpen} />
            </div>
           <div>
           <h1>Dream University of Science & Technology</h1>
           </div>
        </div>
        <div className="footer-container ">
              <ul className="d-flex align-items-center justify-content-center p-4">

                <Link to="/home" className="footer">
                  <li>Home</li>
                </Link>
                <Link to="/about" className="footer">
                  <li>About us</li>
                </Link>
                <Link to="services" className="footer">
                  <li>Services</li>
                </Link>
                <Link to="/apply" className="footer">
                  <li>Apply</li>
                </Link>
              </ul>
            </div>
     </div>
     <p className ="copyright text-info"> DUST © . All rights reserved-2021.</p>
    </div>
    
    );
};

export default Footer;